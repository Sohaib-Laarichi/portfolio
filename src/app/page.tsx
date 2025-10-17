import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechnicalSkills from '@/components/TechnicalSkills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingParticles from '@/components/FloatingParticles'
import AnimatedIcons from '@/components/AnimatedIcons'
import CustomCursor from '@/components/CustomCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgressBar from '@/components/ScrollProgressBar'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500 relative overflow-x-hidden">
      {/* Custom Cursor (Desktop only) */}
      <div className="hidden lg:block fixed inset-0 z-50 pointer-events-none">
        <CustomCursor />
      </div>
      
      {/* Background Animations - Full Screen */}
      <div className="fixed inset-0 z-0">
        <FloatingParticles />
      </div>
      <div className="fixed inset-0 z-1">
        <AnimatedIcons />
      </div>
      
      {/* Content - Full Width */}
      <div className="relative z-10 w-full">
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />
        
        <Navbar />
        
        {/* Full viewport sections */}
        <div className="w-full">
          <Hero />
        </div>
        
        <div className="w-full">
          <About />
        </div>
        
        <div className="w-full">
          <TechnicalSkills />
        </div>
        
        <div className="w-full">
          <Experience />
        </div>
        
        <div className="w-full">
          <Projects />
        </div>
        
        <div className="w-full">
          <Contact />
        </div>
        
        <div className="w-full">
          <Footer />
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </main>
  )
}