import { NextResponse } from "next/server"
import { generateStarterKitPDF } from "@/app/actions/generate-starter-kit"
import { getStateName } from "@/lib/starter-kit-data"

export async function GET(request: Request, { params }: { params: { stateCode: string } }) {
  try {
    const stateCode = params.stateCode

    // Generate the PDF
    const pdfBase64 = await generateStarterKitPDF(stateCode)

    // Convert base64 back to buffer
    const pdfBuffer = Buffer.from(pdfBase64, "base64")

    // Create filename based on state
    const stateName = getStateName(stateCode)
    const filename = `${stateName.toLowerCase().replace(/\s+/g, "-")}-starter-kit.pdf`

    // Return the PDF as a download
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error("Error generating starter kit PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
