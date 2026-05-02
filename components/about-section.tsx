import Image from "next/image"
import { Target, Eye, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "رسالتنا",
    description: "قريباً"
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    description: "قريباً"
  },
  {
    icon: Award,
    title: "قيمنا",
    description: "قريباً"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side - hidden on mobile */}
          <div className="flex-1 relative hidden lg:block">
            <div className="relative group">
              <div className="relative animate-float">
                <Image
                  src="/logo-circle.png"
                  alt="شعار مركز البنيان الدائري"
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <span className="inline-block text-secondary font-semibold mb-2">من نحن</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              مركز البنيان للتقنية والصناعات الهندسية
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              قريباً
            </p>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start group animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
