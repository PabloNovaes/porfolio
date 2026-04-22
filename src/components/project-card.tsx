/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { clearString } from "@/lib/clear-strinh";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

export interface Project {
  title: string;
  client: string;
  href?: string;
  description: string;
  stack: string[];
  link?: string;
  image?: string;
  video?: string;
  members?: string[];
  links?: {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  year: number;
}

export function ProjectCard({
  title,
  client,
  image,
  video,
  links,
  className,
}: Project) {
  return (
    <div>
      <Link
        href={`/${clearString(title.replace(/\s+/g, "-"))}` || "#"}
        rel="noopener noreferrer"
        className={cn(
          "flex flex-col group hover:scale-105 h-full gap-5 overflow-hidden cursor-pointer transition-all duration-200",
          className,
        )}>
        <div className="relative shrink-0 rounded-xl overflow-hidden">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
          {links && links.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}>
                  <Badge
                    className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                    variant="default">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 flex-1 group-hover:opacity-0 transition-all">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1 justify-center">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-xs text-muted-foreground">{client}</p>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground absolute right-0"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
