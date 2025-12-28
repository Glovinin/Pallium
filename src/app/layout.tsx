import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
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
  metadataBase: new URL("https://www.wanzelleradvogados.com"),
  title: "Wanzeller & Associados | Sociedade de Advogados",
  description: "Sociedade de Advogados de referência sediada em Lisboa, Portugal. Excelência em direito administrativo, privado, empresarial, fiscal e legalização de estrangeiros. Soluções jurídicas personalizadas.",
  keywords: [
    "advogados", "Lisboa", "Portugal", "direito administrativo", "direito fiscal",
    "direito do trabalho", "direito comercial", "golden visa", "nacionalidade portuguesa",
    "advocacia", "consultoria jurídica", "Wanzeller"
  ],
  authors: [{ name: "Wanzeller & Associados" }],
  creator: "Wanzeller & Associados",
  publisher: "Wanzeller & Associados",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Wanzeller & Associados | Sociedade de Advogados",
    description: "Sociedade de Advogados de referência sediada em Lisboa. Excelência, rigor e dedicação na defesa dos seus interesses.",
    url: "https://www.wanzelleradvogados.com",
    siteName: "Wanzeller & Associados",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Wanzeller & Associados - Advocacia de Excelência",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanzeller & Associados | Sociedade de Advogados",
    description: "Excelência e rigor na advocacia em Portugal.",
    images: ["/Banner.jpg"],
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
          <Toaster position="top-right" />
        </IntroProvider>
      </body>
    </html>
  );
}
