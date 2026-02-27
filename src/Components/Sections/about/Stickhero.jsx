export function StickyHero() {
  return (
    <section className="sticky top-0 h-screen w-full z-20 relative">
      <img
        src="/assets/bg2.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  )
}