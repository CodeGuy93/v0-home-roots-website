import type { StarterKit } from "../../types"

export const vermontStarterKit: StarterKit = {
  stateCode: "VT",
  stateName: "Vermont",
  regionName: "Northeast",
  description:
    "Vermont has moderate homeschool regulations that require annual enrollment and assessment. Parents have flexibility in curriculum choices while meeting basic requirements.",
  requirements: {
    notification:
      "Parents must submit a home study enrollment form to the Vermont Agency of Education annually by August 1 (or within 10 days of withdrawal from school).",
    qualifications: "No specific qualifications required for parents.",
    daysPerYear: "No specific days required",
    hoursPerDay: "No specific hours required",
    subjects: [
      "Basic communication skills, including reading, writing, and use of numbers",
      "Citizenship, history, and government in Vermont and the United States",
      "English, American, and other literature",
      "Science",
      "Mathematics",
      "Fine arts",
      "Health and physical education",
      "Comprehensive health education",
    ],
    assessment:
      "Annual assessment required through one of these options: standardized testing, portfolio review by a licensed teacher, or report by a licensed teacher who has worked with the child.",
    recordKeeping: "Maintain records of instruction and assessment results.",
  },
  resources: [
    {
      title: "Vermont Home Education Network",
      url: "https://www.vhen.org",
      description:
        "Statewide support organization providing information, resources, and community for homeschooling families.",
    },
    {
      title: "Vermont Agency of Education - Home Study",
      url: "https://education.vermont.gov/vermont-schools/school-operations/home-study",
      description: "Official state guidance on homeschooling requirements and procedures.",
    },
    {
      title: "Vermont's Homeschool Community",
      url: "https://vermontshomeschoolcommunity.org",
      description: "Online community and resource hub for Vermont homeschoolers.",
    },
    {
      title: "Catholic Homeschoolers of Vermont",
      url: "https://catholichomeschoolersofvermont.org",
      description: "Support group for Catholic homeschooling families in Vermont.",
    },
    {
      title: "Homeschool Legal Defense Association - Vermont",
      url: "https://hslda.org/legal/vermont",
      description: "Legal information and support for homeschooling in Vermont.",
    },
  ],
  localGroups: [
    {
      name: "Burlington Area Homeschoolers",
      location: "Greater Burlington",
      description: "Active support group offering field trips, co-op classes, and social activities.",
      contactInfo: "burlingtonhomeschoolers@example.com",
    },
    {
      name: "Central Vermont Homeschool Cooperative",
      location: "Montpelier/Central Vermont",
      description: "Cooperative offering classes and activities for homeschooling families.",
      contactInfo: "centralvthomeschool@example.com",
    },
    {
      name: "Southern Vermont Homeschoolers",
      location: "Brattleboro/Bennington area",
      description: "Community of homeschoolers in southern Vermont offering support and activities.",
      contactInfo: "southernvthomeschool@example.com",
    },
    {
      name: "Northeast Kingdom Homeschoolers",
      location: "Northeast Kingdom",
      description: "Support network for homeschooling families in rural northeastern Vermont.",
      contactInfo: "nekhomeschool@example.com",
    },
    {
      name: "Rutland Area Homeschool Association",
      location: "Rutland County",
      description: "Group serving homeschooling families in the Rutland area.",
      contactInfo: "rutlandhomeschool@example.com",
    },
  ],
  curriculum: [
    {
      name: "Vermont History Curriculum",
      description: "Comprehensive curriculum covering Vermont state history, geography, and government.",
      gradeLevel: "4-8",
      url: "https://vermonthistory.org/education",
    },
    {
      name: "ECHO Leahy Center Educational Resources",
      description: "Science and environmental curriculum focusing on Lake Champlain and Vermont ecosystems.",
      gradeLevel: "K-12",
      url: "https://www.echovermont.org/education/",
    },
    {
      name: "Shelburne Farms Educational Programs",
      description: "Farm-based education and sustainability curriculum.",
      gradeLevel: "K-12",
      url: "https://shelburnefarms.org/education",
    },
    {
      name: "Vermont Historical Society Resources",
      description: "Primary sources and lesson plans about Vermont history.",
      gradeLevel: "4-12",
      url: "https://vermonthistory.org/education",
    },
    {
      name: "Green Mountain Audubon Center Education",
      description: "Nature-based curriculum focusing on Vermont's wildlife and ecosystems.",
      gradeLevel: "K-12",
      url: "https://vt.audubon.org/education",
    },
  ],
  faqs: [
    {
      question: "When do I need to submit my homeschool enrollment in Vermont?",
      answer:
        "Enrollment forms must be submitted to the Vermont Agency of Education by August 1 for each school year, or within 10 days of withdrawing a child from school to begin homeschooling.",
    },
    {
      question: "What assessment options are available for homeschoolers in Vermont?",
      answer:
        "Vermont offers three assessment options: standardized testing, portfolio review by a licensed teacher, or a report by a licensed teacher who has worked with the child.",
    },
    {
      question: "Do I need to submit my curriculum to the state in Vermont?",
      answer:
        "Yes, your home study enrollment form must include a description of the content to be covered in each subject area. However, you don't need to submit detailed lesson plans.",
    },
    {
      question: "Can homeschooled students participate in public school activities in Vermont?",
      answer:
        "Yes, Vermont law allows homeschooled students to participate in public school academic, co-curricular, extracurricular, and athletic programs, subject to the same eligibility requirements as public school students.",
    },
    {
      question: "How do homeschooled students in Vermont receive a diploma?",
      answer:
        "Parents issue their own diplomas in Vermont. Homeschooled students can also pursue a GED, take community college courses for dual credit, or seek accreditation through distance learning programs.",
    },
  ],
  gettingStartedSteps: [
    "Research Vermont homeschool laws and requirements",
    "Submit a home study enrollment form to the Vermont Agency of Education",
    "Develop a curriculum plan that covers required subjects",
    "Create a recordkeeping system for tracking progress and preparing for annual assessment",
    "Connect with Vermont homeschool groups for support and socialization",
    "Establish a daily and weekly schedule that works for your family",
    "Explore Vermont's natural resources, museums, and historical sites for field trip opportunities",
  ],
}
