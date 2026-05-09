import {
  Target,
  Eye,
  Gem,
  Link2,
  Lightbulb,
  ShieldCheck,
  Flag,
  Handshake,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ValueItem {
  icon: LucideIcon
  label: string
}

const values: ValueItem[] = [
  { icon: Link2, label: "التكامل" },
  { icon: Lightbulb, label: "الابتكار" },
  { icon: ShieldCheck, label: "الجودة والسلامة" },
  { icon: Flag, label: "الوطنية" },
  { icon: Handshake, label: "الشراكة" },
]

const cards = [
  {
    icon: Target,
    title: "الرسالة",
    content: (
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        نحوِّل المعرفة إلى قيمة صناعية واقتصادية عبر منظومة بحثية تطبيقية
        متكاملة، تجمع الأبحاث المتقدمة، المصانع الصغيرة القائمة على المواد
        المركبة، والمختبرات المتخصصة لدعم الصناعات الوطنية.
      </p>
    ),
  },
  {
    icon: Eye,
    title: "الرؤية",
    content: (
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        الريادة في بناء اقتصاد معرفي صناعي، وتحويل ليبيا إلى مركز إقليمي
        للابتكار والتصنيع الذكي في مجالات التقنية والهندسة التطبيقية.
      </p>
    ),
  },
  {
    icon: Gem,
    title: "قيمنا",
    content: (
      <ul className="space-y-3">
        {values.map((v) => (
          <li key={v.label} className="flex items-center gap-3 group/val">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/val:bg-primary/20 transition-colors">
              <v.icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-muted-foreground text-sm md:text-base font-medium">
              {v.label}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
]

export function MissionVisionValues() {
  return (
    <section id="mission-vision" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            رسالتنا · رؤيتنا · قيمنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 mx-auto group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <card.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground text-center mb-5 group-hover:text-primary transition-colors">
                {card.title}
              </h3>

              {/* Content */}
              <div className="text-right">{card.content}</div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-tl-2xl">
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
