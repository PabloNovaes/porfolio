import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fustat, Geist_Mono } from "next/font/google";
import Script from "next/script";
//@ts-ignore
import { Footer } from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BLUR_FADE_DELAY } from "./(home)/page";
import "./globals.css";

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pablonovaes-me.vercel.app"),
  alternates: {
    canonical: "/",
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
  title: {
    default: `${DATA.name} | Frontend Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name} | Frontend Developer`,
    description: DATA.description,
    url: "https://pablonovaes-me.vercel.app/",
    siteName: `${DATA.name}`,
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: "https://pablonovaes-me.vercel.app/",
  jobTitle: "Frontend Developer",
  description: DATA.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
  sameAs: [
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.GitHub.url,
  ].filter(Boolean),
  knowsAbout: DATA.skills.map((skill) => skill.name),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fustat.variable,
          geistMono.variable,
        )}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] z-0 pointer-events-none w-full border-t border-border/40">
              <FlickeringGrid
                className="h-full w-full opacity-20"
                squareSize={3}
                gridGap={6}
                maxOpacity={0.4}
                style={{
                  maskImage:
                    "radial-gradient(ellipse at center, black, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black, transparent 85%)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto py-8 pb-24 sm:py-24 px-6">
              {children}
              <ProgressiveBlur position="bottom" />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 21}>
              <Footer />
            </BlurFade>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
