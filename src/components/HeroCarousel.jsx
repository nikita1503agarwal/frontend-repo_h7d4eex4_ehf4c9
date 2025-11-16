import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    title: "Coleções Exclusivas",
    subtitle: "Obras raras selecionadas por curadores",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
    title: "Novidades",
    subtitle: "Artistas contemporâneos em destaque",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b37?q=80&w=1200&auto=format&fit=crop",
    title: "Destaques do Editor",
    subtitle: "Peças que contam grandes histórias",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIndex((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden rounded-xl">
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt="arte"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h2 className="text-2xl font-serif text-zinc-100 tracking-wide">
          {slides[index].title}
        </h2>
        <p className="text-sm text-zinc-300">{slides[index].subtitle}</p>
      </div>
      <div className="absolute bottom-3 right-4 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full transition-all ${
              i === index ? "bg-[#DAA520] w-8" : "bg-white/30"
            }`}
          />)
        )}
      </div>
    </div>
  );
}
