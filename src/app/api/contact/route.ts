import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

/*
  Handle POST request for contact form
  Input: contact form data (name, email, subject, message)
  Returns: JSON response with success/error status
*/
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend testing domain - works immediately
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // Your email
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; font-size: 14px; color: #666;">
            <p style="margin: 0;">This email was sent from your contact form on futuresite.com</p>
            <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
      replyTo: email, // Allow direct reply to the sender
    })

    // Return success response
    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        data: emailData 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
} 