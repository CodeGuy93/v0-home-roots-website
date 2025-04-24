import type { StarterKitContent } from "../../starter-kit-data"

export const louisianaStarterKit: Partial<StarterKitContent> = {
  introduction:
    "Welcome to your Louisiana homeschooling journey! Louisiana offers two legal options for homeschooling families: operating as a home study program or as a registered nonpublic school. This starter kit provides essential resources and guidance specific to homeschooling in Louisiana, helping you navigate the requirements while creating a rich educational experience for your children.",
  gettingStartedSteps: [
    "Choose your legal option: home study program (approved by BESE) or registered nonpublic school (not seeking state approval)",
    "For home study: Submit an application to the Louisiana Department of Education within 15 days of starting",
    "For registered nonpublic school: Submit initial registration form by October 1",
    "Provide 180 days of instruction per year",
    "For home study: Prepare for an annual renewal with evidence of satisfactory progress",
    "Connect with Louisiana homeschool groups for support and resources",
  ],
  withdrawalLetterTemplate: `[Your Name]
[Your Address]
[City, LA Zip]
[Date]

[School Name]
[School Address]
[City, LA Zip]

Re: Withdrawal of [Child's Name]

Dear [Principal's Name]:

This letter is to inform you that I am withdrawing my child, [Child's Name], from [School Name] effective [Date]. We will be homeschooling in compliance with Louisiana state law as a [home study program/registered nonpublic school].

I have submitted the required application/registration to the Louisiana Department of Education.

Please release my child's records to me at the address above.

Sincerely,

[Your Signature]
[Your Printed Name]`,
  recordKeepingTips: [
    "Keep copies of all applications, registrations, and correspondence with the Department of Education",
    "Maintain attendance records showing 180 days of instruction",
    "For home study: Document curriculum used for each subject",
    "Save samples of your child's work for evidence of progress",
    "For home study: Prepare for annual renewal with standardized test scores or teacher evaluation",
    "For high school students, create detailed transcripts for college applications",
  ],
  stateSpecificResources: [
    "Louisiana Department of Education - Home Study Program - louisianabelieves.com",
    "Christian Home Educators Fellowship of Louisiana (CHEF) - chefofla.org",
    "Louisiana Homeschool Association - Support and resources",
    "Louisiana Virtual School - Supplemental online courses",
    "Louisiana State Library - Resources for homeschoolers",
  ],
  recommendedCurriculum: [
    "Louisiana history resources from the Louisiana Historical Society",
    "Louisiana Public Broadcasting - Educational programs",
    "Louisiana Museum of Natural History - Science education resources",
    "Louisiana Art & Science Museum - Educational programs",
    "Louisiana 4-H - Project-based learning opportunities",
  ],
}
