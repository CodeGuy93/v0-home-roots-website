export const statesData: Record<
  string,
  {
    name: string
    summary: string
    content: string
    requirements: string[]
    resources: Array<{ name: string; url: string }>
  }
> = {
  AL: {
    name: "Alabama",
    summary: "Three options: church school, private school, or certified home tutor.",
    content:
      "Alabama offers three main options for homeschooling families. You can enroll in a church school, establish a private school, or hire a certified private tutor. Each option has different requirements, but all are well-established legal pathways.",
    requirements: [
      "File as a church school, private school, or use a certified tutor",
      "Church schools require enrollment and attendance records",
      "Private school option requires registration with state authorities",
      "Certified tutor must have Alabama teaching certificate",
    ],
    resources: [
      { name: "Alabama Homeschool Laws", url: "https://alabamaschoolboards.org/resources/homeschool-laws" },
      {
        name: "Alabama Department of Education - Home Schools",
        url: "https://www.alabamahomeschooling.com/alabama-homeschool-laws/",
      },
      { name: "CHEF of Alabama", url: "https://www.chefofalabama.org/" },
    ],
  },
  AK: {
    name: "Alaska",
    summary: "Very relaxed laws with multiple options and minimal oversight.",
    content:
      "Alaska has some of the most relaxed homeschool laws in the country. Parents can homeschool under the homeschool statute, operate as a private school, participate in a correspondence program, or work with a certified teacher.",
    requirements: [
      "No notification required if operating as a homeschool",
      "No required subjects",
      "No teaching qualifications",
      "No assessment requirements",
    ],
    resources: [
      { name: "Alaska Private and Home Education Association", url: "https://www.aphea.org/" },
      {
        name: "Alaska Department of Education - Homeschooling",
        url: "https://education.alaska.gov/alaskan_schools/home",
      },
      { name: "Alaska State Correspondence Programs", url: "https://education.alaska.gov/alaskan_schools/corres" },
    ],
  },
  AZ: {
    name: "Arizona",
    summary: "File an affidavit of intent and teach required subjects.",
    content:
      "Arizona requires homeschooling parents to file an affidavit of intent to homeschool with the county school superintendent within 30 days of beginning homeschooling. Instruction must be provided in reading, grammar, mathematics, social studies, and science.",
    requirements: [
      "File affidavit of intent",
      "Teach required subjects: reading, grammar, math, social studies, science",
      "Child must be between 6-16 years old",
      "No standardized testing required",
    ],
    resources: [
      { name: "Arizona Families for Home Education", url: "https://afhe.org/" },
      { name: "Arizona Department of Education - Homeschooling", url: "https://www.azed.gov/home-school" },
      {
        name: "Affidavit of Intent Form",
        url: "https://www.azed.gov/sites/default/files/2020/07/Affidavit%20of%20Intent%20Fillable%20Form.pdf",
      },
    ],
  },
  AR: {
    name: "Arkansas",
    summary: "Annual notice of intent required with optional standardized testing.",
    content:
      "Arkansas requires parents to submit a Notice of Intent to Homeschool form to their local school district by August 15 each year or 14 days prior to withdrawing a child from public school. While standardized testing is available through the school district, it is optional for homeschoolers.",
    requirements: [
      "Submit annual Notice of Intent by August 15",
      "Provide 180 days of instruction",
      "Maintain a record of subjects taught and activities",
      "Optional standardized testing in grades 3, 5, 7, and 10",
    ],
    resources: [
      { name: "Education Alliance of Arkansas", url: "https://arkansashomeschool.org/" },
      {
        name: "Arkansas Department of Education - Homeschooling",
        url: "https://dese.ade.arkansas.gov/Offices/learning-services/home-school",
      },
      {
        name: "Notice of Intent Form",
        url: "https://dese.ade.arkansas.gov/Files/20201126104641_Home_School_Notice_of_Intent_2020_2021.pdf",
      },
    ],
  },
  CA: {
    name: "California",
    summary:
      "Multiple options including private school affidavit, charter schools, and private school satellite programs.",
    content:
      "California offers several options for homeschooling. The most common is filing a private school affidavit, but families can also enroll in public charter schools that offer homeschool programs, use private school satellite programs (PSPs), or hire a credentialed tutor.",
    requirements: [
      "File private school affidavit annually (if using that option)",
      "Maintain attendance records",
      "Teach required subjects in English",
      "Instructors must be capable of teaching",
    ],
    resources: [
      { name: "California Homeschool Network", url: "https://www.californiahomeschool.net/" },
      { name: "Private School Affidavit Filing", url: "https://www.cde.ca.gov/sp/ps/psaffidavit.asp" },
      { name: "Homeschool Association of California", url: "https://www.hsc.org/" },
      { name: "California Department of Education - Homeschooling", url: "https://www.cde.ca.gov/sp/ps/" },
    ],
  },
  CO: {
    name: "Colorado",
    summary: "Annual notification required with standardized testing every two years.",
    content:
      "Colorado requires parents to provide written notification of their intent to homeschool 14 days before starting and annually thereafter. Homeschooled students must be tested or evaluated in grades 3, 5, 7, 9, and 11, with results submitted to the school district or kept on file.",
    requirements: [
      "Submit annual notification of intent",
      "Provide 172 days of instruction, averaging four hours per day",
      "Teach required subjects: communication skills, mathematics, history, civics, science, literature, and the Constitution",
      "Standardized testing or evaluation in grades 3, 5, 7, 9, and 11",
    ],
    resources: [
      { name: "Christian Home Educators of Colorado", url: "https://chec.org/" },
      {
        name: "Colorado Department of Education - Homeschooling",
        url: "https://www.cde.state.co.us/choice/homeschool",
      },
      { name: "Notice of Intent Form", url: "https://www.cde.state.co.us/choice/homeschool_notification" },
      {
        name: "Colorado Homeschool Law",
        url: "https://leg.colorado.gov/sites/default/files/images/olls/crs2016-title-22.pdf",
      },
    ],
  },
  CT: {
    name: "Connecticut",
    summary: "File a notice of intent and follow suggested procedures.",
    content:
      "Connecticut has relatively relaxed homeschool laws. Parents should file a notice of intent with their local school district, but this is technically a suggested procedure rather than a legal requirement. The state recommends an annual portfolio review, but enforcement varies by district.",
    requirements: [
      "File a notice of intent (recommended but not strictly required)",
      "Provide instruction in required subjects: reading, writing, spelling, English grammar, geography, arithmetic, U.S. history, and citizenship",
      "Maintain a portfolio of educational records",
      "Annual portfolio review (recommended)",
    ],
    resources: [
      { name: "Connecticut Homeschool Network", url: "https://www.cthomeschoolnetwork.org/" },
      {
        name: "Connecticut State Department of Education - Homeschooling",
        url: "https://portal.ct.gov/SDE/Homeschool/Homeschooling-in-Connecticut",
      },
      { name: "Sample Notice of Intent", url: "https://portal.ct.gov/-/media/SDE/Homeschool/Sample_NOI.pdf" },
      { name: "CT Homeschoolers Association", url: "https://www.cthomeschoolers.org/" },
    ],
  },
  DE: {
    name: "Delaware",
    summary: "Register with a homeschool association or submit a curriculum for approval.",
    content:
      "Delaware offers two main options for homeschooling. Families can either register with a non-public school or homeschool association, or they can submit an annual enrollment form and curriculum for approval by the Department of Education.",
    requirements: [
      "Register with a homeschool association OR submit curriculum for DOE approval",
      "Provide 180 days of instruction",
      "Teach required subjects if using the DOE approval option",
      "Maintain attendance records",
    ],
    resources: [
      { name: "Delaware Home Education Association", url: "https://www.dheaonline.org/" },
      { name: "Delaware Department of Education - Homeschooling", url: "https://www.doe.k12.de.us/domain/470" },
      {
        name: "Homeschool Reporting Form",
        url: "https://www.doe.k12.de.us/cms/lib/DE01922744/Centricity/Domain/470/Homeschool%20Reporting%20Form.pdf",
      },
    ],
  },
  FL: {
    name: "Florida",
    summary: "Annual notice of intent with portfolio maintenance and annual evaluation.",
    content:
      "Florida requires parents to file a notice of intent to establish a home education program with their county school district superintendent. Parents must maintain a portfolio of records and educational materials and provide for an annual educational evaluation of the student.",
    requirements: [
      "File annual notice of intent",
      "Maintain a portfolio of records and materials",
      "Provide annual educational evaluation (standardized test, teacher evaluation, or other approved method)",
      "Submit evaluation results to the school district",
    ],
    resources: [
      { name: "Florida Parent-Educators Association", url: "https://fpea.com/" },
      {
        name: "Florida Department of Education - Home Education",
        url: "https://www.fldoe.org/schools/school-choice/other-school-choice-options/home-edu/",
      },
      {
        name: "Notice of Intent Form",
        url: "https://www.fldoe.org/core/fileparse.php/7709/urlt/sample-home-education-notice-intent.pdf",
      },
      { name: "Florida Homeschool Evaluators", url: "https://www.flhomeschooleval.com/" },
    ],
  },
  GA: {
    name: "Georgia",
    summary: "Submit declaration of intent and provide progress reports.",
    content:
      "Georgia requires parents to submit an annual declaration of intent to homeschool to the Georgia Department of Education. Parents must provide 180 days of instruction covering required subjects and submit annual progress reports.",
    requirements: [
      "Submit annual declaration of intent",
      "Provide 180 days of instruction, 4.5 hours per day",
      "Teach required subjects: reading, language arts, math, social studies, and science",
      "Write annual progress reports and retain for three years",
      "Standardized testing every three years beginning at the end of third grade",
    ],
    resources: [
      { name: "Georgia Home Education Association", url: "https://www.ghea.org/" },
      {
        name: "Georgia Department of Education - Home Schools",
        url: "https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Pages/Home-Schools.aspx",
      },
      {
        name: "Declaration of Intent Form",
        url: "https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Pages/Home-Study-DOI.aspx",
      },
      { name: "Georgia Homeschooling Requirements", url: "https://www.ghea.org/georgia-homeschool-law/" },
    ],
  },
  HI: {
    name: "Hawaii",
    summary: "Submit notice of intent and provide standardized testing in specific grades.",
    content:
      "Hawaii requires parents to submit a notice of intent to homeschool to either the local public school principal or the district superintendent. Standardized testing is required in grades 3, 5, 8, and 10, with results submitted to the school.",
    requirements: [
      "Submit notice of intent",
      "Provide instruction in required subjects",
      "Keep record of planned curriculum",
      "Administer standardized tests in grades 3, 5, 8, and 10",
    ],
    resources: [
      { name: "Hawaii Homeschool Association", url: "https://www.hawaiihomeschoolassociation.org/" },
      {
        name: "Hawaii State Department of Education - Homeschooling",
        url: "https://www.hawaiipublicschools.org/ParentsAndStudents/EnrollingInSchool/Choosingaschool/Pages/Homeschooling.aspx",
      },
      {
        name: "Notice of Intent Form",
        url: "https://www.hawaiipublicschools.org/DOE%20Forms/Enrollment/Exceptions%20to%20Compulsory%20Education/4140/4140_Homeschooling.pdf",
      },
    ],
  },
  ID: {
    name: "Idaho",
    summary: "No notification required with minimal regulations.",
    content:
      "Idaho has some of the most relaxed homeschool laws in the country. Parents are not required to notify any government agency of their intent to homeschool, register, seek approval, or submit to any form of state oversight.",
    requirements: [
      "No notification required",
      "Provide instruction in subjects commonly taught in Idaho public schools",
      "No specific recordkeeping requirements",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Idaho Coalition of Home Educators", url: "https://www.iche-idaho.org/" },
      {
        name: "Idaho State Department of Education - Homeschooling",
        url: "https://www.sde.idaho.gov/student-engagement/choice/homeschool.html",
      },
      { name: "Christian Homeschoolers of Idaho State", url: "https://chois.org/" },
    ],
  },
  IL: {
    name: "Illinois",
    summary: "Operate as a private school with no registration required.",
    content:
      "Illinois treats homeschools as private schools. There is no requirement to register with the state or notify any agency of your intent to homeschool. Parents must provide instruction in specific subjects and ensure an education equivalent to public schools.",
    requirements: [
      "No notification or registration required",
      "Teach required subjects: language arts, math, biological and physical sciences, social sciences, fine arts, and physical development/health",
      "Instruction must be in English",
      "No specific recordkeeping or testing requirements",
    ],
    resources: [
      { name: "Illinois H.O.U.S.E.", url: "https://www.illinoishouse.org/" },
      { name: "Illinois State Board of Education - Homeschooling", url: "https://www.isbe.net/Pages/Homeschool.aspx" },
      { name: "Homeschool Legal Defense Association - Illinois", url: "https://hslda.org/legal/illinois" },
    ],
  },
  IN: {
    name: "Indiana",
    summary: "Operate as a non-accredited private school with attendance records.",
    content:
      "Indiana considers homeschools to be non-accredited private schools. Parents must provide instruction equivalent to public schools, maintain attendance records, and operate for the same number of days as public schools.",
    requirements: [
      "Provide instruction equivalent to public schools",
      "Maintain attendance records",
      "Operate for 180 days",
      "No specific notification, subject, or testing requirements",
    ],
    resources: [
      { name: "Indiana Association of Home Educators", url: "https://iahe.net/" },
      { name: "Indiana Department of Education - Home Schools", url: "https://www.in.gov/doe/students/homeschool/" },
      { name: "Indiana Home Educators' Network", url: "https://inhomeeducators.org/" },
    ],
  },
  IA: {
    name: "Iowa",
    summary: "Multiple options including independent private instruction and home education assistance programs.",
    content:
      "Iowa offers several options for homeschooling, including Independent Private Instruction (IPI), Competent Private Instruction (CPI) with or without reporting, and Home School Assistance Programs (HSAP) through public schools.",
    requirements: [
      "Choose a legal option (IPI, CPI with reporting, CPI without reporting, or HSAP)",
      "If using CPI with reporting, submit Form A by September 1 annually",
      "If using CPI with reporting, provide assessment results annually",
      "Teach required subjects if using CPI: reading, language arts, math, science, and social studies",
    ],
    resources: [
      { name: "Network of Iowa Christian Home Educators", url: "https://www.homeschooliowa.org/" },
      {
        name: "Iowa Department of Education - Homeschooling",
        url: "https://educateiowa.gov/pk-12/options-educational-choice/competent-private-instruction-home-schooling",
      },
      {
        name: "Form A - Report of Competent Private Instruction",
        url: "https://educateiowa.gov/documents/options-educational-choice/2021/07/form-report-competent-private-instruction",
      },
    ],
  },
  KS: {
    name: "Kansas",
    summary: "Register as a non-accredited private school.",
    content:
      "Kansas considers homeschools to be non-accredited private schools. Parents must register their homeschool with the Kansas State Department of Education, but there are no specific curriculum requirements or testing mandates.",
    requirements: [
      "Register as a non-accredited private school",
      "Provide competent instruction",
      "Teach for a substantial period of time",
      "No specific subject, recordkeeping, or testing requirements",
    ],
    resources: [
      {
        name: "Kansas Homeschool Registration",
        url: "https://www.ksde.org/Agency/Division-of-Learning-Services/Career-Standards-and-Assessment-Services/CSAS-Home/Graduation-and-Schools-of-Choice/Non-Accredited-Private-Schools",
      },
      { name: "Christian Home Educators Confederation of Kansas", url: "https://kshomeschool.org/" },
      {
        name: "Kansas Non-Accredited Private School Registration Form",
        url: "https://www.ksde.org/Portals/0/CSAS/CSAS%20Home/Graduation%20and%20Schools%20of%20Choice/Private%20Schools/DNAP%20Registration%20Form.pdf",
      },
    ],
  },
  KY: {
    name: "Kentucky",
    summary: "Operate as a private school with notification and recordkeeping.",
    content:
      "Kentucky treats homeschools as private schools. Parents must notify the local school district of their intent to homeschool within the first two weeks of the school year, maintain attendance records, and provide instruction for 185 days.",
    requirements: [
      "Notify the school district within the first two weeks of the school year",
      "Maintain attendance records",
      "Provide 185 days of instruction",
      "Teach reading, writing, spelling, grammar, history, mathematics, and civics",
      "Keep scholarship reports (report cards)",
    ],
    resources: [
      { name: "Kentucky Home Education Association", url: "https://khea.8k.com/" },
      { name: "Christian Home Educators of Kentucky", url: "https://chek.org/" },
      {
        name: "Kentucky Department of Education - Home Schools",
        url: "https://education.ky.gov/federal/fed/Pages/Home-School-Resources.aspx",
      },
      {
        name: "Sample Notification Letter",
        url: "https://education.ky.gov/federal/fed/Documents/Sample%20Home%20School%20Letter%20of%20Intent.pdf",
      },
    ],
  },
  LA: {
    name: "Louisiana",
    summary: "Two options: home study program or registered nonpublic school.",
    content:
      "Louisiana offers two options for homeschooling: the Home Study Program, which requires approval from the Board of Education, or registering as a nonpublic school not seeking state approval. Each option has different requirements and levels of oversight.",
    requirements: [
      "Choose between Home Study Program or nonpublic school option",
      "For Home Study: submit application within 15 days of starting, provide 180 days of instruction, and submit renewal application annually",
      "For Home Study: submit satisfactory evidence of student progress",
      "For nonpublic school: submit annual school registration form",
    ],
    resources: [
      {
        name: "Louisiana Department of Education - Homeschooling",
        url: "https://www.louisianabelieves.com/schools/home-study",
      },
      {
        name: "Home Study Application",
        url: "https://www.louisianabelieves.com/docs/default-source/school-choice/home-study-application.pdf",
      },
      { name: "Christian Home Educators Fellowship of Louisiana", url: "https://www.chefofla.org/" },
      { name: "Louisiana Homeschool Association", url: "https://lhea.info/" },
    ],
  },
  ME: {
    name: "Maine",
    summary: "Submit notice of intent and year-end assessment.",
    content:
      "Maine requires parents to file an initial notice of intent to homeschool with both the local school district and the Maine Department of Education. Parents must provide an annual assessment of student progress and submit a subsequent year notice each year.",
    requirements: [
      "Submit initial notice of intent",
      "Provide 175 days of instruction",
      "Teach required subjects: English, language arts, math, science, social studies, physical and health education, library skills, fine arts, Maine studies, and computer proficiency",
      "Submit annual assessment (standardized test, portfolio review, or evaluation by certified teacher)",
    ],
    resources: [
      {
        name: "Maine Department of Education - Homeschooling",
        url: "https://www.maine.gov/doe/schools/schoolops/homeinstruction",
      },
      { name: "Homeschoolers of Maine", url: "https://www.homeschoolersofmaine.org/" },
      {
        name: "Notice of Intent Form",
        url: "https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/HomeInstructionNoticeofIntent.pdf",
      },
    ],
  },
  MD: {
    name: "Maryland",
    summary: "File notice and choose between portfolio reviews or umbrella school.",
    content:
      "Maryland offers two options for homeschooling: operating under county supervision with portfolio reviews or enrolling in an approved umbrella school. Parents must file a notice of intent with their local superintendent at least 15 days before beginning homeschooling.",
    requirements: [
      "File notice of intent at least 15 days before beginning homeschooling",
      "Choose between county supervision or umbrella school",
      "If under county supervision: maintain portfolio and submit to reviews",
      "Provide regular, thorough instruction in required subjects: English, math, science, social studies, art, music, health, and physical education",
    ],
    resources: [
      { name: "Maryland Homeschool Association", url: "https://www.mdhsa.com/" },
      {
        name: "Maryland State Department of Education - Homeschooling",
        url: "http://marylandpublicschools.org/about/Pages/DSFSS/SSSP/Home-Instruction/index.aspx",
      },
      {
        name: "Notice of Intent Form",
        url: "http://marylandpublicschools.org/about/Documents/DSFSS/SSSP/HomeInstruction/HomeInstructionNotificationForm.pdf",
      },
      { name: "Maryland Association of Christian Home School Leaders", url: "https://www.mdachsl.org/" },
    ],
  },
  MA: {
    name: "Massachusetts",
    summary: "Obtain approval for homeschool program from local school committee.",
    content:
      "Massachusetts requires parents to obtain approval for their homeschool program from their local school committee or superintendent. Parents must submit an education plan detailing curriculum, materials, and evaluation methods.",
    requirements: [
      "Submit education plan for approval",
      "Teach required subjects: reading, writing, English language and grammar, geography, arithmetic, drawing, music, history and Constitution of the United States, citizenship, health, physical education, and good behavior",
      "Provide regular and thorough instruction",
      "Submit method of assessment (standardized tests, portfolio review, or independent evaluation)",
    ],
    resources: [
      { name: "Massachusetts Home Learning Association", url: "https://www.mhla.org/" },
      {
        name: "Massachusetts Department of Elementary and Secondary Education - Homeschooling",
        url: "https://www.doe.mass.edu/lawsregs/advisory/homeschooling.html",
      },
      { name: "Massachusetts Homeschool Organization of Parent Educators", url: "https://www.masshope.org/" },
      { name: "Sample Education Plan", url: "https://www.mhla.org/information/massdocuments/sample-education-plan/" },
    ],
  },
  MI: {
    name: "Michigan",
    summary: "No notification required with two legal options.",
    content:
      "Michigan offers two options for homeschooling: operating as a homeschool with no reporting requirements or functioning as a nonpublic school. Neither option requires notification to the state, making Michigan one of the least restrictive states for homeschooling.",
    requirements: [
      "No notification required",
      "If operating as a homeschool: provide instruction in reading, spelling, mathematics, science, history, civics, literature, writing, and English grammar",
      "If operating as a nonpublic school: teach required subjects and maintain attendance records",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Michigan Christian Homeschool Network", url: "https://www.michomeschool.org/" },
      {
        name: "Michigan Department of Education - Homeschooling",
        url: "https://www.michigan.gov/mde/services/flexible-learning/home-schools",
      },
      {
        name: "Information for Homeschoolers in Michigan",
        url: "https://www.michigan.gov/mde/-/media/Project/Websites/mde/Year/2022/01/18/Nonpublic_and_Home_School_Information.pdf",
      },
    ],
  },
  MN: {
    name: "Minnesota",
    summary: "Submit annual notification and maintain documentation.",
    content:
      "Minnesota requires parents to submit an annual notification to the school district superintendent by October 1 each year. Parents must maintain documentation of instruction and administer annual standardized tests.",
    requirements: [
      "Submit annual notification by October 1",
      "Maintain documentation of instruction including materials, tests, and reports",
      "Teach required subjects: reading, writing, literature, fine arts, math, science, history, geography, government, health, and physical education",
      "Administer annual standardized tests",
    ],
    resources: [
      { name: "Minnesota Homeschoolers' Alliance", url: "https://homeschoolers.org/" },
      { name: "Minnesota Department of Education - Homeschooling", url: "https://education.mn.gov/MDE/fam/nphs/home/" },
      {
        name: "Annual Notification Form",
        url: "https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=MDE059397&RevisionSelectionMethod=latestReleased&Rendition=primary",
      },
      { name: "Minnesota Association of Christian Home Educators", url: "https://www.mache.org/" },
    ],
  },
  MS: {
    name: "Mississippi",
    summary: "Submit certificate of enrollment with minimal oversight.",
    content:
      "Mississippi requires parents to submit a certificate of enrollment to the school attendance officer by September 15 each year. Beyond this simple notification, there are very few regulations or requirements for homeschooling families.",
    requirements: [
      "Submit certificate of enrollment by September 15 annually",
      "No specific subject, recordkeeping, or testing requirements",
      "No teacher qualification requirements",
      "No minimum number of days or hours required",
    ],
    resources: [
      { name: "Mississippi Home Educators Association", url: "https://www.mhea.net/" },
      { name: "Mississippi Department of Education - Homeschooling", url: "https://www.mdek12.org/OCSA/HS" },
      {
        name: "Certificate of Enrollment Form",
        url: "https://www.mdek12.org/sites/default/files/Offices/MDE/OCSA/HS/home_school_registration_form_2020-2021.pdf",
      },
    ],
  },
  MO: {
    name: "Missouri",
    summary: "No notification required but must maintain records.",
    content:
      "Missouri does not require parents to notify any government agency of their intent to homeschool. However, parents must maintain records of subjects taught, activities, samples of work, and evaluations, as well as a log of instructional hours.",
    requirements: [
      "No notification required",
      "Provide 1,000 hours of instruction annually (600 hours in core subjects)",
      "Maintain records of subjects, activities, work samples, and evaluations",
      "Keep a log of instructional hours",
    ],
    resources: [
      { name: "Families for Home Education", url: "https://fhe-mo.org/" },
      {
        name: "Missouri Department of Elementary and Secondary Education - Homeschooling",
        url: "https://dese.mo.gov/governmental-affairs/home-schooling",
      },
      { name: "Missouri Association of Teaching Christian Homes", url: "https://www.match-inc.org/" },
      { name: "Record Keeping Templates", url: "https://fhe-mo.org/resources/record-keeping/" },
    ],
  },
  MT: {
    name: "Montana",
    summary: "Annual notification with minimal regulations.",
    content:
      "Montana requires parents to notify the county superintendent annually of their intent to homeschool. Beyond this notification requirement, Montana has very few regulations for homeschooling families.",
    requirements: [
      "Submit annual notification to county superintendent",
      "Provide 180 days of instruction",
      "Teach required subjects: reading, writing, math, social studies, science, health, physical education, arts, and music",
      "Maintain attendance records",
    ],
    resources: [
      { name: "Montana Coalition of Home Educators", url: "http://www.mtche.org/" },
      {
        name: "Montana Office of Public Instruction - Homeschooling",
        url: "https://opi.mt.gov/Families-Students/School-Topics/Home-School",
      },
      {
        name: "Notification Form",
        url: "https://opi.mt.gov/Portals/182/Page%20Files/AIM/2%20AIM%20USER%20GUIDES/Home%20School%20Notification%20Form.pdf",
      },
    ],
  },
  NE: {
    name: "Nebraska",
    summary: "File as an exempt school with annual notification.",
    content:
      "Nebraska considers homeschools to be exempt schools. Parents must file a notarized affidavit with the Department of Education by July 15 annually or 30 days before starting homeschooling. Parents must provide instruction in core subjects.",
    requirements: [
      "File notarized affidavit annually",
      "Provide instruction for 1,080 hours for elementary students and 1,080 hours for secondary students",
      "Teach required subjects: language arts, math, science, social studies, and health",
      "Keep attendance records",
    ],
    resources: [
      { name: "Nebraska Christian Home Educators Association", url: "https://www.nchea.org/" },
      {
        name: "Nebraska Department of Education - Exempt Schools",
        url: "https://www.education.ne.gov/fos/exempt-schools/",
      },
      {
        name: "Rule 13 Exempt School Program",
        url: "https://www.education.ne.gov/wp-content/uploads/2017/07/Rule13_2015.pdf",
      },
      {
        name: "Exempt School Program Forms",
        url: "https://www.education.ne.gov/fos/exempt-school-program/exempt-school-program-forms/",
      },
    ],
  },
  NV: {
    name: "Nevada",
    summary: "File notice of intent and educational plan.",
    content:
      "Nevada requires parents to file a one-time notice of intent to homeschool with their local school district. Parents must also submit an educational plan that demonstrates their ability to provide equivalent instruction.",
    requirements: [
      "File one-time notice of intent",
      "Submit educational plan",
      "Teach required subjects: English, math, science, and social studies",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Nevada Homeschool Network", url: "https://nevadahomeschoolnetwork.com/" },
      { name: "Nevada Department of Education - Homeschooling", url: "https://doe.nv.gov/homeschooling/" },
      {
        name: "Notice of Intent Form",
        url: "https://doe.nv.gov/uploadedFiles/ndedoenvgov/content/Home/Families/Homeschool/NoticeofIntenttoHomeschoolChildBetweenAges7and18.pdf",
      },
      {
        name: "Educational Plan Guidelines",
        url: "https://doe.nv.gov/uploadedFiles/ndedoenvgov/content/Home/Families/Homeschool/HomeschoolEducationalPlanGuidelines.pdf",
      },
    ],
  },
  NH: {
    name: "New Hampshire",
    summary: "Annual notification and evaluation required.",
    content:
      "New Hampshire requires parents to notify their local school district, a participating private school, or the Commissioner of Education of their intent to homeschool. Parents must provide an annual evaluation of student progress.",
    requirements: [
      "Submit annual notification",
      "Teach required subjects: science, mathematics, language, government, history, health, reading, writing, spelling, art and music appreciation, and U.S. and New Hampshire constitutions",
      "Maintain a portfolio of records and materials",
      "Submit annual evaluation (standardized test, portfolio review, or evaluation by certified teacher)",
    ],
    resources: [
      { name: "New Hampshire Homeschooling Coalition", url: "https://nhhomeschooling.org/" },
      {
        name: "NH Department of Education - Home Education",
        url: "https://www.education.nh.gov/who-we-are/division-of-learner-support/bureau-of-educational-opportunities/home-education",
      },
      {
        name: "Notification Form",
        url: "https://www.education.nh.gov/sites/g/files/ehbemt326/files/inline-documents/sonh/home-ed-notification.pdf",
      },
      { name: "Christian Home Educators of NH", url: "https://chenh.org/" },
    ],
  },
  NJ: {
    name: "New Jersey",
    summary: "No notification required with minimal regulations.",
    content:
      "New Jersey has some of the least restrictive homeschool laws in the country. Parents are not required to notify any government agency of their intent to homeschool, register, seek approval, or submit to any form of state oversight.",
    requirements: [
      "No notification required",
      "Provide instruction equivalent to that provided in public schools",
      "No specific recordkeeping requirements",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Education Network of Christian Homeschoolers of NJ", url: "https://www.enoch.org/" },
      {
        name: "NJ Department of Education - Homeschooling",
        url: "https://www.nj.gov/education/genfo/faq/faq_homeschool.shtml",
      },
      { name: "NJ Homeschool Association", url: "https://jerseyhomeschool.net/" },
      { name: "NJ Homeschool Law Summary", url: "https://hslda.org/legal/new-jersey" },
    ],
  },
  NM: {
    name: "New Mexico",
    summary: "Annual notification and standardized testing required.",
    content:
      "New Mexico requires parents to notify the New Mexico Public Education Department within 30 days of establishing a home study program and by April 1 of each subsequent year. Students must take standardized tests in grades 3, 5, and 8.",
    requirements: [
      "Submit annual notification",
      "Provide 180 days of instruction",
      "Maintain records of subjects taught, student progress, and immunizations",
      "Administer standardized tests in grades 3, 5, and 8",
    ],
    resources: [
      { name: "Christian Association of Parent Educators - NM", url: "https://www.cape-nm.org/" },
      {
        name: "NM Public Education Department - Homeschooling",
        url: "https://webnew.ped.state.nm.us/bureaus/options-parents-families/home-schools/",
      },
      {
        name: "Notification Form",
        url: "https://webnew.ped.state.nm.us/wp-content/uploads/2018/01/Homeschool-Notification-Form.pdf",
      },
      { name: "NM Homeschool Support Groups", url: "https://www.cape-nm.org/support-groups/" },
    ],
  },
  NY: {
    name: "New York",
    summary: "Highly regulated with detailed requirements for notification, reporting, and assessment.",
    content:
      "New York has some of the most comprehensive homeschool regulations in the country. Parents must submit annual notices, detailed individualized home instruction plans (IHIPs), quarterly reports, and annual assessments.",
    requirements: [
      "Submit letter of intent annually",
      "File detailed Individualized Home Instruction Plan (IHIP)",
      "Submit quarterly reports",
      "Conduct annual assessment (standardized test or portfolio review)",
    ],
    resources: [
      { name: "NY State Education Department - Homeschooling", url: "http://www.p12.nysed.gov/sss/homeinstruction/" },
      { name: "IHIP Templates", url: "https://www.homeschoolnyc.com/resources/forms.html" },
      {
        name: "NY State Homeschool Regulations",
        url: "http://www.p12.nysed.gov/sss/homeinstruction/homeschoolingqanda.html",
      },
      { name: "NY Home Educators' Network", url: "https://www.nyhen.org/" },
    ],
  },
  NC: {
    name: "North Carolina",
    summary: "Register as a home school and administer standardized tests.",
    content:
      "North Carolina requires parents to register their homeschool with the Division of Non-Public Education. Parents must have at least a high school diploma, maintain attendance and immunization records, and administer standardized tests annually.",
    requirements: [
      "Register with the Division of Non-Public Education",
      "Parent must have at least a high school diploma",
      "Operate on a regular schedule for at least nine months",
      "Maintain immunization and attendance records",
      "Administer standardized tests annually",
    ],
    resources: [
      { name: "North Carolinians for Home Education", url: "https://www.nche.com/" },
      { name: "NC Division of Non-Public Education", url: "https://ncadmin.nc.gov/public/home-school-information" },
      {
        name: "Home School Registration",
        url: "https://ncadmin.nc.gov/public/home-school-information/home-school-requirements-recommendations",
      },
      {
        name: "NC Home School Testing Requirements",
        url: "https://ncadmin.nc.gov/public/home-school-information/home-school-requirements-recommendations/testing",
      },
    ],
  },
  ND: {
    name: "North Dakota",
    summary: "Statement of intent and standardized testing required.",
    content:
      "North Dakota requires parents to file a statement of intent with their local school district superintendent. Parents must have at least a high school diploma or GED (or be monitored by a certified teacher), and students must take standardized tests in grades 4, 6, 8, and 10.",
    requirements: [
      "File statement of intent annually",
      "Parent must have at least a high school diploma/GED or be monitored",
      "Provide 175 days of instruction",
      "Teach required subjects: English language arts, math, science, social studies, and health",
      "Administer standardized tests in grades 4, 6, 8, and 10",
    ],
    resources: [
      { name: "North Dakota Home School Association", url: "https://ndhsa.org/" },
      {
        name: "ND Department of Public Instruction - Homeschooling",
        url: "https://www.nd.gov/dpi/parentscommunity/parents/homeschool",
      },
      {
        name: "Statement of Intent Form",
        url: "https://www.nd.gov/dpi/sites/www/files/documents/SFN%20Forms/SFN18066.pdf",
      },
      { name: "ND Homeschool Law", url: "https://www.legis.nd.gov/cencode/t15-1c23.pdf" },
    ],
  },
  OH: {
    name: "Ohio",
    summary: "Annual notification and assessment required.",
    content:
      "Ohio requires parents to notify their local school district superintendent annually. Parents must provide 900 hours of instruction, submit an assessment of student progress, and have at least a high school diploma or work with a qualified person.",
    requirements: [
      "Submit annual notification",
      "Parent must have at least a high school diploma or work with a qualified person",
      "Provide 900 hours of instruction",
      "Teach required subjects: language arts, geography, history, government, civics, math, science, health, physical education, fine arts, and first aid",
      "Submit annual assessment (standardized test, portfolio review, or written narrative)",
    ],
    resources: [
      { name: "Ohio Homeschooling Parents", url: "https://ohiohomeschoolingparents.com/" },
      {
        name: "Ohio Department of Education - Homeschooling",
        url: "https://education.ohio.gov/Topics/Ohio-Education-Options/Home-Schooling",
      },
      {
        name: "Notification Form",
        url: "https://education.ohio.gov/getattachment/Topics/Ohio-Education-Options/Home-Schooling/Notification-of-Intent-to-Home-Education.pdf.aspx",
      },
      { name: "Christian Home Educators of Ohio", url: "https://cheohome.org/" },
    ],
  },
  OK: {
    name: "Oklahoma",
    summary: "No notification required with minimal regulations.",
    content:
      "Oklahoma has some of the least restrictive homeschool laws in the country. Parents are not required to notify any government agency of their intent to homeschool, register, seek approval, or submit to any form of state oversight.",
    requirements: [
      "No notification required",
      "Provide 180 days of instruction",
      "No specific subject requirements",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Oklahoma Christian Home Educators Consociation", url: "https://www.ochec.com/" },
      { name: "Oklahoma Department of Education - Homeschooling", url: "https://sde.ok.gov/home-schooling" },
      { name: "Oklahoma Homeschool Law Summary", url: "https://hslda.org/legal/oklahoma" },
      { name: "Oklahoma Homeschool Support Groups", url: "https://www.ochec.com/support-groups/" },
    ],
  },
  OR: {
    name: "Oregon",
    summary: "Notification and standardized testing at specific grades.",
    content:
      "Oregon requires parents to notify their local Education Service District (ESD) when beginning homeschooling and when the student withdraws from homeschooling. Students must take standardized tests at the end of grades 3, 5, 8, and 10.",
    requirements: [
      "Notify ESD when beginning homeschooling",
      "No specific subject requirements",
      "No minimum number of days or hours required",
      "Administer standardized tests at the end of grades 3, 5, 8, and 10",
    ],
    resources: [
      { name: "Oregon Home Education Network", url: "https://www.ohen.org/" },
      {
        name: "Oregon Department of Education - Homeschooling",
        url: "https://www.oregon.gov/ode/learning-options/HomeSchool/Pages/default.aspx",
      },
      {
        name: "Testing Resources",
        url: "https://www.oregon.gov/ode/learning-options/HomeSchool/Pages/Testing-Information.aspx",
      },
      { name: "Oregon Christian Home Education Association Network", url: "https://www.oceanetwork.org/" },
    ],
  },
  PA: {
    name: "Pennsylvania",
    summary: "Affidavit, objectives, portfolio, and evaluation required.",
    content:
      "Pennsylvania has relatively comprehensive homeschool regulations. Parents must file an affidavit and educational objectives annually, maintain a portfolio of records and materials, and have the student evaluated by a qualified evaluator.",
    requirements: [
      "File affidavit and educational objectives annually",
      "Parent must have at least a high school diploma",
      "Provide 180 days or 900/990 hours of instruction",
      "Teach required subjects at appropriate grade levels",
      "Maintain portfolio of records and materials",
      "Annual evaluation by qualified evaluator",
    ],
    resources: [
      { name: "Pennsylvania Homeschoolers", url: "https://www.pahomeschoolers.com/" },
      {
        name: "PA Department of Education - Homeschooling",
        url: "https://www.education.pa.gov/K-12/Home%20Education%20and%20Private%20Tutoring/Pages/default.aspx",
      },
      {
        name: "Affidavit and Objectives Templates",
        url: "https://www.education.pa.gov/Documents/K-12/Home%20Education%20and%20Private%20Tutoring/Home%20Education%20Affidavit.pdf",
      },
      { name: "Christian Homeschool Association of Pennsylvania", url: "https://chaponline.com/" },
    ],
  },
  RI: {
    name: "Rhode Island",
    summary: "Seek approval for homeschool program from local school committee.",
    content:
      "Rhode Island requires parents to seek approval for their homeschool program from their local school committee. Parents must submit a teaching plan and demonstrate that their program is thorough and efficient.",
    requirements: [
      "Seek approval from local school committee",
      "Submit teaching plan",
      "Provide instruction in required subjects: reading, writing, geography, arithmetic, history of the United States, history of Rhode Island, principles of American government, health, and physical education",
      "Instruction must be thorough and efficient",
      "Maintain attendance records",
    ],
    resources: [
      { name: "Rhode Island Guild of Home Teachers", url: "https://www.rihomeschool.com/" },
      {
        name: "RI Department of Education - Homeschooling",
        url: "https://www.ride.ri.gov/StudentsFamilies/EducationPrograms/HomeSchooling.aspx",
      },
      { name: "Sample Teaching Plan", url: "https://www.rihomeschool.com/getting-started/sample-letter-of-intent/" },
      {
        name: "RI Home Education Policies by District",
        url: "https://www.rihomeschool.com/getting-started/policies-by-district/",
      },
    ],
  },
  SC: {
    name: "South Carolina",
    summary: "Three options with varying levels of oversight.",
    content:
      "South Carolina offers three options for homeschooling: operating under the school district, joining a homeschool association with at least 50 members, or joining an association with fewer than 50 members. Each option has different requirements and levels of oversight.",
    requirements: [
      "Choose one of three legal options",
      "If under school district: submit curriculum for review, teach for 180 days, maintain records, and participate in standardized testing",
      "If under association: follow association requirements",
      "Teach required subjects: reading, writing, math, science, and social studies",
    ],
    resources: [
      { name: "South Carolina Home Educators Association", url: "https://www.schomeeducatorsassociation.org/" },
      {
        name: "SC Department of Education - Homeschooling",
        url: "https://ed.sc.gov/districts-schools/state-accountability/home-schooling/",
      },
      { name: "Homeschool Options Comparison", url: "https://www.schomeeducatorsassociation.org/home-school-options/" },
      { name: "Palmetto Homeschool Association", url: "https://www.palmettoscholar.org/" },
    ],
  },
  SD: {
    name: "South Dakota",
    summary: "Annual notification and standardized testing required.",
    content:
      "South Dakota requires parents to submit an annual notification to their local school district. Students must take standardized tests in grades 4, 8, and 11, and parents must maintain immunization records.",
    requirements: [
      "Submit annual notification",
      "Provide instruction for an equivalent amount of time as public schools",
      "Teach required subjects: language arts and math",
      "Administer standardized tests in grades 4, 8, and 11",
      "Maintain immunization records",
    ],
    resources: [
      { name: "South Dakota Christian Home Educators", url: "https://www.sdchea.org/" },
      { name: "SD Department of Education - Homeschooling", url: "https://doe.sd.gov/oatq/homeschooling.aspx" },
      { name: "Notification Form", url: "https://doe.sd.gov/oatq/documents/HomeSchool-Application.pdf" },
      { name: "SD Homeschool Law", url: "https://sdlegislature.gov/Statutes/Codified_Laws/2042835" },
    ],
  },
  TN: {
    name: "Tennessee",
    summary: "Multiple options with varying requirements.",
    content:
      "Tennessee offers four options for homeschooling: registering with the local school district, enrolling in a church-related school, enrolling in an accredited online school, or being a certified teacher. Each option has different requirements and levels of oversight.",
    requirements: [
      "Choose one of four legal options",
      "If registering with school district: submit annual notice, provide 180 days of instruction, maintain attendance records, and submit proof of immunizations",
      "If under church-related school: follow school's requirements",
      "Standardized testing in grades 5, 7, and 9 (if registered with school district)",
    ],
    resources: [
      { name: "Tennessee Home Education Association", url: "https://www.tnhea.org/" },
      {
        name: "TN Department of Education - Homeschooling",
        url: "https://www.tn.gov/education/school-options/home-schooling-in-tn.html",
      },
      {
        name: "Homeschool Options Guide",
        url: "https://www.tn.gov/content/dam/tn/education/home-school/home_sch_summary_requirements.pdf",
      },
      { name: "Middle Tennessee Home Education Association", url: "https://www.mthea.org/" },
    ],
  },
  TX: {
    name: "Texas",
    summary:
      "Homeschooling is legal with minimal requirements: teach in a bona fide manner, use a curriculum, and cover 5 core subjects.",
    content:
      "Texas considers homeschools to be private schools, which are not regulated by the state. To legally homeschool in Texas, you must conduct your homeschool in a bona fide (genuine) manner, use a written curriculum, and teach the required subjects.",
    requirements: [
      "Teach in a bona fide manner",
      "Use a written curriculum",
      "Cover reading, spelling, grammar, mathematics, and good citizenship",
      "No registration, testing, or teacher qualification requirements",
    ],
    resources: [
      { name: "Texas Homeschool Coalition", url: "https://thsc.org/" },
      {
        name: "Texas Education Agency - Homeschooling",
        url: "https://tea.texas.gov/texas-schools/general-information/finding-a-school-for-your-child/homeschooling",
      },
      { name: "Withdrawal Letter Template", url: "https://thsc.org/homeschooling-in-texas/7-easy-steps-to-begin/" },
      { name: "Texas Home Educators", url: "https://www.texashomeeducators.com/" },
    ],
  },
  UT: {
    name: "Utah",
    summary: "One-time signed affidavit required.",
    content:
      "Utah requires parents to file a one-time signed and notarized affidavit with their local school district. Once filed, the affidavit remains in effect as long as the student remains in the district. There are no specific subject, hour, or testing requirements.",
    requirements: [
      "File one-time signed affidavit",
      "Provide instruction in required subjects",
      "No specific hour requirements",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Utah Home Education Association", url: "https://uhea.org/" },
      { name: "Utah State Board of Education - Homeschooling", url: "https://www.schools.utah.gov/curr/homeschool" },
      { name: "Affidavit Form", url: "https://www.schools.utah.gov/file/365a7b7a-ec37-4cce-bfed-5f31fbc8d8d7" },
      { name: "Utah Christian Home School Association", url: "https://utch.org/" },
    ],
  },
  VT: {
    name: "Vermont",
    summary: "Annual enrollment notice and year-end assessment required.",
    content:
      "Vermont requires parents to submit an annual home study enrollment notice to the Secretary of Education. Parents must also submit a year-end assessment, which can be a portfolio review, standardized test, or report by a licensed teacher.",
    requirements: [
      "Submit annual enrollment notice",
      "Provide instruction in required subjects: basic communication skills, citizenship/history/government, physical education, health, English/American literature, science, math, and fine arts",
      "Submit year-end assessment",
      "Maintain enrollment, assessment records, and attendance records",
    ],
    resources: [
      { name: "Vermont Home Education Network", url: "https://www.vhen.org/" },
      {
        name: "VT Agency of Education - Home Study",
        url: "https://education.vermont.gov/vermont-schools/school-operations/home-study",
      },
      { name: "Enrollment Notice Form", url: "https://education.vermont.gov/documents/home-study-enrollment-form" },
      { name: "Vermont's Home Study Law", url: "https://legislature.vermont.gov/statutes/section/16/003/00166b" },
    ],
  },
  VA: {
    name: "Virginia",
    summary: "Annual notice of intent and evidence of progress required.",
    content:
      "Virginia requires parents to submit an annual notice of intent to their local school division superintendent by August 15. Parents must also provide evidence of progress at the end of each school year through standardized testing or evaluation.",
    requirements: [
      "Submit annual notice of intent by August 15",
      "Parent must meet one of four qualification options",
      "Provide instruction in required subjects",
      "Submit evidence of progress annually (standardized test or evaluation)",
    ],
    resources: [
      { name: "Home Educators Association of Virginia", url: "https://heav.org/" },
      {
        name: "Virginia Department of Education - Home Instruction",
        url: "https://www.doe.virginia.gov/teaching-learning-assessment/home-instruction",
      },
      { name: "Notice of Intent Form", url: "https://www.doe.virginia.gov/home/showdocument?id=1063" },
      {
        name: "Virginia Homeschool Laws",
        url: "https://law.lis.virginia.gov/vacode/title22.1/chapter14/section22.1-254.1/",
      },
    ],
  },
  WA: {
    name: "Washington",
    summary: "Declaration of intent and annual assessment required.",
    content:
      "Washington requires parents to file an annual declaration of intent with their local school district superintendent by September 15 or within two weeks of the beginning of any public school quarter. Parents must also provide annual assessments of student progress.",
    requirements: [
      "File annual declaration of intent",
      "Parent must meet one of four qualification options",
      "Provide 1,000 hours of instruction annually (at least 450 hours for students in grades K-8 in core subjects)",
      "Teach required subjects: reading, writing, spelling, language, math, science, social studies, history, health, occupational education, and art and music appreciation",
      "Provide annual assessment (standardized test or evaluation)",
    ],
    resources: [
      { name: "Washington Homeschool Organization", url: "https://washhomeschool.org/" },
      {
        name: "Office of Superintendent of Public Instruction - Homeschooling",
        url: "https://www.k12.wa.us/student-success/learning-alternatives/home-based-instruction",
      },
      {
        name: "Declaration of Intent Form",
        url: "https://www.k12.wa.us/sites/default/files/public/alternativeed/privatehome/pubdocs/declarationofintent.pdf",
      },
      { name: "Christian Family Home Educators", url: "https://www.christianfamilyhomeeducators.org/" },
    ],
  },
  WV: {
    name: "West Virginia",
    summary: "Annual notification and assessment required.",
    content:
      "West Virginia requires parents to submit an annual notification to their county superintendent. Parents must have at least a high school diploma or GED, provide instruction in required subjects, and submit annual assessments of student progress.",
    requirements: [
      "Submit annual notification",
      "Parent must have at least a high school diploma or GED",
      "Provide instruction in required subjects: reading, language arts, math, science, and social studies",
      "Submit annual assessment (standardized test, portfolio review, or evaluation)",
    ],
    resources: [
      { name: "West Virginia Home Educators Association", url: "https://wvhea.org/" },
      {
        name: "WV Department of Education - Homeschooling",
        url: "https://wvde.us/middle-secondary-learning/home-schooling/",
      },
      {
        name: "Notification Form",
        url: "https://wvde.us/wp-content/uploads/2019/07/Home-School-Notification-Form.pdf",
      },
      { name: "Christian Home Educators of West Virginia", url: "https://chewv.org/" },
    ],
  },
  WI: {
    name: "Wisconsin",
    summary: "Annual statement of enrollment with minimal regulations.",
    content:
      "Wisconsin requires parents to file an annual statement of enrollment with the Department of Public Instruction. Beyond this simple notification, Wisconsin has very few regulations for homeschooling families.",
    requirements: [
      "File annual statement of enrollment",
      "Provide 875 hours of instruction annually",
      "Teach required subjects: reading, language arts, mathematics, social studies, science, and health",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Wisconsin Parents Association", url: "https://wisconsinspa.org/" },
      {
        name: "WI Department of Public Instruction - Homeschooling",
        url: "https://dpi.wi.gov/parental-education-options/home-based",
      },
      { name: "Statement of Enrollment Form", url: "https://dpi.wi.gov/sites/default/files/imce/forms/doc/f1206.doc" },
      { name: "Wisconsin Christian Home Educators Association", url: "https://www.wisconsinchea.com/" },
    ],
  },
  WY: {
    name: "Wyoming",
    summary: "Annual notification with minimal regulations.",
    content:
      "Wyoming requires parents to submit an annual notification to their local school district. Parents must provide instruction in the required subjects for the same number of days as public schools, but there are no teacher qualification or standardized testing requirements.",
    requirements: [
      "Submit annual notification",
      "Provide 175 days of instruction",
      "Teach required subjects: reading, writing, mathematics, civics, history, literature, and science",
      "No standardized testing requirements",
    ],
    resources: [
      { name: "Wyoming Home Educators Network", url: "http://wyominghomeschoolnetwork.com/" },
      {
        name: "WY Department of Education - Homeschooling",
        url: "https://edu.wyoming.gov/for-district-leadership/school-programs/homeschool/",
      },
      {
        name: "Notification Form",
        url: "https://edu.wyoming.gov/wp-content/uploads/2020/11/Home-Based-Education-Notification-Form.pdf",
      },
      { name: "Homeschoolers of Wyoming", url: "https://www.homeschoolersofwy.org/" },
    ],
  },
}
