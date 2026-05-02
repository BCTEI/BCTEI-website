import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GearIcon } from "@/components/icons/gear-icon"
import { CircuitLines } from "@/components/icons/circuit-lines"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-primary/5 via-background to-secondary/10 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96">
          <GearIcon className="w-full h-full text-primary animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-10 w-64 h-64">
          <GearIcon className="w-full h-full text-secondary animate-spin-reverse" />
        </div>
      </div>
      
      {/* Circuit Lines Decoration */}
      <div className="absolute top-1/4 left-0 w-1/3 opacity-20">
        <CircuitLines className="w-full h-auto text-accent" />
      </div>
      <div className="absolute bottom-1/4 right-0 w-1/4 opacity-20 rotate-180">
        <CircuitLines className="w-full h-auto text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            <p className="text-secondary font-medium mb-2 animate-fade-in" style={{ animationDelay: '100ms' }}>وزارة الدفاع</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              مركز <span className="gradient-text">البنيان</span>
              <br />
              للتقنية والصناعات الهندسية
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              قريباً
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                تعرف علينا
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 transition-all duration-300 hover:scale-105">
                تواصل معنا
              </Button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative animate-float">
              <Image
                src="/logo-full.png"
                alt="شعار مركز البنيان للتقنية والصناعات الهندسية"
                width={500}
                height={500}
                className="relative z-10 object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
