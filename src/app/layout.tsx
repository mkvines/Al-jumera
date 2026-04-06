import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, Noto_Kufi_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "italic",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "AL-JUMERAH ATQAAN CONTRACTING | HVAC Excellence in Saudi Arabia",
    template: "%s | AL-JUMERAH ATQAAN",
  },
  description:
    "25+ years of HVAC excellence in Saudi Arabia. Specializing in chillers, AHU, VRV/VRF, package units, and ventilation systems. Trusted by major institutions.",
  keywords: [
    "HVAC",
    "air conditioning",
    "Saudi Arabia",
    "HVAC contractor",
    "chiller installation",
    "AHU",
    "VRV",
    "VRF",
    "package unit",
    "ventilation",
    "Riyadh",
    "TRANE",
    "DAIKIN",
    "Carrier",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AL-JUMERAH ATQAAN CONTRACTING EST.",
    title: "AL-JUMERAH ATQAAN CONTRACTING | HVAC Excellence in Saudi Arabia",
    description:
      "25+ years of HVAC excellence in Saudi Arabia. Trusted by major institutions and brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${instrumentSerif.variable} ${notoKufiArabic.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
