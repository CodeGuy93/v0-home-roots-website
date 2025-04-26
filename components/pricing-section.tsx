"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const toggleBilling = () => {
    setIsAnnual(!isAnnual)
  }

  const plans = [
    {
      name: "Free",
      description: "Essential tools to start your homeschooling journey",
      price: {
        monthly: 0,
        annual: 0,
      },
      features: [
        "Starter Kit Download",
        "Basic State Law Guides",
        "Community Forum Access",
        "Limited Resource Library",
        "Weekly Newsletter",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      description: "Everything you need for a successful homeschool experience",
      price: {
        monthly: 12.99,
        annual: 9.99,
      },
      features: [
        "Everything in Free",
        "Full Resource Library Access",
        "Curriculum Comparison Tools",
        "Progress Tracking Dashboard",
        "Printable Lesson Planners",
        "Exclusive Webinars & Workshops",
        "Homeschool Legal Defense Discounts",
      ],
      cta: "Start 7-Day Free Trial",
      popular: true,
    },
    {
      name: "Family",
      description: "Perfect for families with multiple children",
      price: {
        monthly: 19.99,
        annual: 16.99,
      },
      features: [
        "Everything in Premium",
        "Multi-Child Progress Tracking",
        "Personalized Curriculum Recommendations",
        "1:1 Homeschool Consultation (30 min)",
        "Early Access to New Resources",
        "Exclusive Discounts (up to 30%)",
        "Priority Support",
      ],
      cta: "Start 7-Day Free Trial",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Choose Your Homeschooling Journey
          </h2>
          <p className="text-xl text-gray-600">
            Select the plan that best fits your family's homeschooling needs and goals
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <span className={`px-4 py-2 rounded-full ${!isAnnual ? "bg-green-100 text-green-800" : ""}`}>Monthly</span>
            <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={toggleBilling} />
            <div className="flex items-center gap-2">
              <span className={`px-4 py-2 rounded-full ${isAnnual ? "bg-green-100 text-green-800" : ""}`}>Annual</span>
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-green-500 shadow-lg ring-1 ring-green-500"
                  : "border-gray-200 hover:border-green-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                </div>
              )}
              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                    {plan.price.monthly > 0 && <span className="text-lg font-normal text-gray-500">/month</span>}
                  </span>
                  {plan.price.monthly > 0 && (
                    <p className="text-sm text-gray-500">{isAnnual ? "Billed annually" : "Billed monthly"}</p>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-700 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-green-700 hover:bg-green-800" : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Can I cancel my subscription?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you can cancel your subscription at any time. If you cancel, you'll still have access until the end
                of your billing period.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is there a family discount?</h4>
              <p className="text-gray-600 text-sm">
                Our Family plan is designed for households with multiple children and offers the best value for larger
                families.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What happens after the free trial?</h4>
              <p className="text-gray-600 text-sm">
                After your 7-day free trial ends, you'll be automatically charged for your selected plan. We'll send you
                a reminder before charging.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I switch plans later?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated for the remainder of
                your billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
