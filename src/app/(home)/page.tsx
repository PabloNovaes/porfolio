"use client";

/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ParallaxSection } from "@/components/parallax-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import SpotifyCard from "@/components/spotify";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";
import Markdown from "react-markdown";

export const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <ParallaxSection offset={50}>
          <div className="w-full space-y-8">
            <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
              <div className="gap-2 flex flex-col order-2 md:order-1">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
                  yOffset={10}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} ッ`}
                />
                <BlurFadeText
                  className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <SpotifyCard />
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
                <motion.div
                  className="relative w-fit h-fit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}>
                  {/* Avatar com tamanhos responsivos */}
                  <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-3 ring-muted">
                    <AvatarImage
                      className="object-cover"
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                    />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>

                  {/* Indicador Online - Ajustado para mobile e desktop */}
                  <div className="absolute  bottom-1 right-1 md:bottom-2 md:right-2 z-50 bg-muted p-1 rounded-full border border-muted shadow-sm">
                    <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-teal-500"></span>
                    </span>
                  </div>
                </motion.div>
              </BlurFade>
            </div>
          </div>
        </ParallaxSection>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Sobre</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-custom leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experiências Profíssionais</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border overflow-hidden relative bg-muted/30 border-border ring-border/20 rounded-xl h-8 w-fit pl-2 px-4 flex items-center gap-2">
                  {/* {skill.icon && (
                    <skill.icon
                      className={cn(
                        "h-10 w-20 absolute -left-7 opacity-55 blur-md rounded overflow-hidden object-contain",
                        //@ts-ignore
                        skill?.invert && "dark:invert",
                      )}
                    />
                  )} */}
                  {skill.icon && (
                    <skill.icon
                      className={cn(
                        "size-4 rounded z-10 overflow-hidden object-contain",
                        //@ts-ignore
                        skill?.invert && "dark:invert",
                      )}
                    />
                  )}
                  <span className="text-foreground text-xs sm:text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        {/* <BlurFade delay={BLUR_FADE_DELAY * 11}> */}
        <ProjectsSection />
        {/* </BlurFade> */}
      </section>
    </main>
  );
}
