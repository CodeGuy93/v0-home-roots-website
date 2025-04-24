import type { StarterKit } from "../../starter-kit-data"

export const southDakotaStarterKit: StarterKit = {
  stateCode: "SD",
  stateName: "South Dakota",
  regionName: "Midwest",
  description:
    "South Dakota refers to homeschooling as 'alternative instruction' and has relatively straightforward requirements for families.",
  requirements: {
    notification:
      "File an annual application for public school exemption (homeschool notification) with your local school district by the first day of school or when starting homeschooling.",
    qualifications: "No specific qualifications for parents are required.",
    daysPerYear: 175,
    hoursPerDay: "No specific hours per day required, but must meet the 175-day requirement.",
    subjects: [
      "Language arts",
      "Mathematics",
      "Social studies",
      "Science",
      "Fine arts",
      "Health",
      "Physical education",
    ],
    assessment:
      "Standardized testing in grades 4, 8, and 11 (though parents can opt out by submitting a notarized request).",
    recordKeeping: "Basic records of academic progress.",
  },
  resources: [
    {
      title: "South Dakota Christian Home Educators",
      url: "https://sdche.org",
      description: "Statewide organization providing support, information, and resources to homeschooling families.",
    },
    {
      title: "South Dakota Department of Education - Alternative Instruction",
      url: "https://doe.sd.gov/oatq/homeschooling.aspx",
      description: "Official state information on homeschooling requirements and regulations.",
    },
    {
      title: "Homeschool Legal Defense Association - South Dakota",
      url: "https://hslda.org/legal/south-dakota",
      description: "Legal information and support for homeschooling families in South Dakota.",
    },
    {
      title: "South Dakota Virtual School",
      url: "https://sdvs.k12.sd.us",
      description: "Online courses for homeschooled students.",
    },
    {
      title: "South Dakota 4-H",
      url: "https://extension.sdstate.edu/south-dakota-4-h",
      description: "Project-based learning opportunities for homeschooled students.",
    },
  ],
  localGroups: [
    {
      name: "Sioux Falls Homeschool Network",
      location: "Sioux Falls",
      description: "Support group for homeschooling families in the Sioux Falls area.",
      contactInfo: "siouxfallshomeschool@example.org",
    },
    {
      name: "Rapid City Area Homeschoolers",
      location: "Rapid City",
      description: "Co-ops, field trips, and support for homeschoolers in the Rapid City area.",
      contactInfo: "rapidcityhomeschool@example.org",
    },
    {
      name: "Black Hills Homeschool Network",
      location: "Black Hills region",
      description: "Support and activities for homeschooling families in the Black Hills.",
      contactInfo: "blackhillshomeschool@example.org",
    },
    {
      name: "Eastern South Dakota Homeschool Association",
      location: "Eastern SD",
      description: "Resources and community for homeschoolers in eastern South Dakota.",
      contactInfo: "easternhomeschool@example.org",
    },
  ],
  curriculum: [
    {
      name: "South Dakota History Resources",
      description: "Materials for teaching South Dakota history and geography.",
      gradeLevel: "4-8",
      url: "https://www.sdhistory.org/education",
    },
    {
      name: "South Dakota Virtual School Courses",
      description: "Online courses for middle and high school students.",
      gradeLevel: "6-12",
      url: "https://sdvs.k12.sd.us/courses",
    },
    {
      name: "South Dakota Discovery Center Programs",
      description: "STEM education resources and programs.",
      gradeLevel: "K-12",
      url: "https://www.sd-discovery.org/education",
    },
    {
      name: "Badlands National Park Educational Resources",
      description: "Materials for teaching natural history and geology.",
      gradeLevel: "K-12",
      url: "https://www.nps.gov/badl/learn/education",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in South Dakota?",
      answer:
        "To begin homeschooling in South Dakota, you need to file an application for public school exemption (homeschool notification) with your local school district by the first day of school or when starting homeschooling.",
    },
    {
      question: "How many days of instruction are required in South Dakota?",
      answer: "South Dakota requires at least 175 days of instruction per year for homeschooled students.",
    },
    {
      question: "What subjects am I required to teach?",
      answer:
        "In South Dakota, you must teach language arts, mathematics, social studies, science, fine arts, health, and physical education.",
    },
    {
      question: "Are standardized tests required for homeschoolers in South Dakota?",
      answer:
        "Standardized testing is required in grades 4, 8, and 11, though parents can opt out by submitting a notarized request to the school district.",
    },
    {
      question: "Can homeschooled students participate in public school activities in South Dakota?",
      answer:
        "Yes, South Dakota law allows homeschooled students to participate in public school activities, including sports, though specific policies may vary by district.",
    },
  ],
  gettingStartedSteps: [
    "Research South Dakota homeschool laws and requirements",
    "File an application for public school exemption with your local school district",
    "Plan your curriculum to include required subjects",
    "Create a schedule to meet the 175-day requirement",
    "Connect with local homeschool groups for support and resources",
    "Set up a recordkeeping system for academic progress",
    "Plan for standardized testing in grades 4, 8, and 11 or submit an opt-out request",
  ],
}
