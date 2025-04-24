import type { StarterKit } from "../../starter-kit-data"

export const mississippiStarterKit: StarterKit = {
  stateCode: "MS",
  stateName: "Mississippi",
  regionName: "Southeast",
  description:
    "Mississippi offers homeschooling families multiple options with reasonable requirements. This starter kit provides essential information for homeschooling in Mississippi.",
  requirements: {
    notification:
      "Parents must submit a certificate of enrollment to the school attendance officer by September 15 each year.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required",
    subjects: ["Reading", "Spelling", "Grammar", "Mathematics", "Science", "Social Studies"],
    assessment: "No state-mandated assessments required.",
    recordKeeping: "Keep attendance records and maintain a portfolio of student work.",
  },
  resources: [
    {
      title: "Mississippi Home Educators Association",
      url: "https://www.mshomeed.org/",
      description: "Statewide organization providing support, information, and resources for homeschooling families.",
    },
    {
      title: "Mississippi Department of Education - Homeschooling",
      url: "https://www.mdek12.org/",
      description: "Official state information on homeschooling requirements and regulations.",
    },
    {
      title: "HSLDA Mississippi",
      url: "https://hslda.org/legal/mississippi",
      description: "Legal information and resources specific to homeschooling in Mississippi.",
    },
  ],
  localGroups: [
    {
      name: "Mississippi Home Educators Association",
      location: "Statewide",
      description: "Provides support, resources, and events for homeschooling families across Mississippi.",
      contactInfo: "info@mshomeed.org",
    },
    {
      name: "Gulf Coast Home Educators",
      location: "Gulf Coast region",
      description: "Support group for homeschooling families in the Gulf Coast area.",
      contactInfo: "gulfcoasthomeeducators@example.com",
    },
    {
      name: "Jackson Area Homeschool Association",
      location: "Jackson",
      description: "Local support group offering co-ops, field trips, and social activities.",
      contactInfo: "jacksonhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Mississippi History Resources",
      description: "Resources focused on Mississippi state history and geography.",
      gradeLevel: "Elementary to High School",
      url: "https://www.mdah.ms.gov/education",
    },
    {
      name: "Classical Conversations Mississippi",
      description: "Classical education communities throughout Mississippi.",
      gradeLevel: "K-12",
      url: "https://www.classicalconversations.com/",
    },
    {
      name: "Mississippi Virtual Public School",
      description: "Online courses available to Mississippi residents.",
      gradeLevel: "6-12",
      url: "https://www.mdek12.org/ESE/virtual",
    },
  ],
  faqs: [
    {
      question: "Do I need to be a certified teacher to homeschool in Mississippi?",
      answer: "No, Mississippi does not require parents to be certified teachers to homeschool their children.",
    },
    {
      question: "How do I withdraw my child from public school in Mississippi?",
      answer:
        "Submit a certificate of enrollment to your local school attendance officer and notify your child's school of your intent to homeschool.",
    },
    {
      question: "Are homeschooled students in Mississippi eligible for sports and extracurricular activities?",
      answer:
        "Mississippi does not have a state law requiring public schools to allow homeschooled students to participate in sports or activities, but some individual districts may permit participation.",
    },
    {
      question: "Do homeschooled students in Mississippi need to take standardized tests?",
      answer: "No, Mississippi does not require standardized testing for homeschooled students.",
    },
  ],
  gettingStartedSteps: [
    "Research Mississippi homeschool laws and requirements",
    "Submit a certificate of enrollment to your local school attendance officer by September 15",
    "Choose a curriculum that covers the required subjects",
    "Set up a record-keeping system for attendance and student work",
    "Connect with local homeschool groups for support and resources",
    "Plan your academic calendar to include 180 days of instruction",
  ],
}
