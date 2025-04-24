import type { StarterKit } from "../../types"

export const connecticutStarterKit: StarterKit = {
  stateCode: "CT",
  stateName: "Connecticut",
  regionName: "Northeast",
  description:
    "Connecticut has specific requirements for homeschooling, including filing a notice of intent and providing equivalent instruction to public schools. Parents have flexibility in curriculum choices while meeting these requirements.",
  requirements: {
    notification:
      "Parents must file a notice of intent to homeschool with their local school district within 10 days of starting homeschooling.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required, but instruction must be equivalent to public schools.",
    subjects: [
      "Reading",
      "Writing",
      "Spelling",
      "English grammar",
      "Geography",
      "Arithmetic",
      "United States history",
      "Citizenship",
      "Science",
      "Health and safety",
    ],
    assessment:
      "Annual portfolio review or other form of assessment is recommended but not explicitly required by law.",
    recordKeeping: "Maintain a portfolio of educational records and materials.",
  },
  resources: [
    {
      title: "Connecticut Homeschool Network",
      url: "https://cthomeschoolnetwork.org",
      description:
        "Statewide support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "Connecticut State Department of Education - Homeschooling",
      url: "https://portal.ct.gov/SDE/Homeschooling/Homeschooling-in-Connecticut",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "Education Connection",
      url: "https://www.educationconnection.org",
      description: "Regional educational service center offering resources for homeschoolers.",
    },
    {
      title: "Connecticut C.H.E.S.S.",
      url: "https://ctchess.com",
      description: "Christian Home Educators Support System providing support and activities.",
    },
    {
      title: "Homeschool Legal Defense Association - Connecticut",
      url: "https://hslda.org/legal/connecticut",
      description: "Legal information and support for homeschooling in Connecticut.",
    },
  ],
  localGroups: [
    {
      name: "CT Homeschool Network",
      location: "Statewide",
      description: "Secular homeschool support organization with local chapters throughout Connecticut.",
      contactInfo: "info@cthomeschoolnetwork.org",
    },
    {
      name: "TEACH CT",
      location: "Greater Hartford area",
      description: "Christian homeschool co-op offering classes and activities.",
      contactInfo: "teachct@example.com",
    },
    {
      name: "Fairfield County Homeschoolers",
      location: "Fairfield County",
      description: "Local support group offering field trips, activities, and parent support.",
      contactInfo: "fairfieldcountyhomeschoolers@example.com",
    },
    {
      name: "New Haven Home Educators",
      location: "New Haven area",
      description: "Support group for homeschooling families in the New Haven region.",
      contactInfo: "newhavenhomeed@example.com",
    },
    {
      name: "Eastern CT Homeschool Group",
      location: "Eastern Connecticut",
      description: "Community of homeschoolers in eastern Connecticut offering support and activities.",
      contactInfo: "easternct@example.com",
    },
  ],
  curriculum: [
    {
      name: "Connecticut History Curriculum",
      description: "Comprehensive curriculum covering Connecticut state history, geography, and government.",
      gradeLevel: "4-8",
      url: "https://www.ctexplored.org/education/",
    },
    {
      name: "Mystic Seaport Museum Educational Resources",
      description: "Maritime history curriculum and resources from Connecticut's famous seaport museum.",
      gradeLevel: "K-12",
      url: "https://www.mysticseaport.org/learn/",
    },
    {
      name: "Connecticut Science Center Resources",
      description: "STEM curriculum and activities aligned with state standards.",
      gradeLevel: "K-12",
      url: "https://ctsciencecenter.org/education/",
    },
    {
      name: "Mark Twain House Educational Programs",
      description: "Literature and writing curriculum based on Connecticut's famous author.",
      gradeLevel: "5-12",
      url: "https://marktwainhouse.org/education/",
    },
    {
      name: "Connecticut Forest & Park Association Environmental Education",
      description: "Nature-based curriculum focusing on Connecticut's natural resources.",
      gradeLevel: "K-12",
      url: "https://www.ctwoodlands.org/environmental-education",
    },
  ],
  faqs: [
    {
      question: "Is homeschooling legal in Connecticut?",
      answer:
        "Yes, homeschooling is legal in Connecticut under state law. Parents must file a notice of intent with their local school district and provide instruction equivalent to that of public schools.",
    },
    {
      question: "Do I need to be a certified teacher to homeschool in Connecticut?",
      answer: "No, Connecticut does not require parents to be certified teachers to homeschool their children.",
    },
    {
      question: "How do I withdraw my child from public school in Connecticut?",
      answer:
        "Submit a notice of intent to homeschool to your local school district superintendent, then follow up with a formal withdrawal letter to your child's school.",
    },
    {
      question: "Are homeschooled students in Connecticut eligible for public school activities?",
      answer:
        "Access to public school activities varies by district. Some districts allow homeschooled students to participate in sports, extracurricular activities, or specific classes, while others do not. Contact your local district for their specific policies.",
    },
    {
      question: "How do homeschooled students in Connecticut receive a diploma?",
      answer:
        "Parents issue their own diplomas in Connecticut. Homeschooled students can also pursue a GED/HiSET, take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research Connecticut homeschool laws and requirements",
    "File a notice of intent with your local school district",
    "Develop a curriculum plan that covers required subjects",
    "Create a portfolio system to document your child's educational progress",
    "Connect with local homeschool groups for support and socialization",
    "Establish a daily and weekly schedule that works for your family",
    "Explore Connecticut's museums, parks, and historical sites for field trip opportunities",
  ],
}
