export function onScroll(callback: () => void) {
  const handleScroll = () => {
    callback()
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}
