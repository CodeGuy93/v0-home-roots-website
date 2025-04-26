import Link from "next/link"
import { Facebook, Instagram, PinIcon as Pinterest } from "lucide-react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import StateLawFinder from "@/components/state-law-finder"
import SuccessStories from "@/components/success-stories"
import FAQSection from "@/components/faq-section"
import TrustIndicators from "@/components/trust-indicators"
import CurriculumComparison from "@/components/curriculum-comparison"
import EventsSection from "@/components/events-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Feature Section */}
        <FeatureSection />

        {/* State Law Finder */}
        <StateLawFinder />

        {/* Curriculum Comparison */}
        <CurriculumComparison />

        {/* Success Stories */}
        <SuccessStories />

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Events Section */}
        <EventsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div>
              <h4 className="font-bold text-xl mb-4">HomeRoots</h4>
              <p className="text-sm mb-4">Rooted in Home. Growing Together.</p>
              <p className="text-sm">Empowering families to provide quality education at home since 2020.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Curriculum Finder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    State Laws
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Co-op Directory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Homeschool Discounts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="hover:text-green-200 transition-colors flex items-center gap-2">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-green-200 transition-colors flex items-center gap-2">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-green-200 transition-colors flex items-center gap-2">
                  <Pinterest size={20} />
                  <span className="sr-only">Pinterest</span>
                </Link>
              </div>
              <p className="text-sm">Join our community of homeschooling families!</p>
            </div>
          </div>
          <div className="text-center text-sm mt-12 pt-6 border-t border-green-700">
            © 2025 HomeRoots Family. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
