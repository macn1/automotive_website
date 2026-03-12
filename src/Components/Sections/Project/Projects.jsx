import { useState } from "react";

const filters = ["All Projects", "Detailing", "Tuning", "Restoration", "Paint Shop", "Mechanical"];

const projects = [
  {
    id: 1,
    img: "/assets/project/img1.jpg",
    tags: ["Paint Job", "Detailing", "Service"],
    title: "Lamborghini Gallardo SE",
    desc: "The Lamborghini Gallardo SE is a limited edition supercar introduced in 2005 with only 250 units produced worldwide. Powered by a 5.0L V10 engine paired with a 6-speed e-gear transmission, the Gallardo quickly became a favourite among supercar enthusiasts. This vehicle came in for its annual service, followed by a paint job and a complete professional detailing to restore its finish and maintain its performance.",
    category: "Detailing",
  },
  {
    id: 2,
    img: "/assets/project/img2.jpg",
    tags: ["Performance Upgrade", "Detailing", "Custom Modification"],
    title: "Ferrari 488 Pista Spider | Atelier",
    desc: "Ferrari 488 Pista Spider | Atelier. This mid engined track car with its 3.9Lt Twin Turbo V8 produces a breathtaking 711bhp! all of this with the roof down — wow! She's as light as they come too, mainly all down to her carbon fiber body and interiors, her power to weight ratio is unparalleled.",
    category: "Tuning",
  },
  {
    id: 3,
    img: "/assets/project/img3.jpg",
    tags: ["Performance Upgrade", "Exhaust System", "Custom Installation"],
    title: "Lamborghini Huracan Evo",
    desc: "This Lamborghini Huracan EVO received a special Novitec INCONEL performance exhaust system imported from Bavaria, Germany. The system features gold temperature heat protection and racing catalytic cells designed to enhance airflow and performance. This installation marks the first Novitec INCONEL exhaust system of its kind in Asia, now running in Pune, India.",
    category: "Mechanical",
  },
  {
    id: 4,
    img: "/assets/project/img4.jpg",
    tags: ["Vehicle Diagnostics", "OEM Software Sourcing", "EV Service"],
    title: "Tesla Model X",
    desc: "Tesla Model X - Our First EV Service! from sourcing OEM software to diagnose / perform system updates, accessing modules and understanding Tesla technology, a great deal of time both in and out of the workshop is paying off! Next up! Tesla Model S incoming next week!",
    category: "Mechanical",
  },
  {
    id: 5,
    img: "/assets/project/img5.jpg",
    tags: ["Performance Upgrade", "Supercharger", "Engine Tuning"],
    title: "Ford Mustang GT500",
    desc: "Ford Mustang - Finished in Grabber Green She's specced to impress! An independent example of when taste, passion and love form an absolutely stunning outcome. Falling in love all over again. Supercharged (Whipple) producing over 700hp.",
    category: "Tuning",
  },
  {
    id: 6,
    img: "/assets/project/img6.jpg",
    tags: ["Engine Tuning", "Turbo Tuning", "Performance Setup"],
    title: "Nissan GT-R R35",
    desc: "Nissan GTR R35 — It's GODZILLA! Are you a GTR fanboy? She sure does put a smile on our faces the everyday practicality coupled with legendary performance. Producing +750hp from a 3.8lt Twin Turbo she doesn't mess about this one!",
    category: "Tuning",
  },
];

const tagColors = {
  "Paint Job": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Detailing": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Service": "bg-gray-500/20 text-gray-300 border-gray-500/30",
  "Performance Upgrade": "bg-red-500/20 text-red-300 border-red-500/30",
  "Custom Modification": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Exhaust System": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Custom Installation": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Vehicle Diagnostics": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "OEM Software Sourcing": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "EV Service": "bg-green-500/20 text-green-300 border-green-500/30",
  "Supercharger": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Engine Tuning": "bg-rose-500/20 text-rose-300 border-rose-500/30",
  "Turbo Tuning": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "Performance Setup": "bg-violet-500/20 text-violet-300 border-violet-500/30",
};

export default function ProjectsSection() {
  const [active, setActive] = useState("All Projects");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="min-h-screen bg-zinc-950 px-6 py-12 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500&display=swap');
        .proj-section * { font-family: 'Barlow', sans-serif; }
        .proj-title { font-family: 'Barlow Condensed', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-enter { animation: fadeUp 0.4s ease forwards; }
        .img-zoom img { transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .img-zoom:hover img { transform: scale(1.06); }
      `}</style>

      <div className="proj-section max-w-6xl mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-sm text-sm font-semibold tracking-wide border transition-all duration-200 ${
                active === f
                  ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20"
                  : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="card-enter group bg-zinc-900 overflow-hidden"
              style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden img-zoom" style={{ height: 240 }}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Always-on gradient so tags are always readable */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
                  }}
                />

                {/* Extra darkening on hover */}
                <div
                  className="absolute inset-0 bg-black transition-opacity duration-300"
                  style={{ opacity: hovered === project.id ? 0.15 : 0 }}
                />

                {/* Tags — always visible */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-0.5 rounded-sm border font-medium backdrop-blur-sm ${
                        tagColors[tag] || "bg-zinc-700/60 text-zinc-300 border-zinc-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div className="p-5 border-t border-zinc-800">
                <h3
                  className="proj-title text-white text-2xl mb-2 tracking-wide group-hover:text-amber-400 transition-colors duration-200"
                  style={{ fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-amber-500 text-xs font-semibold tracking-widest uppercase cursor-pointer hover:text-amber-400 transition-colors w-fit">
                  <span>View Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}