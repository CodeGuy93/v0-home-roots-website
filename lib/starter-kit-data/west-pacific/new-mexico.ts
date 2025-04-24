import type { StarterKit } from "../../types"

const newMexicoStarterKit: StarterKit = {
  stateCode: "NM",
  stateName: "New Mexico",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for New Mexico families",
  requirements: {
    notification:
      "Parents must notify the New Mexico Public Education Department within 30 days of establishing a home school and by April 1 of each year thereafter.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 180,
    hoursPerDay: "No specific hourly requirements.",
    subjects: ["Reading", "Language arts", "Mathematics", "Social studies", "Science"],
    assessment: "Students must take a nationally standardized achievement test annually.",
    recordKeeping: "Maintain attendance records and test results.",
  },
  resources: [
    {
      title: "Christian Association of Parent Educators - New Mexico",
      url: "https://www.cape-nm.org/",
      description: "Statewide organization providing support and information for homeschoolers.",
    },
    {
      title: "New Mexico Public Education Department - Home Schooling",
      url: "https://webnew.ped.state.nm.us/bureaus/options-parents-families/home-schools/",
      description: "Official state information on homeschooling requirements.",
    },
    {
      title: "New Mexico Homeschoolers",
      url: "https://www.nmhomeschoolers.org/",
      description: "Resource network for New Mexico homeschooling families.",
    },
  ],
  localGroups: [
    {
      name: "Albuquerque Homeschool Community",
      location: "Albuquerque",
      description: "Active community of homeschoolers in the Albuquerque area.",
      contactInfo: "abqhomeschool@example.com",
    },
    {
      name: "Santa Fe Home Educators",
      location: "Santa Fe",
      description: "Support group for homeschooling families in the Santa Fe area.",
      contactInfo: "santafehomeed@example.com",
    },
    {
      name: "Las Cruces Homeschoolers",
      location: "Las Cruces",
      description: "Community of homeschoolers in Southern New Mexico.",
      contactInfo: "lcruces@example.com",
    },
  ],
  curriculum: [
    {
      name: "New Mexico History and Culture",
      description: "Curriculum covering New Mexico's rich history and diverse cultural heritage.",
      gradeLevel: "4-8",
      url: "https://nmhistory.example.com",
    },
    {
      name: "Southwest Science Explorations",
      description: "Hands-on science curriculum exploring New Mexico's unique ecosystems.",
      gradeLevel: "K-12",
      url: "https://swscience.example.com",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in New Mexico?",
      answer:
        "To begin homeschooling in New Mexico, notify the New Mexico Public Education Department within 30 days of establishing a home school using their online notification form.",
    },
    {
      question: "Are there any testing requirements for homeschooled students in New Mexico?",
      answer:
        "Yes, New Mexico requires homeschooled students to take a nationally standardized achievement test annually.",
    },
    {
      question: "Can homeschooled students participate in public school activities in New Mexico?",
      answer: "Yes, New Mexico law allows homeschooled students to participate in public school activities and sports.",
    },
    {
      question: "Do I need to be a certified teacher to homeschool in New Mexico?",
      answer: "No, New Mexico does not require parents to be certified teachers to homeschool their children.",
    },
  ],
  gettingStartedSteps: [
    "Research New Mexico homeschool laws and requirements",
    "Submit notification to the New Mexico Public Education Department",
    "Select curriculum materials that cover required subjects",
    "Plan for annual standardized testing",
    "Set up a record-keeping system for attendance",
    "Connect with local homeschool groups for support",
    "Create a schedule that works for your family",
  ],
}

export default newMexicoStarterKit
