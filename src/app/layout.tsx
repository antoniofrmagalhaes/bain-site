import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import SiteHeader from "@/components/site-header";
import ApplicationProvider from "@/contexts/application-context";
import CookieConsentBanner from "@/components/cookie-consent-banner";
import VipNoticeDialog from "@/components/vip-notice-dialog";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAIN",
  description: "Venha para o clan que mais cresce no Brasil",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApplicationProvider>
          <SiteHeader />
          {children}
          <CookieConsentBanner />
          <VipNoticeDialog />
          <Toaster position="bottom-right" />
        </ApplicationProvider>
      </body>
    </html>
  );
}
