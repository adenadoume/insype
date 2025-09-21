export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6].map((n) => `/img/ktirio${n}.jpg`);
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Φωτογραφίες</h1>
      <div className="grid gap-3 sm:grid-cols-3">
        {images.map((src) => (
          <img key={src} src={src} alt="" className="aspect-[4/3] w-full rounded-lg object-cover" />
        ))}
      </div>
    </section>
  );
}


