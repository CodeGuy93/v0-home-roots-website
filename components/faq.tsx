"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Is homeschooling legal in all 50 states?",
    answer:
      "Yes, homeschooling is legal in all 50 states, though requirements vary significantly. Some states have minimal regulations while others require regular assessments, curriculum approval, or specific qualifications for parents.",
  },
  {
    question: "Do I need a teaching license?",
    answer:
      "Most states do not require parents to have a teaching license to homeschool their children. However, some states may have minimum education requirements for parents, such as a high school diploma or GED.",
  },
  {
    question: "Can I homeschool multiple kids at once?",
    answer:
      "Yes, you can homeschool multiple children simultaneously. Many families find creative ways to teach children of different ages together, using a combination of group activities and individual instruction tailored to each child's level.",
  },
  {
    question: "How do I withdraw from public school?",
    answer:
      "The process varies by state, but typically involves submitting a formal letter of withdrawal to your school district. Some states require additional steps like filing a notice of intent to homeschool or registering with the state education department.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="container py-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
