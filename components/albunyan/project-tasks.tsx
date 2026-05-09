import {
  BarChart3,
  CalendarDays,
  Cpu,
  TrendingUp,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface TaskCard {
  icon: LucideIcon
  title: string
  description: string
}

const tasks: TaskCard[] = [
  {
    icon: BarChart3,
    title: "تحديد أولويات البحث والتطوير",
    description: "بناءً على احتياجات السوق المحلي والصناعات الوطنية.",
  },
  {
    icon: CalendarDays,
    title: "خطة خمسية للتطبيق الصناعي",
    description: "مراحل التوسع، نقل التقنية، وتوطين الصناعات.",
  },
  {
    icon: Cpu,
    title: "تشغيل المصانع الصغيرة",
    description: "كمنصات تطبيقية تربط المختبرات بخطوط الإنتاج الحقيقية.",
  },
  {
    icon: TrendingUp,
    title: "تقييم دوري للأداء",
    description: "ربط مخرجات البحث مباشرة بالصناعة وقياس الأثر.",
  },
]

export function ProjectTasks() {
  return (
    <section
      id="project-tasks"
      className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent text-white overflow-hidden relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-2">
            الخطة التنفيذية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            المهام الأساسية للمشروع
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-[#facc15] to-secondary mx-auto rounded-full" />
        </div>

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tasks.map((task, index) => (
            <div
              key={task.title}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/10 hover:border-white/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#facc15]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <task.icon className="w-7 h-7 text-[#facc15] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold mb-3">{task.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
