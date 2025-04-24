"use client"

import {
  DisplayLarge,
  Display,
  Heading1,
  Heading2,
  Heading3,
  Title,
  BodyLarge,
  Body,
  Small,
  Tiny,
} from "@/components/ui/typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ThemeDemo() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <section className="space-y-6">
        <Heading1>Typography System</Heading1>

        <div className="space-y-6">
          <DisplayLarge>Display Large (3.5rem)</DisplayLarge>
          <Display>Display (2.75rem)</Display>
          <Heading1>Heading 1 (2.25rem)</Heading1>
          <Heading2>Heading 2 (1.875rem)</Heading2>
          <Heading3>Heading 3 (1.5rem)</Heading3>
          <Title>Title (1.25rem)</Title>
          <BodyLarge>
            Body Large (1.125rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            aliquam ultricies.
          </BodyLarge>
          <Body>
            Body (1rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam
            ultricies, nisl nisl aliquam nisl.
          </Body>
          <Small>Small (0.875rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Small>
          <Tiny>Tiny (0.75rem) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tiny>
        </div>
      </section>

      <section className="space-y-6">
        <Heading1>Color System</Heading1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-primary-50 rounded flex items-center justify-center">50</div>
                <div className="h-12 bg-primary-100 rounded flex items-center justify-center">100</div>
                <div className="h-12 bg-primary-200 rounded flex items-center justify-center">200</div>
                <div className="h-12 bg-primary-300 rounded flex items-center justify-center">300</div>
                <div className="h-12 bg-primary-400 rounded flex items-center justify-center text-white">400</div>
                <div className="h-12 bg-primary-500 rounded flex items-center justify-center text-white">500</div>
                <div className="h-12 bg-primary-600 rounded flex items-center justify-center text-white">600</div>
                <div className="h-12 bg-primary-700 rounded flex items-center justify-center text-white">700</div>
                <div className="h-12 bg-primary-800 rounded flex items-center justify-center text-white">800</div>
                <div className="h-12 bg-primary-900 rounded flex items-center justify-center text-white">900</div>
                <div className="h-12 bg-primary-950 rounded flex items-center justify-center text-white">950</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secondary Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-secondary-50 rounded flex items-center justify-center">50</div>
                <div className="h-12 bg-secondary-100 rounded flex items-center justify-center">100</div>
                <div className="h-12 bg-secondary-200 rounded flex items-center justify-center">200</div>
                <div className="h-12 bg-secondary-300 rounded flex items-center justify-center">300</div>
                <div className="h-12 bg-secondary-400 rounded flex items-center justify-center text-white">400</div>
                <div className="h-12 bg-secondary-500 rounded flex items-center justify-center text-white">500</div>
                <div className="h-12 bg-secondary-600 rounded flex items-center justify-center text-white">600</div>
                <div className="h-12 bg-secondary-700 rounded flex items-center justify-center text-white">700</div>
                <div className="h-12 bg-secondary-800 rounded flex items-center justify-center text-white">800</div>
                <div className="h-12 bg-secondary-900 rounded flex items-center justify-center text-white">900</div>
                <div className="h-12 bg-secondary-950 rounded flex items-center justify-center text-white">950</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accent Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-accent-50 rounded flex items-center justify-center">50</div>
                <div className="h-12 bg-accent-100 rounded flex items-center justify-center">100</div>
                <div className="h-12 bg-accent-200 rounded flex items-center justify-center">200</div>
                <div className="h-12 bg-accent-300 rounded flex items-center justify-center">300</div>
                <div className="h-12 bg-accent-400 rounded flex items-center justify-center text-white">400</div>
                <div className="h-12 bg-accent-500 rounded flex items-center justify-center text-white">500</div>
                <div className="h-12 bg-accent-600 rounded flex items-center justify-center text-white">600</div>
                <div className="h-12 bg-accent-700 rounded flex items-center justify-center text-white">700</div>
                <div className="h-12 bg-accent-800 rounded flex items-center justify-center text-white">800</div>
                <div className="h-12 bg-accent-900 rounded flex items-center justify-center text-white">900</div>
                <div className="h-12 bg-accent-950 rounded flex items-center justify-center text-white">950</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <Heading1>Button Variants</Heading1>

        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </section>
    </div>
  )
}
