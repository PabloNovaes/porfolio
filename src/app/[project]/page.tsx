"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { MemberList } from "@/components/members-list";
import { Project } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { clearString } from "@/lib/clear-strinh";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectPage() {
  const { project: projectSlug } = useParams();

  const project = DATA.projects.find((p) => {
    const slug = clearString(p.title);

    return slug === projectSlug;
  });

  if (!project) {
    notFound();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const githubLink = project.links?.find(
    (link) =>
      link.type.toLowerCase() === "github" ||
      link.type.toLowerCase() === "source",
  );

  return (
    <div className="max-w-4xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-10 group">
          <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Link>
      </BlurFade>

      <header className="mb-4">
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="gap-4 grid">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-tight text-white">
            {project.title}
          </h1>
          <div className="flex gap-14">
            <p className="text-muted-foreground text-sm">
              Cliente{" "}
              <span className="font-bold text-foreground ml-1">
                {project.client}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Ano{" "}
              <span className="font-bold text-foreground ml-1">
                {project.year}
              </span>
            </p>
          </div>
        </BlurFade>
      </header>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-video mb-12">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={(project as unknown as Project).image || "/placeholder.jpg"}
              alt={(project as unknown as Project).title}
              className="w-full h-full object-cover"
            />
          )}
          <MemberList
            className="absolute left-2 bottom-2"
            members={(project.members as Project["members"]) || []}
          />
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <section className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white">
              <Markdown>{project.description}</Markdown>
            </section>
          </BlurFade>
        </div>

        <div className="space-y-10">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h3 className="text-sm font-semibold text-zinc-500 tracking-wider mb-4">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-lg bg-zinc-900 border border-dashed border-zinc-800 text-xs font-medium text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </BlurFade>

          {project.links?.length && (
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h3 className="text-sm font-semibold text-zinc-500 tracking-wider mb-4">
                Links
              </h3>
              <div className="flex flex-col gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group">
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors capitalize">
                      {link.type}
                    </span>
                    <ExternalLink className="size-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                ))}

                {githubLink && (
                  <a
                    href={githubLink.href}
                    target="_blank"
                    className="mt-4 w-full py-3 bg-white text-black rounded-full font-bold text-sm text-center hover:bg-zinc-200 transition-colors">
                    Ver Código Fonte
                  </a>
                )}
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </div>
  );
}
