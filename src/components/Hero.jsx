import { handleSoon } from '../utils/handlers.js'

export default function HeroSection() {
  return (
    <header className="flex flex-col items-center bg-white text-center px-6 pt-[clamp(5rem,6vw,6rem)] pb-[clamp(1.25rem,3vw,3rem)] max-w-6xl mx-auto">
      <h1 className="text-[clamp(2.35rem,11vw,5.8rem)] leading-[0.9] mb-6 font-black max-w-[22ch] tracking-[-0.03em]">Bikin Konten Kamu Konsisten Upload Tanpa Harus Pusing Editing Sendiri</h1> 
      <p className="text-[#6E6E6E] text-[clamp(1rem,1.2vw,1.1rem)] max-w-[46ch] mx-auto leading-[1.72] mb-6 md:mb-8">Tim editor kami siap bantu kamu handle TikTok, Reels, sampai YouTube. Cepat, scalable, dan disesuaikan dengan style kamu. Tanpa antrian, tanpa ribet.</p>
      <div className="flex flex-col md:flex-row gap-3 justify-center mt-4 md:mt-[clamp(1.25rem,2.4vw,2rem)]">
        <button onClick={handleSoon} className="rounded-full text-[#959494] bg-[#F1F1F1] font-semibold py-[12px] px-[28px] text-[15px] lg:py-[15px] lg:px-[36px] lg:text-[17px] min-w-[220px] cursor-pointer">Cek Estimasi Biaya</button>
        <button onClick={handleSoon} className="rounded-full bg-raky-purple text-white font-semibold py-[12px] px-[28px] text-[15px] lg:py-[15px] lg:px-[36px] lg:text-[17px] min-w-[220px] cursor-pointer">Konsultasi Sekarang</button>
      </div>
    </header>
  )
}
