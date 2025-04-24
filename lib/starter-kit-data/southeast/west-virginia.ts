import type { StarterKit } from "../../starter-kit-data"

export const westVirginiaStarterKit: StarterKit = {
  stateCode: "WV",
  stateName: "West Virginia",
  regionName: "Southeast",
  description:
    "West Virginia offers homeschooling families multiple options with clear requirements. This starter kit provides essential information for homeschooling in West Virginia.",
  requirements: {
    notification: "Submit a notice of intent to the county superintendent annually.",
    qualifications: "Parents must have a high school diploma or equivalent, or work with someone who does.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required",
    subjects: ["Reading", "Language", "Mathematics", "Science", "Social Studies"],
    assessment: "Annual assessment required through standardized testing or portfolio review.",
    recordKeeping: "Maintain assessment results and immunization records.",
  },
  resources: [
    {
      title: "Christian Home Educators of West Virginia (CHEWV)",
      url: "https://chewv.org/",
      description: "Statewide organization providing support, information, and resources for homeschooling families.",
    },
    {
      title: "West Virginia Department of Education - Homeschooling",
      url: "https://wvde.us/",
      description: "Official state information on homeschooling requirements and regulations.",
    },
    {
      title: "HSLDA West Virginia",
      url: "https://hslda.org/legal/west-virginia",
      description: "Legal information and resources specific to homeschooling in West Virginia.",
    },
  ],
  localGroups: [
    {
      name: "Christian Home Educators of West Virginia",
      location: "Statewide",
      description: "Provides support, resources, and events for homeschooling families across West Virginia.",
      contactInfo: "info@chewv.org",
    },
    {
      name: "Charleston Area Homeschool Association",
      location: "Charleston",
      description: "Support group for homeschooling families in the Charleston area.",
      contactInfo: "charlestonhomeschool@example.com",
    },
    {
      name: "Morgantown Area Homeschoolers",
      location: "Morgantown",
      description: "Local support group offering co-ops, field trips, and social activities.",
      contactInfo: "morgantownhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "West Virginia History Resources",
      description: "Resources focused on West Virginia state history and geography.",
      gradeLevel: "Elementary to High School",
      url: "https://wvculture.org/history/",
    },
    {
      name: "Classical Conversations West Virginia",
      description: "Classical education communities throughout West Virginia.",
      gradeLevel: "K-12",
      url: "https://www.classicalconversations.com/",
    },
    {
      name: "West Virginia Virtual School",
      description: "Online courses available to West Virginia residents.",
      gradeLevel: "6-12",
      url: "https://wvde.us/virtual-schools/",
    },
  ],
  faqs: [
    {
      question: "Do I need to be a certified teacher to homeschool in West Virginia?",
      answer: "No, but you must have at least a high school diploma or equivalent, or work with someone who does.",
    },
    {
      question: "How do I withdraw my child from public school in West Virginia?",
      answer:
        "Submit a notice of intent to the county superintendent and notify your child's school of your decision to homeschool.",
    },
    {
      question: "Are homeschooled students in West Virginia eligible for sports and extracurricular activities?",
      answer:
        "Yes, West Virginia law allows homeschooled students to participate in public school sports and activities if they meet certain requirements.",
    },
    {
      question: "Do homeschooled students in West Virginia need to take standardized tests?",
      answer:
        "Yes, West Virginia requires annual assessments, which can be standardized tests or portfolio evaluations.",
    },
  ],
  gettingStartedSteps: [
    "Research West Virginia homeschool laws and requirements",
    "Submit a notice of intent to your county superintendent",
    "Choose a curriculum that covers the required subjects",
    "Set up a record-keeping system for assessment results",
    "Connect with local homeschool groups for support and resources",
    "Plan your academic calendar to include 180 days of instruction",
    "Prepare for annual assessments through testing or portfolio review",
  ],
}
