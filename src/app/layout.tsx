import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/shared/WhatsAppFAB";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BDM — Abogados & Contadores",
    template: "%s | BDM Abogados & Contadores",
  },
  description:
    "Estudio integral de asesoramiento contable y jurídico en Buenos Aires. Dos sedes: CABA y Cañuelas.",
  openGraph: {
    title: "BDM — Abogados & Contadores",
    description:
      "Asesoramiento integral a personas, empresas y profesionales en materia contable y jurídica.",
    url: "https://www.estudiobdm.com.ar",
    siteName: "Estudio BDM",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${lora.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
