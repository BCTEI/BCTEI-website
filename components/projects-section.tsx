import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "-", label: "مشروع منجز" },
  { value: "-", label: "شريك استراتيجي" },
  { value: "-", label: "كادر متخصص" },
  { value: "-", label: "سنة من الخبرة" }
]

const projects = [
  {
    title: "قريباً",
    category: "تقنية",
    description: "قريباً"
  },
  {
    title: "قريباً",
    category: "صيانة",
    description: "قريباً"
  },
  {
    title: "قريباً",
    category: "تصنيع",
    description: "قريباً"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">إنجازاتنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            مشاريعنا البارزة
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            نفخر بتقديم مجموعة متنوعة من المشاريع الناجحة التي تعكس خبراتنا وقدراتنا
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up border border-white/10 hover:border-white/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>
              <Button 
                variant="ghost" 
                className="text-white hover:text-secondary hover:bg-white/10 p-0 group-hover:gap-3 transition-all"
              >
                <span>المزيد</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
