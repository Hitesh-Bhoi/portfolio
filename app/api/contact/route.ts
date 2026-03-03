import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/contact';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY?.replace(/^["']|["']$/g, '').trim());

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // 1. Save to Database
        try {
            await dbConnect();
            await Contact.create({ name, email, subject, message });
        } catch (dbError) {
            console.error("Database Error:", dbError);
        }

        // 2. Consistent Branding Email Template (Black, White & Red Accent)
        const destinationEmail = process.env.SENDER_EMAIL?.replace(/^["']|["']$/g, '').trim();

        if (process.env.RESEND_API_KEY && destinationEmail) {
            try {
                await resend.emails.send({
                    from: 'Hitesh Portfolio <onboarding@resend.dev>',
                    to: destinationEmail,
                    replyTo: email,
                    subject: `New Inquiry: ${subject}`,
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <style>
                                body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111111; margin: 0; padding: 0; background-color: #f7f7f7; }
                                .wrapper { padding: 40px 20px; }
                                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5; border-top: 4px solid #FF3B3B; overflow: hidden; }
                                .header { background-color: #111111; padding: 40px 40px 30px; }
                                .logo-box { display: inline-block; width: 44px; height: 44px; border: 2px solid #FF3B3B; line-height: 44px; font-size: 24px; font-weight: 800; color: #FF3B3B; text-align: center; border-radius: 4px; margin-bottom: 24px; }
                                .header-title { margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px; }
                                .content { padding: 40px; }
                                .info-grid { display: block; margin-bottom: 30px; }
                                .info-item { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eeeeee; }
                                .label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #888888; margin-bottom: 6px; }
                                .info-value { font-size: 16px; font-weight: 500; color: #111111; }
                                .info-value span { color: #666666; font-weight: 400; font-size: 15px; }
                                .message-container { margin-top: 30px; }
                                .message-box { background: #fdfdfd; border: 1px solid #eeeeee; border-left: 3px solid #111111; padding: 24px; font-size: 16px; color: #333333; white-space: pre-wrap; line-height: 1.8; margin-top: 12px; }
                                .action { margin-top: 40px; padding-top: 30px; border-top: 1px solid #eeeeee; }
                                .cta-button { display: inline-block; padding: 16px 32px; background-color: #FF3B3B; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 15px; letter-spacing: 0.5px; border-radius: 0px; text-align: center; }
                                .footer { padding: 30px 40px; background: #fafafa; border-top: 1px solid #eeeeee; font-size: 13px; color: #888888; text-align: center; }
                                .footer strong { color: #111111; font-weight: 600; }
                            </style>
                        </head>
                        <body>
                            <div class="wrapper">
                                <div class="container">
                                    <div class="header">
                                        <div class="logo-box">H</div>
                                        <h1 class="header-title">Portfolio Inquiry</h1>
                                    </div>
                                    <div class="content">
                                        <div class="info-grid">
                                            <div class="info-item">
                                                <div class="label">Sender Details</div>
                                                <div class="info-value">${name} <br><span>${email}</span></div>
                                            </div>
                                            <div class="info-item" style="border-bottom: none; padding-bottom: 0;">
                                                <div class="label">Subject</div>
                                                <div class="info-value">${subject}</div>
                                            </div>
                                        </div>
                                        
                                        <div class="message-container">
                                            <div class="label">Message Content</div>
                                            <div class="message-box">${message}</div>
                                        </div>
                                        
                                        <div class="action">
                                            <a href="mailto:${email}" class="cta-button">Reply to Message</a>
                                        </div>
                                    </div>
                                    <div class="footer">
                                        This inquiry was received from your portfolio contact form.<br><br>
                                        &copy; ${new Date().getFullYear()} <strong>Hitesh Bhoi</strong>
                                    </div>
                                </div>
                            </div>
                        </body>
                        </html>
                    `
                });
            } catch (err) {
                console.error("Resend delivery failed:", err);
            }
        } else {
            console.warn("Resend configuration missing.");
        }

        return NextResponse.json({
            success: true,
            message: "Thank you! Your message has been sent successfully."
        });

    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process your request." },
            { status: 500 }
        );
    }
}
