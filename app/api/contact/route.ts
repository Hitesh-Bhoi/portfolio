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
                                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111111; margin: 0; padding: 0; background-color: #fafafa; }
                                .wrapper { padding: 40px 20px; }
                                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 16px; overflow: hidden; }
                                .header { background-color: #111111; color: #ffffff; padding: 40px 20px; text-align: center; }
                                .logo-box { display: inline-block; width: 44px; height: 44px; border: 2px solid #FF3B3B; line-height: 44px; font-size: 24px; font-weight: 800; color: #FF3B3B; border-radius: 6px; margin-bottom: 16px; }
                                .header h1 { margin: 0; font-size: 14px; letter-spacing: 3px; font-weight: 700; color: #eeeeee; text-transform: uppercase; }
                                .content { padding: 40px 30px; }
                                .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #777; margin-bottom: 8px; }
                                .info-grid { margin-bottom: 30px; }
                                .info-item { margin-bottom: 20px; }
                                .info-value { font-size: 16px; font-weight: 500; color: #111111; }
                                .message-box { background: #f9f9f9; border-left: 2px solid #FF3B3B; padding: 20px; border-radius: 0 8px 8px 0; font-size: 16px; color: #333; white-space: pre-wrap; margin-top: 10px; }
                                .footer { padding: 30px; text-align: center; background: #ffffff; border-top: 1px solid #eeeeee; font-size: 12px; color: #999; }
                                .accent-link { color: #FF3B3B; text-decoration: none; font-weight: 600; }
                                .cta-button { display: inline-block; padding: 14px 28px; background-color: #111111; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 30px; border: 1px solid #333; }
                            </style>
                        </head>
                        <body>
                            <div class="wrapper">
                                <div class="container">
                                    <div class="header">
                                        <div class="logo-box">H</div>
                                        <h1>Portfolio Inquiry</h1>
                                    </div>
                                    <div class="content">
                                        <div class="info-grid">
                                            <div class="info-item">
                                                <div class="label">From</div>
                                                <div class="info-value">${name} <span style="font-weight: 400; color: #777;">&bull; ${email}</span></div>
                                            </div>
                                            <div class="info-item">
                                                <div class="label">Subject</div>
                                                <div class="info-value">${subject}</div>
                                            </div>
                                        </div>
                                        
                                        <div class="label">Message</div>
                                        <div class="message-box">${message}</div>
                                        
                                        <div style="text-align: center;">
                                            <a href="mailto:${email}" class="cta-button">Direct Reply</a>
                                        </div>
                                    </div>
                                    <div class="footer">
                                        This email was sent from your portfolio contact form.<br>
                                        <br>
                                        &copy; ${new Date().getFullYear()} <span style="color: #111;">Hitesh Bhoi</span>
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
