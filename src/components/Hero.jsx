import { handleSoon } from '../utils/handlers.js'
import { ResponsiveBreak } from './ui/ResponsiveBreak.jsx'

export default function HeroSection() {
  return (
    <header className="flex flex-col items-center bg-white text-center px-6 pt-[clamp(5rem,6vw,6rem)] pb-[clamp(1.25rem,3vw,3rem)] max-w-6xl mx-auto">
      <h1 className="text-[clamp(1.7rem,6.2vw,3.8rem)] leading-[1.25] mb-6 font-[600] max-w-[25ch] tracking-[-0.03em]">Bikin Konten Jadi Lebih Praktis<ResponsiveBreak breakpoint='md'/>Tanpa Pusing Editing Sendiri</h1> 
      <p className="text-[#6E6E6E] text-[clamp(0.9rem,1.5vw,1.3rem)] max-w-[60ch] mx-auto leading-[1.72] mb-6 md:mb-8">Tim editor kami siap bantu kamu handle TikTok, Reels, sampai YouTube.<ResponsiveBreak breakpoint='md' />Cepat, scalable, dan disesuaikan dengan style kamu. Tanpa antrian, tanpa ribet.</p>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center mt-4 md:mt-[clamp(1.25rem,2.4vw,2rem)]">
        <button onClick={handleSoon} className="rounded-xl bg-raky-purple text-white font-medium py-[12px] px-[28px] text-[15px] lg:py-[15px] lg:px-[36px] lg:text-[17px] min-w-[220px] cursor-pointer">Konsultasi Sekarang</button>
        <button onClick={handleSoon} className="rounded-xl text-[#959494] bg-[#F1F1F1] font-medium py-[12px] px-[28px] text-[15px] lg:py-[15px] lg:px-[36px] lg:text-[17px] min-w-[220px] cursor-pointer">Cek Estimasi Biaya</button>
      </div>
    </header>
  )
}
