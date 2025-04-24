import type { StarterKit } from "../../starter-kit-data"

export const oklahomaStarterKit: StarterKit = {
  stateCode: "OK",
  stateName: "Oklahoma",
  regionName: "Southwest",
  description:
    "Oklahoma offers multiple options for homeschooling families with relatively straightforward requirements.",
  requirements: {
    notification:
      "Parents must submit a letter of intent to homeschool to the local school district superintendent or operate as a private school.",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: 180,
    hoursPerDay: "No specific hours required",
    subjects: [
      "Reading",
      "Writing",
      "Mathematics",
      "Science",
      "Social Studies",
      "Art",
      "Music",
      "Health",
      "Physical Education",
    ],
    assessment: "No state-mandated assessments required.",
    recordKeeping:
      "No specific recordkeeping requirements, but maintaining attendance records and portfolios is recommended.",
  },
  resources: [
    {
      title: "Oklahoma Christian Home Educators Consociation (OCHEC)",
      url: "https://ochec.com",
      description: "Statewide organization providing support, information, and events for homeschooling families.",
    },
    {
      title: "Oklahoma Department of Education - Home Education",
      url: "https://sde.ok.gov/home-school",
      description: "Official state information about homeschooling requirements.",
    },
    {
      title: "Homeschool Legal Defense Association - Oklahoma",
      url: "https://hslda.org/legal/oklahoma",
      description: "Legal information and support for Oklahoma homeschoolers.",
    },
    {
      title: "Oklahoma Homeschool Convention",
      url: "https://ochec.com/convention",
      description: "Annual convention with workshops, curriculum vendors, and networking opportunities.",
    },
    {
      title: "Oklahoma Virtual Charter Academy",
      url: "https://ovca.k12.com",
      description: "Public online school option for Oklahoma residents.",
    },
  ],
  localGroups: [
    {
      name: "Tulsa Homeschool Coalition",
      location: "Tulsa",
      description: "Support group offering co-op classes, field trips, and social activities.",
      contactInfo: "tulsahomeschoolcoalition@gmail.com",
    },
    {
      name: "Oklahoma City Homeschool Community",
      location: "Oklahoma City",
      description: "Large support group with regular meetups, park days, and educational events.",
      contactInfo: "okhomeschoolcommunity@gmail.com",
    },
    {
      name: "Norman Area Homeschool Association",
      location: "Norman",
      description: "Local support group offering co-op classes and social activities.",
      contactInfo: "normanhomeschool@gmail.com",
    },
    {
      name: "Lawton Area Homeschoolers",
      location: "Lawton",
      description: "Support group for families in the Lawton/Fort Sill area.",
      contactInfo: "lawtonhomeschoolers@gmail.com",
    },
    {
      name: "Edmond Homeschool Group",
      location: "Edmond",
      description: "Local support group with regular activities and educational opportunities.",
      contactInfo: "edmondhomeschool@gmail.com",
    },
  ],
  curriculum: [
    {
      name: "Oklahoma History Curriculum",
      description: "Comprehensive curriculum covering Oklahoma state history, geography, and culture.",
      gradeLevel: "4-8",
      url: "https://www.okhistory.org/education",
    },
    {
      name: "Epic Charter Schools",
      description: "Free blended learning program for Oklahoma residents with curriculum and teacher support.",
      gradeLevel: "K-12",
      url: "https://epiccharterschools.org",
    },
    {
      name: "Oklahoma Supplemental Online Course Program",
      description: "State-approved online courses available to homeschooled students.",
      gradeLevel: "6-12",
      url: "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=468755",
    },
    {
      name: "Oklahoma 4-H Curriculum",
      description: "Project-based learning opportunities through the Oklahoma 4-H program.",
      gradeLevel: "K-12",
      url: "https://4h.okstate.edu",
    },
    {
      name: "Oklahoma Ag in the Classroom",
      description: "Free agriculture-based curriculum materials for Oklahoma students.",
      gradeLevel: "K-12",
      url: "https://www.agclassroom.org/ok",
    },
  ],
  faqs: [
    {
      question: "Is homeschooling legal in Oklahoma?",
      answer:
        "Yes, homeschooling is legal in Oklahoma. The state recognizes home education as a form of private education.",
    },
    {
      question: "Do I need to notify anyone that I'm homeschooling?",
      answer:
        "While not explicitly required by law, it's recommended to submit a letter of intent to your local school district superintendent to establish your homeschool program.",
    },
    {
      question: "Are there any required subjects I must teach?",
      answer:
        "Oklahoma law doesn't specify required subjects for homeschoolers, but it's recommended to cover basic subjects like reading, writing, mathematics, science, and social studies.",
    },
    {
      question: "Do homeschooled students need to take standardized tests in Oklahoma?",
      answer: "No, Oklahoma does not require standardized testing for homeschooled students.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Oklahoma?",
      answer:
        "Yes, Oklahoma law allows homeschooled students to participate in public school extracurricular activities, including sports, subject to local district policies.",
    },
    {
      question: "Can I homeschool my special needs child in Oklahoma?",
      answer:
        "Yes, you can homeschool a child with special needs in Oklahoma. However, if your child was receiving special education services in public school, you may want to consult with a special education advocate about your options.",
    },
    {
      question: "How do homeschooled students get a diploma in Oklahoma?",
      answer:
        "As the home educator, you can issue your child a diploma upon completion of your high school program. Alternatively, students can take the GED/HiSET exam or enroll in a distance learning program that issues accredited diplomas.",
    },
  ],
  gettingStartedSteps: [
    "Research Oklahoma homeschool laws and requirements",
    "Decide which homeschool option works best for your family (independent homeschool or private school)",
    "Submit a letter of intent to your local school district (recommended but not explicitly required)",
    "Choose curriculum materials that align with your child's learning style",
    "Connect with local homeschool groups for support and socialization",
    "Set up a dedicated learning space in your home",
    "Create a schedule that works for your family",
    "Begin keeping simple records of your homeschool activities",
  ],
}
