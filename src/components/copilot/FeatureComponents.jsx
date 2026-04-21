import imgTanpaAntrian from '../../assets/feature-2/tanpa_antrian.svg';

export const feature2CardList = [
  {
    featureTitle: 'Tanpa Antrian',
    featureDesc: 'Begitu project masuk, tim kami langsung proses tanpa harus nunggu giliran.',
    className: 'bg-raky-red',
    imgSrc: imgTanpaAntrian,
    imgClassName: 'overflow-hidden left-[16px]',
  },
  {
    featureTitle: 'Tanpa Antrian',
    featureDesc: 'Begitu project masuk, tim kami langsung proses tanpa harus nunggu giliran.',
    className: 'bg-raky-red',
    imgSrc: imgTanpaAntrian,
    imgClassName: 'overflow-hidden left-[16px]',
  },
  {
    featureTitle: 'Tanpa Antrian',
    featureDesc: 'Begitu project masuk, tim kami langsung proses tanpa harus nunggu giliran.',
    className: 'flex-1 bg-raky-blue',
    imgSrc: imgTanpaAntrian,
    imgClassName: 'overflow-hidden left-[16px]',
  },
  {
    featureTitle: 'Tanpa Antrian',
    featureDesc: 'Begitu project masuk, tim kami langsung proses tanpa harus nunggu giliran.',
    className: 'flex-1 bg-raky-blue',
    imgSrc: imgTanpaAntrian,
    imgClassName: 'overflow-hidden left-[16px]',
  },
  {
    featureTitle: 'Tanpa Antrian',
    featureDesc: 'Begitu project masuk, tim kami langsung proses tanpa harus nunggu giliran.',
    className: 'flex-1 bg-raky-blue',
    imgSrc: imgTanpaAntrian,
    imgClassName: 'overflow-hidden left-[16px]',
  },
];

 export function Feature2Copilot() {
  return (
    <section id="feature_2" className="w-full bg-gray-50 px-4 pt-16 sm:px-6 sm:pt-20 lg:pt-[120px]">
      <div className="mx-auto flex max-w-4xl flex-col text-center">
        <h2 className="mb-[24px] font-[500] text-black text-[clamp(1.4rem,4.3vw,2.9rem)] tracking-[-0.02em]">
          Solusi Editing untuk Kamu yang Siap Upload Konten Tiap Hari
        </h2>
        <p className="mb-[24px] mx-auto max-w-xl text-[clamp(1.05rem,1.35vw,1.2rem)] leading-relaxed text-black/50">
          Kami bantu kamu bukan cuma dari sisi editing, tapi dari sisi kecepatan, konsistensi, dan flow kerja yang
          lebih rapi.
         </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6 sm:gap-8">
          {feature2CardList.slice(0, 2).map((card, index) => (
            <CardFeature2Copilot key={`left-${index}`} {...card} />
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

export function CardFeature2Copilot({ featureTitle, featureDesc, className = '', imgSrc, imgClassName = '' }) {
  return (
    <article className={`flex h-full w-full flex-col justify-center ${className}`}>
      <div className="flex flex-col gap-2 px-4 pt-4 sm:px-5 sm:pt-5">
        <h3>{featureTitle}</h3>
        <p>{featureDesc}</p>
      </div>
      <div className="min-h-[16px] bg-raky-green" />
      <img src={imgSrc} alt={featureTitle} className={`h-auto w-full ${imgClassName}`} />
    </article>
  );
}
