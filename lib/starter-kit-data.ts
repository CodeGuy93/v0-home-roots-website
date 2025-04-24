import { alabamaStarterKit } from "./starter-kit-data/southeast/alabama"
import { arkansasStarterKit } from "./starter-kit-data/southeast/arkansas"
import { delawareStarterKit } from "./starter-kit-data/southeast/delaware"
import { districtOfColumbiaStarterKit } from "./starter-kit-data/southeast/district-of-columbia"
import { kentuckyStarterKit } from "./starter-kit-data/southeast/kentucky"
import { louisianaStarterKit } from "./starter-kit-data/southeast/louisiana"
import { marylandStarterKit } from "./starter-kit-data/southeast/maryland"
import { mississippiStarterKit } from "./starter-kit-data/southeast/mississippi"
import { missouriStarterKit } from "./starter-kit-data/southeast/missouri"
import { northCarolinaStarterKit } from "./starter-kit-data/southeast/north-carolina"
import { southCarolinaStarterKit } from "./starter-kit-data/southeast/south-carolina"
import { tennesseeStarterKit } from "./starter-kit-data/southeast/tennessee"
import { virginiaStarterKit } from "./starter-kit-data/southeast/virginia"
import { westVirginiaStarterKit } from "./starter-kit-data/southeast/west-virginia"
import { oklahomaStarterKit } from "./starter-kit-data/southwest/oklahoma"
import { indianaStarterKit } from "./starter-kit-data/midwest/indiana"
import { iowaStarterKit } from "./starter-kit-data/midwest/iowa"
import { kansasStarterKit } from "./starter-kit-data/midwest/kansas"
import { minnesotaStarterKit } from "./starter-kit-data/midwest/minnesota"
import { nebraskaStarterKit } from "./starter-kit-data/midwest/nebraska"
import { northDakotaStarterKit } from "./starter-kit-data/midwest/north-dakota"
import { southDakotaStarterKit } from "./starter-kit-data/midwest/south-dakota"
import { connecticutStarterKit } from "./starter-kit-data/northeast/connecticut"
import { maineStarterKit } from "./starter-kit-data/northeast/maine"
import { massachusettsStarterKit } from "./starter-kit-data/northeast/massachusetts"
import { newHampshireStarterKit } from "./starter-kit-data/northeast/new-hampshire"
import { newJerseyStarterKit } from "./starter-kit-data/northeast/new-jersey"
import { rhodeIslandStarterKit } from "./starter-kit-data/northeast/rhode-island"
import { vermontStarterKit } from "./starter-kit-data/northeast/vermont"

export type StarterKit = {
  stateCode: string
  stateName: string
  regionName: string
  description: string
  requirements: {
    notification: string
    qualifications: string
    daysPerYear: number | string
    hoursPerDay: number | string
    subjects: string[]
    assessment: string
    recordKeeping: string
  }
  resources: Array<{ title: string; url: string; description: string }>
  localGroups: Array<{ name: string; location: string; description: string; contactInfo: string }>
  curriculum: Array<{ name: string; description: string; gradeLevel: string; url: string }>
  faqs: Array<{ question: string; answer: string }>
  gettingStartedSteps: string[]
}

export interface StarterKitContent {
  introduction: string
  gettingStartedSteps: string[]
  recordKeepingTips: string[]
  withdrawalLetterTemplate?: string
  stateSpecificResources: string[]
  recommendedCurriculum: string[]
}

// Default content that applies to any state
export const defaultStarterKitContent: StarterKitContent = {
  introduction:
    "Welcome to your homeschooling journey! This starter kit provides essential resources and guidance to help you begin homeschooling with confidence.",
  gettingStartedSteps: [
    "Research your state's homeschool laws and requirements",
    "Notify your school district if required by your state",
    "Choose curriculum materials that align with your child's learning style",
    "Create a simple daily and weekly schedule",
    "Set up a dedicated learning space in your home",
    "Connect with local homeschool groups for support and socialization",
  ],
  recordKeepingTips: [
    "Create a simple attendance log to track school days",
    "Take photos of projects and activities for portfolio documentation",
    "Keep samples of your child's work throughout the year",
    "Maintain a reading log of books completed",
    "Document field trips and educational outings",
  ],
  stateSpecificResources: [
    "HomeRoots.com - State-specific information and community support",
    "Your state's Department of Education website",
    "Local library card - Access to books, audiobooks, and educational programs",
    "Local homeschool co-ops and support groups",
    "Educational YouTube channels and podcasts",
  ],
  recommendedCurriculum: [
    "Khan Academy (khanacademy.org) - Free online courses in math, science, and more",
    "Easy Peasy All-in-One Homeschool - Free complete curriculum",
    "Ambleside Online - Free Charlotte Mason curriculum",
    "CK-12 - Free digital textbooks and resources",
    "Core Knowledge - Free curriculum sequence and resources",
  ],
}

