import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import type { EnhancedStateData, Resource } from "@/lib/enhanced-state-data"

export default function StateResourcesList({
  stateData,
}: {
  stateData: EnhancedStateData | any
}) {
  // If we're using the basic state data, convert the resources to the enhanced format
  const resources =
    stateData.resources?.length > 0
      ? stateData.resources
      : stateData.resources?.map((resource: { name: string; url: string }) => ({
          ...resource,
          description: "",
          category: "support" as const,
        })) || []

  // Group resources by category
  const officialResources = resources.filter((r: Resource) => r.category === "official")
  const legalResources = resources.filter((r: Resource) => r.category === "legal")
  const communityResources = resources.filter((r: Resource) => r.category === "community")
  const curriculumResources = resources.filter((r: Resource) => r.category === "curriculum")
  const supportResources = resources.filter((r: Resource) => r.category === "support")

  return (
    <div className="space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Find helpful resources for homeschooling in {stateData.name}, including official information, legal
          assistance, curriculum options, and community support.
        </p>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          {officialResources.length > 0 && <TabsTrigger value="official">Official</TabsTrigger>}
          {legalResources.length > 0 && <TabsTrigger value="legal">Legal</TabsTrigger>}
          {communityResources.length > 0 && <TabsTrigger value="community">Community</TabsTrigger>}
          {curriculumResources.length > 0 && <TabsTrigger value="curriculum">Curriculum</TabsTrigger>}
          {supportResources.length > 0 && <TabsTrigger value="support">Support</TabsTrigger>}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource: Resource, index: number) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>

        {officialResources.length > 0 && (
          <TabsContent value="official">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officialResources.map((resource: Resource, index: number) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        )}

        {legalResources.length > 0 && (
          <TabsContent value="legal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalResources.map((resource: Resource, index: number) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        )}

        {communityResources.length > 0 && (
          <TabsContent value="community">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityResources.map((resource: Resource, index: number) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        )}

        {curriculumResources.length > 0 && (
          <TabsContent value="curriculum">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculumResources.map((resource: Resource, index: number) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        )}

        {supportResources.length > 0 && (
          <TabsContent value="support">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportResources.map((resource: Resource, index: number) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{resource.name}</span>
          <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
            {resource.category}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {resource.description && <p className="mb-4">{resource.description}</p>}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline flex items-center gap-1"
        >
          Visit website <ExternalLink className="h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  )
}
