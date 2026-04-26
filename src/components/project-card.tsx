import { Badge } from "@/components/ui/badge";
import { cleanString } from "@/lib/clear-string";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

function ProjectVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className="relative w-full aspect-video bg-zinc-900">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster} // Mostra a imagem enquanto o vídeo não carrega
        className="w-full h-full object-cover duration-500"
      />
    </div>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover transition-all duration-700 group-hover:scale-105"
      placeholder="blur"
      blurDataURL={src}
    />
  );
}

export function ProjectCard({
  title,
  client,
  image,
  video,
  links,
  className,
}: Project) {
  const slug = cleanString(title);

  return (
    <ViewTransition name={slug} share="morph">
      <div
        id={cleanString(title)}
        className={cn(
          "group card duration-400 hover:scale-105 relative flex flex-col h-full gap-4 overflow-hidden transition-all",
          className,
        )}>
        <Link
          href={`/${slug}`}
          className="absolute inset-0 z-10"
          aria-label={`Ver projeto ${title}`}
        />

        <div className="relative aspect-video shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-transform duration-500 group-hover:border-zinc-700">
          {video ? (
            <ProjectVideo src={video} poster={image} />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-full bg-zinc-800" />
          )}

          {links && links.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 duration-300 z-20">
              {links.map((link, idx) => (
                <a
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform">
                  <Badge className="bg-zinc-950/80 backdrop-blur-md text-white border-zinc-700 hover:bg-zinc-900">
                    {link.icon}
                    <span className="ml-1.5">{link.type}</span>
                  </Badge>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1 px-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <p className="text-sm text-zinc-500 line-clamp-1">{client}</p>
        </div>
      </div>
    </ViewTransition>
  );
}
