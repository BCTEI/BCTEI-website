import {
  BookOpen,
  Presentation,
  GraduationCap,
  FlaskConical,
  ClipboardList,
  Microscope,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SupportCard {
  icon: LucideIcon
  title: string
  description: string
}

const academicCards: SupportCard[] = [
  {
    icon: BookOpen,
    title: "مناهج تدريبية",
    description:
      "إعداد مناهج متخصصة في المواد المركبة، الطائرات المسيّرة، أنظمة التحكم والاتصالات.",
  },
  {
    icon: Presentation,
    title: "ورش عمل ودورات",
    description:
      "تطبيقية للمهندسين والفنيين بشكل دوري لرفع الكفاءة الوطنية.",
  },
  {
    icon: GraduationCap,
    title: "نشر الأبحاث",
    description:
      "نشر أبحاث علمية باسم المركز في مجلات ومؤتمرات دولية.",
  },
]

const labCards: SupportCard[] = [
  {
    icon: FlaskConical,
    title: "مختبرات متخصصة",
    description:
      "اختبار المواد، ديناميكا الطيران، أنظمة الاتصالات والتحكم.",
  },
  {
    icon: ClipboardList,
    title: "السلامة والجودة",
    description:
      "تطبيق بروتوكولات ISO/ASTM ومعايير السلامة الصارمة.",
  },
  {
    icon: Microscope,
    title: "اختبار النماذج",
    description:
      "اختبار النماذج المنتجة في المصانع الصغيرة قبل الاعتماد والتسويق.",
  },
]

function CardGrid({
  cards,
  offsetDelay = 0,
}: {
  cards: SupportCard[]
  offsetDelay?: number
}) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className="group text-center bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in-up"
          style={{ animationDelay: `${offsetDelay + index * 120}ms` }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 mx-auto group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <card.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {card.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export function AcademicSupport() {
  return (
    <section id="academic-support" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Academic Support */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold mb-2">
              التعليم والتطوير
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              الدعم الأكاديمي والتعليمي
            </h2>
            <div className="w-20 h-1 bg-gradient-to-l from-primary to-secondary mx-auto rounded-full" />
          </div>
          <CardGrid cards={academicCards} />
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
          <div className="w-3 h-3 rounded-full bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-secondary/30" />
          <div className="w-3 h-3 rounded-full bg-primary/30" />
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Labs */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold mb-2">
              البحث والتجريب
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              المختبرات والتجارب
            </h2>
            <div className="w-20 h-1 bg-gradient-to-l from-primary to-secondary mx-auto rounded-full" />
          </div>
          <CardGrid cards={labCards} offsetDelay={400} />
        </div>
      </div>
    </section>
  )
}
