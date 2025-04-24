import type { StarterKit } from "../../types"

export const massachusettsStarterKit: StarterKit = {
  stateCode: "MA",
  stateName: "Massachusetts",
  regionName: "Northeast",
  description:
    "Massachusetts homeschool regulations are based on court decisions rather than specific statutes. Parents must obtain approval from their local school district by submitting an education plan that demonstrates instruction is equal to public schools.",
  requirements: {
    notification:
      "Parents must submit a homeschool education plan to their local school district for approval before beginning homeschooling.",
    qualifications:
      "No specific qualifications required for parents, though some districts may ask about parent qualifications.",
    daysPerYear: 180,
    hoursPerDay: "900 hours for elementary grades, 990 hours for secondary grades",
    subjects: [
      "Reading",
      "Writing",
      "English language and grammar",
      "Mathematics",
      "Science",
      "History",
      "Geography",
      "Civics",
      "Health",
      "Physical education",
      "Art and music appreciation",
    ],
    assessment:
      "Assessment methods vary by district. May include standardized tests, portfolio reviews, or other evaluation methods agreed upon with the school district.",
    recordKeeping: "Maintain records according to the agreement with your school district.",
  },
  resources: [
    {
      title: "Massachusetts Home Learning Association",
      url: "https://www.massachusettshomeschoolers.org",
      description:
        "Statewide inclusive support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "Massachusetts Department of Elementary and Secondary Education - Homeschooling",
      url: "https://www.doe.mass.edu/privateschool/homeschool.html",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "Advocates for Home Education in Massachusetts (AHEM)",
      url: "https://www.ahem.info",
      description: "Organization providing guidance on homeschooling legally in Massachusetts.",
    },
    {
      title: "Massachusetts Homeschool Organization of Parent Educators (MassHOPE)",
      url: "https://www.masshope.org",
      description: "Christian homeschool organization offering support, resources, and an annual convention.",
    },
    {
      title: "Homeschool Legal Defense Association - Massachusetts",
      url: "https://hslda.org/legal/massachusetts",
      description: "Legal information and support for homeschooling in Massachusetts.",
    },
  ],
  localGroups: [
    {
      name: "Boston Area Homeschoolers",
      location: "Greater Boston",
      description: "Large, inclusive group offering classes, field trips, and social activities.",
      contactInfo: "bostonhomeschoolers@example.com",
    },
    {
      name: "Western Mass Homeschoolers",
      location: "Springfield/Northampton area",
      description: "Support group for homeschooling families in western Massachusetts.",
      contactInfo: "westernmasshomeschool@example.com",
    },
    {
      name: "South Shore Homeschool Network",
      location: "South Shore region",
      description: "Community of homeschoolers south of Boston offering support and activities.",
      contactInfo: "southshorehomeschool@example.com",
    },
    {
      name: "Cape Cod Homeschoolers",
      location: "Cape Cod",
      description: "Support group for homeschooling families on Cape Cod.",
      contactInfo: "capecodhomeschool@example.com",
    },
    {
      name: "Worcester Area Homeschoolers",
      location: "Worcester County",
      description: "Central Massachusetts homeschool group offering co-ops, field trips, and support.",
      contactInfo: "worcesterhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Massachusetts History Curriculum",
      description: "Comprehensive curriculum covering Massachusetts state history, from colonial times to present.",
      gradeLevel: "3-8",
      url: "https://www.masshist.org/education",
    },
    {
      name: "Museum of Science Boston Educational Resources",
      description: "STEM curriculum and activities from Boston's premier science museum.",
      gradeLevel: "K-12",
      url: "https://www.mos.org/educator-resources",
    },
    {
      name: "Plimoth Patuxet Museums Education",
      description: "Colonial history curriculum based on the Plymouth Colony.",
      gradeLevel: "K-12",
      url: "https://plimoth.org/for-students-and-teachers",
    },
    {
      name: "Massachusetts Environmental Education Society Resources",
      description: "Curriculum focusing on Massachusetts ecosystems and environmental science.",
      gradeLevel: "K-12",
      url: "https://massmees.org/resources",
    },
    {
      name: "Boston Tea Party Ships & Museum Educational Materials",
      description: "Revolutionary War history curriculum and resources.",
      gradeLevel: "4-12",
      url: "https://www.bostonteapartyship.com/education",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in Massachusetts?",
      answer:
        "Submit a homeschool education plan to your local school district for approval. The plan should include curriculum information, teaching methods, materials to be used, and assessment methods.",
    },
    {
      question: "Do I need to submit a homeschool plan every year in Massachusetts?",
      answer:
        "Yes, most districts require annual submission and approval of homeschool plans, though some may establish multi-year approvals.",
    },
    {
      question: "What happens if my homeschool plan is denied in Massachusetts?",
      answer:
        "If your plan is denied, the district must provide specific reasons. You can revise your plan to address concerns or appeal the decision. Contact a homeschool advocacy organization for assistance if needed.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Massachusetts?",
      answer:
        "Access to public school activities varies by district. Massachusetts law does not require districts to allow homeschooled students to participate in classes, sports, or extracurricular activities, but many districts do permit participation.",
    },
    {
      question: "How do homeschooled students in Massachusetts receive a diploma?",
      answer:
        "Parents issue their own diplomas in Massachusetts. Homeschooled students can also pursue a HiSET (formerly GED), take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research Massachusetts homeschool requirements and court decisions (Charles, Brunelle, etc.)",
    "Contact your local school district to understand their specific homeschool approval process",
    "Develop a comprehensive education plan that covers required subjects and instructional hours",
    "Submit your plan to the school district for approval",
    "Create a recordkeeping system that satisfies your district's requirements",
    "Connect with Massachusetts homeschool groups for support and socialization",
    "Explore Massachusetts' rich historical sites, museums, and educational resources for field trips",
  ],
}
