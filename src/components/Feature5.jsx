// icons
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useMemo, useState } from "react";

export default function Feature5() {
  return (
    <section id='feature_5' className='w-full bg-white px-4 pt-[64px] pb-[56px] sm:px-6 sm:pt-[76px] sm:pb-[64px] lg:pt-[104px] lg:pb-[84px]'>
      <div className='mx-auto max-w-6xl'>
        <div className='mx-auto flex max-w-4xl flex-col text-center pb-[40px]'>
          <h2 className='mb-[24px] font-black text-black text-[clamp(1.9rem,4.4vw,3.2rem)] leading-none tracking-[-0.02em]'>
            Cek Estimasi Biaya Editing Kamu
          </h2>
          <p className='mx-auto max-w-2xl text-[clamp(0.9rem,1.1vw,1rem)] leading-[1.6] text-black/50'>
            Pilih format, atur durasi, dan sesuaikan kecepatan pengerjaan. Semua transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <CardFeature5 />

        <p className='mx-auto mt-[28px] max-w-3xl text-center text-[clamp(0.9rem,1.05vw,0.98rem)] leading-[1.6] text-black/60'>
          Butuh banyak video, edit podcast, atau kebutuhan editing lainnya?{" "}
          <a
            className='font-semibold text-raky-purple decoration-1 hover:brightness-110 transition-all duration-200'
            href='https://instagram.com'
          >
            Konsultasi Sekarang &gt;
          </a>
        </p>
      </div>
    </section>
  );
}

function CardFeature5() {
  const [format, setFormat] = useState("vertical");
  const [speed, setSpeed] = useState("next-day");
  const [duration, setDuration] = useState(90);

  const baseCost = 20000;
  const speedMultiplier = {
    "next-day": 1,
    "same-day": 1.35,
    instant: 1.8,
  };

  const totalCost = useMemo(() => {
    const per15s = Math.ceil(duration / 15);
    return Math.round(baseCost * per15s * speedMultiplier[speed]);
  }, [duration, speed]);

  const formattedDuration = useMemo(() => {
    const mins = Math.floor(duration / 60);
    const secs = duration % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, [duration]);

  const formattedCost = useMemo(() => {
    return `IDR ${new Intl.NumberFormat("id-ID").format(totalCost)}`;
  }, [totalCost]);

  return (
    <article className='w-full overflow-hidden rounded-[30px] bg-[#F5F5F5] ring-1 ring-black/5 shadow-[0_18px_44px_-30px_rgba(15,23,42,0.3)]'>
      <div className='grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10'>
        <div className='lg:w-full'>
          <p className='text-[clamp(1.35rem,2.2vw,1.7rem)] font-semibold text-black/35 mb-4'>Pilih Format</p>
          <div className='grid grid-cols-2 rounded-xl bg-black/[0.03] p-1 mb-8 relative'>
            <span
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-[10px] bg-raky-purple shadow-[0_8px_18px_-12px_rgba(122,90,225,0.9)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                format === "vertical" ? "translate-x-0" : "translate-x-full"
              }`}
              aria-hidden='true'
            />
            <button
              onClick={() => setFormat("vertical")}
              aria-pressed={format === "vertical"}
              className={`relative z-10 h-12 rounded-[10px] text-[17px] font-medium transition-colors duration-300 motion-reduce:transition-none ${
                format === "vertical" ? "text-white" : "text-black/55"
              }`}
            >
              Vertical
            </button>
            <button
              onClick={() => setFormat("horizontal")}
              aria-pressed={format === "horizontal"}
              className={`relative z-10 h-12 rounded-[10px] text-[17px] font-medium transition-colors duration-300 motion-reduce:transition-none ${
                format === "horizontal" ? "text-white" : "text-black/55"
              }`}
            >
              Horizontal
            </button>
          </div>

          <div className='flex flex-col mb-8'>
            <div className='flex flex-row justify-between items-end mb-3'>
              <label htmlFor='duration' className='text-[clamp(1.35rem,2.2vw,1.7rem)] font-semibold text-black/35'>
                Durasi Video
              </label>
              <p className='text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-black/85 tabular-nums'>
                {formattedDuration}
              </p>
            </div>
            <input
              id='duration'
              type='range'
              min='15'
              max='180'
              step='15'
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              style={{ "--range-progress": `${((duration - 15) / (180 - 15)) * 100}%` }}
              className='w-full slider-raky'
            />
          </div>

          <div>
            <p className='text-[clamp(1.35rem,2.2vw,1.7rem)] font-semibold text-black/35 mb-4'>Waktu Pengerjaan</p>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
              <button
                onClick={() => setSpeed("next-day")}
                className={`h-12 rounded-[10px] px-3 text-[17px] font-medium transition-all duration-200 ${
                  speed === "next-day" ? "bg-raky-purple text-white" : "bg-black/[0.06] text-black/55 hover:bg-black/[0.08]"
                }`}
              >
                Next Day (48h)
              </button>
              <button
                onClick={() => setSpeed("same-day")}
                className={`h-12 rounded-[10px] px-3 text-[17px] font-medium transition-all duration-200 ${
                  speed === "same-day" ? "bg-raky-purple text-white" : "bg-black/[0.06] text-black/55 hover:bg-black/[0.08]"
                }`}
              >
                Same Day (12h)
              </button>
              <button
                onClick={() => setSpeed("instant")}
                className={`h-12 rounded-[10px] px-3 text-[17px] font-medium transition-all duration-200 ${
                  speed === "instant" ? "bg-raky-purple text-white" : "bg-black/[0.06] text-black/55 hover:bg-black/[0.08]"
                }`}
              >
                Instant (5h)
              </button>
            </div>
          </div>
        </div>

        <div className='text-center lg:w-fit lg:h-full lg:mx-auto'>
          <p className='text-[clamp(1.35rem,2.2vw,1.7rem)] font-semibold text-black/35'>Biaya per Video</p>
          <p className='mt-1 text-[clamp(2.1rem,4.6vw,3rem)] font-bold leading-none tracking-[-0.02em] text-black/85'>{formattedCost}</p>

          <p className='mt-8 mb-4 text-[clamp(1.35rem,2.2vw,1.7rem)] font-semibold text-black/85'>Benefit Layanan Reguler</p>
          <ul className='mx-auto w-fit space-y-3 text-black/60 text-[clamp(0.95rem,1.1vw,1.1rem)]'>
            <li className='flex items-center gap-3'>
              <CheckIcon className='size-5 text-[#1F1F1F] shrink-0' />
              <span>Delivery maksimal 48 jam</span>
            </li>
            <li className='flex items-center gap-3'>
              <CheckIcon className='size-5 text-[#1F1F1F] shrink-0' />
              <span>Revisi gratis hingga 3x</span>
            </li>
            <li className='flex items-center gap-3'>
              <CheckIcon className='size-5 text-[#1F1F1F] shrink-0' />
              <span>Bisa request style editing</span>
            </li>
            <li className='flex items-center gap-3'>
              <CheckIcon className='size-5 text-[#1F1F1F] shrink-0' />
              <span>Tanpa minimum order</span>
            </li>
          </ul>

          <button className='mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-raky-purple px-6 text-[19px] font-semibold text-white hover:brightness-110 transition-all duration-200'>
            <span>Buat Project</span>
            <ArrowRightIcon className='size-5 shrink-0' />
          </button>
        </div>
      </div>
    </article>
  );
}
