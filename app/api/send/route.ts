import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/components/contact.schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { recaptchaToken, ...formData } = body;

    // Validate the request body
    const validatedData = contactFormSchema.parse(formData);

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `xd.studio - New contact form submission`,
      html: `
        <h2>Contacto</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${
          validatedData.company
            ? `<p><strong>Empresa:</strong> ${validatedData.company}</p>`
            : ''
        }
        ${
          validatedData.message
            ? `<p><strong>Mensaje:</strong></p><p>${validatedData.message}</p>`
            : ''
        }
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
