// feature components
import NavigationBar from './components/Navbar.jsx'
import HeroSection from './components/Hero.jsx'
import Feature1 from './components/Feature1.jsx'
import { Feature2Copilot } from './components/Feature2.jsx'
import Feature3 from './components/Feature3.jsx'
import Feature4 from './components/Feature4.jsx'
import Feature5 from './components/Feature5.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <NavigationBar />
      <main className="w-full">
        <HeroSection />
        <Feature1 />
        <Feature2Copilot />
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

function FeatureTemplate() {
  return (
    <section id="feature_template" className="w-full bg-white pt-[140px] px-6 ">
      <div className="flex flex-col text-center max-w-4xl mx-auto">
        <h2 className="mb-[24px] font-black text-black/70 text-[clamp(22px,3.6vw,41px)] leading-none tracking-[-0.02em]">Creator dan Bisnis Ternama Sudah Menggunakan Layanan Video Editing Kami</h2>
        <p className="mb-[24px] text-black/50 max-w-xl mx-auto text-sm md:text-lg leading-relaxed">Mulai dari content creator, influencer, sampai brand. Kami bantu mereka produksi konten dengan lebih cepat dan konsisten.</p>
      </div>
    </section>
  )
}

export default App
