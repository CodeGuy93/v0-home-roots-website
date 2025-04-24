import type { StarterKit } from "../../types"

const coloradoStarterKit: StarterKit = {
  stateCode: "CO",
  stateName: "Colorado",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for Colorado families",
  requirements: {
    notification:
      "Parents must provide written notification to a school district 14 days before beginning homeschooling and annually thereafter.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 172,
    hoursPerDay: "4 hours per day",
    subjects: [
      "Communication skills of reading, writing, and speaking",
      "Mathematics",
      "History",
      "Civics",
      "Literature",
      "Science",
      "Regular courses of instruction in the Constitution of the United States",
    ],
    assessment:
      "Students must be evaluated in grades 3, 5, 7, 9, and 11 either through standardized testing or evaluation by a qualified person.",
    recordKeeping: "Maintain attendance records, test results, and immunization records.",
  },
  resources: [
    {
      title: "Christian Home Educators of Colorado",
      url: "https://www.chec.org/",
      description: "Statewide organization providing support, information, and events for homeschoolers.",
    },
    {
      title: "Colorado Department of Education - Home School",
      url: "https://www.cde.state.co.us/choice/homeschool",
      description: "Official state information on homeschooling requirements.",
    },
    {
      title: "Colorado Homeschool Network",
      url: "https://www.coloradohomeschool.net/",
      description: "Secular homeschool support organization serving Colorado families.",
    },
  ],
  localGroups: [
    {
      name: "Denver Area Homeschoolers",
      location: "Denver Metro",
      description: "Active community of homeschoolers in the Denver metropolitan area.",
      contactInfo: "denverhomeschoolers@example.com",
    },
    {
      name: "Colorado Springs Home Educators",
      location: "Colorado Springs",
      description: "Support group for homeschooling families in the Colorado Springs area.",
      contactInfo: "cshomeed@example.com",
    },
    {
      name: "Western Slope Homeschool Association",
      location: "Grand Junction",
      description: "Community of homeschoolers on Colorado's Western Slope.",
      contactInfo: "westernslope@example.com",
    },
  ],
  curriculum: [
    {
      name: "Colorado History Explorer",
      description: "Curriculum covering Colorado's rich history from Native Americans to modern times.",
      gradeLevel: "3-8",
      url: "https://cohistoryexplorer.example.com",
    },
    {
      name: "Rocky Mountain Science",
      description: "Hands-on science curriculum exploring Colorado's unique ecosystems and geology.",
      gradeLevel: "K-12",
      url: "https://rockymtnscience.example.com",
    },
  ],
  faqs: [
    {
      question: "When do I need to notify the school district of my intent to homeschool?",
      answer:
        "You must provide written notification to a Colorado school district 14 days before beginning homeschooling and annually thereafter.",
    },
    {
      question: "What testing or evaluation is required for homeschooled students in Colorado?",
      answer:
        "Students must be evaluated in grades 3, 5, 7, 9, and 11 either through standardized testing or evaluation by a qualified person.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Colorado?",
      answer:
        "Yes, Colorado law allows homeschooled students to participate in extracurricular and interscholastic activities at their local public school.",
    },
    {
      question: "How many hours of instruction are required for homeschooling in Colorado?",
      answer: "Colorado requires 172 days of instruction averaging four hours per day.",
    },
  ],
  gettingStartedSteps: [
    "Research Colorado homeschool laws and requirements",
    "Submit written notification to a school district 14 days before beginning",
    "Select curriculum materials that cover required subjects",
    "Create a record-keeping system for attendance and student work",
    "Connect with local homeschool groups for support",
    "Plan for required evaluations in grades 3, 5, 7, 9, and 11",
    "Set up a dedicated learning space in your home",
  ],
}

export default coloradoStarterKit
