import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { EnhancedStateData, LocalGroup } from "@/lib/enhanced-state-data"
import { MapPin, Globe, Mail } from "lucide-react"

export default function StateLocalGroups({
  stateData,
}: {
  stateData: EnhancedStateData | any
}) {
  // Default message if no local groups are provided
  const noGroupsMessage = (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">We're building our directory!</h3>
      <p className="text-muted-foreground mb-6">
        We're currently collecting information about local homeschool groups in {stateData.name}.
      </p>
      <Button>Submit a Local Group</Button>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Connect with other homeschooling families in {stateData.name} through local support groups, co-ops, and
          community organizations.
        </p>
      </div>

      {stateData.localGroups?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stateData.localGroups.map((group: LocalGroup, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{group.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span>{group.location}</span>
                </div>
                <p className="mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-4">
                  {group.website && (
                    <a
                      href={group.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <Globe className="h-4 w-4" /> Website
                    </a>
                  )}
                  {group.contactEmail && (
                    <a
                      href={`mailto:${group.contactEmail}`}
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <Mail className="h-4 w-4" /> Contact
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        noGroupsMessage
      )}

      <div className="bg-muted p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Know a local group that's not listed?</h3>
        <p className="text-muted-foreground mb-4">
          Help us build the most comprehensive directory of homeschool groups in {stateData.name}.
        </p>
        <Button>Submit a Group</Button>
      </div>
    </div>
  )
}
