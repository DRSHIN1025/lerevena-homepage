import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: "LEREVENA - Luxury Handcrafted Handbags",
  description: "45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리. Timeless handmade luxury crafted by master artisans.",
  keywords: ["luxury handbags", "handmade", "craftsmanship", "premium leather", "korean luxury", "LEREVENA", "핸드백", "명품", "수제", "장인정신"],
  authors: [{ name: "LEREVENA" }],
  creator: "LEREVENA",
  publisher: "LEREVENA",
  generator: "Next.js",
  applicationName: "LEREVENA",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#001f3f" },
    { media: "(prefers-color-scheme: dark)", color: "#001f3f" },
  ],
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LEREVENA",
    startupImage: "/luxury-handbag.png",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    url: "https://drshin1025.github.io/lerevena-homepage/",
    siteName: "LEREVENA",
    title: "LEREVENA - Luxury Handcrafted Handbags",
    description: "45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리. Timeless handmade luxury crafted by master artisans.",
    images: [
      {
        url: "https://drshin1025.github.io/lerevena-homepage/luxury-handbag.png",
        width: 1200,
        height: 630,
        alt: "LEREVENA Luxury Handcrafted Handbags",
        type: "image/png",
      },
      {
        url: "https://drshin1025.github.io/lerevena-homepage/luxury-leather-tote-bag-in-deep-navy.jpg",
        width: 800,
        height: 600,
        alt: "LEREVENA Premium Tote Bag",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LEREVENA",
    creator: "@LEREVENA",
    title: "LEREVENA - Luxury Handcrafted Handbags",
    description: "45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리",
    images: ["https://drshin1025.github.io/lerevena-homepage/luxury-handbag.png"],
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#001f3f" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko-KR">
      <head>
        {/* Additional meta tags for better compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LEREVENA" />
        <meta name="application-name" content="LEREVENA" />
        <meta name="msapplication-TileColor" content="#001f3f" />
        <meta name="msapplication-TileImage" content="/lerevena-homepage/apple-touch-icon-144x144.png" />
        <meta name="msapplication-config" content="/lerevena-homepage/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://drshin1025.github.io/lerevena-homepage/" />

        {/* Alternative languages */}
        <link rel="alternate" hrefLang="ko" href="https://drshin1025.github.io/lerevena-homepage/" />
        <link rel="alternate" hrefLang="en" href="https://drshin1025.github.io/lerevena-homepage/en" />
        <link rel="alternate" hrefLang="x-default" href="https://drshin1025.github.io/lerevena-homepage/" />
      </head>
      <body className={`font-sans ${inter.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
