export function ResponsiveBreak({ breakpoint = 'lg'}) {
  const showAt = `${breakpoint}:block`
  const hideAt = `${breakpoint}:hidden`

  return (
    <>
      <br className={`hidden ${showAt}`} />
      <span className={hideAt}> </span>
    </>
  )
}
