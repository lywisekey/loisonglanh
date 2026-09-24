import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/content";

const lora = Lora({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Kinh nghiệm sống lành mỗi ngày`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "sống lành",
    "kinh nghiệm dân gian",
    "ăn uống lành mạnh",
    "vận động",
    "giấc ngủ",
    "thảo mộc",
    "ngâm uống",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: SITE.name,
    title: `${SITE.name} — Kinh nghiệm sống lành mỗi ngày`,
    description: SITE.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Kinh nghiệm sống lành mỗi ngày`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5ead8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${lora.variable} ${beVietnam.variable}`}>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Header />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
