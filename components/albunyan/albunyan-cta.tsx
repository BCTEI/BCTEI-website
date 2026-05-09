import { Handshake } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AlbunyanCTA() {
  return (
    <section
      id="albunyan-cta"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a2f5a 0%, #0f4c6b 50%, #0a2f5a 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#facc15]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up text-balance">
          مركز البنيان ليس مجرد مشروع بحثي
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          منصة وطنية للابتكار، والتطوير، والتصنيع الذكي. ندعوكم إلى دعم هذا
          المشروع والمساهمة في بنائه.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-[#facc15] hover:bg-[#fde68a] text-[#0a2f5a] font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Handshake className="w-5 h-5 ml-2" />
              كن شريكًا في النجاح
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
