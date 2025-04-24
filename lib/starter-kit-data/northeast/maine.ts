import type { StarterKit } from "../../types"

export const maineStarterKit: StarterKit = {
  stateCode: "ME",
  stateName: "Maine",
  regionName: "Northeast",
  description:
    "Maine offers several options for homeschooling with moderate regulations. Parents can choose to homeschool under the homeschool statute or through enrollment in a non-approved private school (umbrella school).",
  requirements: {
    notification:
      "Parents must file a notice of intent with their local school district and the Maine Department of Education annually.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 175,
    hoursPerDay: "No specific hours required",
    subjects: [
      "English and language arts",
      "Math",
      "Science",
      "Social studies",
      "Physical and health education",
      "Library skills",
      "Fine arts",
      "Maine studies (once during elementary school)",
      "Computer proficiency (once during middle school)",
    ],
    assessment:
      "Annual assessment required through one of these options: standardized test, portfolio review by certified teacher, or evaluation by local homeschool support group.",
    recordKeeping: "Maintain records of instruction and assessment results.",
  },
  resources: [
    {
      title: "Maine Department of Education - Home Instruction",
      url: "https://www.maine.gov/doe/schools/schoolops/homeinstruction",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "Homeschoolers of Maine",
      url: "https://www.homeschoolersofmaine.org",
      description:
        "Statewide support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "Maine Homeschool Alliance",
      url: "https://mainehomeschoolalliance.org",
      description: "Secular homeschool support organization with resources and community connections.",
    },
    {
      title: "Maine State Library - Homeschool Resources",
      url: "https://www.maine.gov/msl/libs/services/homeschool.htm",
      description: "Library resources specifically for homeschooling families.",
    },
    {
      title: "Homeschool Legal Defense Association - Maine",
      url: "https://hslda.org/legal/maine",
      description: "Legal information and support for homeschooling in Maine.",
    },
  ],
  localGroups: [
    {
      name: "Homeschoolers of Maine",
      location: "Statewide",
      description: "Christian homeschool organization offering support, resources, and an annual convention.",
      contactInfo: "info@homeschoolersofmaine.org",
    },
    {
      name: "Southern Maine Homeschool Group",
      location: "Portland/Southern Maine",
      description: "Active support group offering field trips, co-op classes, and social activities.",
      contactInfo: "southernmainehomeschoolers@example.com",
    },
    {
      name: "Midcoast Maine Homeschoolers",
      location: "Bath/Brunswick/Rockland area",
      description: "Support group for homeschooling families in the midcoast region.",
      contactInfo: "midcoasthomeschool@example.com",
    },
    {
      name: "Bangor Area Homeschoolers",
      location: "Greater Bangor area",
      description: "Community of homeschoolers in central Maine offering support and activities.",
      contactInfo: "bangorhomeschool@example.com",
    },
    {
      name: "Aroostook County Homeschoolers",
      location: "Northern Maine",
      description: "Support network for homeschooling families in Maine's northernmost county.",
      contactInfo: "aroostookhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Maine Studies Curriculum",
      description: "Comprehensive curriculum covering Maine state history, geography, and government.",
      gradeLevel: "3-8",
      url: "https://www.mainehistory.org/education",
    },
    {
      name: "Maine Audubon Educational Resources",
      description: "Nature-based curriculum focusing on Maine's wildlife and ecosystems.",
      gradeLevel: "K-12",
      url: "https://maineaudubon.org/education/",
    },
    {
      name: "Gulf of Maine Research Institute Education",
      description: "Marine science curriculum focused on the Gulf of Maine ecosystem.",
      gradeLevel: "5-12",
      url: "https://www.gmri.org/education/",
    },
    {
      name: "Maine Agriculture in the Classroom",
      description: "Curriculum connecting students to agriculture, food systems, and natural resources.",
      gradeLevel: "K-12",
      url: "https://www.agclassroom.org/me/",
    },
    {
      name: "Maine Historical Society Resources",
      description: "Primary sources and lesson plans about Maine history.",
      gradeLevel: "4-12",
      url: "https://www.mainehistory.org/education",
    },
  ],
  faqs: [
    {
      question: "What are the homeschooling options in Maine?",
      answer:
        "Maine offers two primary options: homeschooling under the homeschool statute (filing with your school district and the DOE) or enrolling in a non-approved private school (umbrella school).",
    },
    {
      question: "When do I need to submit my homeschool notification in Maine?",
      answer:
        "Initial notices must be filed within 10 days of starting a homeschool program. Subsequent annual notices must be filed by September 1st each year.",
    },
    {
      question: "What assessment options are available for homeschoolers in Maine?",
      answer:
        "Maine offers three assessment options: standardized testing, portfolio review by a Maine certified teacher, or evaluation by a homeschool support group that includes a Maine certified teacher.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Maine?",
      answer:
        "Yes, Maine law allows homeschooled students to participate in public school classes, sports, and extracurricular activities, subject to certain requirements and local school board policies.",
    },
    {
      question: "How do homeschooled students in Maine receive a diploma?",
      answer:
        "Parents issue their own diplomas in Maine. Homeschooled students can also pursue a HiSET (formerly GED), take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research Maine homeschool laws and choose your legal option (homeschool statute or umbrella school)",
    "File a notice of intent with your local school district and the Maine Department of Education",
    "Develop a curriculum plan that covers required subjects",
    "Create a recordkeeping system for tracking progress and preparing for annual assessment",
    "Connect with Maine homeschool groups for support and socialization",
    "Establish a daily and weekly schedule that works for your family",
    "Explore Maine's natural resources, museums, and historical sites for field trip opportunities",
  ],
}
