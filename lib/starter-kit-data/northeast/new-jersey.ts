import type { StarterKit } from "../../types"

export const newJerseyStarterKit: StarterKit = {
  stateCode: "NJ",
  stateName: "New Jersey",
  regionName: "Northeast",
  description:
    "New Jersey has some of the most minimal homeschool regulations in the country. Parents are required to provide equivalent instruction to public schools but have significant freedom in how they implement their homeschool program.",
  requirements: {
    notification:
      "No notification is required. Parents do not need to notify the state or local school district of their intent to homeschool.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: "No specific days required, but instruction should be equivalent to public schools.",
    hoursPerDay: "No specific hours required",
    subjects: [
      "No specific subjects are mandated by law, but instruction should be academically equivalent to public schools",
      "Recommended subjects include reading, writing, mathematics, science, social studies, health, physical education, visual and performing arts, world languages, technology, and career education",
    ],
    assessment: "No state-mandated assessments required.",
    recordKeeping: "No specific recordkeeping required by law, but maintaining records is recommended.",
  },
  resources: [
    {
      title: "Homeschool Association of New Jersey",
      url: "https://www.hsnj.org",
      description:
        "Statewide support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "New Jersey Department of Education - Homeschooling",
      url: "https://www.nj.gov/education/genfo/faq/faq_homeschool.htm",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "Education Network of Christian Homeschoolers of New Jersey (ENOCH)",
      url: "https://www.enochnj.org",
      description: "Christian homeschool organization offering support, resources, and an annual convention.",
    },
    {
      title: "New Jersey Homeschool Association",
      url: "https://jerseyhomeschool.net",
      description: "Inclusive homeschool support organization with resources and community connections.",
    },
    {
      title: "Homeschool Legal Defense Association - New Jersey",
      url: "https://hslda.org/legal/new-jersey",
      description: "Legal information and support for homeschooling in New Jersey.",
    },
  ],
  localGroups: [
    {
      name: "North Jersey Homeschoolers Association",
      location: "Northern New Jersey",
      description: "Large, inclusive group offering classes, field trips, and social activities.",
      contactInfo: "northjerseyhomeschoolers@example.com",
    },
    {
      name: "Central Jersey Homeschool Association",
      location: "Central New Jersey",
      description: "Support group for homeschooling families in central New Jersey offering co-ops and activities.",
      contactInfo: "centraljerseyhomeschool@example.com",
    },
    {
      name: "South Jersey Homeschoolers",
      location: "Southern New Jersey",
      description: "Community of homeschoolers in southern New Jersey offering support and activities.",
      contactInfo: "southjerseyhomeschool@example.com",
    },
    {
      name: "Jersey Shore Homeschool Association",
      location: "Coastal/Shore regions",
      description: "Support network for homeschooling families along the Jersey Shore.",
      contactInfo: "jerseyshorehomeschool@example.com",
    },
    {
      name: "Princeton Area Homeschoolers",
      location: "Princeton/Mercer County",
      description: "Group serving homeschooling families in the Princeton area with enrichment programs.",
      contactInfo: "princetonhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "New Jersey History Curriculum",
      description: "Comprehensive curriculum covering New Jersey state history, geography, and government.",
      gradeLevel: "4-8",
      url: "https://www.njstatelib.org/research_library/new_jersey_resources/digital_collection/nj_history_curriculum/",
    },
    {
      name: "Liberty Science Center Educational Resources",
      description: "STEM curriculum and activities from Jersey City's premier science center.",
      gradeLevel: "K-12",
      url: "https://lsc.org/education",
    },
    {
      name: "New Jersey Pinelands Commission Education",
      description: "Environmental curriculum focusing on New Jersey's unique Pinelands ecosystem.",
      gradeLevel: "K-12",
      url: "https://www.nj.gov/pinelands/edu/",
    },
    {
      name: "New Jersey Historical Society Resources",
      description: "Primary sources and lesson plans about New Jersey history.",
      gradeLevel: "4-12",
      url: "https://www.jerseyhistory.org/education",
    },
    {
      name: "Garden State Discovery Museum Educational Programs",
      description: "Hands-on learning resources for younger students.",
      gradeLevel: "K-5",
      url: "https://www.discoverymuseum.com/education",
    },
  ],
  faqs: [
    {
      question: "Do I need to notify anyone that I'm homeschooling in New Jersey?",
      answer:
        "No, New Jersey does not require any notification to the state or local school district when you begin homeschooling.",
    },
    {
      question: "What subjects am I required to teach in New Jersey?",
      answer:
        "New Jersey law does not specify required subjects, but requires that homeschool education be 'equivalent' to public school education. It's recommended to cover core subjects like reading, writing, mathematics, science, and social studies.",
    },
    {
      question: "Do homeschooled students in New Jersey need to take standardized tests?",
      answer:
        "No, New Jersey does not require homeschooled students to take standardized tests or submit to any specific form of assessment.",
    },
    {
      question: "Can homeschooled students participate in public school activities in New Jersey?",
      answer:
        "Access to public school activities is determined by local school districts. New Jersey law does not require districts to allow homeschooled students to participate in classes, sports, or extracurricular activities, but some districts may permit participation.",
    },
    {
      question: "How do homeschooled students in New Jersey receive a diploma?",
      answer:
        "Parents issue their own diplomas in New Jersey. Homeschooled students can also pursue a high school equivalency diploma, take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research New Jersey homeschool laws to understand the minimal requirements",
    "If withdrawing from public school, send a withdrawal letter to your child's school",
    "Develop a curriculum plan that provides instruction equivalent to public schools",
    "Create a simple recordkeeping system (recommended though not required by law)",
    "Connect with New Jersey homeschool groups for support and socialization",
    "Establish a daily and weekly schedule that works for your family",
    "Explore New Jersey's museums, historical sites, and natural areas for field trip opportunities",
  ],
}
