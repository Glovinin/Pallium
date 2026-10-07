import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ChatbotWrapper } from "@/components/chat/ChatbotWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palliumpsi.com"),
  title: {
    default: "Pallium PSI | Psicologia Clínica e Avaliação de Condutores em Lisboa",
    template: "%s | Pallium PSI"
  },
  description: "Clínica de Psicologia em Lisboa. Especialistas em Avaliação Psicológica de Condutores (TVDE, Pesados), Psicologia Clínica, Terapia de Casal e Infanto-Juvenil. Marque já a sua consulta.",
  keywords: [
    "psicologia lisboa", "avaliação condutores", "testes psicotécnicos",
    "renovação carta", "tvde", "psicólogo clínico", "terapia casal",
    "ansiedade", "depressão", "pallium psi", "neuropsicologia",
    "saúde mental", "bem-estar"
  ],
  authors: [{ name: "Pallium PSI" }],
  creator: "Pallium PSI",
  publisher: "Pallium PSI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Pallium PSI | Psicologia Clínica e Avaliação de Condutores",
    description: "Clínica de Psicologia de referência em Lisboa. Especialistas em saúde mental e avaliação de condutores. Cuidamos de si com excelência.",
    url: "https://palliumpsi.com",
    siteName: "Pallium PSI",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/Banner-min-2.jpg",
        width: 1200,
        height: 630,
        alt: "Pallium PSI - Clínica de Psicologia em Lisboa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallium PSI | Psicologia Clínica e Saúde Mental",
    description: "Clínica de Psicologia em Lisboa. Especialistas em Avaliação de Condutores e Saúde Mental.",
    images: ["/Banner-min-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { IntroProvider } from "@/context/IntroContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <IntroProvider>
          <SiteHeader />
          {children}
          <ChatbotWrapper />
          <Toaster position="top-right" richColors />
        </IntroProvider>
      </body>
    </html>
  );
}
