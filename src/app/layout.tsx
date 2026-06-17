import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mauricioaramayo.netixtech.net"),

  title: {
    default: "Mauricio Aramayo | Full-Stack Developer",
    template: "%s | Mauricio Aramayo",
  },

  description:
    "Portafolio profesional de Mauricio Aramayo. Desarrollo de aplicaciones web, sistemas empresariales, arquitectura de software y soluciones Full-Stack.",

  keywords: [
    "Mauricio Aramayo",
    "Full Stack Developer",
    "Ingeniero de Sistemas",
    "Next.js",
    "NestJS",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Bolivia",
    "Oruro",
  ],

  authors: [
    {
      name: "Mauricio Aramayo",
      url: "https://mauricioaramayo.netixtech.net",
    },
  ],

  creator: "Mauricio Aramayo",
  publisher: "Mauricio Aramayo",

  openGraph: {
    title: "Mauricio Aramayo | Full-Stack Developer",
    description:
      "Portafolio profesional de Mauricio Aramayo. Desarrollo de aplicaciones web, sistemas empresariales y soluciones Full-Stack.",

    url: "https://mauricioaramayo.netixtech.net",

    siteName: "Mauricio Aramayo Portfolio",

    locale: "es_ES",

    type: "website",

    images: [
      {
        url: "https://mauricioaramayo.netixtech.net/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mauricio Aramayo Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mauricio Aramayo | Full-Stack Developer",

    description:
      "Portafolio profesional de Mauricio Aramayo. Desarrollo de aplicaciones web, sistemas empresariales y soluciones Full-Stack.",

    images: ["https://mauricioaramayo.netixtech.net/images/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/images/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/images/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${jetbrains.variable}`}>
      <body
        className="
          bg-surface
          text-on-surface
          font-body-md
          selection:bg-primary-container
          selection:text-on-primary-container
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}
