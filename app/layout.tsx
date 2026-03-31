import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rupesh Bharambe — AI/ML Engineer & 5x Hackathon Winner",
    template: "%s | Rupesh Bharambe",
  },
  description:
    "Portfolio of Rupesh Bharambe — AI/ML Engineer, 5x National Hackathon Winner, SIH'24 Grand Finale Winner. Building intelligent systems.",
  keywords: ["AI", "ML", "Machine Learning", "Hackathon", "Portfolio", "Rupesh Bharambe", "SIH Winner"],
  authors: [{ name: "Rupesh Bharambe" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rupesh Bharambe Portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rupesh Bharambe",
  jobTitle: "AI/ML Engineer",
  url: "https://rupeshbharambe.vercel.app",
  sameAs: [
    "https://github.com/rupeshbharambe24",
    "https://www.linkedin.com/in/rupesh-bharambe-056a12257/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
