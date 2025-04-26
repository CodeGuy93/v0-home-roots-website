"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Is homeschooling legal in all 50 states?",
    answer:
      "Yes, homeschooling is legal in all 50 states, though requirements vary significantly. Some states have few regulations while others require curriculum approval, standardized testing, or portfolio reviews. Our state-by-state guides provide detailed information on your local requirements.",
  },
  {
    question: "Do I need teaching credentials to homeschool my children?",
    answer:
      "In most states, parents do not need teaching credentials or a college degree to homeschool their children. However, some states do have minimum education requirements for parents. Our resources help you understand what qualifications, if any, are needed in your state.",
  },
  {
    question: "How much does homeschooling cost?",
    answer:
      "The cost of homeschooling varies widely depending on your approach. Families typically spend between $300-1,000 per child annually, but costs can be higher with premium curriculum packages or outside classes. Many quality resources are available for free or at low cost, and our Homeschool Discounts section helps you find the best deals.",
  },
  {
    question: "How do homeschooled students get into college?",
    answer:
      "Colleges and universities across the country accept homeschooled students, often viewing them favorably for their self-discipline and independent learning skills. Homeschooled students typically prepare transcripts, may take standardized tests like the SAT/ACT, and can also earn dual enrollment credits. Many colleges have specific admissions procedures for homeschooled applicants.",
  },
  {
    question: "What about socialization?",
    answer:
      "Homeschooled children have many opportunities for socialization through co-ops, sports, community classes, volunteer work, and homeschool groups. These activities often provide rich social experiences with mixed age groups and diverse backgrounds. Our Co-op Directory helps you find local groups where your children can build friendships and develop social skills.",
  },
  {
    question: "Can I work full-time and still homeschool?",
    answer:
      "Yes, many parents balance work and homeschooling through flexible scheduling, asynchronous learning, co-teaching with a spouse or family member, or participating in hybrid programs. Our resources include specific guidance for working parents, including sample schedules and strategies for making homeschooling work with your career.",
  },
  {
    question: "What if my child has special needs?",
    answer:
      "Homeschooling can be an excellent option for children with special needs, allowing for personalized pacing, one-on-one attention, and customized learning environments. Many resources and support groups exist specifically for homeschooling children with various learning differences, and our Special Needs section provides guidance for adapting curriculum and teaching methods.",
  },
  {
    question: "How do I choose the right curriculum?",
    answer:
      "Selecting curriculum involves considering your child's learning style, your teaching style, your educational philosophy, and practical factors like budget and time. Our Curriculum Finder tool helps match you with options that fit your unique situation, and our comparison worksheets guide you through evaluating different programs.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Get answers to common questions about homeschooling</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-green-200">
                <AccordionTrigger className="text-left font-medium text-lg py-6 hover:text-green-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-700">
              Still have questions? We're here to help you navigate your homeschooling journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-green-700 hover:bg-green-800">Contact Our Team</Button>
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
