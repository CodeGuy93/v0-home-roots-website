"use server"

import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import { statesData } from "@/lib/states-data"

export async function generateStatePDF(stateCode: string): Promise<string> {
  // Get state data
  const stateData = statesData[stateCode.toUpperCase()]
  if (!stateData) {
    throw new Error(`State data not found for ${stateCode}`)
  }

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create()

  // Add a page to the document
  const page = pdfDoc.addPage([612, 792]) // Letter size

  // Get fonts
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // Set font sizes
  const titleSize = 24
  const headingSize = 16
  const normalSize = 12
  const smallSize = 10

  // Set colors
  const primaryColor = rgb(0.22, 0.76, 0.36) // Green color similar to primary
  const textColor = rgb(0.1, 0.1, 0.1)

  // Set margins
  const margin = 50
  let y = page.getHeight() - margin

  // Add logo placeholder (in a real implementation, you would embed an actual logo)
  page.drawText("HomeRoots", {
    x: margin,
    y,
    size: 18,
    font: helveticaBold,
    color: primaryColor,
  })

  // Add title
  y -= 60
  page.drawText(`${stateData.name} Homeschool Requirements`, {
    x: margin,
    y,
    size: titleSize,
    font: helveticaBold,
    color: textColor,
  })

  // Add summary
  y -= 40
  const summaryLines = wrapText(stateData.summary, helveticaFont, normalSize, page.getWidth() - 2 * margin)
  for (const line of summaryLines) {
    page.drawText(line, {
      x: margin,
      y,
      size: normalSize,
      font: helveticaFont,
      color: textColor,
    })
    y -= normalSize + 5
  }

  // Add content
  y -= 20
  const contentLines = wrapText(stateData.content, helveticaFont, normalSize, page.getWidth() - 2 * margin)
  for (const line of contentLines) {
    page.drawText(line, {
      x: margin,
      y,
      size: normalSize,
      font: helveticaFont,
      color: textColor,
    })
    y -= normalSize + 5
  }

  // Add requirements heading
  y -= 30
  page.drawText("Legal Requirements", {
    x: margin,
    y,
    size: headingSize,
    font: helveticaBold,
    color: textColor,
  })

  // Add requirements
  y -= 20
  for (let i = 0; i < stateData.requirements.length; i++) {
    const requirement = stateData.requirements[i]
    const bulletPoint = `${i + 1}. `

    page.drawText(bulletPoint, {
      x: margin,
      y,
      size: normalSize,
      font: helveticaBold,
      color: textColor,
    })

    const requirementLines = wrapText(requirement, helveticaFont, normalSize, page.getWidth() - 2 * margin - 20)

    for (let j = 0; j < requirementLines.length; j++) {
      const line = requirementLines[j]
      page.drawText(line, {
        x: margin + 20,
        y: j === 0 ? y : y - (normalSize + 5) * j,
        size: normalSize,
        font: helveticaFont,
        color: textColor,
      })
    }

    y -= (normalSize + 5) * Math.max(1, requirementLines.length) + 10
  }

  // Add resources heading
  y -= 20
  page.drawText("Helpful Resources", {
    x: margin,
    y,
    size: headingSize,
    font: helveticaBold,
    color: textColor,
  })

  // Add resources
  y -= 20
  for (let i = 0; i < stateData.resources.length; i++) {
    const resource = stateData.resources[i]

    page.drawText(`• ${resource.name}`, {
      x: margin,
      y,
      size: normalSize,
      font: helveticaBold,
      color: textColor,
    })

    y -= normalSize + 5

    page.drawText(resource.url, {
      x: margin + 10,
      y,
      size: smallSize,
      font: helveticaFont,
      color: primaryColor,
    })

    y -= smallSize + 15
  }

  // Add footer
  const footerY = margin - 20
  page.drawText(`Generated on ${new Date().toLocaleDateString()} by HomeRoots.com`, {
    x: margin,
    y: footerY,
    size: smallSize,
    font: helveticaFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  page.drawText("Page 1 of 1", {
    x: page.getWidth() - margin - 50,
    y: footerY,
    size: smallSize,
    font: helveticaFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  // Serialize the PDF to bytes
  const pdfBytes = await pdfDoc.save()

  // Convert to base64 for easy transfer
  return Buffer.from(pdfBytes).toString("base64")
}

// Helper function to wrap text
function wrapText(text: string, font: any, fontSize: number, maxWidth: number): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let currentLine = ""

  for (const word of words) {
    const width = font.widthOfTextAtSize(currentLine + word + " ", fontSize)

    if (width < maxWidth) {
      currentLine += word + " "
    } else {
      lines.push(currentLine.trim())
      currentLine = word + " "
    }
  }

  if (currentLine.trim()) {
    lines.push(currentLine.trim())
  }

  return lines
}
