import Hero from "@/components/hero"
import Marketplace from "@/components/marketplace"
import Community from "@/components/community"
import BlogPreview from "@/components/blog-preview"
import FAQ from "@/components/faq"
import EmailSignup from "@/components/email-signup"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Marketplace />
      <Community />
      <BlogPreview />
      <FAQ />
      <EmailSignup />
    </main>
  )
}
