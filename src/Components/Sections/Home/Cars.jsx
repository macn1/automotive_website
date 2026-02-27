import CarCard from '../../Ui/ImageCard'
export default function CarShowcase() {
  return (
    <section className="w-full bg-black">

      {/* 1️⃣ First car – full width */}
      <CarCard
        src="/assets/cars/car1.jpg"
        title="Lamborgini"
        height="h-[260px] md:h-[520px]"
      />

      {/* 2️⃣ Middle two cars */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <CarCard
          src="/assets/cars/car2.jpg"
          title="DODGE CHALLENGER"
          height="h-[260px] md:h-[420px]"
        />
        <CarCard
          src="/assets/cars/car3.jpg"
          title="BMW M3"
          height="h-[260px] md:h-[420px]"
        />
      </div>

      {/* 3️⃣ Fourth car – full width */}
      <CarCard
        src="/assets/cars/car4.jpg"
        title="HONDA CIVIC"
        height="h-[260px] md:h-[520px]"
      />

    </section>
  )
}
