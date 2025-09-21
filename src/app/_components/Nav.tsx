"use client";

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
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const prefix = isEnglish ? "/en" : "";

  const links = isEnglish
    ? [
        { href: `${prefix}/`, label: "Home", icon: Home },
        { href: `${prefix}/cases`, label: "Cases", icon: Stethoscope },
        { href: `${prefix}/services`, label: "Services", icon: Briefcase },
        { href: `${prefix}/personnel`, label: "Personnel", icon: Users },
        { href: `${prefix}/contact`, label: "Contact", icon: Mail },
        { href: `${prefix}/links`, label: "Links", icon: LinkIcon },
        { href: `${prefix}/gallery`, label: "Gallery", icon: Images },
        { href: `${prefix}/map`, label: "Map", icon: MapIcon },
        { href: `${prefix}/sitemap`, label: "Sitemap", icon: ListTree },
      ]
    : [
        { href: `${prefix}/`, label: "Αρχική", icon: Home },
        { href: `${prefix}/cases`, label: "Περιστατικά", icon: Stethoscope },
        { href: `${prefix}/services`, label: "Υπηρεσίες", icon: Briefcase },
        { href: `${prefix}/personnel`, label: "Προσωπικό", icon: Users },
        { href: `${prefix}/contact`, label: "Επικοινωνία", icon: Mail },
        { href: `${prefix}/links`, label: "Σύνδεσμοι", icon: LinkIcon },
        { href: `${prefix}/gallery`, label: "Φωτογραφίες", icon: Images },
        { href: `${prefix}/map`, label: "Χάρτης", icon: MapIcon },
        { href: `${prefix}/sitemap`, label: "Sitemap", icon: ListTree },
      ];

  const toggleHref = isEnglish
    ? pathname.replace(/^\/en(\/|$)/, "/") || "/"
    : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <>
      {/* Desktop nav (wrap and shrink) */}
      <nav className="ml-auto hidden items-center gap-2 text-sm md:flex md:flex-wrap md:max-w-[70%]">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="nav-link whitespace-nowrap">
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
        <span className="mx-1 opacity-40">|</span>
        {isEnglish ? (
          <Link href={toggleHref} className="inline-flex items-center gap-1 rounded border px-1.5 py-1 text-xs shadow-sm hover:bg-black/5 dark:hover:bg-white/10">
            <Image src="/img/flag_gr.gif" alt="EL" width={16} height={12} /> EL
          </Link>
        ) : (
          <Link href={toggleHref} className="inline-flex items-center gap-1 rounded border px-1.5 py-1 text-xs shadow-sm hover:bg-black/5 dark:hover:bg-white/10">
            <Image src="/img/flag_en.gif" alt="EN" width={16} height={12} /> EN
          </Link>
        )}
      </nav>

      {/* Mobile menu button */}
      <button aria-label="Menu" className="ml-auto md:hidden nav-link" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-72 bg-white p-4 shadow-xl dark:bg-neutral-900" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold">Navigation</span>
              <button aria-label="Close" className="nav-link" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              {links.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>
                  <Icon className="h-4 w-4" /> {label}
                </Link>
              ))}
              <div className="mt-2 border-t pt-2">
                {isEnglish ? (
                  <Link href={toggleHref} className="nav-link" onClick={() => setOpen(false)}>
                    <Image src="/img/flag_gr.gif" alt="EL" width={16} height={12} /> Ελληνικά
                  </Link>
                ) : (
                  <Link href={toggleHref} className="nav-link" onClick={() => setOpen(false)}>
                    <Image src="/img/flag_en.gif" alt="EN" width={16} height={12} /> English
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


