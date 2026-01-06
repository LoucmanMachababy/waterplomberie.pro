import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { phone } = await request.json();

        // Validate phone
        if (!phone || phone.length < 10) {
            return NextResponse.json({ error: 'Numéro de téléphone invalide' }, { status: 400 });
        }

        // Configure email transporter (Gmail example)
        // Needs App Password if using Gmail: https://myaccount.google.com/apppasswords
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'watter.plomberie@gmail.com', // Your receiving email
            subject: `🚨 NOUVEAU CLIENT URGENT : ${phone}`,
            text: `
        Nouvelle demande de rappel urgent !
        
        📞 Numéro : ${phone}
        ⏰ Heure : ${new Date().toLocaleString('fr-FR')}
        
        Action requise : Rappeler le client immédiatement.
      `,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #2563eb;">🚨 Nouvelle Urgence Plomberie</h2>
          <p>Un client souhaite être rappelé immédiatement.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; font-weight: bold; margin: 0;">📞 ${phone}</p>
            <p style="color: #64748b; margin-top: 5px;">📅 ${new Date().toLocaleString('fr-FR')}</p>
          </div>

          <a href="tel:${phone}" style="background-color: #22c55e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Appeler le client maintenant
          </a>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email envoyé' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
    }
}
