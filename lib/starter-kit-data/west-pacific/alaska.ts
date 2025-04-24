import type { StarterKit } from "../../types"

const alaskaStarterKit: StarterKit = {
  stateCode: "AK",
  stateName: "Alaska",
  regionName: "West/Pacific",
  description: "Complete homeschooling starter kit for Alaska families",
  requirements: {
    notification:
      "Parents must file a notice of intent with the local school district by the beginning of the school year.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 180,
    hoursPerDay: "No specific hourly requirements.",
    subjects: ["Reading", "Writing", "Math", "Science", "Social Studies"],
    assessment: "No mandatory testing requirements, but annual progress assessment is recommended.",
    recordKeeping: "Keep attendance records and samples of student work.",
  },
  resources: [
    {
      title: "Alaska Private and Home Education Association",
      url: "https://www.aphea.org/",
      description: "Statewide homeschool support organization offering resources and events.",
    },
    {
      title: "Alaska Department of Education - Homeschooling",
      url: "https://education.alaska.gov/alaskan_schools/home",
      description: "Official state information on homeschooling requirements.",
    },
    {
      title: "Interior Alaska Homeschool",
      url: "https://interioralaskahomeschool.org/",
      description: "Support group for homeschoolers in Interior Alaska.",
    },
  ],
  localGroups: [
    {
      name: "Anchorage Homeschool Network",
      location: "Anchorage",
      description: "Support group for homeschoolers in the Anchorage area.",
      contactInfo: "anchoragehomeschool@example.com",
    },
    {
      name: "Fairbanks Homeschool Association",
      location: "Fairbanks",
      description: "Support and activities for homeschooling families in Fairbanks.",
      contactInfo: "fairbankshomeschool@example.com",
    },
    {
      name: "Juneau Home Educators",
      location: "Juneau",
      description: "Community of homeschooling families in Alaska's capital.",
      contactInfo: "juneauhomeed@example.com",
    },
  ],
  curriculum: [
    {
      name: "Alaska History Curriculum",
      description: "Comprehensive curriculum covering Alaska's unique history and culture.",
      gradeLevel: "3-8",
      url: "https://alaskahistorycurriculum.example.com",
    },
    {
      name: "Northern Wilderness Science",
      description: "Science curriculum focused on Alaska's unique ecosystems and wildlife.",
      gradeLevel: "K-12",
      url: "https://northernscience.example.com",
    },
  ],
  faqs: [
    {
      question: "Do I need to be a certified teacher to homeschool in Alaska?",
      answer: "No, Alaska does not require parents to be certified teachers to homeschool their children.",
    },
    {
      question: "Are there any standardized testing requirements in Alaska?",
      answer:
        "Alaska does not mandate standardized testing for homeschooled students, but annual progress assessment is recommended.",
    },
    {
      question: "How do I withdraw my child from public school in Alaska?",
      answer:
        "Submit a notice of intent to homeschool to your local school district superintendent before the school year begins or within 14 days of withdrawing during the school year.",
    },
    {
      question: "Can homeschooled students in Alaska participate in public school activities?",
      answer: "Yes, Alaska law allows homeschooled students to participate in public school activities and sports.",
    },
  ],
  gettingStartedSteps: [
    "Research Alaska homeschool laws and requirements",
    "File a notice of intent with your local school district",
    "Select curriculum materials appropriate for your child",
    "Connect with local homeschool groups for support",
    "Set up a dedicated learning space in your home",
    "Create a schedule that works for your family",
    "Begin keeping attendance and sample records",
  ],
}

export default alaskaStarterKit
