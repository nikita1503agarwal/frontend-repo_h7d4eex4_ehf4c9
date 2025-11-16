import { Home, Search, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { to: "/", label: "Início", icon: Home },
  { to: "/explorar", label: "Buscar", icon: Search },
  { to: "/favoritos", label: "Favoritos", icon: Heart },
  { to: "/perfil", label: "Perfil", icon: User },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-t border-[#6b5b3e]/30">
      <ul className="grid grid-cols-4 h-16">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to || (to !== "/" && pathname.startsWith(to));
          return (
            <li key={to} className="flex items-center justify-center">
              <Link
                to={to}
                className={`flex flex-col items-center gap-1 text-[11px] tracking-wide transition-colors ${
                  active ? "text-[#DAA520]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Icon size={22} strokeWidth={1.6} />
                <span className="hidden xs:block">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
