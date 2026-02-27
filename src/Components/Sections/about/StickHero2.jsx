export function Sticky() {
  return (
    <div className="sticky top-0 h-screen max-w-full overflow-hidden relative z-10 md:z-20">
      <img
        src="/assets/bg3.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}