export function StickyHero() {
  return (
    <section className="sticky top-0 h-screen w-full z-10">
      <img
        src="/assets/bg3.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  )
}