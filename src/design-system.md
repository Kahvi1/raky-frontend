   1. Section shell: px-4 py-12 (mobile) → sm:px-6 sm:py-16 → lg:py-20, with content centered via
  mx-auto max-w-6xl.
   2. Card container: rounded-3xl, p-6 → sm:p-8 → lg:p-10, subtle elevation shadow-sm ring-1
  ring-black/5.
   3. Internal layout: one-column on mobile, split at desktop: grid grid-cols-1 gap-8
  lg:grid-cols-[1.2fr_1fr].
   4. Typography: heading text-2xl sm:text-3xl lg:text-4xl, font-black, leading-tight; body text-sm
  sm:text-base, leading-relaxed, muted text #707070.
   5. Vertical rhythm: heading-to-paragraph gap mt-4; small card title spacing mb-4; grid gaps gap-3
  mobile → sm:gap-4.
   6. Avatar/media sizing: compact mobile-first sizes, e.g. size-12 → sm:size-14, with rounded-full
  border border-gray-200.
   7. Buttons (from your project style): primary CTA uses rounded-full bg-raky-purple text-white
  font-semibold, usually px-6 py-3 (or px-[28px] py-[12px]), with hover:brightness-110
  active:scale-[0.98].

  If you apply this exact scale (section/card/type/gaps/button states) to later sections, your pages
  will feel consistent with both your existing code and the Feature2Copilot look.

