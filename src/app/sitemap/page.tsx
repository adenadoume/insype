import Link from "next/link";

const links = [
  ["Αρχική", "/"],
  ["Περιστατικά", "/cases"],
  ["Υπηρεσίες", "/services"],
  ["Προσωπικό", "/personnel"],
  ["Επικοινωνία", "/contact"],
  ["Σύνδεσμοι", "/links"],
  ["Φωτογραφίες", "/gallery"],
  ["Χάρτης", "/map"],
];

export default function SiteMap() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Sitemap</h1>
      <ul className="grid gap-2 sm:grid-cols-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link className="underline" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}


