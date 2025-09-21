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
      {/* Menu button (always visible) */}
      <button aria-label="Menu" className="ml-auto nav-link" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Full-screen menu panel */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        {/* Background */}
        <div className={`absolute inset-0 bg-white dark:bg-neutral-900`} onClick={() => setOpen(false)} />
        {/* Sliding content */}
        <div className={`menu-panel ${open ? "open" : ""} absolute inset-0 p-6 overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-semibold">Menu</span>
            <button aria-label="Close" className="nav-link" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-2 text-base">
            {links.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className="nav-link py-3" onClick={() => setOpen(false)}>
                <Icon className="h-5 w-5" /> {label}
              </Link>
            ))}
            <div className="mt-4 border-t pt-4">
              {isEnglish ? (
                <Link href={toggleHref} className="nav-link py-3" onClick={() => setOpen(false)}>
                  <Image src="/img/flag_gr.gif" alt="EL" width={16} height={12} /> Ελληνικά
                </Link>
              ) : (
                <Link href={toggleHref} className="nav-link py-3" onClick={() => setOpen(false)}>
                  <Image src="/img/flag_en.gif" alt="EN" width={16} height={12} /> English
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


