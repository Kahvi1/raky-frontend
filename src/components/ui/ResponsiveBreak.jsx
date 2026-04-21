 export function ResponsiveBreak({ breakpoint = 'lg' }) {
   const classes = {
     sm: { br: 'hidden sm:block', space: 'sm:hidden' },
     md: { br: 'hidden md:block', space: 'md:hidden' },
     lg: { br: 'hidden lg:block', space: 'lg:hidden' },
     xl: { br: 'hidden xl:block', space: 'xl:hidden' },
     '2xl': { br: 'hidden 2xl:block', space: '2xl:hidden' },
   }

   const selected = classes[breakpoint] ?? classes.lg

   return (
     <>
       <br className={selected.br} />
       <span className={selected.space}> </span>
     </>
   )
 }

