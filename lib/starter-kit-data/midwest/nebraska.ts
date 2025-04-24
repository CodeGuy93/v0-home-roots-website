import type { StarterKit } from "../../starter-kit-data"

export const nebraskaStarterKit: StarterKit = {
  stateCode: "NE",
  stateName: "Nebraska",
  regionName: "Midwest",
  description:
    "Nebraska refers to homeschooling as 'exempt school' education and has specific requirements for families choosing this educational path.",
  requirements: {
    notification:
      "File a Rule 13 Exempt School Program Notice of Intent with the Nebraska Department of Education by July 15 or 30 days before starting homeschooling.",
    qualifications: "No specific qualifications for parents are required.",
    daysPerYear: 175,
    hoursPerDay: "Minimum of 1,032 hours per year for elementary (K-8) and 1,080 hours for secondary (9-12).",
    subjects: ["Language arts", "Mathematics", "Science", "Social studies", "Health"],
    assessment: "No state-mandated assessments required.",
    recordKeeping: "Basic attendance records and documentation of student progress.",
  },
  resources: [
    {
      title: "Nebraska Christian Home Educators Association",
      url: "https://nchea.org",
      description: "Statewide organization providing support, information, and resources to homeschooling families.",
    },
    {
      title: "Nebraska Department of Education - Exempt Schools",
      url: "https://education.ne.gov/fos/exempt-schools",
      description: "Official state information on homeschooling requirements and regulations.",
    },
    {
      title: "Homeschool Legal Defense Association - Nebraska",
      url: "https://hslda.org/legal/nebraska",
      description: "Legal information and support for homeschooling families in Nebraska.",
    },
    {
      title: "University of Nebraska High School",
      url: "https://highschool.nebraska.edu",
      description: "Accredited distance learning courses for high school students.",
    },
    {
      title: "Nebraska 4-H",
      url: "https://4h.unl.edu",
      description: "Project-based learning opportunities for homeschooled students.",
    },
  ],
  localGroups: [
    {
      name: "Omaha Area Homeschool Network",
      location: "Omaha",
      description: "Support group for homeschooling families in the Omaha metropolitan area.",
      contactInfo: "omahaareahomeschool@example.org",
    },
    {
      name: "Lincoln Homeschool Community",
      location: "Lincoln",
      description: "Co-ops, field trips, and support for homeschoolers in Lincoln.",
      contactInfo: "lincolnhomeschool@example.org",
    },
    {
      name: "Grand Island Homeschool Association",
      location: "Grand Island",
      description: "Support and activities for homeschooling families in central Nebraska.",
      contactInfo: "gihomeschool@example.org",
    },
    {
      name: "Western Nebraska Homeschool Connection",
      location: "Scottsbluff",
      description: "Resources and community for homeschoolers in western Nebraska.",
      contactInfo: "westnehomeschool@example.org",
    },
  ],
  curriculum: [
    {
      name: "Nebraska Studies",
      description: "Resources for teaching Nebraska history and geography.",
      gradeLevel: "4-8",
      url: "https://nebraskastudies.org",
    },
    {
      name: "University of Nebraska High School Courses",
      description: "Accredited online courses for high school students.",
      gradeLevel: "9-12",
      url: "https://highschool.nebraska.edu/courses",
    },
    {
      name: "Nebraska Educational Service Units",
      description: "Educational resources available to homeschoolers through regional service units.",
      gradeLevel: "K-12",
      url: "https://esucc.org",
    },
    {
      name: "Strategic Air Command & Aerospace Museum Programs",
      description: "STEM education programs and resources.",
      gradeLevel: "K-12",
      url: "https://sacmuseum.org/education",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in Nebraska?",
      answer:
        "To begin homeschooling in Nebraska, you need to file a Rule 13 Exempt School Program Notice of Intent with the Nebraska Department of Education by July 15 or 30 days before starting homeschooling. This form establishes your home as an exempt school.",
    },
    {
      question: "How many hours of instruction are required in Nebraska?",
      answer:
        "Nebraska requires 1,032 instructional hours for elementary students (K-8) and 1,080 hours for secondary students (9-12), with instruction taking place across at least 175 days between July 1 and June 30.",
    },
    {
      question: "What subjects am I required to teach?",
      answer: "In Nebraska, you must teach language arts, mathematics, science, social studies, and health.",
    },
    {
      question: "Are standardized tests required for homeschoolers in Nebraska?",
      answer: "No, Nebraska does not require standardized testing for homeschooled students.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Nebraska?",
      answer:
        "Nebraska law allows homeschooled students to participate in public school activities, including sports, under certain conditions. Contact your local school district for specific policies.",
    },
  ],
  gettingStartedSteps: [
    "Research Nebraska homeschool laws and requirements",
    "File a Rule 13 Exempt School Program Notice of Intent with the Nebraska Department of Education",
    "Plan your curriculum to include required subjects",
    "Create a schedule to meet the required instructional hours",
    "Connect with local homeschool groups for support and resources",
    "Set up a recordkeeping system for attendance and student progress",
  ],
}
