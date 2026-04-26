import BlurFade from "@/components/magicui/blur-fade";
import { MemberList } from "@/components/members-list";
import { DATA } from "@/data/resume";
import { cleanMdDescription, cleanString } from "@/lib/clear-string";
import { mdxComponents } from "@/mdx-components";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const { project: projectSlug } = await params;

  const project: Project | undefined = DATA.projects.find((p) => {
    const slug = cleanString(p.title);
    return slug === projectSlug;
  });

  if (!project) {
    notFound();
  }

  const githubLink = project.links?.find(
    (link) =>
      link.type.toLowerCase() === "github" ||
      link.type.toLowerCase() === "source",
  );

  const currentProjectIndex = DATA.projects.findIndex(
    (p) => p.title === project?.title,
  );

  const previousProject = DATA.projects[currentProjectIndex - 1];
  const nextProject = DATA.projects[currentProjectIndex + 1];

  const hasPrevious = !!previousProject;
  const hasNext = !!nextProject;

  return (
    <div className="max-w-5xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href={`/#${cleanString(project.title)}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all mb-10 group">
          <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Link>
      </BlurFade>

      <header className="mb-6">
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="grid gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            {project.title}
          </h1>

          <div className="flex gap-10 text-sm text-muted-foreground">
            <p>
              Cliente{" "}
              <span className="font-semibold text-foreground ml-1">
                {project.client}
              </span>
            </p>
            <p>
              Ano{" "}
              <span className="font-semibold text-foreground ml-1">
                {project.year}
              </span>
            </p>
          </div>
        </BlurFade>
      </header>

      <ViewTransition
        name={cleanString(project.title)}
        share="morph"
        enter={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        exit={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="relative rounded-2xl overflow-hidden border bg-card border-border shadow-sm aspect-16/10 mb-12 transition-all duration-300 hover:scale-[1.01]">
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
              <Image
                src={project.image!}
                placeholder="blur"
                fill
                blurDataURL={project.image}
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
      </ViewTransition>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* DESCRIÇÃO */}
        <div className="md:col-span-2 space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <section className="prose dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground">
              <Markdown components={mdxComponents}>
                {project.description}
              </Markdown>
            </section>
          </BlurFade>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-10">
          {/* STACK */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h3 className="text-sm font-semibold text-muted-foreground tracking-wider mb-4">
              Tecnologias
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-lg bg-muted border border-border text-xs font-medium text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>
          </BlurFade>

          {/* LINKS */}
          {!!project.links?.length && (
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h3 className="text-sm font-semibold text-muted-foreground tracking-wider mb-4">
                Links
              </h3>

              <div className="flex flex-col gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:bg-muted transition-all group">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors capitalize">
                      {link.type}
                    </span>

                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}

                {githubLink && (
                  <a
                    href={githubLink.href}
                    target="_blank"
                    className="mt-4 w-full py-3 bg-foreground text-background rounded-full font-semibold text-sm text-center hover:opacity-90 transition">
                    Ver Código Fonte
                  </a>
                )}
              </div>
            </BlurFade>
          )}
        </div>
      </div>

      {/* NAVEGAÇÃO */}
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="w-full border-t border-border max-sm:mt-16 mt-10 max-sm:pt-12 pt-6 grid grid-cols-2 gap-4">
          {/* Link Anterior */}
          {hasPrevious ? (
            <Link
              className="flex flex-col gap-1 group min-w-0"
              href={`/${cleanString(previousProject?.title ?? "")}`}>
              <span className="text-sm text-muted-foreground flex items-center justify-start gap-1">
                <ChevronLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-all"
                />
                Anterior
              </span>
              <span className="text-sm font-medium text-foreground group-hover:underline truncate">
                {previousProject?.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {/* Link Próximo */}
          {hasNext && (
            <Link
              className="flex flex-col gap-1 text-right group min-w-0"
              href={`/${cleanString(nextProject?.title ?? "")}`}>
              <span className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                Próximo{" "}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-all"
                />
              </span>
              <span className="text-sm font-medium text-foreground group-hover:underline truncate">
                {nextProject?.title}
              </span>
            </Link>
          )}
        </div>
      </BlurFade>
    </div>
  );
}

export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    project: cleanString(project.title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { project: string };
}) {
  const { project } = await params;

  const projectName = project.replace("/", "");
  const capitalizedProject =
    projectName.charAt(0).toUpperCase() + projectName.slice(1);

  const baseUrl = "https://pablonovaes-me.vercel.app";
  const url = `${baseUrl}/${projectName}`;

  const projectData = DATA.projects.find((p) => {
    const slug = cleanString(p.title);

    return slug === projectName;
  });

  return {
    title: `${projectData?.client} | ${projectData?.title}`,
    description: cleanMdDescription(projectData?.description as string),

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: `${projectData?.client} | ${projectData?.title}`,
      description: cleanMdDescription(projectData?.description as string),
      url: url,
      siteName: "Pablo Novaes | Full Stack Developer",
      locale: "pt_BR",
      type: "website",

      images: [
        {
          url: `${baseUrl}/covers/${projectName}.png`,
          width: 1200,
          height: 630,
          alt: `Screenshot do projeto ${capitalizedProject}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${capitalizedProject} | Pablo Novaes`,
      description: `Análise técnica do projeto ${capitalizedProject}.`,
      images: [`${baseUrl}/covers/${projectName}.png`],
    },
  };
}
