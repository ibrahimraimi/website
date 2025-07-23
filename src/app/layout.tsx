import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import "@/styles/globals.css";
import { siteConfig } from "@/configs/site";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Freelance Web Developer & Designer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Creative Developer",
    "Interactive Web Design",
    "Visual Storytelling on the Web",
    "Modern Frontend Design",
    "Code & Creativity Portfolio",
    "Frontend Engineer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Freelance Frontend Developer",
    "Remote Frontend Developer",
    "Frontend Developer for Startups",
    "Portfolio for Creative Agencies",
    "Tech Startup Website Design",
    "Responsive Web Design",
    "Website Redesign Services",
    "Web App Development",
    "Custom Frontend Solutions",
    "Creative Web Developer",
    "Modern Web Design",
    "Ibrahim Raimi Portfolio",
    "Ibrahim Raimi Web Developer",
    "Work by Ibrahim Raimi",
    "HTML CSS JavaScript Developer",
  ],
  authors: [
    {
      name: "Ibrahim Raimi",
      url: "https://ibrahimraimi.com",
    },
  ],
  creator: "Ibrahim Raimi",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@ibrahimraimi_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-sans antialiased text-stone-900 bg-bone bg-opacity-5`}
      >
        {children}
      </body>
    </html>
  );
}
