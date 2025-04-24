import type { StarterKit } from "../../types"

export const rhodeIslandStarterKit: StarterKit = {
  stateCode: "RI",
  stateName: "Rhode Island",
  regionName: "Northeast",
  description:
    "Rhode Island requires homeschool families to seek approval from their local school committee. The homeschool program must be 'substantially equal' to public school education, though implementation varies by district.",
  requirements: {
    notification: "Parents must submit a homeschool plan to their local school committee for approval annually.",
    qualifications:
      "No specific qualifications required for parents, though some districts may ask about teaching qualifications.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required",
    subjects: [
      "Reading",
      "Writing",
      "Geography",
      "Arithmetic",
      "U.S. and Rhode Island history",
      "Principles of American government",
      "Health and physical education",
      "Other subjects determined by the school committee",
    ],
    assessment:
      "Assessment methods vary by district. May include standardized tests, portfolio reviews, or other evaluation methods agreed upon with the school committee.",
    recordKeeping:
      "Maintain attendance records and documentation of academic progress as required by your local school committee.",
  },
  resources: [
    {
      title: "Rhode Island Guild of Home Teachers (RIGHT)",
      url: "https://www.rihomeschool.com",
      description:
        "Statewide support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "Rhode Island Department of Education - Homeschooling",
      url: "https://www.ride.ri.gov/StudentsFamilies/EducationPrograms/HomeSchooling.aspx",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "ENRICHri",
      url: "https://www.enrichri.org",
      description: "Inclusive homeschool support organization with resources, classes, and community connections.",
    },
    {
      title: "Catholic Homeschoolers of Rhode Island",
      url: "https://catholichomeschoolersri.com",
      description: "Support group for Catholic homeschooling families in Rhode Island.",
    },
    {
      title: "Homeschool Legal Defense Association - Rhode Island",
      url: "https://hslda.org/legal/rhode-island",
      description: "Legal information and support for homeschooling in Rhode Island.",
    },
  ],
  localGroups: [
    {
      name: "Providence Area Homeschoolers",
      location: "Greater Providence",
      description: "Active support group offering field trips, co-op classes, and social activities.",
      contactInfo: "providencehomeschoolers@example.com",
    },
    {
      name: "South County Homeschool Network",
      location: "Washington County/South County",
      description: "Support group for homeschooling families in southern Rhode Island.",
      contactInfo: "southcountyhomeschool@example.com",
    },
    {
      name: "East Bay Homeschoolers",
      location: "East Bay region",
      description: "Community of homeschoolers in eastern Rhode Island offering support and activities.",
      contactInfo: "eastbayhomeschool@example.com",
    },
    {
      name: "Northern Rhode Island Homeschoolers",
      location: "Northern Rhode Island",
      description: "Support network for homeschooling families in northern Rhode Island.",
      contactInfo: "northernrihomeschool@example.com",
    },
    {
      name: "Aquidneck Island Homeschoolers",
      location: "Newport/Aquidneck Island",
      description: "Group serving homeschooling families on Aquidneck Island.",
      contactInfo: "aquidneckhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Rhode Island History Curriculum",
      description: "Comprehensive curriculum covering Rhode Island state history, geography, and government.",
      gradeLevel: "3-8",
      url: "https://www.rihs.org/education/",
    },
    {
      name: "Save The Bay Educational Resources",
      description: "Environmental curriculum focusing on Narragansett Bay and Rhode Island's coastal ecosystems.",
      gradeLevel: "K-12",
      url: "https://savebay.org/education/",
    },
    {
      name: "Providence Children's Museum Educational Programs",
      description: "Hands-on learning resources for younger students.",
      gradeLevel: "K-5",
      url: "https://www.childrenmuseum.org/educators",
    },
    {
      name: "Rhode Island Historical Society Resources",
      description: "Primary sources and lesson plans about Rhode Island history.",
      gradeLevel: "4-12",
      url: "https://www.rihs.org/education/",
    },
    {
      name: "Roger Williams Park Zoo Education",
      description: "Wildlife and conservation curriculum from Rhode Island's zoo.",
      gradeLevel: "K-12",
      url: "https://rwpzoo.org/education",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in Rhode Island?",
      answer:
        "Submit a homeschool plan to your local school committee for approval. The plan should include curriculum information, teaching methods, materials to be used, and assessment methods.",
    },
    {
      question: "Do I need to submit a homeschool plan every year in Rhode Island?",
      answer:
        "Yes, most districts require annual submission and approval of homeschool plans, though some may establish multi-year approvals.",
    },
    {
      question: "What happens if my homeschool plan is denied in Rhode Island?",
      answer:
        "If your plan is denied, the school committee must provide specific reasons. You can revise your plan to address concerns or appeal the decision. Contact a homeschool advocacy organization for assistance if needed.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Rhode Island?",
      answer:
        "Access to public school activities varies by district. Rhode Island law does not require districts to allow homeschooled students to participate in classes, sports, or extracurricular activities, but some districts may permit participation.",
    },
    {
      question: "How do homeschooled students in Rhode Island receive a diploma?",
      answer:
        "Parents issue their own diplomas in Rhode Island. Homeschooled students can also pursue a GED, take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research Rhode Island homeschool laws and your specific school district's requirements",
    "Contact your local school committee to understand their specific homeschool approval process",
    "Develop a comprehensive education plan that covers required subjects",
    "Submit your plan to the school committee for approval",
    "Create a recordkeeping system that satisfies your district's requirements",
    "Connect with Rhode Island homeschool groups for support and socialization",
    "Explore Rhode Island's historical sites, museums, and coastal areas for field trip opportunities",
  ],
}
