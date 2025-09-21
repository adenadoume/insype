"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const toggleHref = isEnglish
    ? pathname.replace(/^\/en(\/|$)/, "/") || "/"
    : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <div className="flex items-center gap-4">
      <Link href={isEnglish ? "/en" : "/"} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
        {isEnglish ? "Home" : "Αρχική Σελίδα"}
      </Link>
      <div className="flex items-center gap-2">
        <Link href={isEnglish ? "/" : "/en"} title={isEnglish ? "Ιστοσελίδα στα Ελληνικά" : "Website in English"}>
          <Image 
            src={isEnglish ? "/img/flag_gr.gif" : "/img/flag_en.gif"} 
            alt={isEnglish ? "EL" : "EN"} 
            width={20} 
            height={15} 
            className="hover:opacity-80"
          />
        </Link>
      </div>
    </div>
  );
}

export function HorizontalNav() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const prefix = isEnglish ? "/en" : "";

  const links = isEnglish
    ? [
        { href: `${prefix}/`, label: "Background" },
        { href: `${prefix}/cases`, label: "Cases" },
        { href: `${prefix}/services`, label: "Offered Services" },
        { href: `${prefix}/personnel`, label: "Personnel" },
        { href: `${prefix}/contact`, label: "Contact" },
        { href: `${prefix}/links`, label: "Links" },
        { href: `${prefix}/gallery`, label: "Photo Gallery" },
        { href: `${prefix}/map`, label: "Map" },
        { href: `${prefix}/sitemap`, label: "Sitemap" },
      ]
    : [
        { href: `${prefix}/`, label: "Ιστορικό" },
        { href: `${prefix}/cases`, label: "Περιστατικά που Δεχόμαστε" },
        { href: `${prefix}/services`, label: "Υπηρεσίες που Προσφέρουμε" },
        { href: `${prefix}/personnel`, label: "Προσωπικό" },
        { href: `${prefix}/contact`, label: "Επικοινωνία" },
        { href: `${prefix}/links`, label: "Χρήσιμοι Σύνδεσμοι" },
        { href: `${prefix}/gallery`, label: "Φωτογραφίες" },
        { href: `${prefix}/map`, label: "Χάρτης" },
        { href: `${prefix}/sitemap`, label: "Sitemap" },
      ];

  return (
    <nav className="w-full border-b" style={{ 
      backgroundColor: 'rgb(220,220,220)', 
      backgroundImage: 'url(/img/bg_head_bottom_nav.jpg)',
      backgroundRepeat: 'repeat-x',
      color: 'rgb(75,75,75)'
    }}>
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href !== `${prefix}/` && pathname.startsWith(href));
            return (
              <li key={href} className="border-r border-gray-400 last:border-r-0">
                <Link 
                  href={href} 
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 hover:text-blue-800 ${
                    isActive 
                      ? "text-blue-800 bg-gray-300" 
                      : "text-blue-600"
                  }`}
                  style={{
                    color: isActive ? 'rgb(42,90,138)' : 'rgb(70,122,167)',
                    textDecoration: 'none'
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}


