import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResearchDepartments } from "@/components/albunyan/research-departments"
import { AcademicSupport } from "@/components/albunyan/academic-support"
import { ProjectTasks } from "@/components/albunyan/project-tasks"
import { FiveYearPlan } from "@/components/albunyan/five-year-plan"
import { KPIsSection } from "@/components/albunyan/kpis-section"
import { AlbunyanCTA } from "@/components/albunyan/albunyan-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ResearchDepartments />
      <AcademicSupport />
      <ProjectTasks />
      <FiveYearPlan />
      <KPIsSection />
      <AlbunyanCTA />
      <Footer />
    </main>
  )
}
