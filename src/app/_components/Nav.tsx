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

export function SideNav() {
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
    <nav className="w-48 min-w-48 bg-gray-50 p-4 border-r">
      <ul className="space-y-2">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || (href !== `${prefix}/` && pathname.startsWith(href));
          return (
            <li key={href}>
              <Link 
                href={href} 
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive 
                    ? "bg-blue-100 text-blue-800 font-medium" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


