import Image from "next/image"

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted by Homeschooling Families Nationwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of families who rely on HomeRoots for guidance, resources, and community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-green-700 mb-2">10k+</div>
            <p className="text-gray-600 text-center">Families Supported</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-green-700 mb-2">50</div>
            <p className="text-gray-600 text-center">State Guides</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-green-700 mb-2">200+</div>
            <p className="text-gray-600 text-center">Curriculum Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-green-700 mb-2">4.9/5</div>
            <p className="text-gray-600 text-center">Average Rating</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-500 mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <div className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/placeholder.svg?key=homeschool-today"
                alt="Homeschool Today Magazine"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/placeholder.svg?key=parents-choice"
                alt="Parents Choice Award"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/placeholder.svg?key=education-weekly"
                alt="Education Weekly"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/placeholder.svg?key=homeschool-association"
                alt="National Homeschool Association"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image src="/placeholder.svg?key=family-magazine" alt="Family Magazine" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-green-50 rounded-xl p-8 border border-green-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-white shadow-lg max-w-[180px] mx-auto">
                <Image src="/founder-portrait.png" alt="Sarah Williams, Founder" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="font-serif text-2xl font-bold mb-3">From Our Founder</h3>
              <p className="text-gray-700 italic mb-4">
                "As a homeschooling mother of four, I created HomeRoots to provide the resources and community I wished
                I had when starting our journey. Our mission is to empower every family to create an exceptional
                educational experience at home."
              </p>
              <div className="flex items-center">
                <p className="font-medium">Sarah Williams</p>
                <span className="mx-2 text-gray-400">|</span>
                <p className="text-gray-600">Founder, HomeRoots</p>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-600">
                  <span className="font-medium">Educator of the Year</span> - National Homeschool Association
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
