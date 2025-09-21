export default function HomeEn() {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Institute of Modern Education</h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            We implement intensive therapeutic programs at individual and group level, focusing on
            self-care, social, cognitive and emotional development to achieve the maximum abilities
            for independent living.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="/en/cases" className="rounded-md bg-neutral-900 px-3 py-1.5 text-white shadow hover:opacity-90 dark:bg-white dark:text-neutral-900">Cases</a>
            <a href="/en/services" className="rounded-md border px-3 py-1.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">Services</a>
            <a href="/en/contact" className="rounded-md border px-3 py-1.5 hover:bg:black/5 dark:border-white/20 dark:hover:bg-white/10">Contact</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/5 bg-[url('/img/bg_head_middle.jpg')] bg-cover bg-center shadow-lg dark:border-white/10" />
      </div>
    </section>
  );
}


