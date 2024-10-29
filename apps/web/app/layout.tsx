import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "GRINGOTTS WIZARDING BANK",
  description: "SECURE AND TRUSTED BANK",
  icons: [
    { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "60x60", url: "/apple-icon-60x60.png" },
    { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-icon-76x76.png" },
    { rel: "apple-touch-icon", sizes: "114x114", url: "/apple-icon-114x114.png" },
    { rel: "apple-touch-icon", sizes: "120x120", url: "/apple-icon-120x120.png" },
    { rel: "apple-touch-icon", sizes: "144x144", url: "/apple-icon-144x144.png" },
    { rel: "apple-touch-icon", sizes: "152x152", url: "/apple-icon-152x152.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-icon-180x180.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-icon-192x192.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
  ],
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "manifest": "/manifest.json",
  },
};

// Moving themeColor to viewport
export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
