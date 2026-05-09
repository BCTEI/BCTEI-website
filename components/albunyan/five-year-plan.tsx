import {
  Building2,
  Play,
  Expand,
  Award,
  Crown,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Phase {
  year: number
  icon: LucideIcon
  name: string
  objectives: string
}

const phases: Phase[] = [
  {
    year: 1,
    icon: Building2,
    name: "التأسيس",
    objectives: "تجهيز المختبرات، تعيين الكوادر، بدء تشغيل مصنع صغير واحد.",
  },
  {
    year: 2,
    icon: Play,
    name: "التشغيل التجريبي",
    objectives: "تشغيل جميع المصانع الصغيرة، أولى النماذج المنتجة.",
  },
  {
    year: 3,
    icon: Expand,
    name: "التوسع المحلي",
    objectives: "شراكات مع صناعات محلية، تسويق أولى المنتجات.",
  },
  {
    year: 4,
    icon: Award,
    name: "الاعتماد والجودة",
    objectives: "حصول المنتجات على شهادات دولية، نشر أبحاث.",
  },
  {
    year: 5,
    icon: Crown,
    name: "الريادة الإقليمية",
    objectives: "تصدير تقنية، استقبال باحثين من المنطقة، استدامة مالية.",
  },
]

export function FiveYearPlan() {
  return (
    <section id="five-year-plan" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">
            خارطة الطريق
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            الخطة الخمسية المقترحة
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — visible on md+ */}
          <div className="hidden md:block absolute top-[60px] right-0 left-0 h-1 bg-gradient-to-l from-primary/20 via-secondary/30 to-primary/20 rounded-full z-0" />

          {/* Mobile connecting line */}
          <div className="md:hidden absolute top-0 bottom-0 right-8 w-1 bg-gradient-to-b from-primary/20 via-secondary/30 to-primary/20 rounded-full z-0" />

          {/* Phase cards */}
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {phases.map((phase, index) => (
              <div
                key={phase.year}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Desktop layout */}
                <div className="hidden md:flex flex-col items-center group">
                  {/* Year badge */}
                  <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                    <div className="text-center">
                      <span className="block text-white/70 text-xs font-medium">
                        السنة
                      </span>
                      <span className="block text-white text-3xl font-extrabold leading-none">
                        {phase.year}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative w-full bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 mx-auto group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <phase.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-bold text-foreground mb-2 text-sm">
                      {phase.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {phase.objectives}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-l from-primary to-secondary rounded-t-full group-hover:w-3/4 transition-all duration-500" />
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start gap-4 pr-4 mb-6">
                  {/* Dot on the timeline */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">
                        {phase.year}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative flex-1 bg-card rounded-xl p-5 shadow-md border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                        <phase.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-foreground text-sm">
                        {phase.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {phase.objectives}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-l from-primary to-secondary rounded-t-full group-hover:w-3/4 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
