import logoWithText from '../assets/brand/logo_ic_text.svg'

export default function Footer() {
  return (
    <footer className='w-full bg-[#EDEDED]'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6 lg:py-5'>
        <a href='/' aria-label='Rakyfactory home'>
          <img src={logoWithText} alt='Rakyfactory' className='h-[30px] w-auto' />
        </a>

        <p className='text-center text-[13px] sm:text-sm font-medium text-[#676767]'>
          © 2026 PT Rakyfactory Digital Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
