import {
  Package,
  FileSignature,
  Wrench,
  BookOpen,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface KPI {
  icon: LucideIcon
  metric: string
  target: string
}

const kpis: KPI[] = [
  {
    icon: Package,
    metric: "عدد النماذج الأولية المنتجة",
    target: "≥ 5 نماذج",
  },
  {
    icon: FileSignature,
    metric: "اتفاقيات مع قطاع الصناعة",
    target: "≥ 3 اتفاقيات",
  },
  {
    icon: Wrench,
    metric: "ورش العمل والدورات",
    target: "≥ 4 سنويًا",
  },
  {
    icon: BookOpen,
    metric: "الأبحاث المنشورة باسم المركز",
    target: "≥ 2 سنويًا",
  },
  {
    icon: ShieldCheck,
    metric: "مطابقة معايير السلامة",
    target: "100%",
  },
]

export function KPIsSection() {
  return (
    <section
      id="kpis"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">
            القياس والتقييم
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            مؤشرات الأداء الرئيسية (KPIs)
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* KPI Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {kpis.map((kpi, index) => (
            <div
              key={kpi.metric}
              className="group relative bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 mx-auto group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <kpi.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              {/* Target value */}
              <div className="text-2xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {kpi.target}
              </div>

              {/* Metric name */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {kpi.metric}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-l from-primary to-secondary rounded-t-full group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
