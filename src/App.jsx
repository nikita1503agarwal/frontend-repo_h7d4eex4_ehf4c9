import { Routes, Route, Link } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import HeroCarousel from "./components/HeroCarousel";
import Section from "./components/Section";
import ArtCard from "./components/ArtCard";
import DetailHeader from "./components/DetailHeader";

const mockArts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1200&auto=format&fit=crop",
    title: "Noite Dourada",
    artist: "A. Moreau",
    price: "Sob consulta",
    year: "1923",
    technique: "Óleo sobre tela",
    dimensions: "73 x 92 cm",
    description:
      "Uma composição equilibrada e luminosa que evoca a serenidade de um crepúsculo urbano.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1508898578281-774ac4893bd0?q=80&w=1200&auto=format&fit=crop",
    title: "Esplendor",
    artist: "C. Navarro",
    price: "R$ 48.000",
    year: "1971",
    technique: "Mista sobre papel",
    dimensions: "50 x 70 cm",
    description:
      "Texturas ricas e movimento contido criam uma atmosfera de contemplação.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
    title: "Silêncio Carmim",
    artist: "E. Valmont",
    price: "R$ 120.000",
    year: "1986",
    technique: "Acrílica sobre linho",
    dimensions: "100 x 120 cm",
    description:
      "Planos cromáticos intensos que respiram sofisticação e poder.",
  },
];

function Shell({ children, title }) {
  return (
    <div className="mx-auto max-w-md min-h-screen bg-[#0A0A0A] text-zinc-100 relative pb-20" style={{backgroundImage:"radial-gradient(1200px_600px_at_50%_-20%,rgba(218,165,32,0.06),transparent),radial-gradient(1000px_500px_at_120%_20%,rgba(255,255,255,0.05),transparent)"}}>
      <header className="sticky top-0 z-10 h-14 flex items-center justify-between px-4 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-zinc-800/40">
        <h1 className="font-serif text-xl tracking-wide">Musea</h1>
        <button className="text-sm text-[#C0C0C0] border border-[#C0C0C0]/30 px-3 py-1 rounded-full hover:bg-white/5 transition">Entrar</button>
      </header>
      <main className="px-4">{children}</main>
      <BottomNav />
    </div>
  );
}

function Home() {
  return (
    <Shell>
      <div className="py-4 space-y-6">
        <HeroCarousel />
        <Section title="Novidades">
          <div className="grid grid-cols-2 gap-3">
            {mockArts.map((a) => (
              <Link key={a.id} to={`/obra/${a.id}`}>
                <ArtCard {...a} />
              </Link>
            ))}
          </div>
        </Section>
        <Section title="Destaques do Editor">
          <div className="grid grid-cols-2 gap-3">
            {mockArts.slice(0, 2).map((a) => (
              <Link key={a.id} to={`/obra/${a.id}`}>
                <ArtCard {...a} />
              </Link>
            ))}
          </div>
        </Section>
        <Section title="Coleções Exclusivas">
          <div className="grid grid-cols-2 gap-3">
            {mockArts.slice(1).map((a) => (
              <Link key={a.id} to={`/obra/${a.id}`}>
                <ArtCard {...a} />
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Shell>
  );
}

function ObraDetalhe({ id }) {
  const obra = mockArts.find((m) => String(m.id) === String(id));
  if (!obra) return null;
  return (
    <div className="mx-auto max-w-md min-h-screen bg-black text-zinc-100 pb-20">
      <DetailHeader />
      <div className="relative">
        <img src={obra.image} alt={obra.title} className="w-full h-[420px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>
      <div className="px-4 py-4 space-y-3">
        <h2 className="font-serif text-2xl tracking-wide">{obra.title}</h2>
        <p className="text-sm text-zinc-300">{obra.artist} • {obra.year}</p>
        <p className="text-sm text-zinc-400">{obra.technique} · {obra.dimensions}</p>
        <p className="text-[13px] leading-relaxed text-zinc-300/90 mt-2">{obra.description}</p>
        <div className="flex items-center justify-between pt-3">
          <span className="text-[13px] text-zinc-300">Preço: <b className="text-[#B8860B]">{obra.price}</b></span>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full border border-[#DAA520]/40 text-[#DAA520] text-sm hover:bg-[#DAA520]/10 transition">Favoritar</button>
            <button className="px-4 py-2 rounded-full bg-[#DAA520] text-black text-sm hover:brightness-110 transition">Consultar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Perfil() {
  return (
    <Shell>
      <div className="py-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700" />
          <div>
            <p className="font-serif text-xl">Colecionador</p>
            <p className="text-sm text-zinc-400">conta@musea.app</p>
          </div>
        </div>
        <div className="divide-y divide-zinc-800/80 rounded-xl overflow-hidden border border-zinc-800/50">
          {["Minhas Compras","Favoritos","Configurações"].map((i) => (
            <button key={i} className="w-full text-left px-4 py-4 bg-[#0A0A0A] text-zinc-200 hover:bg-white/5 flex items-center justify-between">
              <span>{i}</span>
              <span className="text-[#C0C0C0]">›</span>
            </button>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function RouteWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obra/:id" element={<DynamicObra />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

import { useParams } from "react-router-dom";
function DynamicObra(){
  const { id } = useParams();
  return <ObraDetalhe id={id} />
}

export default function App(){
  return <RouteWrapper />
}
