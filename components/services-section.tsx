import { Wrench, Cpu, Settings, Shield, Cog, Zap } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "التصنيع الهندسي",
    description: "قريباً"
  },
  {
    icon: Wrench,
    title: "الصيانة والإصلاح",
    description: "قريباً"
  },
  {
    icon: Cpu,
    title: "الحلول التقنية",
    description: "قريباً"
  },
  {
    icon: Shield,
    title: "الأنظمة الأمنية",
    description: "قريباً"
  },
  {
    icon: Settings,
    title: "الاستشارات الهندسية",
    description: "قريباً"
  },
  {
    icon: Zap,
    title: "التحديث والتطوير",
    description: "قريباً"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-muted/50">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group text-center py-8 px-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 mx-auto group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
