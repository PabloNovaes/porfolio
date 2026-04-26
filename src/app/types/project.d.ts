interface Project {
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
