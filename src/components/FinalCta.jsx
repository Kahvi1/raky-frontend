import { handleSoon } from '../utils/handlers.js'
import { ResponsiveBreak } from './ui/ResponsiveBreak.jsx'

export default function FinalCta() {
  return (
    <section id='final_cta' className='w-full bg-white px-4 pt-[48px] pb-[64px] sm:px-6 sm:pt-[56px] sm:pb-[72px] lg:pt-[76px] lg:pb-[96px]'>
      <div className='mx-auto max-w-6xl'>
        <article className='relative overflow-hidden rounded-[22px] bg-raky-purple px-6 py-14 text-center text-white shadow-[0_26px_60px_-34px_rgba(122,90,225,0.85)] sm:rounded-[28px] sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
          <div className='relative mx-auto max-w-6xl'>
            <h2 className='mb-5 font-[500] text-[clamp(1.4rem,4.3vw,2.9rem)] tracking-[-0.02em]'>
              Jadi Member untuk Layanan Prioritas
            </h2>
            <p className='mx-auto mb-9 max-w-2xl text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.65] text-white/90 sm:mb-10'>
              Draft siap dalam 24 jam, akses ke editor khusus, dashboard order,<ResponsiveBreak breakpoint='md' />hak owning content, dan benefit membership lainnya.
            </p>

            <button
              onClick={handleSoon}
              className='inline-flex h-12 items-center justify-center rounded-[12px] bg-white px-8 text-[19px] font-semibold text-raky-purple transition-all duration-200 hover:brightness-95 sm:h-[56px] sm:px-10'
            >
              Daftar Membership
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
