import type { StarterKit } from "../../types"

const californiaStarterKit: StarterKit = {
  stateCode: "CA",
  stateName: "California",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for California families",
  requirements: {
    notification:
      "Parents must either file a private school affidavit, enroll in a private school satellite program, hire a credentialed tutor, or enroll in a public charter homeschool program.",
    qualifications:
      "For the private school option, no specific qualifications required. For the tutor option, the tutor must be credentialed.",
    daysPerYear: 175,
    hoursPerDay: "No specific hourly requirements.",
    subjects: ["English", "Mathematics", "Social Sciences", "Science", "Fine Arts", "Health", "Physical Education"],
    assessment: "No state-mandated testing requirements for private homeschools, but record-keeping is essential.",
    recordKeeping: "Maintain attendance records, course of study, and samples of student work.",
  },
  resources: [
    {
      title: "California Homeschool Network",
      url: "https://www.californiahomeschool.net/",
      description: "Statewide organization providing support and information for homeschoolers.",
    },
    {
      title: "Homeschool Association of California",
      url: "https://www.hsc.org/",
      description: "Non-profit organization supporting homeschooling families throughout California.",
    },
    {
      title: "California Department of Education - Private Schools",
      url: "https://www.cde.ca.gov/sp/ps/",
      description: "Official information on establishing a home-based private school.",
    },
  ],
  localGroups: [
    {
      name: "Bay Area Homeschoolers",
      location: "San Francisco Bay Area",
      description: "Active community of homeschoolers in the Bay Area with regular meetups and field trips.",
      contactInfo: "bayareahomeschoolers@example.com",
    },
    {
      name: "SoCal Homeschool Association",
      location: "Los Angeles/Orange County",
      description: "Support group serving homeschoolers in Southern California.",
      contactInfo: "socalhomeschool@example.com",
    },
    {
      name: "Sacramento Valley Homeschoolers",
      location: "Sacramento",
      description: "Community group for homeschoolers in the Sacramento Valley region.",
      contactInfo: "sacvalleyhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "California History Curriculum",
      description: "Comprehensive curriculum covering California's rich history from Native peoples to modern times.",
      gradeLevel: "4-8",
      url: "https://cahistorycurriculum.example.com",
    },
    {
      name: "California Science Adventures",
      description: "Hands-on science curriculum exploring California's diverse ecosystems.",
      gradeLevel: "K-8",
      url: "https://cascienceadventures.example.com",
    },
  ],
  faqs: [
    {
      question: "What are the different ways to homeschool legally in California?",
      answer:
        "In California, you can homeschool by: 1) Filing a private school affidavit, 2) Enrolling in a private school satellite program (PSP), 3) Hiring a credentialed tutor, or 4) Enrolling in a public charter homeschool program.",
    },
    {
      question: "When do I need to file a private school affidavit?",
      answer:
        "The private school affidavit should be filed between October 1 and October 15 each year. New homeschoolers starting mid-year should file as soon as they begin homeschooling.",
    },
    {
      question: "Do I need to be a credentialed teacher to homeschool in California?",
      answer:
        "No, parents do not need teaching credentials if they establish a private home school or use a PSP. Credentials are only required if using the tutoring option.",
    },
    {
      question: "Can homeschooled students participate in public school activities in California?",
      answer:
        "Generally, homeschooled students cannot participate in public school classes or activities unless they are enrolled in a public school program like a charter school.",
    },
  ],
  gettingStartedSteps: [
    "Research California homeschool laws and choose your legal option",
    "If using the private school option, prepare to file your affidavit in October",
    "Select curriculum materials that cover required subjects",
    "Set up a record-keeping system for attendance and student work",
    "Connect with local homeschool groups for support and socialization",
    "Create a dedicated learning space in your home",
    "Develop a schedule that works for your family",
  ],
}

export default californiaStarterKit
