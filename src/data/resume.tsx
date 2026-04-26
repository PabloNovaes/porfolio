import { Icons } from "@/components/icons";
import { Expressjs } from "@/components/ui/svgs/express";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Prisma } from "@/components/ui/svgs/prisma";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Tailwind } from "@/components/ui/svgs/tailwindcss";
import { Typescript } from "@/components/ui/svgs/typescript";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const DATA = {
  name: "Pablo Novaes",
  initials: "PN",
  url: "https://dillion.io",
  location: "São Paulo, Brasil",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Desenvolvedor Frontend apaixonado por criar interfaces que prendem a atenção, surpreendem e entregam uma experiência satisfatória para o usuário.",
  summary:
    "Minha trajetória como dev começou quando ingressei no curso técnico de [Desenvolvimento de Sistemas pela ETEC Uirapuru](/#education). Foi ali que descobri minha vocação: entregar aos usuários interfaces agradaveis e funcionais. Hoje, foco minha carreira no Desenvolvimento Frontend, tentando unir técnica e criatividade para entregar experiências que não apenas funcionam, mas encantam o usuário.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React Native", icon: ReactLight },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind", icon: Tailwind },
    { name: "Typescript", icon: Typescript },
    { name: "Node", icon: Nodejs },
    { name: "Express", icon: Expressjs, invert: true },
    { name: "Prisma", icon: Prisma },
    { name: "Figma", icon: Icons.figma },
    { name: "Git", icon: Icons.git },
    { name: "Github", icon: GitHubLogoIcon },
  ],
  contact: {
    email: "ppablo.0028922@gmail.com",
    tel: "+55 11 99374-6047",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pablonovaes",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pablonovaes",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ppablo.0028922@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Livo App",
      href: "https://livoapp.com.br",
      badges: [],
      location: "Presencial",
      title: "Desenvolvedor Front-End",
      logoUrl: "/livo.svg",
      start: "09/2024",
      end: "06/2025",
      description: `Atuei na modernização do ecossistema web, focado em transformar sistemas legados em aplicações modernas e rápidas.

- **Modernização de Stack:** Liderança técnica na migração para **React + Vite**.
- **Design System:** Criação de componentes reutilizáveis com **Tailwind CSS**.
- **Validação e Segurança:** Implementação de fluxos com **Zod**.
- **Performance Web:** Otimização focada em **Core Web Vitals**.`,
    },
    {
      company: "Econverse",
      badges: [],
      href: "https://www.econverse.com.br/",
      location: "Híbrido",
      title: "Estágio de Desenvolvedor Front-End",
      logoUrl: "/econverse.svg",
      start: "07/2025",
      end: "",
      description: `Foco total no ecossistema **React Native**, desenvolvendo aplicações multiplataforma (iOS e Android). 

- **Do Zero ao Deploy:** Colaborei no desenvolvimento e publicação de dois novos projetos.
- **Evolução de Produto:** Manutenção e performance em apps consolidados.
- **Pixel Perfect:** Implementação rigorosa de layouts e UX fluida.`,
    },
  ],
  education: [
    {
      school: "Etec",
      href: "https://www.cps.sp.gov.br/etec",
      degree: "Técnico em DS (Desenvolvimento de Sistemas)",
      logoUrl: "/etec.svg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Faculdade Digital Descomplica",
      href: "https://descomplica.com.br/faculdade",
      degree: "Superior em Análise e Desenvolvimento de Sistemas",
      logoUrl: "/descomplica.svg",
      start: "2024",
      end: "2027",
    },
  ],
  projects: [
    {
      client: "Econverse",
      title: "Steals",
      year: 2026,
      members: ["pablonovaes", "iamryaan011", "pedronun"],
      description: `
Aplicativo de um marketplace de moda streetwear cujo o cliente já possuia um projeto web. A ideia foi levar essa experiência para o mobile, criando um app com visual moderno e fácil de usar, focado exatamente no que o público jovem que curte cultura urbana procura. O app chegou para integrar as vendas do site com o mobile, fechando o ecossistema da marca.

**O que eu fiz:**
Entrei no projeto na reta final, um pouco antes do lançamento oficial, para garantir que o app chegasse na loja sem erros e com as funções principais redondas.

**Destaques do meu trabalho:**
* **Resolução de bugs (QA):** Peguei a lista de problemas encontrados nos testes e resolvi os pontos críticos para garantir que o app não travasse e fosse seguro para o lançamento.
* **Novas funcionalidades:** Desenvolvi funções que ainda estavam faltando no projeto, ajudando a completar o escopo planejado.
* **Ajustes de interface (UX/UI):** Fiz o ajuste fino no visual e na navegação para garantir que o app fosse fluido e tivesse aquele acabamento caprichado que o público de moda espera.
      `,

      stack: [
        "React Native",
        "Typescript",
        "Zod",
        "Shopify",
        "Firebase",
        "OneSignal",
      ],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.econverse.steals",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/covers/steals.png",
      video: "",
    },
    {
      client: "Econverse",
      title: "Nk Store",
      year: 2026,
      members: ["pablonovaes", "iamryaan011", "pedronun"],
      description: `
App para uma marca de moda de luxo já consolidada no ambiente web. O foco principal foi adaptar a sofisticação da marca para o mobile, priorizando uma interface limpa e acessível para um público maduro, garantindo uma navegação fluida e sem fricções.

Atuei na evolução do produto em produção, focando em melhorias de engajamento, refinamento de interface e implementação de camadas de inteligência de dados.

**Destaques do meu trabalho:**
* **Inteligência de Dados:** Implementação e integração com **Google Analytics**, configurando a captura de eventos estratégicos para monitorar o comportamento do usuário e auxiliar na tomada de decisão do negócio.
* **Evolução de Mídia (Home):** Redesign do carrossel principal, com implementação de controles de vídeo (play/pause e volume), garantindo uma experiência visual mais rica e controlada.
* **Fidelização e Conversão:** Implementação do módulo de newsletter para captura de leads e estratégias de retenção diretamente pelo app.
* **Polimento e Qualidade (QA):** Realização de ajustes finos e correção de bugs críticos, assegurando que o acabamento da interface seguisse o alto padrão de exigência do mercado de luxo.
      `,
      stack: [
        "React Native",
        "Typescript",
        "Zod",
        "Vtex",
        "Firebase",
        "OneSignal",
      ],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.mobfiq.nkstore",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/covers/nk-store.png",
      video: "",
    },
    {
      client: "Econverse",
      title: "Grupo Sinal",
      year: 2026,
      members: ["pablonovaes", "iamryaan011", "pedronun"],
      description: `
Aplicação mobile para **Grupo Sinal**, uma rede de concessionárias. O objetivo foi elevar a experiência digital da marca para além do site existente, entregando uma interface moderna, fluida e acessível. O app foca na jornada de descoberta de veículos, facilitando o agendamento de visitas e o contato direto com consultores via WhatsApp.

Atuei em todo o ciclo de desenvolvimento do produto, sendo responsável pela arquitetura e implementação de módulos centrais, além de liderar a estratégia de reaproveitamento de código entre as plataformas web e mobile.

**Destaques do meu trabalho:**
* **Desenvolvimento Core:** Responsável pela criação das principais telas do app, incluindo a Home (Vitrine), sistema de busca avançada, filtros dinâmicos e navegação por categorias.
* **Eficiência Técnica (Migração):** Liderei a migração de componentes e lógicas do projeto web para o ambiente mobile, garantindo alta performance e máximo reaproveitamento da base de código existente. 
`,

      stack: ["React Native", "Typescript", "Zod"],
      links: [
        {
          type: "App",
          href: "https://gruposinal.com.br",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/covers/grupo-sinal.png",
      video: "",
    },
    {
      client: "Econverse",
      title: "Cellar",
      year: 2026,
      members: ["pablonovaes", "iamryaan011", "pedronun"],
      description: `
Desenvolvimento do aplicativo móvel para a Cellar Vinhos, importadora referência em vinhos exclusivos e curadoria de alta qualidade. O projeto buscou levar o catálogo da marca para o mobile, oferecendo uma experiência de compra elegante e ágil para o mercado de luxo.

Atuei no desenvolvimento do app do zero, onde fiquei responsável por parte da estrutura inicial e por diversas telas e fluxos principais do projeto.

**Destaques do meu trabalho:**
* **Estrutura de Navegação:** Implementação da arquitetura base (Tab Bar) e componentes essenciais como inputs de busca e navegação global.
* **Experiência de Descoberta:** Desenvolvimento da Home e da listagem de produtos, incluindo a criação de cards e sistemas de filtros e categorias.
* **Página de Produto (PDP):** Construção da interface de detalhes do produto, focada na exibição clara de informações técnicas e rótulos.
* **Fluxo de Compra e Usuário:** Implementação da página de perfil e de etapas fundamentais do fluxo de checkout para garantir uma finalização de compra fluida.
      `,

      stack: ["React Native", "Typescript", "Zod", "Firebase", "OneSignal"],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.mobfiq.cellarvinhos",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/covers/cellar.png",
      video: "",
    },
    {
      client: "Econverse",
      title: "Domínio Social",
      year: 2026,
      members: ["pablonovaes", "iamryaan011", "pedronun"],
      description: `
Evolução e redesign completo do aplicativo da Domínio Social, uma plataforma focada em fortalecer o ecossistema de impacto social e captação de recursos. O desafio foi modernizar toda a interface e expandir as funcionalidades do app, criando uma ferramenta mais robusta tanto para os doadores e usuários finais quanto para os produtores sociais.

Fui responsável por adaptar o app ao novo design proposto, implementando a renovação visual via Figma e desenvolvendo novos fluxos estratégicos para melhorar a usabilidade e a gestão da plataforma.

**Destaques do meu trabalho:**
* **Adequação de Design:** Implementação fiel do novo guia de estilos (UI) em todo o aplicativo, garantindo uma interface moderna e alinhada ao posicionamento atual da marca.
* **Gestão de Perfil e Dados:** Desenvolvimento do módulo completo de edição de perfil, abrangendo desde a atualização de dados cadastrais até o sistema de cadastro e edição de endereços.
* **Módulo para Produtores:** Criação de uma sessão privada e exclusiva para produtores sociais, permitindo o gerenciamento de estoque e o cadastro de novos produtos diretamente pelo app.
* **Reformulação de Fluxos:** Reestruturação total do fluxo de login e implementação de um novo sistema de checkout, tornando os processos mais rápidos e seguros.
* **Páginas Institucionais:** Desenvolvimento de novas telas informativas e institucionais, focadas em transparência e comunicação com o usuário.
      `,

      stack: ["React Native", "Typescript", "Zod", "Firebase", "OneSignal"],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.mobfiq.cellarvinhos",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/covers/dominio-social.png",
      video: "",
    },
    {
      client: "Livo",
      title: "Área do Visitante",
      stack: ["React", "Typescript", "Tailwind", "Vite", "Zod", "Shadcn"],
      year: 2025,
      description: `
Projeto legado em produção que liderei o processo de modernização tecnológica e estética. O foco principal foi a completa reestruturação da interface para garantir consistência visual com o novo ecossistema digital da empresa, elevando o padrão de performance e usabilidade.

### Principais entregas:

* **Modernização de Stack:** Reescrita da interface utilizando tecnologias de ponta para maior escalabilidade e performance.
* **Consistência Visual:** Alinhamento rigoroso com o novo Design System e diretrizes da marca.
* **Otimização Responsiva:** Reformulação da experiência em diferentes dispositivos, garantindo fidelidade visual e funcional.
* **Refatoração de UX:** Melhoria na arquitetura da informação para uma jornada de usuário mais fluida e coerente.
      `,

      links: [
        {
          type: "Website",
          href: "https://convitelivo.com.br/visitante/login/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video-covers/area-de-visitante.mp4",
    },

    {
      client: "Livo",
      title: "Convite Livo",
      stack: ["React", "Typescript", "Tailwind", "Vite", "Zod", "Shadcn"],
      year: 2025,
      description: `
Primeiro projeto desenvolvido na **Livo**, focado na modernização da interface e na evolução da experiência do usuário (UX). O objetivo central foi alinhar o sistema às novas diretrizes da marca, trazendo mais fluidez e identidade visual para a plataforma.

### Principais entregas:

* **Redesign e Branding:** Adaptação completa da estética à nova identidade visual da empresa.
* **Fluxo Multi-step:** Reestruturação de formulários complexos em etapas para melhorar a usabilidade.
* **Validações Robustas:** Implementação de regras de negócio críticas e tratamento de dados mais seguro.
* **Interface Intuitiva:** Ajustes gerais na jornada do usuário para garantir uma navegação mais fluida.
      `,
      links: [
        {
          type: "Website",
          href: "https://convitelivo.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video-covers/convite-livo.mp4",
    },
    {
      client: "Fast Store",
      title: "Landing Page - Técnico a Domicílio",
      stack: ["React", "Typescript", "Tailwind", "Zod", "Shadcn", "Motion"],
      year: 2025,
      description: `
Landing Page desenvolvida para converter visitantes em clientes e consolidar a autoridade digital de uma assistência técnica. O projeto foi focado em transformar a presença online da marca em um canal de vendas direto, unindo design de alta conversão à performance técnica.

### Principais entregas:

* **Design System Customizado:** Criação de uma identidade visual completa baseada na marca do cliente, garantindo unidade e profissionalismo.
* **Otimização de SEO:** Implementação de boas práticas de indexação e estrutura de dados para maximizar a visibilidade nos motores de busca.
* **Foco em Conversão (CRO):** Arquitetura da página planejada para guiar o usuário até o contato, melhorando a taxa de entrega de leads.
* **Performance e Responsividade:** Interface leve e adaptável, otimizada para uma navegação rápida e fluida em qualquer dispositivo.
      `,
      links: [
        {
          type: "Website",
          href: "https://tecnicopcadomicilio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video-covers/tecnico-a-domicilio.mp4",
    },
    {
      client: "Fast Store",
      title: "iFast Store",
      stack: [
        "Next.js",
        "Typescript",
        "Tailwind",
        "Zod",
        "Shadcn",
        "Motion",
        "Stripe",
        "Postgres",
        "Prisma",
        "Clerk",
      ],
      year: 2025,
      description: `
Desenvolvimento de uma plataforma completa de e-commerce focada no varejo de dispositivos de tecnologia, como notebooks e smartphones. Este foi meu primeiro projeto utilizando **Next.js**, focado em entregar uma loja rápida, responsiva e com todas as funcionalidades necessárias para uma operação real de vendas online.

Atuei como desenvolvedor Full Stack e Designer, sendo responsável por todo o ciclo de vida do projeto. Desenvolvi a solução do zero, desde a concepção visual até a implementação do frontend, backend e integrações de pagamento.

**Destaques do meu trabalho:**
* **Experiência de Compra:** Implementação de funcionalidades essenciais como barra de busca inteligente, carrinho de compras e sistema de autenticação.
* **Fluxo de Pagamento:** Integração completa com a API do **Stripe**, garantindo um checkout seguro e eficiente.
* **Painel Administrativo (Dashboard):** Criação de uma área de gestão robusta para controle de produtos (CRUD) e monitoramento de estoque em tempo real.
* **Gestão de Pedidos e Logística:** Desenvolvimento de ferramentas para acompanhamento de vendas, permitindo a alteração manual de status e o cadastro de códigos de rastreio.
* **Visão de Negócio:** Estruturação de uma dashboard com métricas de desempenho, novos cadastros e visão geral de faturamento para facilitar a tomada de decisão.
      `,
      links: [
        {
          type: "Website",
          href: "https://ifaststore.it/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video-covers/ifast-store.mp4",
    },
  ] as Project[],
} as const;
