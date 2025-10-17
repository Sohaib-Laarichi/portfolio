import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechnicalSkills from '@/components/TechnicalSkills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import DynamicBackground from '@/components/DynamicBackground'
import ThemeTransition from '@/components/ThemeTransition'
import AnimatedIcons from '@/components/AnimatedIcons'
import CustomCursor from '@/components/CustomCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import SectionBackground from '@/components/SectionBackground'
import ParallaxElements from '@/components/ParallaxElements'

export default function Home() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      {/* Dynamic Theme Background */}
      <ThemeTransition />
      <DynamicBackground />
      
      {/* Custom Cursor (Desktop only) */}
      <div className="hidden lg:block fixed inset-0 z-50 pointer-events-none">
        <CustomCursor />
      </div>
      
      {/* Parallax Elements */}
      <ParallaxElements />
      
      {/* Additional Background Animations */}
      <div className="fixed inset-0 z-5">
        <AnimatedIcons />
      </div>
      
      {/* Content - Full Width */}
      <div className="relative z-10 w-full">
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />
        
        <Navbar />
        
        {/* Full viewport sections with dynamic backgrounds */}
        <SectionBackground type="hero" className="w-full">
          <Hero />
        </SectionBackground>
        
        <SectionBackground type="about" className="w-full">
          <About />
        </SectionBackground>
        
        <SectionBackground type="skills" className="w-full">
          <TechnicalSkills />
        </SectionBackground>
        
        <SectionBackground type="experience" className="w-full">
          <Experience />
        </SectionBackground>
        
        <SectionBackground type="projects" className="w-full">
          <Projects />
        </SectionBackground>
        
        <SectionBackground type="contact" className="w-full">
          <Contact />
        </SectionBackground>
        
        <div className="w-full">
          <Footer />
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </main>
  )
}