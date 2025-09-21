import type { Metadata } from "next";
import { Noto_Sans, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { HeaderNav, SideNav } from "./_components/Nav";
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
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="group flex items-center gap-3">
            <img src="/img/logo.gif" alt="Logo" className="h-12 w-12 rounded-sm shadow-sm object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-wide group-hover:opacity-90 transition">Institute of Modern Education</div>
              <div className="text-xs text-gray-600">Medical Day Care Center</div>
            </div>
          </Link>
          <HeaderNav />
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
        <div className="flex">
          <SideNav />
          <main className="flex-1 px-4 py-10 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
