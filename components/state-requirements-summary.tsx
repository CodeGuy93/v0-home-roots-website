import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, CheckIcon, XIcon } from "lucide-react"
import type { EnhancedStateData } from "@/lib/enhanced-state-data"

export default function StateRequirementsSummary({
  stateData,
}: {
  stateData: EnhancedStateData | any
}) {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>{stateData.content}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Legal Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {stateData.requirements.map((requirement: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mt-0.5">
                  {index + 1}
                </div>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Notification</span>
              {stateData.notification?.required ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{stateData.notification?.details || "Information not available."}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Recordkeeping</span>
              {stateData.recordkeeping?.required ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{stateData.recordkeeping?.details || "Information not available."}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Testing Requirements</span>
              {stateData.testing?.required ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{stateData.testing?.details || "Information not available."}</p>
            {stateData.testing?.required && stateData.testing.grades.length > 0 && (
              <div className="mt-2">
                <strong>Required grades:</strong> {stateData.testing.grades.join(", ")}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Parent Qualifications</span>
              {stateData.parentQualifications?.required ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{stateData.parentQualifications?.details || "Information not available."}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Required Subjects</span>
              {stateData.subjects?.required ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{stateData.subjects?.details || "Information not available."}</p>
            {stateData.subjects?.required && stateData.subjects.list.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {stateData.subjects.list.map((subject: string, index: number) => (
                  <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Required Hours/Days</span>
              {stateData.hours?.required ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{stateData.hours?.details || "Information not available."}</p>
            {stateData.hours?.required && (
              <div className="mt-2">
                <strong>Requirement:</strong> {stateData.hours.amount}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {stateData.officialLinks && (
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Official Resources</AlertTitle>
          <AlertDescription>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href={stateData.officialLinks.lawText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View official {stateData.name} homeschool law text
                </a>
              </li>
              <li>
                <a
                  href={stateData.officialLinks.educationDept}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {stateData.name} Department of Education
                </a>
              </li>
              {stateData.officialLinks.forms.map((form: string, index: number) => (
                <li key={index}>
                  <a href={form} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Download required form {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
