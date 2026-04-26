import { DATA } from "@/data/resume";
import { cleanMdDescription, cleanString } from "@/lib/clear-string";

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

export default function MetaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
