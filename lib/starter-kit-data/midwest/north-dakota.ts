import type { StarterKit } from "../../starter-kit-data"

export const northDakotaStarterKit: StarterKit = {
  stateCode: "ND",
  stateName: "North Dakota",
  regionName: "Midwest",
  description:
    "North Dakota has specific requirements for homeschooling families, including annual notification, parent qualifications, and standardized testing in certain grades.",
  requirements: {
    notification:
      "File a statement of intent with your local school district superintendent annually at least 14 days before starting homeschooling or by August 1.",
    qualifications:
      "Parents must have a high school diploma or GED, or work with a qualified person who monitors the program.",
    daysPerYear: 175,
    hoursPerDay: "No specific hours per day required, but must meet the 175-day requirement.",
    subjects: ["English language arts", "Mathematics", "Science", "Social studies", "Health"],
    assessment: "Standardized testing in grades 4, 6, 8, and 10 (unless parent has a bachelor's degree).",
    recordKeeping: "Annual record of courses taken and academic progress assessments.",
  },
  resources: [
    {
      title: "North Dakota Home School Association",
      url: "https://ndhsa.org",
      description: "Statewide organization providing support, information, and resources to homeschooling families.",
    },
    {
      title: "North Dakota Department of Public Instruction - Home Education",
      url: "https://www.nd.gov/dpi/parentscommunity/parents/home-education",
      description: "Official state information on homeschooling requirements and regulations.",
    },
    {
      title: "Homeschool Legal Defense Association - North Dakota",
      url: "https://hslda.org/legal/north-dakota",
      description: "Legal information and support for homeschooling families in North Dakota.",
    },
    {
      title: "North Dakota Center for Distance Education",
      url: "https://www.ndcde.org",
      description: "Online courses for homeschooled students.",
    },
    {
      title: "North Dakota 4-H",
      url: "https://www.ndsu.edu/4h",
      description: "Project-based learning opportunities for homeschooled students.",
    },
  ],
  localGroups: [
    {
      name: "Fargo-Moorhead Area Homeschoolers",
      location: "Fargo",
      description: "Support group for homeschooling families in the Fargo-Moorhead area.",
      contactInfo: "fmhomeschool@example.org",
    },
    {
      name: "Bismarck Homeschool Association",
      location: "Bismarck",
      description: "Co-ops, field trips, and support for homeschoolers in the Bismarck area.",
      contactInfo: "bismarckhomeschool@example.org",
    },
    {
      name: "Grand Forks Home Educators",
      location: "Grand Forks",
      description: "Support and activities for homeschooling families in Grand Forks.",
      contactInfo: "gfhomeeducators@example.org",
    },
    {
      name: "Western North Dakota Homeschoolers",
      location: "Minot",
      description: "Resources and community for homeschoolers in western North Dakota.",
      contactInfo: "westhomeschool@example.org",
    },
  ],
  curriculum: [
    {
      name: "North Dakota Studies",
      description: "Resources for teaching North Dakota history and geography.",
      gradeLevel: "4-8",
      url: "https://ndstudies.gov",
    },
    {
      name: "North Dakota Center for Distance Education Courses",
      description: "Online courses for elementary through high school students.",
      gradeLevel: "K-12",
      url: "https://www.ndcde.org/courses",
    },
    {
      name: "Theodore Roosevelt National Park Educational Resources",
      description: "Materials for teaching natural history and conservation.",
      gradeLevel: "K-12",
      url: "https://www.nps.gov/thro/learn/education",
    },
    {
      name: "North Dakota Heritage Center & State Museum Programs",
      description: "Educational programs and resources about state history.",
      gradeLevel: "K-12",
      url: "https://statemuseum.nd.gov/education",
    },
  ],
  faqs: [
    {
      question: "How do I start homeschooling in North Dakota?",
      answer:
        "To begin homeschooling in North Dakota, you need to file a statement of intent with your local school district superintendent at least 14 days before starting homeschooling or by August 1 annually.",
    },
    {
      question: "What qualifications do I need to homeschool in North Dakota?",
      answer:
        "Parents must have at least a high school diploma or GED. If you don't have these qualifications, you can still homeschool but must be monitored by a certified teacher for the first two years.",
    },
    {
      question: "What subjects am I required to teach?",
      answer:
        "In North Dakota, you must teach English language arts, mathematics, science, social studies, and health.",
    },
    {
      question: "Are standardized tests required for homeschoolers in North Dakota?",
      answer:
        "Yes, standardized testing is required in grades 4, 6, 8, and 10, unless the parent has a bachelor's degree (then testing is optional).",
    },
    {
      question: "Can homeschooled students participate in public school activities in North Dakota?",
      answer:
        "Yes, North Dakota law allows homeschooled students to participate in public school activities, including sports, on an equal basis with public school students.",
    },
  ],
  gettingStartedSteps: [
    "Research North Dakota homeschool laws and requirements",
    "File a statement of intent with your local school district superintendent",
    "Plan your curriculum to include required subjects",
    "Create a schedule to meet the 175-day requirement",
    "Connect with local homeschool groups for support and resources",
    "Set up a recordkeeping system for courses and academic progress",
    "Plan for standardized testing in grades 4, 6, 8, and 10 if required",
  ],
}
