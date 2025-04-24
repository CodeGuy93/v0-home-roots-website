import { type NextRequest, NextResponse } from "next/server"
import { generateStatePDF } from "@/app/actions/generate-pdf"

export async function GET(request: NextRequest, { params }: { params: { stateCode: string } }) {
  try {
    const stateCode = params.stateCode

    // Generate the PDF
    const pdfBase64 = await generateStatePDF(stateCode)

    // Convert base64 back to buffer
    const pdfBuffer = Buffer.from(pdfBase64, "base64")

    // Return the PDF as a download
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${stateCode.toUpperCase()}-homeschool-requirements.pdf"`,
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
