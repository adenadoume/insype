import type { Metadata } from "next";
import { Noto_Sans, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Stethoscope,
  Briefcase,
  Users,
  Mail,
  Link as LinkIcon,
  Images,
  Map as MapIcon,
  ListTree,
} from "lucide-react";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-alt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Institute of Modern Education",
  description: "Modernized site (Next.js + Tailwind)",
};

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-neutral-900/75">
      <div
        className="relative"
        style={{
          backgroundImage: "url(/img/bg_head_middle.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30 dark:from-neutral-900/80 dark:to-neutral-900/40" />
        <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link href="/" className="group flex items-center gap-3">
            <Image src="/img/logo.gif" alt="Logo" width={42} height={42} className="rounded-sm shadow-sm" />
            <span className="text-sm font-semibold tracking-wide group-hover:opacity-90 transition">Institute of Modern Education</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-4 text-sm md:flex">
            <Link href="/" className="nav-link"><Home className="h-4 w-4" />Αρχική</Link>
            <Link href="/cases" className="nav-link"><Stethoscope className="h-4 w-4" />Περιστατικά</Link>
            <Link href="/services" className="nav-link"><Briefcase className="h-4 w-4" />Υπηρεσίες</Link>
            <Link href="/personnel" className="nav-link"><Users className="h-4 w-4" />Προσωπικό</Link>
            <Link href="/contact" className="nav-link"><Mail className="h-4 w-4" />Επικοινωνία</Link>
            <Link href="/links" className="nav-link"><LinkIcon className="h-4 w-4" />Σύνδεσμοι</Link>
            <Link href="/gallery" className="nav-link"><Images className="h-4 w-4" />Φωτογραφίες</Link>
            <Link href="/map" className="nav-link"><MapIcon className="h-4 w-4" />Χάρτης</Link>
            <Link href="/sitemap" className="nav-link"><ListTree className="h-4 w-4" />Sitemap</Link>
            <span className="mx-1 opacity-40">|</span>
            <Link href="/en" className="inline-flex items-center gap-1 rounded border px-1.5 py-1 text-xs shadow-sm hover:bg-black/5 dark:hover:bg-white/10">
              <Image src="/img/flag_en.gif" alt="EN" width={16} height={12} /> EN
            </Link>
            <Link href="/" className="inline-flex items-center gap-1 rounded border px-1.5 py-1 text-xs shadow-sm hover:bg-black/5 dark:hover:bg-white/10">
              <Image src="/img/flag_gr.gif" alt="EL" width={16} height={12} /> EL
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/50 py-6 text-xs text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-neutral-900/50 dark:text-neutral-300">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          © 2009–{new Date().getFullYear()} Institute of Modern Education — Powered by Next.js
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${inter.variable} min-h-dvh bg-[url('/img/common/top_body_bg.jpg')] bg-fixed bg-top bg-no-repeat text-neutral-900 antialiased dark:text-neutral-100`}>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
