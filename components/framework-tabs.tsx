"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, Smartphone, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Framework = "nextjs" 

interface FrameworkProduct {
  name: string
  icon: ReactNode
  description: string
  badge?: string
  pwa: {
    title: string
    description: string
    previewUrl: string
    docsUrl: string
    thumbnail: string
  }
  dashboard: {
    title: string
    description: string
    previewUrl: string
    docsUrl: string
    thumbnail: string
  } | null
  dashboardNote?: string
}

interface FrameworkTabsProps {
  activeTab: Framework
  setActiveTab: (tab: Framework) => void
}

const frameworkData: Record<Framework, FrameworkProduct> = {
  nextjs: {
    name: "Next.js",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    ),
    description: "Next.js 16 + React 19 + TypeScript",
    badge: "Recommended",
    pwa: {
      title: "Education PWA",
      description: "Built with Next.js 16, TypeScript, Redux Toolkit, and SCSS for online learning",
      previewUrl: "https://edavro-next.vercel.app",
      docsUrl: "/Nextjs/documentation.html",
      thumbnail: "/Nextjs/preview.jpg"
    },
    dashboard: {
      title: "Instructor Dashboard",
      description: "Premium dashboard with Tailwind CSS v4, Recharts, and Zod validation for education platforms",
      previewUrl: "https://edvaro-dashboard-nextjs.vercel.app",
      docsUrl: "/Nextjs/dashboard-documentation.html",
      thumbnail: "/Nextjs/dashboard.jpg"
    }
  }
}

export function FrameworkTabs({ activeTab, setActiveTab }: FrameworkTabsProps) {
  const frameworks: Framework[] = ["nextjs"]
  const currentFramework = frameworkData[activeTab]

  return (
    <section id="demos" className="border-b border-border/40 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Choose Your Framework
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Edavro is available in a Next.js version. Select your preferred technology stack below.
          </p>
        </div>

        {/* Framework Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-xl bg-secondary p-1.5">
            {frameworks.map((framework) => {
              const data = frameworkData[framework]
              return (
                <button
                  key={framework}
                  onClick={() => setActiveTab(framework)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all",
                    activeTab === framework
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {data.icon}
                  <span>{data.name}</span>
                  {data?.badge && activeTab === framework && (
                    <Badge variant="secondary" className="ml-1 bg-primary-foreground/20 text-xs text-primary-foreground">
                      {data?.badge}
                    </Badge>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Framework Description */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">{currentFramework.description}</p>
        </div>

        {/* Demo Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* PWA Card */}
          <Card className="overflow-hidden border-border bg-card transition-all hover:border-primary/50">
            <div className="relative aspect-video bg-secondary overflow-hidden">
              <Image src={currentFramework.pwa.thumbnail} alt={`${currentFramework.pwa.title} Thumbnail`} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">{currentFramework.pwa.title}</CardTitle>
              </div>
              <CardDescription>{currentFramework.pwa.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={currentFramework.pwa.previewUrl} target="_blank" rel="noopener noreferrer">
                    Live Preview
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-border text-foreground hover:bg-accent">
                  <a href={currentFramework.pwa.docsUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Card */}
          <Card className={cn(
            "overflow-hidden border-border bg-card transition-all",
            currentFramework.dashboard && currentFramework.dashboard.thumbnail !== "comming soon" ? "hover:border-primary/50" : ""
          )}>
            <div className="relative aspect-video bg-secondary overflow-hidden flex items-center justify-center">
              {currentFramework.dashboard && currentFramework.dashboard.thumbnail !== "comming soon"
                ? <Image src={currentFramework.dashboard.thumbnail} alt={`${currentFramework.dashboard.title} Thumbnail`} fill className="object-cover" />
                : <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <div className="text-2xl font-bold text-foreground bg-secondary px-6 py-4 rounded-lg border-2 border-dashed border-primary/50">
                      Coming Soon
                    </div>
                    <p className="text-xs text-muted-foreground">Dashboard will be available shortly</p>
                  </div>
              }
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">
                  {currentFramework.dashboard?.title || "Instructor Dashboard"}
                </CardTitle>
                {currentFramework.dashboard && currentFramework.dashboard.thumbnail === "comming soon" && (
                  <Badge variant="outline" className="ml-2 border-primary/50 text-primary">
                    In Progress
                  </Badge>
                )}
              </div>
              <CardDescription>
                {currentFramework.dashboard?.description || currentFramework?.dashboardNote}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentFramework.dashboard && currentFramework.dashboard.thumbnail !== "comming soon" ? (
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={currentFramework.dashboard.previewUrl} target="_blank" rel="noopener noreferrer">
                      Live Preview
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-border text-foreground hover:bg-accent">
                    <a href={currentFramework.dashboard.docsUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Documentation
                    </a>
                  </Button>
                </div>
              ) : (
                <Button disabled variant="outline" className="border-border text-muted-foreground">
                  Coming Soon
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
