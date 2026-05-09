import {
  Factory,
  Rocket,
  Boxes,
  Network,
  CheckCircle,
  TrendingUp,
  Cpu,
  Database,
  Shield,
  Globe,
  FileText,
  MonitorCog,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface DeptItem {
  icon: LucideIcon
  text: string
}

interface Department {
  icon: LucideIcon
  title: string
  objective: string
  items: DeptItem[]
}

const departments: Department[] = [
  {
    icon: Factory,
    title: "قسم التقنية الصناعية",
    objective: "حلول صناعية مبتكرة، نماذج أولية، مصانع صغيرة لهياكل المركبات.",
    items: [
      { icon: CheckCircle, text: "تصميم واختبار نماذج أولية لهياكل المركبات" },
      { icon: CheckCircle, text: "استخدام التصنيع الرقمي (3D printing, CNC)" },
      { icon: CheckCircle, text: "تشغيل مصنع صغير لهياكل المركبات" },
      { icon: TrendingUp, text: "المخرجات: نماذج أولية، خط إنتاج تجريبي" },
    ],
  },
  {
    icon: Rocket,
    title: "قسم الهندسة التطبيقية",
    objective: "أبحاث ميكانيكية وكهربائية، مصانع صغيرة لطائرات مسيّرة.",
    items: [
      { icon: CheckCircle, text: "ديناميكا الطيران وأنظمة التحكم" },
      {
        icon: CheckCircle,
        text: "تصميم وتجميع طائرات مسيّرة (مراقبة / زراعية)",
      },
      { icon: CheckCircle, text: "اختبار الطيران الحقيقي" },
      { icon: Cpu, text: "حزمة تقنية كاملة + أنظمة تحكم" },
    ],
  },
  {
    icon: Boxes,
    title: "قسم المواد والتصنيع",
    objective: "مواد مركبة ومعادن، مصانع صغيرة للهياكل الهندسية والبنائية.",
    items: [
      {
        icon: CheckCircle,
        text: "إنتاج واختبار مواد مركبة (ألياف كربون/زجاج)",
      },
      { icon: CheckCircle, text: "سبائك خفيفة ومقاومة" },
      { icon: CheckCircle, text: "تشغيل مصنع صغير للألواح والدعامات" },
      { icon: Database, text: "قاعدة بيانات للمواد المحلية" },
    ],
  },
  {
    icon: Network,
    title: "قسم الاتصالات",
    objective:
      "البنية الرقمية الآمنة، ربط الأقسام والمصانع الصغيرة والمختبرات.",
    items: [
      { icon: Shield, text: "شبكات داخلية آمنة وسيادة سايبرانية" },
      {
        icon: MonitorCog,
        text: "إنترنت الأشياء الصناعي (IIoT) وغرفة تحكم مركزية",
      },
      { icon: Globe, text: "تمكين التعاون عن بُعد مع الشركاء الدوليين" },
      { icon: FileText, text: "وثيقة الأمن السيبراني للمركز" },
    ],
  },
]

export function ResearchDepartments() {
  return (
    <section
      id="research-departments"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">
            أقسامنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            الأقسام البحثية والتطبيقية
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <div
              key={dept.title}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <dept.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-semibold text-foreground/80">
                      الهدف:
                    </span>{" "}
                    {dept.objective}
                  </p>
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {dept.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <item.icon className="w-5 h-5 text-primary/70 flex-shrink-0 group-hover/item:text-primary transition-colors" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative accent line */}
              <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-primary to-secondary rounded-r-2xl group-hover:h-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
