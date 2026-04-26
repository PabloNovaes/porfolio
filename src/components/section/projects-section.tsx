import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Projetos
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              Veja os projetos que trabalhei recentemente
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-center">
              Trabalhei com diversos projetos web e mobile, sendo eles
              profissionais ou como freelancer. Abaixo, estão os que considero
              os mais relevantes para minha evolução.
            </p>
          </div>
        </div>
        <div className="projects-container grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
