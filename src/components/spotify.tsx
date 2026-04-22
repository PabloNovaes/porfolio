"use client";

import { useEffect, useState } from "react";
import { Icons } from "./icons";

export default function SpotifyCard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const timestamp = new Date().getTime();
        const res = await fetch(`/api/spotify?t=${timestamp}`, {
          cache: "default",
          headers: {
            Pragma: "no-cache",
            "Cache-Control": "no-cache",
          },
        });
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Spotify error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();

    const interval = setInterval(fetchTrack, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data || data.is_playing === false || !data.item) {
    return (
      <div className="inline-flex items-center gap-1 px-3 pl-1 py-1.5 border border-dashed rounded-full bg-muted/30 text-[10px] font-medium tracking-wider text-muted-foreground/60">
        <Icons.spotify className="size-5 animate-pulse" />
        Offline
      </div>
    );
  }

  const track = data.item;
  const title = track.name;
  const artist = track.artists.map((a: any) => a.name).join(", ");
  const albumImage = track.album.images[0].url;
  const songUrl = track.external_urls.spotify;

  return (
    <a
      href={songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-full group relative animate-in fade-in slide-in-from-top-1 duration-500 inline-flex items-center gap-3 p-1 pr-2 border border-dashed border-zinc-800 rounded-full bg-zinc-900/50 hover:bg-zinc-800 transition-all duration-300 shadow-sm overflow-hidden">
      {/* Glow effect de fundo */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1DB954]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative size-7 flex-none">
        <img
          src={albumImage}
          alt={title}
          className="size-full rounded-full object-cover border border-white/5 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-[#1DB954] rounded-full border-2 border-black flex items-center justify-center">
          <span className="size-1 bg-white rounded-full animate-ping" />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-hidden relative z-10">
        <span className="text-sm font-semibold text-white truncate max-w-[140px] tracking-tight">
          {title}
        </span>
        <span className="text-zinc-600 font-light text-xs shrink-0">—</span>
        <span className="text-xs font-medium text-zinc-400 truncate max-w-[100px]">
          {artist}
        </span>
      </div>

      <Icons.spotify style={{ width: 20, height: 20 }} />
    </a>
  );
}
