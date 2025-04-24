import type { StarterKit } from "../../types"

const utahStarterKit: StarterKit = {
  stateCode: "UT",
  stateName: "Utah",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for Utah families",
  requirements: {
    notification: "Parents must submit a signed and notarized affidavit to the local school district annually.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: "No specific day requirements.",
    hoursPerDay: "No specific hourly requirements.",
    subjects: ["Language arts", "Mathematics", "Science", "Social studies", "Arts", "Health", "Physical education"],
    assessment: "No state-mandated testing requirements.",
    recordKeeping: "No specific record-keeping requirements, but maintaining educational records is recommended.",
  },
  resources: [
    {
      title: "Utah Home Education Association",
      url: "https://www.uhea.org/",
      description: "Statewide organization providing support and information for homeschoolers.",
    },
    {
      title: "Utah State Board of Education - Home Schooling",
      url: "https://www.schools.utah.gov/curr/homeschool",
      description: "Official state information on homeschooling requirements.",
    },
    {
      title: "LDS Home Educators Association",
      url: "https://ldshea.org/",
      description: "Support organization for LDS homeschooling families.",
    },
  ],
  localGroups: [
    {
      name: "Salt Lake Home Learners",
      location: "Salt Lake City",
      description: "Active community of homeschoolers in the Salt Lake Valley.",
      contactInfo: "slhomelearners@example.com",
    },
    {
      name: "Utah County Homeschool Association",
      location: "Provo/Orem",
      description: "Support group for homeschooling families in Utah County.",
      contactInfo: "utahcountyhomeschool@example.com",
    },
    {
      name: "Southern Utah Home Educators",
      location: "St. George",
      description: "Community of homeschoolers in Southern Utah.",
      contactInfo: "southernutahhomeed@example.com",
    },
  ],
  curriculum: [
    {
      name: "Utah History and Heritage",
      description: "Curriculum covering Utah's unique history from Native Americans to modern times.",
      gradeLevel: "4-8",
      url: "https://utahhistory.example.com",
    },
    {
      name: "Rocky Mountain Ecosystem Science",
      description: "Hands-on science curriculum exploring Utah's diverse ecosystems.",
      gradeLevel: "K-12",
      url: "https://rockymtnscience.example.com",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in Utah?",
      answer:
        "To begin homeschooling in Utah, submit a signed and notarized affidavit to your local school district annually.",
    },
    {
      question: "Are there any testing requirements for homeschooled students in Utah?",
      answer: "No, Utah does not require standardized testing for homeschooled students.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Utah?",
      answer:
        "Yes, Utah law allows homeschooled students to participate in public school classes and extracurricular activities.",
    },
    {
      question: "Do I need to be a certified teacher to homeschool in Utah?",
      answer: "No, Utah does not require parents to be certified teachers to homeschool their children.",
    },
  ],
  gettingStartedSteps: [
    "Research Utah homeschool laws and requirements",
    "Submit a signed and notarized affidavit to your local school district",
    "Select curriculum materials that cover required subjects",
    "Set up a dedicated learning space in your home",
    "Connect with local homeschool groups for support",
    "Create a schedule that works for your family",
    "Consider joining a homeschool co-op for enrichment activities",
  ],
}

export default utahStarterKit
