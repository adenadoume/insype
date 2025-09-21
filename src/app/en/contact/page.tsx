export default function ContactEn() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 text-sm">
          <p>Teo 25 &amp; Olofitou</p>
          <p>11142 Athens</p>
          <p>Phone: 210-2281031</p>
          <p>Email: info@insype.com.gr</p>
        </div>
        <div className="rounded-lg overflow-hidden border border-black/5 dark:border-white/10">
          <iframe className="w-full aspect-[16/12]" src="https://maps.google.com/maps?f=d&source=s_d&saddr=38.024853,23.742056&daddr=Teo%2F%CE%A4%CE%B5%CF%8E&hl=en&output=embed"></iframe>
        </div>
      </div>
    </section>
  );
}


