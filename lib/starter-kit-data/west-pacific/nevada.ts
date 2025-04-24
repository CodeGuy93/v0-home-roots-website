import type { StarterKit } from "../../types"

const nevadaStarterKit: StarterKit = {
  stateCode: "NV",
  stateName: "Nevada",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for Nevada families",
  requirements: {
    notification: "Parents must file a notice of intent to homeschool with the local school district superintendent.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: "No specific day requirements.",
    hoursPerDay: "No specific hourly requirements.",
    subjects: [
      "English (including reading, composition, and writing)",
      "Mathematics",
      "Science",
      "Social Studies (including history, geography, economics, and government)",
    ],
    assessment: "No state-mandated testing requirements.",
    recordKeeping: "No specific record-keeping requirements, but maintaining educational records is recommended.",
  },
  resources: [
    {
      title: "Nevada Homeschool Network",
      url: "https://www.nevadahomeschoolnetwork.com/",
      description: "Statewide organization providing support and information for homeschoolers.",
    },
    {
      title: "Nevada Department of Education - Homeschooling",
      url: "https://doe.nv.gov/homeschooling/",
      description: "Official state information on homeschooling requirements.",
    },
    {
      title: "RISE Education Resource Center",
      url: "https://www.riseedcenter.org/",
      description: "Resource center offering support and materials for homeschooling families.",
    },
  ],
  localGroups: [
    {
      name: "Las Vegas Homeschool Group",
      location: "Las Vegas",
      description: "Active community of homeschoolers in the Las Vegas Valley.",
      contactInfo: "lvhomeschool@example.com",
    },
    {
      name: "Reno Area Homeschoolers",
      location: "Reno",
      description: "Support group for homeschooling families in the Reno-Sparks area.",
      contactInfo: "renohomeschoolers@example.com",
    },
    {
      name: "Rural Nevada Homeschool Association",
      location: "Various Rural Communities",
      description: "Network connecting homeschoolers across rural Nevada.",
      contactInfo: "ruralnvhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Nevada History and Heritage",
      description: "Curriculum covering Nevada's unique history from Native Americans to modern times.",
      gradeLevel: "4-8",
      url: "https://nvhistory.example.com",
    },
    {
      name: "Desert Ecosystem Science",
      description: "Hands-on science curriculum exploring Nevada's desert ecosystems.",
      gradeLevel: "K-12",
      url: "https://desertscience.example.com",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in Nevada?",
      answer:
        "To begin homeschooling in Nevada, file a one-time Notice of Intent to Homeschool with your local school district superintendent.",
    },
    {
      question: "Are there any testing requirements for homeschooled students in Nevada?",
      answer: "No, Nevada does not require standardized testing for homeschooled students.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Nevada?",
      answer:
        "Yes, Nevada law allows homeschooled students to participate in public school classes, sports, and activities, subject to certain requirements.",
    },
    {
      question: "Do I need to be a certified teacher to homeschool in Nevada?",
      answer: "No, Nevada does not require parents to be certified teachers to homeschool their children.",
    },
  ],
  gettingStartedSteps: [
    "Research Nevada homeschool laws and requirements",
    "File a Notice of Intent to Homeschool with your local school district",
    "Select curriculum materials that cover required subjects",
    "Set up a dedicated learning space in your home",
    "Connect with local homeschool groups for support",
    "Create a schedule that works for your family",
    "Consider joining a homeschool co-op for enrichment activities",
  ],
}

export default nevadaStarterKit
