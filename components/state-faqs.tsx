import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { EnhancedStateData, FAQ } from "@/lib/enhanced-state-data"

export default function StateFAQs({
  stateData,
}: {
  stateData: EnhancedStateData | any
}) {
  // Default FAQs if none are provided in the state data
  const defaultFaqs: FAQ[] = [
    {
      question: `Is homeschooling legal in ${stateData.name}?`,
      answer: `Yes, homeschooling is legal in ${stateData.name}. ${stateData.content}`,
    },
    {
      question: `What are the requirements to homeschool in ${stateData.name}?`,
      answer: `The main requirements are: ${stateData.requirements.join(", ")}.`,
    },
    {
      question: `Do I need to be a certified teacher to homeschool in ${stateData.name}?`,
      answer:
        stateData.parentQualifications?.details ||
        `Information about parent qualifications in ${stateData.name} is not available. Please check with your local homeschool organization for accurate information.`,
    },
    {
      question: `Do homeschooled students need to take standardized tests in ${stateData.name}?`,
      answer:
        stateData.testing?.details ||
        `Information about testing requirements in ${stateData.name} is not available. Please check with your local homeschool organization for accurate information.`,
    },
    {
      question: `How do I withdraw my child from public school in ${stateData.name}?`,
      answer: `The process varies by district, but generally you should submit a written notice of withdrawal to your child's school. Check with local homeschool organizations for specific guidance and letter templates.`,
    },
  ]

  const faqs = stateData.faqs?.length > 0 ? stateData.faqs : defaultFaqs

  return (
    <div className="space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>Find answers to commonly asked questions about homeschooling in {stateData.name}.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: FAQ, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
