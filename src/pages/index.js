import { TimelineDemo } from "../components/ui/TimelineDemo";
import FAQWithSpiral from "../components/ui/faq-section";
import HeroSection from "../components/ui/hero-2.tsx";
import AboutUs from "../components/AboutUs";
import { PremiumContact } from "../components/ui/premium-contact";
import { PremiumFooter } from "../components/ui/premium-footer";
import { GlowingEffectDemo } from "../components/ui/glowing-effect-demo";
import { FeatureStepsDemo } from "../components/ui/FeatureStepsDemo";
import { CircularTestimonialsDemo } from "../components/ui/CircularTestimonialsDemo";
import Navbar from "../components/ui/Navbar";
import ProjectImageCarousel from "../components/ui/ProjectImageCarousel";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* About Us as a normal section */}
      <section id="about">
        <AboutUs />
      </section>
      {/* Our Services full screen section */}
      <section id="services" className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto w-full px-2 py-8 flex flex-col items-center justify-center md:px-4 md:py-24">
          <h3 className="w-full text-4xl font-bold text-white text-center mb-10 tracking-wide">
            Our Services
          </h3>
          <GlowingEffectDemo />
        </div>
      </section>

      {/* Projects Section - redesigned with image carousel */}
      <section id="projects" className="w-full bg-black py-16 md:py-24 flex flex-col items-center justify-start min-h-screen" style={{ minHeight: '100vh', justifyContent: 'flex-start' }}>
        <h2 className="text-4xl font-bold text-blue-500 mb-1 text-center">Our Projects</h2>
        <div className="h-1 w-24 mx-auto bg-blue-500 rounded mb-1" />
        <div className="w-full max-w-6xl px-0 md:px-2 mt-0" style={{ marginTop: 0 }}>
          <ProjectImageCarousel />
        </div>
        <style>{`
          @media (max-width: 600px) {
            #projects .h-1 { margin-bottom: 0.2rem !important; }
            #projects .w-full { margin-top: 0 !important; padding-top: 0 !important; }
          }
        `}</style>
      </section>
      {/* Why Choose Us Section - animated feature steps */}
      <section id="why-choose-us" className="w-full bg-black">
        <FeatureStepsDemo />
      </section>


      {/* Client Reviews Section - circular testimonials */}
      <section id="client-reviews" className="w-full bg-[#f7f7fa] flex items-center justify-center py-16">
        <div className="max-w-7xl w-full px-4 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center text-black drop-shadow-lg">Client Reviews</h2>
          <CircularTestimonialsDemo />
        </div>
      </section>

      {/* Our Journey Section - timeline */}
      <section id="our-journey" className="w-full bg-black flex items-center justify-center p-0 m-0">
        <div className="w-full flex flex-col items-center justify-center p-0 m-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white drop-shadow-lg w-full pt-12 md:pt-20">Our Journey</h2>
          <TimelineDemo />
        </div>
      </section>

      {/* FAQ Section - black background with spiral */}
      <section id="faq" className="w-full bg-black flex items-center justify-center p-0 m-0">
        <div className="w-full flex flex-col items-center justify-center p-0 m-0">
          <FAQWithSpiral />
        </div>
      </section>

      {/* Contact Section - premium design */}
      <section id="contact" className="w-full bg-black flex items-center justify-center p-0 m-0">
        <div className="w-full flex flex-col items-center justify-center p-0 m-0">
          <PremiumContact />
        </div>
      </section>

      {/* Footer Section - premium design */}
      <PremiumFooter />
    </>
  );
}
