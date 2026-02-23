import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/contact';
import sgMail from '@sendgrid/mail';

if (process.env.SEND_GRID_API_KEY) {
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY.replace(/^["']|["']$/g, ''));
}

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
            // We continue even if DB fails, as email is primary
        }

        // 2. Send Email using SendGrid
        if (process.env.SEND_GRID_API_KEY && process.env.SENDER_EMAIL) {
            try {
                const sender = process.env.SENDER_EMAIL.replace(/^["']|["']$/g, '');
                await sgMail.send({
                    to: sender, // Send to yourself
                    from: sender, // Send from your verified sender
                    replyTo: email,
                    subject: `New Contact Form Submission: ${subject}`,
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                            <h2 style="color: #333;">New Contact Form Submission</h2>
                            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                            <p><strong>Message:</strong></p>
                            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                        </div>
                    `
                });
            } catch (emailError) {
                console.error("Email Error:", emailError);
            }
        } else {
            console.warn("SendGrid environment variables are not set properly.");
        }

        return NextResponse.json({
            success: true,
            message: "Thank you! Your message has been sent successfully."
        });

    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process your request. Please try again later." },
            { status: 500 }
        );
    }
}
