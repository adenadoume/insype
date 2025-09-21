export default function MapPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Χάρτης</h1>
      <div className="rounded-lg overflow-hidden border border-black/5 dark:border-white/10">
        <iframe className="w-full aspect-[16/12]" src="https://maps.google.com/maps?f=d&source=s_d&saddr=38.024853,23.742056&daddr=Teo%2F%CE%A4%CE%B5%CF%8E&hl=el&output=embed"></iframe>
      </div>
    </section>
  );
}


