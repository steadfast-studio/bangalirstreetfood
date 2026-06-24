import "./globals.css";
import type { Metadata } from "next";
import { Caveat, Geist_Mono, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bangalir Street Food",
    default: "Bangalir Street Food | Affordable India Tour Packages",
  },
  metadataBase: new URL("https://bangalirstreetfood.com"),
  description:
    "Explore India affordably with Bangalir Street Food. Book budget-friendly tour packages to Andaman, Kashmir, Vizag and more — including hotels, sightseeing & train tickets.",
  applicationName: "Bangalir Street Food",
  category: "Travel and Tourism",
  classification: "Travel Agency",
  keywords: [
    "affordable India tours",
    "budget travel packages India",
    "Bangalir Street Food travel",
    "Andaman tour package",
    "Kashmir tour package",
    "Vizag tour package",
    "cheap India holiday packages",
    "hotel and sightseeing packages",
    "Bengali travel agency",
    "budget-friendly tours",
  ],
  authors: [
    { name: "Anirban Das" },
    {
      name: "Sourav Sil",
    },
    {
      name: "Rohit Dutta",
    },
  ],
  creator: "Bangalir Street Food",
  publisher: "Bangalir Street Food",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.bangalirstreetfood.com",
  },
  openGraph: {
    type: "website",
    url: "https://bangalirstreetfood.com",
    title: "Bangalir Street Food | Affordable India Tour Packages",
    description:
      "Explore India affordably with Bangalir Street Food. Book budget-friendly tour packages to Andaman, Kashmir, Vizag and more — including hotels, sightseeing & train tickets.",
    siteName: "Bangalir Street Food",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bangalir Street Food - Affordable Tour Packages in India",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bangalir Street Food | Affordable India Tour Packages",
    description:
      "Explore India affordably with Bangalir Street Food. Book budget-friendly tour packages to Andaman, Kashmir, Vizag and more — including hotels, sightseeing & train tickets.",
    images: [
      {
        url: "/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bangalir Street Food - Affordable Tour Packages in India",
      },
    ],
  },
  facebook: {
    admins: ["bangalirstreetfood"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body
        className={`${geistMono.variable} ${poppins.variable} ${caveat.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="bottom-right" theme="light" />
      </body>
    </html>
  );
}
