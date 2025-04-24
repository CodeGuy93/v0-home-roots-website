import type { StarterKit } from "../../types"

const arizonaStarterKit: StarterKit = {
  stateCode: "AZ",
  stateName: "Arizona",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for Arizona families",
  requirements: {
    notification:
      "Parents must file an affidavit of intent with the county school superintendent within 30 days of beginning homeschooling.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: "No specific day requirements.",
    hoursPerDay: "No specific hourly requirements.",
    subjects: [
      "Reading",
      "Grammar",
      "Mathematics",
      "Science",
      "Social Studies",
      "Constitution of the United States and Arizona",
    ],
    assessment: "No state-mandated testing requirements.",
    recordKeeping: "No specific record-keeping requirements, but maintaining educational records is recommended.",
  },
  resources: [
    {
      title: "Arizona Families for Home Education",
      url: "https://afhe.org/",
      description: "Statewide organization providing support and information for homeschoolers.",
    },
    {
      title: "Arizona Department of Education - Homeschooling",
      url: "https://www.azed.gov/home-school",
      description: "Official state information on homeschooling requirements.",
    },
    {
      title: "Homeschool Arizona",
      url: "https://homeschoolarizona.org/",
      description: "Resource network for Arizona homeschooling families.",
    },
  ],
  localGroups: [
    {
      name: "Phoenix Homeschool Group",
      location: "Phoenix Metro Area",
      description: "Active community of homeschoolers in the Phoenix metropolitan area.",
      contactInfo: "phoenixhomeschool@example.com",
    },
    {
      name: "Tucson Homeschool Association",
      location: "Tucson",
      description: "Support group for homeschooling families in the Tucson area.",
      contactInfo: "tucsonhomeschool@example.com",
    },
    {
      name: "Northern Arizona Homeschoolers",
      location: "Flagstaff",
      description: "Community of homeschoolers in Northern Arizona.",
      contactInfo: "nazhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Arizona History and Heritage",
      description: "Curriculum covering Arizona's unique history from Native Americans to modern times.",
      gradeLevel: "4-8",
      url: "https://azhistory.example.com",
    },
    {
      name: "Desert Ecosystem Science",
      description: "Hands-on science curriculum exploring Arizona's desert ecosystems.",
      gradeLevel: "K-12",
      url: "https://desertscience.example.com",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in Arizona?",
      answer:
        "To begin homeschooling in Arizona, file an affidavit of intent with your county school superintendent within 30 days of beginning homeschooling.",
    },
    {
      question: "Are there any testing requirements for homeschooled students in Arizona?",
      answer: "No, Arizona does not require standardized testing for homeschooled students.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Arizona?",
      answer:
        "Arizona law does not require public schools to allow homeschooled students to participate in classes or activities, but some districts may permit it at their discretion.",
    },
    {
      question: "Do I need to be a certified teacher to homeschool in Arizona?",
      answer: "No, Arizona does not require parents to be certified teachers to homeschool their children.",
    },
  ],
  gettingStartedSteps: [
    "Research Arizona homeschool laws and requirements",
    "File an affidavit of intent with your county school superintendent",
    "Select curriculum materials that cover required subjects",
    "Set up a dedicated learning space in your home",
    "Connect with local homeschool groups for support",
    "Create a schedule that works for your family",
    "Consider joining a homeschool co-op for enrichment activities",
  ],
}

export default arizonaStarterKit
