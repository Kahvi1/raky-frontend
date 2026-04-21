import { ResponsiveBreak } from "./ui/ResponsiveBreak"

const svgs = import.meta.glob('../assets/influencer-profile-pictures/ccreator-*.svg', { eager: true })

const creators = Object.entries(svgs)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(\d+)\.svg$/)[1])
    const numB = parseInt(b.match(/(\d+)\.svg$/)[1])
  return numA - numB
  })
  .map(([, mod]) => mod.default)


export default function Feature1() {
  return (
    <section id="feature_1" className="w-full bg-white pt-[64px] pb-[48px] px-6 sm:pt-[76px] sm:pb-[56px] lg:pt-[96px] lg:pb-[76px]">
      <div className="flex flex-col px-[20px] py-[40px] md:p-[32px] lg:p-[48px] rounded-2xl text-center max-w-6xl mx-auto shadow-sm shadow-black/10">
        <h2 className="mb-[24px] font-[500] text-black text-[clamp(1.4rem,4.3vw,2.5rem)] tracking-[-0.02em]">Creator dan Bisnis Ternama Sudah<ResponsiveBreak />Menggunakan Layanan Video Editing Kami</h2>
        <p className="mb-[40px] text-black/50 max-w-2xl mx-auto text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.6]">Mulai dari content creator, influencer, sampai brand. Kami bantu mereka<ResponsiveBreak breakpoint='md' />produksi konten dengan lebih cepat dan konsisten.</p>
        <div className="flex items-center mx-auto">
          <div className="flex">
            {creators.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`creator ${i + 1}`}
                className="size-11 rounded-full border-2 border-white -mr-3 last:mr-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
