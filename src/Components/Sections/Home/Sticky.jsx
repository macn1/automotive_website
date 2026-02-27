export function StickyHero() {
  return (
    <section className="sticky top-0 h-screen w-full z-10 overflow-hidden relative">
      <img
        src="/assets/bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  )
}
