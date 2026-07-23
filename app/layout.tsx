import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://uae-buyer-guide.vercel.app",
  ),
  title: "UAE Buyer Guide",
  description:
    "Compare UAE online stores, fast delivery websites, specialty shopping, adult specialty retail, vape and pod stores, TEREA / HEETS shops, news portals, and local resource pages.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "UAE Buyer Guide",
    description:
      "Review-style UAE buyer guide with useful websites, specialty retail reviews, news portals, and 300 non-vape local resource pages.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Buyer Guide",
    description:
      "Review-style UAE buyer guide with useful websites, specialty retail reviews, news portals, and 300 non-vape local resource pages.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
