import type { StarterKit } from "../../types"

export const newHampshireStarterKit: StarterKit = {
  stateCode: "NH",
  stateName: "New Hampshire",
  regionName: "Northeast",
  description:
    "New Hampshire offers a relatively straightforward homeschool environment with moderate regulations. Parents have several notification options and flexibility in curriculum choices while meeting basic requirements.",
  requirements: {
    notification:
      "Parents must notify either the commissioner of education, a participating private school, or the local school district superintendent annually.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required",
    subjects: [
      "Science",
      "Mathematics",
      "Language arts",
      "Government",
      "History",
      "Health",
      "Reading",
      "Writing",
      "Spelling",
      "Art and music appreciation",
      "U.S. and New Hampshire history",
      "U.S. and New Hampshire Constitution",
    ],
    assessment:
      "Annual assessment required through one of these options: standardized test, portfolio evaluation by a certified teacher, or evaluation by another agreed-upon method.",
    recordKeeping: "Maintain a portfolio of records and materials sufficient for annual assessment.",
  },
  resources: [
    {
      title: "New Hampshire Homeschooling Coalition",
      url: "https://nhhomeschooling.org",
      description:
        "Statewide inclusive support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "New Hampshire Department of Education - Home Education",
      url: "https://www.education.nh.gov/parents-and-students/home-education",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "Catholics United for Home Education - NH",
      url: "https://cuhenh.org",
      description: "Catholic homeschool support organization in New Hampshire.",
    },
    {
      title: "Christian Home Educators of New Hampshire (CHENH)",
      url: "https://chenh.org",
      description: "Christian homeschool organization offering support, resources, and events.",
    },
    {
      title: "Homeschool Legal Defense Association - New Hampshire",
      url: "https://hslda.org/legal/new-hampshire",
      description: "Legal information and support for homeschooling in New Hampshire.",
    },
  ],
  localGroups: [
    {
      name: "Seacoast Home Educators",
      location: "Seacoast region",
      description: "Active support group offering field trips, co-op classes, and social activities.",
      contactInfo: "seacoasthomeed@example.com",
    },
    {
      name: "Merrimack Valley Homeschoolers",
      location: "Merrimack Valley area",
      description: "Support group for homeschooling families in southern New Hampshire.",
      contactInfo: "merrimackvalleyhomeschool@example.com",
    },
    {
      name: "Monadnock Region Homeschoolers",
      location: "Keene/Monadnock region",
      description: "Community of homeschoolers in southwestern New Hampshire.",
      contactInfo: "monadnockhomeschool@example.com",
    },
    {
      name: "Lakes Region Home Educators",
      location: "Lakes Region",
      description: "Support network for homeschooling families in central New Hampshire.",
      contactInfo: "lakesregionhomeed@example.com",
    },
    {
      name: "North Country Homeschoolers",
      location: "North Country/White Mountains",
      description: "Group serving homeschooling families in northern New Hampshire.",
      contactInfo: "northcountryhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "New Hampshire History Curriculum",
      description: "Comprehensive curriculum covering New Hampshire state history, geography, and government.",
      gradeLevel: "4-8",
      url: "https://www.nhhistory.org/Education",
    },
    {
      name: "Mount Washington Observatory Educational Resources",
      description: "Weather and climate curriculum based on New Hampshire's highest peak.",
      gradeLevel: "3-12",
      url: "https://www.mountwashington.org/education/",
    },
    {
      name: "Squam Lakes Natural Science Center Resources",
      description: "Nature-based curriculum focusing on New Hampshire's wildlife and ecosystems.",
      gradeLevel: "K-12",
      url: "https://www.nhnature.org/teachers/",
    },
    {
      name: "New Hampshire Historical Society Education",
      description: "Primary sources and lesson plans about New Hampshire history.",
      gradeLevel: "4-12",
      url: "https://www.nhhistory.org/Education",
    },
    {
      name: "SEE Science Center Educational Programs",
      description: "STEM curriculum and activities from Manchester's science center.",
      gradeLevel: "K-8",
      url: "https://see-sciencecenter.org/education/",
    },
  ],
  faqs: [
    {
      question: "What are the notification options for homeschooling in New Hampshire?",
      answer:
        "New Hampshire offers three notification options: notify the commissioner of education, notify a participating private school, or notify your local school district superintendent.",
    },
    {
      question: "When do I need to submit my homeschool notification in New Hampshire?",
      answer:
        "Initial notifications must be filed within 5 days of starting your homeschool program. Subsequent annual notifications are due by July 1st each year.",
    },
    {
      question: "What assessment options are available for homeschoolers in New Hampshire?",
      answer:
        "New Hampshire offers three assessment options: standardized testing, portfolio evaluation by a certified teacher, or evaluation by another agreed-upon method.",
    },
    {
      question: "Can homeschooled students participate in public school activities in New Hampshire?",
      answer:
        "Yes, New Hampshire law allows homeschooled students to participate in public school curricular courses and co-curricular activities, subject to local school board policies.",
    },
    {
      question: "How do homeschooled students in New Hampshire receive a diploma?",
      answer:
        "Parents issue their own diplomas in New Hampshire. Homeschooled students can also pursue a HiSET (formerly GED), take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research New Hampshire homeschool laws and choose your notification option",
    "Submit your notification to your chosen entity (commissioner, private school, or superintendent)",
    "Develop a curriculum plan that covers required subjects",
    "Create a recordkeeping system for tracking progress and preparing for annual assessment",
    "Connect with New Hampshire homeschool groups for support and socialization",
    "Establish a daily and weekly schedule that works for your family",
    "Explore New Hampshire's natural resources, museums, and historical sites for field trip opportunities",
  ],
}
