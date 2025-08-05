import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with proper error handling
const getResendClient = () => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return null;
    }
    
    return new Resend(apiKey);
  } catch (err) {
    console.error('Failed to initialize Resend:', err);
    return null;
  }
};

export async function POST(request) {
  const resend = getResendClient();
  
  if (!resend) {
    return NextResponse.json(
      { 
        error: 'Email service configuration error',
        details: 'RESEND_API_KEY is missing or invalid' 
      },
      { status: 500 }
    );
  }

  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <contact@portfolio.techralph.com>',
      to: ['your-real-email@example.com'], // CHANGE THIS
      subject: subject || 'New message from portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h1 style="color: #2563eb;">New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: error.message 
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      data 
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message 
      },
      { status: 500 }
    );
  }
}