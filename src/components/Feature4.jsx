// webm videos
import vid1Webm from '../assets/feature-4/vid1.webm'
import vid2Webm from '../assets/feature-4/vid2.webm'
import vid3Webm from '../assets/feature-4/vid3.webm'

// mp4 videos
import vid1Mp4 from '../assets/feature-4/vid1.mp4'
import vid2Mp4 from '../assets/feature-4/vid2.mp4'
import vid3Mp4 from '../assets/feature-4/vid3.mp4'

const showCaseVideos = [
  { id: 'vid1', webmSrc: vid1Webm, mp4Src: vid1Mp4 },
  { id: 'vid2', webmSrc: vid2Webm, mp4Src: vid2Mp4 },
  { id: 'vid3', webmSrc: vid3Webm, mp4Src: vid3Mp4 },
]

export default function Feature4() {
  return (
    <section id='feature-4' className='w-full bg-white px-4 pt-[64px] pb-[80px] sm:px-6 sm:pt-[76px] sm:pb-[88px] lg:pt-[104px] lg:pb-[112px]'>
      <div className='mx-auto max-w-6xl'>
        <div className='mx-auto flex max-w-6xl flex-col text-center pb-[40px]'>
          <h2 className='mb-[24px] font-black text-black text-[clamp(1.9rem,4.4vw,3.2rem)] leading-none tracking-[-0.02em]'>
            Berbagai Style Konten Sudah Kami Kerjakan
          </h2>
          <p className='mx-auto max-w-xl text-[clamp(0.9rem,1.1vw,1rem)] leading-[1.6] text-black/50'>
            Mulai dari konten edukasi, storytelling, sampai konten jualan. Semua kami sesuaikan dengan karakter brand atau personal kamu.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {showCaseVideos.map((item) => (
            <article
              key={item.id}
              className='overflow-hidden rounded-3xl bg-[#FAFAFA] ring-1 ring-black/5 shadow-sm transition-[transform,box-shadow] duration-300 ease-out lg:hover:-translate-y-0.5 lg:hover:shadow-[0_22px_48px_-28px_rgba(15,23,42,0.35)]'
            >
              <div className='mx-auto w-full max-w-[300px] p-3 sm:max-w-none'>
                <video
                  className='aspect-[9/16] w-full rounded-2xl object-cover'
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload='metadata'
                >
                  <source src={item.webmSrc} type='video/webm' />
                  <source src={item.mp4Src} type='video/mp4' />
                  Browser kamu belum mendukung video HTML5.
                </video>
              </div>
            </article>
          ))}
        </div>

        <p className='mx-auto mt-[28px] max-w-3xl text-center text-[clamp(0.9rem,1.05vw,0.98rem)] leading-[1.6] text-black/60'>
          Belum nemu style editing yang pas buat konten kamu?{' '}
          <a
            className='font-semibold text-raky-purple decoration-1 hover:brightness-110 transition-all duration-200'
            href='https://instagram.com'
          >
            Konsultasi Sekarang &gt;
          </a>
        </p>

      </div>
    </section>
  )
}
