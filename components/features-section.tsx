import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Smartphone, 
  LayoutDashboard, 
  ShieldCheck, 
  BarChart3, 
  ShoppingCart, 
  MapPin, 
  Bell, 
  CreditCard,
  FileText,
  Palette
} from "lucide-react"

const pwaFeatures = [
  {
    icon: Smartphone,
    title: "Installable PWA",
    description: "App-like learning experience with offline support"
  },
  {
    icon: ShieldCheck,
    title: "Authentication Flow",
    description: "Login, signup, forgot password, and OTP verification"
  },
  {
    icon: FileText,
    title: "Course Browser",
    description: "Course listing, detail pages, and bookmarking"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Track student progress with learning analytics"
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "In-app alerts for assignments, updates, and reminders"
  }
]

const dashboardFeatures = [
  {
    icon: LayoutDashboard,
    title: "Instructor Dashboard",
    description: "Manage courses, students, and platform settings"
  },
  {
    icon: BarChart3,
    title: "Analytics & Charts",
    description: "Learning performance metrics and student insights"
  },
  {
    icon: FileText,
    title: "Course Management",
    description: "Create, edit, and publish online courses"
  },
  {
    icon: ShoppingCart,
    title: "Wishlist & Bookmarks",
    description: "Student favorites, bookmarks, and saved courses"
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Easy theme and layout customization with docs"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border/40 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A complete education platform with both student-facing PWA and instructor dashboard, built with Next.js
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* PWA Features */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">PWA Features</h3>
            </div>
            <div className="space-y-4">
              {pwaFeatures.map((feature, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dashboard Features */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <LayoutDashboard className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Dashboard Features</h3>
            </div>
            <div className="space-y-4">
              {dashboardFeatures.map((feature, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
