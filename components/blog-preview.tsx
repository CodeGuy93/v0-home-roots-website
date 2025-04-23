import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-secondary">
      <div className="container py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">From the Blog</h2>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">How to Start Homeschooling in Texas: A Simple Guide for Moms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              If you're a Texas mom thinking about homeschooling, you're not alone—and you're not crazy. You're stepping
              into one of the most rewarding (and doable!) journeys for your family.
            </p>

            <div>
              <h4 className="font-bold text-xl mb-2">Is It Legal to Homeschool in Texas?</h4>
              <p>Yes! Texas law allows you to homeschool as long as you follow three basic rules.</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-2">The 3 Legal Requirements in Texas</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Teach in a <em>bona fide</em> (real) manner
                </li>
                <li>Use a curriculum (paper or online)</li>
                <li>
                  Include these 5 subjects:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Reading</li>
                    <li>Spelling</li>
                    <li>Grammar</li>
                    <li>Math</li>
                    <li>Good citizenship</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <strong>You don't need to register. You don't need to test. You don't need permission.</strong>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-2">How to Withdraw from Public School in Texas</h4>
              <p>
                Submit a <strong>Letter of Withdrawal</strong> to the school, keep a copy, and you can begin
                homeschooling the next day.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-2">What Should You Teach?</h4>
              <p>
                You can choose your own curriculum—many families use free printables, YouTube, or buy bundles online.
              </p>
              <p>
                📥 Download our free <strong>HomeRoots Starter Kit</strong> to see example weekly schedules and subject
                checklists.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-2">What About Socialization?</h4>
              <p>
                This is the #1 question every homeschool mom hears—and the answer is:{" "}
                <strong>co-ops, field trips, and park days.</strong>
              </p>
              <p>HomeRoots will soon let you list and find local events.</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-2">Encouragement for Moms</h4>
              <p>
                You are qualified. You know your child better than anyone else. You don't need a degree. You need{" "}
                <strong>support</strong> and <strong>a starting point.</strong> That's why HomeRoots exists.
              </p>
            </div>

            <div>
              <p>
                <strong>🎒 Ready to start?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a
                    href="https://statutes.capitol.texas.gov/Docs/ED/htm/ED.25.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Click here to view Texas homeschool laws
                  </a>
                </li>
                <li>
                  <Link href="#download" className="text-primary hover:underline">
                    Download the Free Starter Kit
                  </Link>
                </li>
                <li>
                  <Link href="#marketplace" className="text-primary hover:underline">
                    Browse beginner-friendly lesson plans in our Marketplace (Coming soon)
                  </Link>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