// State-specific content
export const stateStarterKitContent: Record<string, Partial<StarterKitContent>> = {
  TX: {
    introduction:
      "Welcome to your Texas homeschooling journey! Texas is known for its homeschool-friendly laws, giving families significant freedom in how they educate their children. This starter kit provides essential resources and guidance specific to homeschooling in Texas.",
    gettingStartedSteps: [
      "Understand Texas homeschool laws - In Texas, homeschools operate as private schools with minimal regulation",
      "If withdrawing from public school, submit a withdrawal letter to your school",
      "Choose curriculum that covers reading, spelling, grammar, mathematics, and good citizenship",
      "Create a learning plan that works for your family - Texas does not specify required hours or days",
      "Connect with Texas homeschool groups for support and socialization",
      "Consider joining THSC (Texas Homeschool Coalition) for ongoing support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, TX Zip]
[Date]

[School Name]
[School Address]
[City, TX Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Texas law, which recognizes homeschools as private schools.

Please confirm receipt of this withdrawal notice and release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    stateSpecificResources: [
      "Texas Homeschool Coalition (thsc.org) - Advocacy, support, and resources",
      "Texas Education Agency - Homeschooling information",
      "Texas Home Educators - Local support groups and events",
      "HEART of Texas - Homeschool enrichment and support",
      "Texas homeschool conventions - Annual events for curriculum and community",
    ],
  },
  CA: {
    introduction:
      "Welcome to your California homeschooling journey! California offers several legal options for homeschooling families. This starter kit provides essential resources and guidance specific to homeschooling in California.",
    gettingStartedSteps: [
      "Choose your legal option: file a private school affidavit, enroll in a charter school, join a private school satellite program (PSP), or hire a credentialed tutor",
      "If filing a private school affidavit, submit it between October 1-15 annually",
      "Prepare to teach required subjects: English, math, social sciences, science, visual/performing arts, health, and physical education",
      "Set up a recordkeeping system for attendance and courses of study",
      "Plan for 175 days of instruction per year",
      "Connect with California homeschool groups for support",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, CA Zip]
[Date]

[School Name]
[School Address]
[City, CA Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with California law under the following option: [Private School Affidavit/Charter School/Private School Satellite Program].

Please confirm receipt of this withdrawal notice and release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    stateSpecificResources: [
      "California Homeschool Network (californiahomeschool.net)",
      "Homeschool Association of California (hsc.org)",
      "Christian Home Educators Association of California (cheaofca.org)",
      "California Department of Education - Private School Affidavit filing",
      "Family Protection Ministries - Homeschool freedom advocacy",
    ],
    recordKeepingTips: [
      "Maintain attendance records showing 175 days of instruction",
      "Keep a course of study for each student",
      "Document teacher qualifications (capability of teaching)",
      "Maintain immunization records or exemptions",
      "Keep samples of student work for portfolio review",
    ],
  },
  NY: {
    introduction:
      "Welcome to your New York homeschooling journey! New York has more comprehensive homeschool regulations than many states, but with proper planning, homeschooling can be a rewarding experience. This starter kit provides essential resources and guidance specific to homeschooling in New York.",
    gettingStartedSteps: [
      "Submit a letter of intent to homeschool to your school district superintendent by July 1 or within 14 days of starting homeschooling mid-year",
      "Prepare and submit an Individualized Home Instruction Plan (IHIP) by August 15 or within 4 weeks of receiving IHIP forms",
      "Plan to teach required subjects for your child's grade level",
      "Prepare for quarterly reports throughout the school year",
      "Arrange for annual assessment (standardized test or portfolio review)",
      "Connect with New York homeschool groups for support and guidance",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, NY Zip]
[Date]

[School District Superintendent]
[School District]
[District Address]
[City, NY Zip]

Re: Notice of Intent to Homeschool [Child's Name]

Dear Superintendent [Name]:

This letter serves as my notice of intent to provide home instruction for my child, [Child's Name], born [Birth Date], for the [20XX-20XX] school year in accordance with New York State Regulations (Section 100.10).

[Child's Name] [is currently enrolled in/would otherwise attend] [School Name] in grade [Grade].

Please send all required forms and information regarding homeschooling in this district to the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    stateSpecificResources: [
      "New York State Education Department - Homeschooling regulations",
      "New York State Homeschool Network (nyshomeschool.org)",
      "Loving Education At Home (LEAH) - Support groups throughout NY",
      "New York City Homeschooling Legal Defense Association",
      "New York homeschool conventions and curriculum fairs",
    ],
    recordKeepingTips: [
      "Keep copies of all correspondence with your school district",
      "Maintain detailed attendance records (180 days required)",
      "Save all quarterly reports submitted to your district",
      "Document hours of instruction (900 hours for grades 1-6, 990 hours for grades 7-12)",
      "Organize portfolio materials by subject area",
      "Keep standardized test results or narrative evaluations",
    ],
  },
  FL: {
    introduction:
      "Welcome to your Florida homeschooling journey! Florida offers a supportive environment for homeschooling families with clear guidelines and multiple options. This starter kit provides essential resources and guidance specific to homeschooling in Florida.",
    gettingStartedSteps: [
      "Choose your legal option: home education program, private school, certified teacher, or umbrella school",
      "Submit a notice of intent to establish a home education program to your county school district superintendent",
      "Maintain a portfolio of educational records and materials",
      "Provide for an annual educational evaluation using one of the approved methods",
      "Submit the evaluation results to the school district superintendent annually",
      "Connect with Florida homeschool groups and co-ops for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, FL Zip]
[Date]

[School District Superintendent]
[School District]
[District Address]
[City, FL Zip]

Re: Notice of Intent to Establish a Home Education Program

Dear Superintendent [Name]:

In compliance with Florida Statute 1002.41, this letter serves as notice of my intent to establish a home education program for my child(ren):

[Child's Full Name], DOB: [Birth Date]
[Additional Child's Name if applicable], DOB: [Birth Date]

The home education program will begin on [Start Date].

Please provide any necessary forms or information regarding home education in this district to the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Maintain a portfolio of records and materials for each student",
      "Include a log of educational activities",
      "Keep samples of any writings, worksheets, workbooks, or creative materials",
      "Take photographs of projects, experiments, and educational activities",
      "Save attendance records (though not required by law)",
      "Organize materials chronologically to show progression",
    ],
    stateSpecificResources: [
      "Florida Parent-Educators Association (FPEA) - fpea.com",
      "Florida Department of Education - Home Education - fldoe.org/schools/school-choice/other-school-choice-options/home-edu",
      "Florida Homeschool Evaluators and Teachers (HEAT) - flhomeschooleval.com",
      "Florida Virtual School (FLVS) - Free online courses for Florida residents",
      "Florida Homeschool Convention - Annual event with workshops and curriculum vendors",
    ],
    recommendedCurriculum: [
      "Florida Virtual School (FLVS) - Free online courses for Florida residents",
      "Time4Learning - Popular online curriculum with Florida-specific information",
      "Classical Conversations - Communities throughout Florida",
      "Florida History resources from Florida Historical Society",
      "Khan Academy - Free online courses in math, science, and more",
    ],
  },
  PA: {
    introduction:
      "Welcome to your Pennsylvania homeschooling journey! Pennsylvania has more comprehensive homeschool regulations than many states, but with proper planning and organization, homeschooling can be a rewarding experience. This starter kit provides essential resources and guidance specific to homeschooling in Pennsylvania.",
    gettingStartedSteps: [
      "Choose your legal option: homeschool program, private tutor, or enrollment in a satellite program of a religious school",
      "File an affidavit with your school district superintendent by August 1 or before starting homeschooling",
      "Develop educational objectives by subject area",
      "Plan for 180 days or 900/990 hours of instruction (elementary/secondary)",
      "Maintain a portfolio of records and materials",
      "Arrange for annual evaluation by a qualified evaluator",
      "Submit the portfolio and evaluator's certification to the superintendent by June 30",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, PA Zip]
[Date]

[School District Superintendent]
[School District]
[District Address]
[City, PA Zip]

Re: Homeschool Affidavit for [School Year]

Dear Superintendent [Name]:

In compliance with Pennsylvania School Code 13-1327.1, I am submitting this affidavit to inform you of my intent to homeschool my child(ren):

[Child's Full Name], DOB: [Birth Date], Grade: [Grade]
[Additional Child's Name if applicable], DOB: [Birth Date], Grade: [Grade]

I certify that:
1. The supervisor of the home education program is [Your Name].
2. The supervisor has a [high school diploma or equivalent].
3. The home education program will be conducted at [Your Address].
4. The required subjects will be taught in English.
5. The student(s) has/have been immunized and have received the health and medical services required by law.
6. No adult living in the home has been convicted of criminal offenses as enumerated in the law.

Attached are the educational objectives by subject area for each child.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Create a portfolio with samples of work in each required subject",
      "Maintain a daily log of reading materials used",
      "Keep attendance records showing 180 days of instruction",
      "Document hours of instruction (900 hours for elementary, 990 hours for secondary)",
      "Include results of nationally normed standardized tests in grades 3, 5, and 8",
      "Save all correspondence with your school district",
      "Organize materials by subject area for easier evaluation",
    ],
    stateSpecificResources: [
      "Pennsylvania Homeschoolers Accreditation Agency (PHAA) - phaa.org",
      "Christian Homeschool Association of Pennsylvania (CHAP) - chaponline.com",
      "Pennsylvania Department of Education - Home Education - education.pa.gov",
      "Ask Pauline - Comprehensive PA homeschool information - askpauline.com/homeschool",
      "Pennsylvania Homeschool Law (Act 169) - Full text and explanations",
    ],
    recommendedCurriculum: [
      "PA Homeschoolers Diploma Program - For high school students",
      "Pennsylvania history resources from the PA Historical Society",
      "Mason Dixon Homeschoolers Association - Support and resources",
      "Susquehanna Homeschool Association - Co-ops and activities",
      "Pennsylvania Virtual Charter School - Option for enrolled students",
    ],
  },
  AK: {
    introduction:
      "Welcome to your Alaska homeschooling journey! Alaska offers some of the most homeschool-friendly laws in the country, giving families significant freedom in how they educate their children. This starter kit provides essential resources and guidance specific to homeschooling in Alaska.",
    gettingStartedSteps: [
      "Understand Alaska homeschool laws - Alaska has minimal regulations for homeschooling families",
      "Choose your legal option: homeschool independently, enroll in a correspondence program, or operate as a religious or private school",
      "If withdrawing from public school, notify the school of your decision",
      "Select curriculum and materials that meet your child's needs",
      "Consider joining Alaska homeschool groups for support and resources",
      "Take advantage of Alaska's unique outdoor learning opportunities",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, AK Zip]
[Date]

[School Name]
[School Address]
[City, AK Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Alaska state law.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "While Alaska doesn't require specific recordkeeping, consider maintaining:",
      "A simple portfolio of your child's work",
      "Photos of projects, field trips, and activities",
      "Reading lists and completed books",
      "Notes on progress and achievements",
      "Records of any standardized tests taken (optional)",
    ],
    stateSpecificResources: [
      "Alaska Private and Home Education Association (APHEA) - aphea.org",
      "Alaska Department of Education - Home Schooling - education.alaska.gov",
      "Alaska Homeschool Network - Facebook group for support",
      "Interior Alaska Homeschool Association - For families in Fairbanks area",
      "Alaska State Correspondence Programs - Public school options for homeschoolers",
    ],
    recommendedCurriculum: [
      "IDEA (Interior Distance Education of Alaska) - Free resources for enrolled families",
      "AKTEACH - Kodiak Island Borough School District's homeschool program",
      "Raven Homeschool - Statewide correspondence program",
      "Alaska history and native culture resources",
      "Outdoor education resources specific to Alaska's environment",
    ],
  },
  IL: {
    introduction:
      "Welcome to your Illinois homeschooling journey! Illinois treats homeschools as private schools with minimal regulation, giving families significant freedom in how they educate their children. This starter kit provides essential resources and guidance specific to homeschooling in Illinois.",
    gettingStartedSteps: [
      "Understand Illinois homeschool laws - Homeschools operate as private schools with minimal oversight",
      "No registration or notification is required in Illinois",
      "Plan to teach the required subjects: language arts, mathematics, biological and physical sciences, social sciences, fine arts, and physical development/health",
      "Instruction must be in English",
      "Create a schedule that works for your family - Illinois doesn't specify required hours or days",
      "Connect with Illinois homeschool groups for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, IL Zip]
[Date]

[School Name]
[School Address]
[City, IL Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Illinois law, which recognizes homeschools as private schools.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "While Illinois doesn't require specific recordkeeping, consider maintaining:",
      "A simple log of educational activities",
      "Samples of your child's work in each subject",
      "Reading lists and completed books",
      "Photos of projects, field trips, and activities",
      "Basic attendance records",
      "High school transcripts if your child may return to public school or attend college",
    ],
    stateSpecificResources: [
      "Illinois H.O.U.S.E. (Home Oriented Unique Schooling Experience) - illinoishouse.org",
      "Illinois Christian Home Educators (ICHE) - iche.org",
      "Illinois State Board of Education - Homeschooling information - isbe.net",
      "Homeschool Association of Illinois - Support and resources",
      "Illinois Homeschool Convention - Annual event with workshops and curriculum vendors",
    ],
    recommendedCurriculum: [
      "Illinois history resources from Illinois State Historical Society",
      "Chicago area museums with homeschool programs",
      "Illinois Homeschool Curriculum Fair - Annual event",
      "HEART of Illinois Homeschool Association - Co-ops and activities",
      "Illinois Virtual School - Supplemental online courses",
    ],
  },
  GA: {
    introduction:
      "Welcome to your Georgia homeschooling journey! Georgia has clear guidelines for homeschooling families that are straightforward to follow. This starter kit provides essential resources and guidance specific to homeschooling in Georgia.",
    gettingStartedSteps: [
      "Submit a declaration of intent to homeschool to the Georgia Department of Education annually",
      "Plan to provide 180 days of instruction, at least 4.5 hours per day",
      "Prepare to teach required subjects: reading, language arts, mathematics, social studies, and science",
      "Maintain attendance records",
      "Arrange for standardized testing every three years, beginning at the end of third grade",
      "Write annual progress reports and retain for three years",
      "Connect with Georgia homeschool groups for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, GA Zip]
[Date]

[School Name]
[School Address]
[City, GA Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Georgia law (O.C.G.A. § 20-2-690).

I have submitted the required Declaration of Intent to the Georgia Department of Education.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Maintain attendance records showing 180 days of instruction",
      "Keep a copy of your annual declaration of intent",
      "Write annual progress reports for each student",
      "Save standardized test results (required every three years)",
      "Document curriculum used for each required subject",
      "Organize materials by school year for easy reference",
      "Create a high school transcript if your student is in high school",
    ],
    stateSpecificResources: [
      "Georgia Home Education Association (GHEA) - ghea.org",
      "Georgia Department of Education - Home Schools - gadoe.org",
      "Georgia Homeschool Association - Support and resources",
      "Southeastern Homeschool Expo - Annual convention in Atlanta",
      "Georgia 4-H - Programs open to homeschoolers",
    ],
    recommendedCurriculum: [
      "Georgia history resources from the Georgia Historical Society",
      "Georgia Virtual School - Online courses for a fee",
      "Georgia Science Teachers Association - Resources for science education",
      "Georgia Council for the Social Studies - Social studies resources",
      "Georgia Cyber Academy - Public online school option",
    ],
  },
  // Adding Ohio starter kit content
  OH: {
    introduction:
      "Welcome to your Ohio homeschooling journey! Ohio provides a structured but manageable framework for homeschooling families. This starter kit provides essential resources and guidance specific to homeschooling in Ohio, helping you navigate the notification and assessment requirements while creating a rich educational experience for your children.",
    gettingStartedSteps: [
      "Submit a notification of intent to homeschool to your local school district superintendent annually",
      "Ensure you have at least a high school diploma or equivalent (or work with a person who does)",
      "Plan to provide 900 hours of instruction per year",
      "Prepare to teach required subjects: language arts, geography, history, government, civics, math, science, health, physical education, fine arts, and first aid",
      "Choose an assessment method for the end of the year (standardized test, portfolio review, or written narrative)",
      "Connect with Ohio homeschool groups for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, OH Zip]
[Date]

[School District Superintendent]
[School District]
[District Address]
[City, OH Zip]

Re: Notification of Intent to Homeschool

Dear Superintendent [Name]:

In accordance with Ohio Administrative Code 3301-34, I am notifying you of my intent to homeschool my child(ren) for the [20XX-20XX] school year:

[Child's Full Name], DOB: [Birth Date], Grade: [Grade]
[Additional Child's Name if applicable], DOB: [Birth Date], Grade: [Grade]

I certify that:
1. I have a [high school diploma/bachelor's degree/equivalent].
2. I will provide 900 hours of instruction including the required subjects.
3. I will use the following curriculum and instructional materials: [Brief description]
4. I will choose one of the following assessment options at the end of the school year:
   - Standardized testing
   - Written portfolio review by a licensed teacher
   - Written narrative by a qualified person

Please acknowledge receipt of this notification. I understand that you may request additional information if this notification is not in compliance with state requirements.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Track hours of instruction to meet the 900-hour requirement",
      "Keep a copy of your annual notification of intent",
      "Maintain samples of work in each required subject",
      "Document field trips, extracurricular activities, and educational outings",
      "Save all standardized test results or assessment reports",
      "Create a simple system to track progress in each subject",
      "For high school students, maintain detailed records for transcript purposes",
    ],
    stateSpecificResources: [
      "Ohio Homeschooling Parents (ohiohomeschoolingparents.com) - Comprehensive information and support",
      "Christian Home Educators of Ohio (cheohome.org) - Support network and annual convention",
      "Ohio Department of Education - Home Education (education.ohio.gov) - Official regulations and forms",
      "Ohio Homeschool Network - Facebook groups and local support",
      "Ohio Virtual Academy - Public online school option for Ohio residents",
    ],
    recommendedCurriculum: [
      "Ohio History Central - Resources for teaching Ohio history",
      "Great Lakes Science Center - Educational programs for homeschoolers",
      "Ohio Achievement Assessments practice materials - For test preparation",
      "Buckeye Homeschool Network - Curriculum sharing and co-ops",
      "Ohio 4-H - Project-based learning opportunities",
    ],
  },
  // Adding Michigan starter kit content
  MI: {
    introduction:
      "Welcome to your Michigan homeschooling journey! Michigan offers some of the most homeschool-friendly laws in the country, with no reporting requirements and significant freedom in educational choices. This starter kit provides essential resources and guidance specific to homeschooling in Michigan, helping you create an effective and personalized education for your children.",
    gettingStartedSteps: [
      "Understand Michigan homeschool laws - Michigan has two options: homeschooling with no reporting requirements or operating as a nonpublic school",
      "If withdrawing from public school, notify the school of your decision (though not legally required)",
      "If choosing the homeschool option, plan to teach reading, spelling, mathematics, science, history, civics, literature, writing, and English grammar",
      "If operating as a nonpublic school, maintain attendance records and teach subjects comparable to public schools",
      "Create a learning plan that works for your family - Michigan doesn't specify required hours or days for homeschoolers",
      "Connect with Michigan homeschool groups for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, MI Zip]
[Date]

[School Name]
[School Address]
[City, MI Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Michigan state law.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "While Michigan doesn't require specific recordkeeping for homeschoolers, consider maintaining:",
      "A simple portfolio of your child's work in each subject",
      "Reading lists and completed books",
      "Photos of projects, field trips, and educational activities",
      "Notes on progress and achievements",
      "If operating as a nonpublic school, maintain attendance records",
      "For high school students, create transcripts for college applications",
    ],
    stateSpecificResources: [
      "Michigan Christian Homeschool Network (MICHN) - michomeschool.org",
      "Michigan Homeschool Freedom - Information on Michigan homeschool laws",
      "Michigan Department of Education - Nonpublic and Home Schools - michigan.gov/mde",
      "Great Lakes Homeschool Conferences - Annual events with workshops and vendors",
      "Michigan's Homeschool Hub - Facebook groups and local support networks",
    ],
    recommendedCurriculum: [
      "Michigan history resources from Historical Society of Michigan",
      "Michigan Virtual - Online courses for Michigan students",
      "Michigan Association of Public School Academies - Partnership school options",
      "Michigan Science Center - Homeschool programs and resources",
      "Michigan 4-H - Project-based learning opportunities",
    ],
  },
  // Adding Wisconsin starter kit content
  WI: {
    introduction:
      "Welcome to your Wisconsin homeschooling journey! Wisconsin offers a straightforward approach to homeschooling with minimal regulations, giving families significant freedom in educational choices. This starter kit provides essential resources and guidance specific to homeschooling in Wisconsin, helping you create an effective and personalized education for your children.",
    gettingStartedSteps: [
      "File a statement of enrollment (Form PI-1206) with the Department of Public Instruction annually by October 15",
      "Plan to provide 875 hours of instruction per year",
      "Prepare to teach a sequentially progressive curriculum of fundamental instruction in reading, language arts, mathematics, social studies, science, and health",
      "Create a schedule that works for your family",
      "Connect with Wisconsin homeschool groups for support and resources",
      "Consider joining Wisconsin Parents Association for ongoing support and advocacy",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, WI Zip]
[Date]

[School Name]
[School Address]
[City, WI Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Wisconsin law as a home-based private educational program.

I have filed the required Form PI-1206 with the Wisconsin Department of Public Instruction.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Keep a copy of your annual PI-1206 form submission",
      "Track hours of instruction to meet the 875-hour requirement",
      "While Wisconsin doesn't require specific recordkeeping beyond enrollment, consider maintaining:",
      "A simple portfolio of your child's work in each subject",
      "Reading lists and completed books",
      "Photos of projects, field trips, and educational activities",
      "Notes on progress and achievements",
      "For high school students, create transcripts for college applications",
    ],
    stateSpecificResources: [
      "Wisconsin Parents Association (wisconsinparentsassociation.org) - Advocacy and support",
      "Wisconsin Department of Public Instruction - Home-Based Private Educational Program - dpi.wi.gov",
      "Wisconsin Homeschool Support - Facebook groups and local networks",
      "Wisconsin Homeschool Convention - Annual event with workshops and vendors",
      "Wisconsin Virtual School - Supplemental online courses",
    ],
    recommendedCurriculum: [
      "Wisconsin history resources from the Wisconsin Historical Society",
      "Wisconsin Forest School - Nature-based education resources",
      "Wisconsin Homeschool Athletics Association - Sports programs for homeschoolers",
      "Wisconsin Science Festival - Annual educational events across the state",
      "Wisconsin 4-H - Project-based learning opportunities",
    ],
  },
  // Adding Nebraska starter kit content
  NE: {
    introduction:
      "Welcome to your Nebraska homeschooling journey! Nebraska refers to homeschooling as 'exempt school' education and has specific requirements for families choosing this educational path. This starter kit provides essential resources and guidance specific to homeschooling in Nebraska, helping you navigate the requirements while creating an effective and personalized education for your children.",
    gettingStartedSteps: [
      "File a Rule 13 Exempt School Program Notice of Intent with the Nebraska Department of Education by July 15 or 30 days before starting homeschooling",
      "Ensure you meet the calendar requirements: either 1,032 instructional hours for elementary students (K-8) or 1,080 hours for secondary students (9-12) across a minimum of 175 days",
      "Prepare to teach language arts, mathematics, science, social studies, and health",
      "Maintain basic records of student work and progress",
      "Connect with Nebraska homeschool groups for support and resources",
      "Consider joining Nebraska Christian Home Educators Association for ongoing support and advocacy",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, NE Zip]
[Date]

[School Name]
[School Address]
[City, NE Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Nebraska law as an exempt school under Rule 13.

I have filed the required Rule 13 Exempt School Program Notice of Intent with the Nebraska Department of Education.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Keep a copy of your Rule 13 filing and all correspondence with the Department of Education",
      "Track instructional hours to meet the requirements (1,032 hours for K-8, 1,080 hours for 9-12)",
      "Maintain a simple attendance log showing at least 175 days of instruction",
      "Keep samples of your child's work in each required subject",
      "Document curriculum used for each subject",
      "For high school students, create detailed transcripts for college applications",
      "Consider keeping a portfolio of work samples, especially for high school students",
    ],
    stateSpecificResources: [
      "Nebraska Christian Home Educators Association (NCHEA) - nchea.org",
      "Nebraska Department of Education - Exempt Schools - education.ne.gov/fos/exempt-schools",
      "Nebraska Homeschool - Facebook groups and local support networks",
      "Homeschool Legal Defense Association - Nebraska laws and resources",
      "Nebraska Homeschool Convention - Annual event with workshops and curriculum vendors",
    ],
    recommendedCurriculum: [
      "Nebraska history resources from Nebraska State Historical Society",
      "Nebraska Educational Service Units - Resources for homeschoolers",
      "Strategic Air Command & Aerospace Museum - Educational programs",
      "Nebraska 4-H - Project-based learning opportunities",
      "University of Nebraska High School - Accredited distance learning courses",
    ],
  },
  // Adding North Dakota starter kit content
  ND: {
    introduction:
      "Welcome to your North Dakota homeschooling journey! North Dakota has specific requirements for homeschooling families, but with proper planning, homeschooling can be a rewarding experience. This starter kit provides essential resources and guidance specific to homeschooling in North Dakota, helping you navigate the requirements while creating an effective and personalized education for your children.",
    gettingStartedSteps: [
      "File a statement of intent with your local school district superintendent annually at least 14 days before starting homeschooling or by August 1",
      "Ensure you meet the qualifications: high school diploma or GED, or work with a qualified person who monitors your program",
      "Plan to provide instruction for at least 175 days per year",
      "Prepare to teach required subjects: English language arts, math, science, social studies, and health",
      "Arrange for standardized testing in grades 4, 6, 8, and 10 (unless you have a bachelor's degree)",
      "Connect with North Dakota homeschool groups for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, ND Zip]
[Date]

[School District Superintendent]
[School District]
[District Address]
[City, ND Zip]

Re: Statement of Intent to Homeschool

Dear Superintendent [Name]:

In accordance with North Dakota Century Code 15.1-23, I am notifying you of my intent to homeschool my child(ren) for the [20XX-20XX] school year:

[Child's Full Name], DOB: [Birth Date], Grade: [Grade]
[Additional Child's Name if applicable], DOB: [Birth Date], Grade: [Grade]

I certify that:
1. I have a [high school diploma/GED/bachelor's degree].
2. I will provide instruction for at least 175 days per year.
3. I will teach the required subjects: English language arts, math, science, social studies, and health.
4. I will maintain an annual record of courses and academic progress assessments.
5. I will have my child(ren) take standardized tests as required by law.

Please acknowledge receipt of this statement. I understand that you may request additional information if this notification is not in compliance with state requirements.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Keep a copy of your annual statement of intent",
      "Maintain attendance records showing at least 175 days of instruction",
      "Document curriculum used for each required subject",
      "Keep samples of your child's work in each subject",
      "Save all standardized test results (required in grades 4, 6, 8, and 10 unless parent has a bachelor's degree)",
      "Create an annual record of courses taken and academic progress assessments",
      "For high school students, maintain detailed records for transcript purposes",
    ],
    stateSpecificResources: [
      "North Dakota Home School Association (NDHSA) - ndhsa.org",
      "North Dakota Department of Public Instruction - Home Education - nd.gov/dpi",
      "North Dakota Support System for Homeschoolers - Facebook groups and local support",
      "Homeschool Legal Defense Association - North Dakota laws and resources",
      "North Dakota Homeschool Convention - Annual event with workshops and curriculum vendors",
    ],
    recommendedCurriculum: [
      "North Dakota Studies - Resources for teaching state history",
      "North Dakota Heritage Center & State Museum - Educational programs",
      "Theodore Roosevelt National Park - Educational resources",
      "North Dakota 4-H - Project-based learning opportunities",
      "North Dakota Center for Distance Education - Online courses for homeschoolers",
    ],
  },
  // Adding South Dakota starter kit content
  SD: {
    introduction:
      "Welcome to your South Dakota homeschooling journey! South Dakota refers to homeschooling as 'alternative instruction' and has relatively straightforward requirements for families. This starter kit provides essential resources and guidance specific to homeschooling in South Dakota, helping you navigate the requirements while creating an effective and personalized education for your children.",
    gettingStartedSteps: [
      "File an annual application for public school exemption (homeschool notification) with your local school district by the first day of school or when starting homeschooling",
      "Plan to provide instruction for at least 175 days per year",
      "Prepare to teach required subjects: language arts, mathematics, social studies, science, fine arts, health, and physical education",
      "Maintain records of your child's academic progress",
      "Arrange for standardized testing in grades 4, 8, and 11 (though you can opt out by submitting a notarized request)",
      "Connect with South Dakota homeschool groups for support and resources",
    ],
    withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, SD Zip]
[Date]

[School District Superintendent]
[School District]
[District Address]
[City, SD Zip]

Re: Application for Public School Exemption (Homeschool Notification)

Dear Superintendent [Name]:

In accordance with South Dakota Codified Law 13-27-3, I am submitting this application for public school exemption to provide alternative instruction (homeschooling) for my child(ren) for the [20XX-20XX] school year:

[Child's Full Name], DOB: [Birth Date], Grade: [Grade]
[Additional Child's Name if applicable], DOB: [Birth Date], Grade: [Grade]

I certify that:
1. I will provide instruction for at least 175 days per year.
2. I will teach the required subjects: language arts, mathematics, social studies, science, fine arts, health, and physical education.
3. I will maintain records of academic progress.

Please acknowledge receipt of this application. I understand that you may request additional information if this notification is not in compliance with state requirements.

Sincerely,

[Your Signature]
[Your Printed Name]`,
    recordKeepingTips: [
      "Keep a copy of your annual application for public school exemption",
      "Maintain attendance records showing at least 175 days of instruction",
      "Document curriculum used for each required subject",
      "Keep samples of your child's work in each subject",
      "Save standardized test results if your child participates in testing",
      "Create a simple system to track progress in each subject",
      "For high school students, maintain detailed records for transcript purposes",
    ],
    stateSpecificResources: [
      "South Dakota Christian Home Educators (SDCHE) - sdche.org",
      "South Dakota Department of Education - Alternative Instruction - doe.sd.gov",
      "South Dakota Home School Association - Support and resources",
      "Homeschool Legal Defense Association - South Dakota laws and resources",
      "Black Hills Homeschool Network - Regional support and activities",
    ],
    recommendedCurriculum: [
      "South Dakota history resources from the South Dakota Historical Society",
      "South Dakota Discovery Center - Educational programs",
      "Badlands National Park - Educational resources",
      "South Dakota 4-H - Project-based learning opportunities",
      "South Dakota Virtual School - Online courses for homeschoolers",
    ],
  },
  // Southeast Region States
  AL: alabamaStarterKit,
  AR: arkansasStarterKit,
  DE: delawareStarterKit,
  KY: kentuckyStarterKit,
  LA: louisianaStarterKit,
  MD: marylandStarterKit,
  MS: mississippiStarterKit,
  MO: missouriStarterKit,
  NC: northCarolinaStarterKit,
  SC: southCarolinaStarterKit,
  TN: tennesseeStarterKit,
  VA: virginiaStarterKit,
  WV: westVirginiaStarterKit,
  DC: districtOfColumbiaStarterKit,
  // Southwest Region States
  OK: oklahomaStarterKit,
  // Midwest Region States
  IN: indianaStarterKit,
  IA: iowaStarterKit,
  KS: kansasStarterKit,
  MN: minnesotaStarterKit,
  NE: nebraskaStarterKit,
  ND: northDakotaStarterKit,
  SD: southDakotaStarterKit,
  // Northeast Region States
  CT: connecticutStarterKit,
  ME: maineStarterKit,
  MA: massachusettsStarterKit,
  NH: newHampshireStarterKit,
  NJ: newJerseyStarterKit,
  RI: rhodeIslandStarterKit,
  VT: vermontStarterKit,
}

export const getStarterKitContent = (stateCode: string): StarterKitContent => {
  const specificContent = stateStarterKitContent[stateCode] || {}
  return {
    introduction: specificContent.introduction || defaultStarterKitContent.introduction,
    gettingStartedSteps: specificContent.gettingStartedSteps || defaultStarterKitContent.gettingStartedSteps,
    recordKeepingTips: specificContent.recordKeepingTips || defaultStarterKitContent.recordKeepingTips,
    withdrawalLetterTemplate: specificContent.withdrawalLetterTemplate,
    stateSpecificResources: specificContent.stateSpecificResources || defaultStarterKitContent.stateSpecificResources,
    recommendedCurriculum: specificContent.recommendedCurriculum || defaultStarterKitContent.recommendedCurriculum,
  }
}

export const getStateName = (stateCode: string): string => {
  const states: Record<string, string> = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
    DC: "District of Columbia",
  }
  return states[stateCode] || "Unknown State"
}
