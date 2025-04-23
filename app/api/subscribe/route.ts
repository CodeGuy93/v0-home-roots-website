import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // In a real implementation, you would connect to an email service like Mailchimp, SendGrid, etc.
    // For now, we'll simulate a successful subscription

    console.log(`Subscribing email: ${email}`)

    // Simulate a slight delay to mimic an API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing! Your starter kit is on its way.",
    })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 },
    )
  }
}
