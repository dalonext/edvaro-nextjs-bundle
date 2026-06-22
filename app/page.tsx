"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FrameworkTabs } from "@/components/framework-tabs"
import { FeaturesSection } from "@/components/features-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"nextjs">("nextjs")

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FrameworkTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <FeaturesSection />
      <TechStackSection />
      <Footer />
    </main>
  )
}
