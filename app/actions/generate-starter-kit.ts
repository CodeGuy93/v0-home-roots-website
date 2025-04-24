"use server"

import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import { getStarterKitContent, getStateName } from "@/lib/starter-kit-data"

export async function generateStarterKitPDF(stateCode?: string): Promise<string> {
  // Get state-specific content
  const content = stateCode ? getStarterKitContent(stateCode) : getStarterKitContent("")
  const stateName = stateCode ? getStateName(stateCode) : "Homeschool"

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create()

  // Add a page to the document
  const page = pdfDoc.addPage([612, 792]) // Letter size

  // Get fonts
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique)

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

  // Add logo placeholder
  page.drawText("HomeRoots", {
    x: margin,
    y,
    size: 18,
    font: helveticaBold,
    color: primaryColor,
  })

  // Add title
  y -= 60
  const title = stateCode ? `${stateName} Homeschool Starter Kit` : "Homeschool Starter Kit"
  page.drawText(title, {
    x: margin,
    y,
    size: titleSize,
    font: helveticaBold,
    color: textColor,
  })

  // Add introduction
  y -= 40
  const introLines = wrapText(content.introduction, helveticaFont, normalSize, page.getWidth() - 2 * margin)
  for (const line of introLines) {
    page.drawText(line, {
      x: margin,
      y,
      size: normalSize,
      font: helveticaFont,
      color: textColor,
    })
    y -= normalSize + 5
  }

  // Add "Getting Started" section
  y -= 30
  page.drawText("Getting Started", {
    x: margin,
    y,
    size: headingSize,
    font: helveticaBold,
    color: textColor,
  })

  y -= 25
  for (let i = 0; i < content.gettingStartedSteps.length; i++) {
    const item = content.gettingStartedSteps[i]
    const bulletPoint = `${i + 1}. `

    page.drawText(bulletPoint, {
      x: margin,
      y,
      size: normalSize,
      font: helveticaBold,
      color: textColor,
    })

    const itemLines = wrapText(item, helveticaFont, normalSize, page.getWidth() - 2 * margin - 20)

    for (let j = 0; j < itemLines.length; j++) {
      const line = itemLines[j]
      page.drawText(line, {
        x: margin + 20,
        y: j === 0 ? y : y - (normalSize + 5) * j,
        size: normalSize,
        font: helveticaFont,
        color: textColor,
      })
    }

    y -= (normalSize + 5) * Math.max(1, itemLines.length) + 10
  }

  // Add "Record-Keeping Tips" section
  y -= 20
  page.drawText("Record-Keeping Tips", {
    x: margin,
    y,
    size: headingSize,
    font: helveticaBold,
    color: textColor,
  })

  y -= 25
  for (let i = 0; i < content.recordKeepingTips.length; i++) {
    const tip = content.recordKeepingTips[i]
    page.drawText("• ", {
      x: margin,
      y,
      size: normalSize,
      font: helveticaBold,
      color: textColor,
    })

    const tipLines = wrapText(tip, helveticaFont, normalSize, page.getWidth() - 2 * margin - 15)

    for (let j = 0; j < tipLines.length; j++) {
      const line = tipLines[j]
      page.drawText(line, {
        x: margin + 15,
        y: j === 0 ? y : y - (normalSize + 5) * j,
        size: normalSize,
        font: helveticaFont,
        color: textColor,
      })
    }

    y -= (normalSize + 5) * Math.max(1, tipLines.length) + 10
  }

  // Check if we need to add a new page for the withdrawal letter
  if (content.withdrawalLetterTemplate && y < 300) {
    // Add a new page
    const page = pdfDoc.addPage([612, 792])
    y = page.getHeight() - margin
  }

  // Add withdrawal letter template if available
  if (content.withdrawalLetterTemplate) {
    y -= 20
    page.drawText("Sample Withdrawal Letter", {
      x: margin,
      y,
      size: headingSize,
      font: helveticaBold,
      color: textColor,
    })

    y -= 25
    const letterLines = content.withdrawalLetterTemplate.split("\n")
    for (const line of letterLines) {
      page.drawText(line, {
        x: margin,
        y,
        size: smallSize,
        font: helveticaOblique,
        color: textColor,
      })
      y -= smallSize + 5
    }
  }

  // Check if we need to add a new page for resources
  if (y < 200) {
    // Add a new page
    page = pdfDoc.addPage([612, 792])
    y = page.getHeight() - margin
  }

  // Add "State-Specific Resources" section
  y -= 30
  const resourcesTitle = stateCode ? `${stateName} Resources` : "Recommended Resources"
  page.drawText(resourcesTitle, {
    x: margin,
    y,
    size: headingSize,
    font: helveticaBold,
    color: textColor,
  })

  y -= 25
  for (const resource of content.stateSpecificResources) {
    page.drawText("• ", {
      x: margin,
      y,
      size: normalSize,
      font: helveticaBold,
      color: textColor,
    })

    const resourceLines = wrapText(resource, helveticaFont, normalSize, page.getWidth() - 2 * margin - 15)

    for (let j = 0; j < resourceLines.length; j++) {
      const line = resourceLines[j]
      page.drawText(line, {
        x: margin + 15,
        y: j === 0 ? y : y - (normalSize + 5) * j,
        size: normalSize,
        font: helveticaFont,
        color: textColor,
      })
    }

    y -= (normalSize + 5) * Math.max(1, resourceLines.length) + 5
  }

  // Add "Recommended Curriculum" section
  y -= 20
  page.drawText("Recommended Curriculum", {
    x: margin,
    y,
    size: headingSize,
    font: helveticaBold,
    color: textColor,
  })

  y -= 25
  for (const curriculum of content.recommendedCurriculum) {
    page.drawText("• ", {
      x: margin,
      y,
      size: normalSize,
      font: helveticaBold,
      color: textColor,
    })

    const curriculumLines = wrapText(curriculum, helveticaFont, normalSize, page.getWidth() - 2 * margin - 15)

    for (let j = 0; j < curriculumLines.length; j++) {
      const line = curriculumLines[j]
      page.drawText(line, {
        x: margin + 15,
        y: j === 0 ? y : y - (normalSize + 5) * j,
        size: normalSize,
        font: helveticaFont,
        color: textColor,
      })
    }

    y -= (normalSize + 5) * Math.max(1, curriculumLines.length) + 5
  }

  // Add footer
  const footerY = margin - 20
  page.drawText(`© HomeRoots.com - Your Homeschool Journey Starts Here`, {
    x: margin,
    y: footerY,
    size: smallSize,
    font: helveticaFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  const pageText = `Page ${pdfDoc.getPageCount()} of ${pdfDoc.getPageCount()}`
  page.drawText(pageText, {
    x: page.getWidth() - margin - 70,
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
