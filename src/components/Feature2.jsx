 import imgTanpaAntrian from '../assets/feature-2/tanpa_antrian2.svg'
 import imgEditorDipersonalisasi from '../assets/feature-2/editor_dipersonalisasi.svg'
 import imgDraft48Jam from '../assets/feature-2/draft_siap_dalam_48jam.svg'
 import imgSiapHandleBanyak from '../assets/feature-2/siap_handle_banyak.svg'
 import imgSelaluReady from '../assets/feature-2/selalu_ready_247.svg'
 import { ResponsiveBreak } from './ui/ResponsiveBreak'


export const feature2CardList = [
  {
    featureTitle: 'Tanpa Antrian',
    featureDesc: 'Begitu project masuk, tim kami langsung proses tanpa harus nunggu giliran.',
    imgSrc: imgTanpaAntrian,
    imgClassName: 'pl-[40px] origin-top-left scale-110',
  },
  {
    featureTitle: 'Editor Dipersonalisasi',
    featureDesc: 'Kami tugasin editor yang cocok dengan style kamu, jadi hasilnya lebih konsisten dan “kerasa kamu”.',
    imgSrc: imgEditorDipersonalisasi,
    imgClassName: '',
  },
  {
    featureTitle: 'Draft Siap dalam 48 Jam',
    featureDesc: 'Kamu bisa langsung lihat hasil awal dalam waktu singkat dan lanjut revisi kalau perlu.',
    imgSrc: imgDraft48Jam,
    imgClassName: 'px-[37px]'
  },
  {
    featureTitle: 'Siap Handle Banyak',
    featureDesc: 'Mau upload rutin atau lagi butuh banyak video? Tim kami siap bantu tanpa kewalahan.',
    imgSrc: imgSiapHandleBanyak,
    imgClassName: 'px-[37px]'
  },
  {
    featureTitle: 'Selalu Ready 24/7',
    featureDesc: 'Kami kerja setiap hari dengan sistem yang rapi dan jelas, jadi lebih aman dan bisa diandalkan.',
    imgSrc: imgSelaluReady,
    imgClassName: 'px-[37px]'
  },
];

 export function Feature2Copilot() {
  return (
    <section id="feature_2" className="w-full bg-white px-4 pt-[44px] pb-[80px] sm:px-6 sm:pt-[52px] sm:pb-[88px] lg:pt-[72px] lg:pb-[112px]">
      <div className="mx-auto flex max-w-6xl flex-col text-center pb-[48px]">
        <h2 className="mb-[24px] font-[500] text-black text-[clamp(1.4rem,4.3vw,2.9rem)] tracking-[-0.02em]">
          Solusi Editing untuk Kamu yang<ResponsiveBreak />Siap Upload Konten Tiap Hari
        </h2>
        <p className="mb-[24px] mx-auto max-w-xl text-[clamp(1.05rem,1.35vw,1.2rem)] leading-relaxed text-black/50">
          Kami bantu kamu bukan cuma dari sisi editing, tapi dari sisi kecepatan, konsistensi, dan flow kerja yang
          lebih rapi.
         </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6 sm:gap-8">
          {feature2CardList.slice(0, 2).map((card, index) => (
            <CardFeature2Copilot key={`left-${index}`}
               {...card}
               className={`${card.className ?? ''} lg:flex-1`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {feature2CardList.slice(2).map((card, index) => (
            <CardFeature2Copilot key={`right-${index}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardFeature2Copilot({ featureTitle, featureDesc, className = '', imgContainerClassname='', imgSrc, imgClassName = '' }) {
  return (
    <article className={`flex h-fit w-full flex-col overflow-hidden rounded-4xl bg-[#FAFAFA] transition-[transform,box-shadow] duration-300 ease-out lg:hover:-translate-y-0.5 lg:hover:shadow-[0_22px_48px_-28px_rgba(15,23,42,0.35)] ${className}`}>
      <div className="flex flex-col gap-[clamp(0.5rem,1vw,0.75rem)] px-10 pt-10">
        <h3 className="font-medium tracking-tight text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.08]">{featureTitle}</h3>
        <p className="text-[clamp(0.9rem,1.1vw,1rem)] leading-[1.6] text-black/50">{featureDesc}</p>
      </div>
      <img src={imgSrc} alt={featureTitle} className={`object-contain mt-[40px] ${imgClassName ?? ''} `} />
    </article>
  );
}
