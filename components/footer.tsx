import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* CTA Section */}
        <div className="mb-16 rounded-2xl bg-primary/10 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Ready to Launch Your Online Course Platform?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Get Eadvro today and start building a mobile-first education app with PWA support and instructor dashboard features.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://ui8.net/dalonext-1a4b85/products/edavro--nextjs-education-lms-pwa--admin-dashboard" target="_blank" rel="noopener noreferrer">
              purchase now
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center ">
              <span className="text-sm font-bold text-primary-foreground"> <Image src="/thumbnail.png" alt="Eadvro Logo" width={32} height={32} /></span>
            </div>
            <span className="text-lg font-bold text-foreground">Eadvro</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#demos" className="transition-colors hover:text-foreground">
              Demos
            </Link>
            <Link href="#features" className="transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#tech-stack" className="transition-colors hover:text-foreground">
              Tech Stack
            </Link>
            <a 
              href=" /support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Support
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Eadvro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
