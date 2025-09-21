import type { Metadata } from "next";
import { Noto_Sans, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { HeaderNav, HorizontalNav } from "./_components/Nav";
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
    <footer className="clear-both text-xs" style={{
      width: '900px',
      height: '3.7em',
      padding: '1.1em 0 0',
      background: '#E1E1E1 url(/img/bg_foot.jpg) no-repeat scroll 0 0',
      fontSize: '0.9em'
    }}>
      <div className="px-4 text-center">
        <p className="mb-2">
          <Link href="#" className="text-blue-600 hover:text-blue-800">Αρχή Σελίδας</Link> | 
          <Link href="/" className="text-blue-600 hover:text-blue-800 ml-1">Αρχική Σελίδα</Link> | 
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 ml-1">Επικοινωνία</Link> | 
          <Link href="/sitemap" className="text-blue-600 hover:text-blue-800 ml-1">Sitemap</Link>
        </p>
        <p className="font-bold">
          <strong>Copyright © 2009 Ινστιτούτο Σύγχρονης Παιδαγωγικής | All Rights Reserved</strong> | 
          Powered by&nbsp;<Link href="mailto:mexili.t@gmail.com" className="text-blue-600 hover:text-blue-800">T.M.</Link>
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
      <body className={`${notoSans.variable} ${inter.variable} min-h-dvh text-neutral-900 antialiased`} style={{ 
        backgroundColor: 'rgb(171,195,173)', 
        fontFamily: 'verdana,arial,sans-serif'
      }}>
        <div className="max-w-4xl mx-auto bg-white" style={{ width: '900px', marginTop: '0px', marginBottom: '10px' }}>
          <Header />
          <HorizontalNav />
          <main className="px-4 py-10 animate-in fade-in-50 slide-in-from-bottom-2 duration-500" style={{
            background: 'transparent url(/img/bg_main_withnav.jpg) top left repeat-y',
            paddingBottom: '30px',
            minHeight: '500px'
          }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
