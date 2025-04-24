import type { StarterKit } from "../../starter-kit-data"

export const districtOfColumbiaStarterKit: StarterKit = {
  stateCode: "DC",
  stateName: "District of Columbia",
  regionName: "Southeast",
  description:
    "The District of Columbia has specific requirements for homeschooling families. This starter kit provides essential information for homeschooling in DC.",
  requirements: {
    notification:
      "Submit a notice of intent to homeschool to the Office of the State Superintendent of Education (OSSE) annually.",
    qualifications: "Parents must have at least a high school diploma or equivalent.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required",
    subjects: [
      "Language Arts",
      "Mathematics",
      "Science",
      "Social Studies",
      "Art",
      "Music",
      "Health",
      "Physical Education",
    ],
    assessment: "Annual portfolio review required.",
    recordKeeping: "Maintain a portfolio of educational materials and student work.",
  },
  resources: [
    {
      title: "DC Homeschoolers",
      url: "https://dchomeschoolers.org/",
      description: "Organization providing support, information, and resources for homeschooling families in DC.",
    },
    {
      title: "Office of the State Superintendent of Education - Homeschooling",
      url: "https://osse.dc.gov/service/homeschooling-district-columbia",
      description: "Official DC information on homeschooling requirements and regulations.",
    },
    {
      title: "HSLDA District of Columbia",
      url: "https://hslda.org/legal/district-of-columbia",
      description: "Legal information and resources specific to homeschooling in DC.",
    },
  ],
  localGroups: [
    {
      name: "DC Homeschoolers",
      location: "District-wide",
      description: "Provides support, resources, and events for homeschooling families across DC.",
      contactInfo: "info@dchomeschoolers.org",
    },
    {
      name: "Capitol Hill Homeschoolers",
      location: "Capitol Hill",
      description: "Support group for homeschooling families in the Capitol Hill area.",
      contactInfo: "capitolhillhomeschool@example.com",
    },
    {
      name: "DC Metro Homeschool Network",
      location: "DC Metro Area",
      description: "Regional support group offering co-ops, field trips, and social activities.",
      contactInfo: "dcmetrohomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "DC History Resources",
      description: "Resources focused on DC history and government.",
      gradeLevel: "Elementary to High School",
      url: "https://www.dchistory.org/",
    },
    {
      name: "Smithsonian Education",
      description: "Educational resources from the Smithsonian museums in DC.",
      gradeLevel: "K-12",
      url: "https://www.si.edu/educators",
    },
    {
      name: "National Geographic Education",
      description: "Educational resources from National Geographic headquarters in DC.",
      gradeLevel: "K-12",
      url: "https://www.nationalgeographic.org/education/",
    },
  ],
  faqs: [
    {
      question: "Do I need to be a certified teacher to homeschool in DC?",
      answer: "No, but you must have at least a high school diploma or equivalent.",
    },
    {
      question: "How do I withdraw my child from public school in DC?",
      answer:
        "Submit a notice of intent to homeschool to OSSE and notify your child's school of your decision to homeschool.",
    },
    {
      question: "Are homeschooled students in DC eligible for sports and extracurricular activities?",
      answer:
        "DC does not have a law requiring public schools to allow homeschooled students to participate in sports or activities, but some individual schools may permit participation.",
    },
    {
      question: "Do homeschooled students in DC need to take standardized tests?",
      answer: "No, DC requires portfolio assessments rather than standardized testing.",
    },
  ],
  gettingStartedSteps: [
    "Research DC homeschool laws and requirements",
    "Submit a notice of intent to homeschool to OSSE",
    "Choose a curriculum that covers the required subjects",
    "Set up a portfolio system to document your child's education",
    "Connect with local homeschool groups for support and resources",
    "Plan your academic calendar to include 180 days of instruction",
    "Take advantage of the many educational resources available in DC",
  ],
}
