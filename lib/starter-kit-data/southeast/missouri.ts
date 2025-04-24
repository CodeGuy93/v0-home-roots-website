import type { StarterKit } from "../../starter-kit-data"

export const missouriStarterKit: StarterKit = {
  stateCode: "MO",
  stateName: "Missouri",
  regionName: "Southeast",
  description:
    "Missouri offers homeschooling families significant freedom with reasonable requirements. This starter kit provides essential information for homeschooling in Missouri.",
  requirements: {
    notification: "No notification required, but maintaining a daily log and portfolio is recommended.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 1000,
    hoursPerDay:
      "No specific hours per day, but must complete 1,000 hours of instruction during the school year, with at least 600 hours in the core subjects.",
    subjects: ["Reading", "Math", "Social Studies", "Language Arts", "Science"],
    assessment: "No state-mandated assessments required.",
    recordKeeping:
      "Maintain records of subjects taught, activities, samples of work, and a log of instructional hours.",
  },
  resources: [
    {
      title: "Families for Home Education (FHE)",
      url: "https://fhe-mo.org/",
      description: "Statewide organization providing support, information, and resources for homeschooling families.",
    },
    {
      title: "Missouri Department of Elementary and Secondary Education - Homeschooling",
      url: "https://dese.mo.gov/",
      description: "Official state information on homeschooling requirements and regulations.",
    },
    {
      title: "HSLDA Missouri",
      url: "https://hslda.org/legal/missouri",
      description: "Legal information and resources specific to homeschooling in Missouri.",
    },
  ],
  localGroups: [
    {
      name: "Families for Home Education",
      location: "Statewide",
      description: "Provides support, resources, and events for homeschooling families across Missouri.",
      contactInfo: "info@fhe-mo.org",
    },
    {
      name: "St. Louis Area Homeschoolers",
      location: "St. Louis",
      description: "Support group for homeschooling families in the St. Louis area.",
      contactInfo: "stlhomeschoolers@example.com",
    },
    {
      name: "Kansas City Homeschool Network",
      location: "Kansas City",
      description: "Local support group offering co-ops, field trips, and social activities.",
      contactInfo: "kchomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Missouri History Resources",
      description: "Resources focused on Missouri state history and geography.",
      gradeLevel: "Elementary to High School",
      url: "https://mostateparks.com/page/84251/missouri-state-museum",
    },
    {
      name: "Classical Conversations Missouri",
      description: "Classical education communities throughout Missouri.",
      gradeLevel: "K-12",
      url: "https://www.classicalconversations.com/",
    },
    {
      name: "Missouri Virtual Instruction Program (MOVIP)",
      description: "Online courses available to Missouri residents.",
      gradeLevel: "K-12",
      url: "https://mocap.mo.gov/",
    },
  ],
  faqs: [
    {
      question: "Do I need to be a certified teacher to homeschool in Missouri?",
      answer: "No, Missouri does not require parents to be certified teachers to homeschool their children.",
    },
    {
      question: "How do I withdraw my child from public school in Missouri?",
      answer:
        "Simply notify the school of your decision to homeschool. No formal withdrawal process is required by state law.",
    },
    {
      question: "Are homeschooled students in Missouri eligible for sports and extracurricular activities?",
      answer:
        "Missouri does not have a state law requiring public schools to allow homeschooled students to participate in sports or activities, but some individual districts may permit participation.",
    },
    {
      question: "Do homeschooled students in Missouri need to take standardized tests?",
      answer: "No, Missouri does not require standardized testing for homeschooled students.",
    },
  ],
  gettingStartedSteps: [
    "Research Missouri homeschool laws and requirements",
    "If withdrawing from public school, notify the school of your decision",
    "Choose a curriculum that covers the required subjects",
    "Set up a record-keeping system to track the 1,000 hours of instruction",
    "Connect with local homeschool groups for support and resources",
    "Plan your academic calendar to ensure you meet the required hours of instruction",
  ],
}
