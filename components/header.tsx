"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center ">
            <Image src="/thumbnail.png" alt="Eadvro Logo" width={36} height={36}  />
          </div>
          <span className="text-xl font-bold text-foreground">Eadvro</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#demos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Demos
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#tech-stack" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Tech Stack
          </Link>
        </nav>

        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="https://www.dalonext.com/" target="_blank" rel="noopener noreferrer">
            purchase now
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  )
}
