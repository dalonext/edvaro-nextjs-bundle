import { Badge } from "@/components/ui/badge"

const technologies = [
  { name: "Next.js 16", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS v4", category: "Styling" },
  { name: "SCSS", category: "Styling" },
  { name: "Redux Toolkit", category: "State" },
  { name: "Redux Persist", category: "State" },
  { name: "React Hook Form", category: "Forms" },
  { name: "Zod", category: "Validation" },
  { name: "Recharts", category: "Charts" },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="border-b border-border/40 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Built with Modern Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Using the latest technologies for performance, maintainability, and developer experience
          </p>
        </div>

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="border-border bg-card px-4 py-2 text-sm text-foreground hover:border-primary/50 hover:bg-primary/5"
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Highlights */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">40+</div>
            <div className="text-muted-foreground">Screens Included</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">Next.js</div>
            <div className="text-muted-foreground"> Framework Version</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Responsive Design</div>
          </div>
        </div>
      </div>
    </section>
  )
}
