import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, service, message } = body

    /* -------------------- Validation -------------------- */
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      )
    }

    /* -------------------- Email Template -------------------- */
    const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#f9fafb; padding:20px;">
      
      <div style="background:#000; padding:30px; border-radius:12px 12px 0 0; text-align:center;">
        <h1 style="color:#fff; margin:0;">New Contact Request</h1>
        <p style="color:#ccc; margin-top:8px;">Website Contact Form</p>
      </div>

      <div style="background:#fff; padding:30px; border-radius:0 0 12px 12px;">
        <h2 style="border-bottom:2px solid #000; padding-bottom:10px;">Contact Details</h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0; font-weight:bold;">Name:</td>
            <td>${name}</td>
          </tr>
          <tr style="background:#f3f4f6;">
            <td style="padding:10px; font-weight:bold;">Email:</td>
            <td>
              <a href="mailto:${email}" style="color:#000;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-weight:bold;">Phone:</td>
            <td>
              <a href="tel:${phone}" style="color:#000;">${phone}</a>
            </td>
          </tr>
          <tr style="background:#f3f4f6;">
            <td style="padding:10px; font-weight:bold;">Service:</td>
            <td>${service || "Not specified"}</td>
          </tr>
        </table>

        <div style="margin-top:25px;">
          <h3 style="margin-bottom:10px;">Message</h3>
          <p style="white-space:pre-line; background:#f9fafb; padding:15px; border-radius:8px;">
            ${message}
          </p>
        </div>

        <p style="margin-top:25px; font-size:13px; color:#666;">
          <strong>Received:</strong> ${new Date().toLocaleString()}
        </p>
      </div>

      <div style="text-align:center; margin-top:15px; font-size:12px; color:#888;">
        <p>This email was generated from your website contact form.</p>
      </div>

    </div>
    `

    /* -------------------- SMTP Transport -------------------- */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    /* -------------------- Send Email -------------------- */
    await transporter.sendMail({
      from: `Contact Form <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: emailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact API Error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    )
  }
}
