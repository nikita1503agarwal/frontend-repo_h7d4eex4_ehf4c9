import { ArrowLeft, Share2, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DetailHeader() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-10 h-14 flex items-center justify-between px-3 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <button onClick={() => navigate(-1)} className="p-2 text-zinc-300 hover:text-zinc-100">
        <ArrowLeft size={22} strokeWidth={1.6} />
      </button>
      <div className="flex items-center gap-2">
        <button className="p-2 text-zinc-300 hover:text-[#DAA520]">
          <Share2 size={20} strokeWidth={1.6} />
        </button>
        <button className="p-2 text-zinc-300 hover:text-[#DAA520]">
          <Heart size={20} strokeWidth={1.6} />
        </button>
      </div>
    </header>
  );
}
