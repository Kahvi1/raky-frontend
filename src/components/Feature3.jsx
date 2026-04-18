import step1Image from '../assets/feature-3/step_1.svg'
import step2Image from '../assets/feature-3/step_2.svg'
import step3Image from '../assets/feature-3/step_3.svg'

const processStepImages = [
  {
    step: '1',
    title: 'Diskusi Kebutuhanmu.',
    desc: 'Jelasin brief dan style kamu lewat Whatsapp.',
    imgSrc: step1Image,
  },
  {
    step: '2',
    title: 'Bayar Uang Muka.',
    desc: 'Setelah amankan slot, tim kami langsung eksekusi.',
    imgSrc: step2Image,
  },
  {
    step: '3',
    title: 'Terima dalam 48 jam.',
    desc: 'Revisi jika ada, sampai konten kamu siap publish',
    imgSrc: step3Image,
  },
]

export default function Feature3() {
  return (
    <section id="feature_3" className="bg-white w-full px-4 pt-[64px] pb-[80px] sm:px-6 sm:pt-[76px] sm:pb-[88px] lg:pt-[104px] lg:pb-[112px]">
      <div className="mx-auto flex max-w-6xl flex-col text-center pb-[48px]">
        <h2 className="mb-[24px] font-black text-black text-[clamp(1.9rem,4.4vw,3.2rem)] leading-none tracking-[-0.02em]">Proses Simpel Biar Konten Kamu Cepat Upload</h2>
        <p className="mx-auto max-w-xl text:sm leading-[1.6] text-black/50">Alurnya kami buat straightforward, jadi kamu tinggal fokus ke konten.</p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
        {processStepImages.map((card) => (
          <article
            key={card.step}
            className='flex h-full flex-col overflow-hidden rounded-3xl bg-[#FAFAFA] ring-1 ring-black/5 shadow-sm transition-[transform,box-shadow] duration-300 ease-out lg:hover:-translate-y-0.5 lg:hover:shadow-[0_22px_48px_-28px_rgba(15,23,42,0.35)]'
          >
            <div className='h-full flex flex-col gap-[clamp(0.55rem,1vw,0.8rem)] px-6 pt-6 pb-5'>
              <span className='inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-raky-purple/90 px-2 text-sm font-bold leading-none text-white lg:h-9 lg:min-2-9 lg:text-[15px] mb-3'>
                {card.step}
              </span>
              <img
                src={card.imgSrc}
                alt={`langkah ${card.step}`}
                className="w-full object-contain px-2 pb-2"
              />
              <h3 className='font-semibold tracking-tight text-[clamp(1.2rem,1.9vw,1.45rem)] leading-[1.1] mt-auto'>{card.title}</h3>
              <p className='text-[clamp(0.9rem,1.05vw,0.98rem)] leading-[1.6] text-black/55'>{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
