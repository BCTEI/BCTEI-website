import { Quote } from "lucide-react"

export function AlbunyanHero() {
  return (
    <section
      id="albunyan-hero"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #0a2f5a 0%, #0f4c6b 50%, #0a2f5a 100%)",
      }}
    >
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#facc15]/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0f4c6b]/30 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse" />
          <span className="text-white/80 text-sm font-medium">منصة وطنية للابتكار والتصنيع الذكي</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          مركز{" "}
          <span
            className="bg-gradient-to-l from-[#facc15] via-[#fde68a] to-[#facc15] bg-clip-text"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            البنيان
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90">
            للتقنية والصناعات الهندسية
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          منصة وطنية للابتكار، التطوير، والتصنيع الذكي
        </p>

        {/* Divider + Quote */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="w-24 h-px bg-gradient-to-l from-transparent via-white/40 to-transparent mx-auto mb-8" />
          <div className="flex items-start justify-center gap-3 max-w-2xl mx-auto">
            <Quote className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1 rotate-180" />
            <p className="text-white/70 text-lg md:text-xl italic leading-relaxed">
              تحويل الأفكار إلى منتجات، والبحوث إلى حلول، والمختبرات إلى خطوط إنتاج.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
