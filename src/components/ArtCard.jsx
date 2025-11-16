export default function ArtCard({ image, title, artist, price }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-[#0A0A0A] border border-zinc-800/80">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="p-3">
        <h3 className="font-serif text-zinc-100 text-[15px] leading-tight">
          {title}
        </h3>
        <p className="text-[12px] text-zinc-400">{artist}</p>
        {price && (
          <p className="mt-2 text-[12px] tracking-wide text-zinc-300">
            <span className="text-[#B8860B]">•</span> {price}
          </p>
        )}
      </div>
    </div>
  );
}
