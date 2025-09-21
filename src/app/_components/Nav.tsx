"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function HeaderNav() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const toggleHref = isEnglish
    ? pathname.replace(/^\/en(\/|$)/, "/") || "/"
    : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <div className="flex items-center gap-4">
      <Link href={isEnglish ? "/en" : "/"} className="text-sm font-medium text-neutral-100 hover:text-white">
        {isEnglish ? "Home" : "Αρχική Σελίδα"}
      </Link>
      <div className="flex items-center gap-2">
        <Link href={isEnglish ? "/" : "/en"} title={isEnglish ? "Ιστοσελίδα στα Ελληνικά" : "Website in English"}>
          <Image 
            src={isEnglish ? "/img/flag_gr.gif" : "/img/flag_en.gif"} 
            alt={isEnglish ? "EL" : "EN"} 
            width={20} 
            height={15} 
            className="hover:opacity-90"
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

  const menus = isEnglish
    ? [
        { href: `${prefix}/`, label: "Background" },
        { href: `${prefix}/cases`, label: "Cases" },
        { href: `${prefix}/services`, label: "Offered Services" },
        { href: `${prefix}/personnel`, label: "Personnel" },
        { href: `${prefix}/contact`, label: "Contact" },
        {
          label: "More",
          children: [
            { href: `${prefix}/links`, label: "Links" },
            { href: `${prefix}/gallery`, label: "Photo Gallery" },
            { href: `${prefix}/map`, label: "Map" },
            { href: `${prefix}/sitemap`, label: "Sitemap" },
          ],
        },
      ]
    : [
        { href: `${prefix}/`, label: "Ιστορικό" },
        { href: `${prefix}/cases`, label: "Περιστατικά που Δεχόμαστε" },
        { href: `${prefix}/services`, label: "Υπηρεσίες που Προσφέρουμε" },
        { href: `${prefix}/personnel`, label: "Προσωπικό" },
        { href: `${prefix}/contact`, label: "Επικοινωνία" },
        {
          label: "Περισσότερα",
          children: [
            { href: `${prefix}/links`, label: "Χρήσιμοι Σύνδεσμοι" },
            { href: `${prefix}/gallery`, label: "Φωτογραφίες" },
            { href: `${prefix}/map`, label: "Χάρτης" },
            { href: `${prefix}/sitemap`, label: "Sitemap" },
          ],
        },
      ];

  const isActiveHref = (href?: string) => {
    if (!href) return false;
    return pathname === href || (href !== `${prefix}/` && pathname.startsWith(href));
  };

  return (
    <nav className="w-full border-b border-neutral-800 bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="flex flex-wrap items-center gap-1 py-1">
          {menus.map((item, idx) => {
            const hasChildren = Array.isArray((item as any).children);
            const active = isActiveHref((item as any).href) || (
              hasChildren && (item as any).children.some((c: any) => isActiveHref(c.href))
            );
            return (
              <li key={idx} className="relative group">
                {hasChildren ? (
                  <>
                    <button
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        active ? "bg-neutral-800 text-white" : "hover:bg-neutral-800 hover:text-white"
                      }`}
                    >
                      {(item as any).label}
                      <span className="ml-1 align-middle">▾</span>
                    </button>
                    <div className="invisible absolute left-0 top-full z-50 min-w-[12rem] translate-y-1 rounded-md border border-neutral-800 bg-neutral-900 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="py-1">
                        {(item as any).children.map((c: any) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={`block px-4 py-2 text-sm transition-colors hover:bg-neutral-800 ${
                                isActiveHref(c.href) ? "text-white" : "text-neutral-200"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={(item as any).href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-neutral-800 text-white" : "hover:bg-neutral-800 hover:text-white"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {(item as any).label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}


