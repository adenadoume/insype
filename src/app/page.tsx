export default function Home() {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Ινστιτούτο Σύγχρονης Παιδείας</h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            Το <b>Ινστιτούτο Σύγχρονης Παιδείας</b> ιδρύθηκε το 1986. Εφαρμόζουμε εντατικά
            θεραπευτικά προγράμματα σε ατομικό και ομαδικό επίπεδο με έμφαση στην ανάπτυξη
            αυτοεξυπηρέτησης, κοινωνικών, γνωστικών και συναισθηματικών δεξιοτήτων ώστε να
            επιτευχθούν οι μέγιστες δυνατότητες για αυτόνομη διαβίωση.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="/cases" className="rounded-md bg-neutral-900 px-3 py-1.5 text-white shadow hover:opacity-90 dark:bg-white dark:text-neutral-900">Περιστατικά</a>
            <a href="/services" className="rounded-md border px-3 py-1.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg:white/10">Υπηρεσίες</a>
            <a href="/contact" className="rounded-md border px-3 py-1.5 hover:bg-black/5 dark:border:white/20 dark:hover:bg:white/10">Επικοινωνία</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/5 bg-[url('/img/bg_head_middle.jpg')] bg-cover bg-center shadow-lg dark:border-white/10" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <h3 className="font-semibold">Νέα</h3>
          <p className="mt-2 text-sm opacity-80">Ομιλία: Παρασκευή 27/3/09 — Γονείς παιδιών με ειδικές ανάγκες.</p>
        </div>
        <div className="rounded-lg border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <h3 className="font-semibold">Διεύθυνση</h3>
          <p className="mt-2 text-sm opacity-80">Τέο 25 & Ολοφίτου — ΤΚ 11142 Αθήνα — 210-2281031</p>
        </div>
        <div className="rounded-lg border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <h3 className="font-semibold">Φωτογραφίες</h3>
          <div className="mt-3 flex gap-2">
            <img src="/img/ktirio1.jpg" alt="" className="h-12 w-12 rounded object-cover" />
            <img src="/img/ktirio2.jpg" alt="" className="h-12 w-12 rounded object-cover" />
            <img src="/img/ktirio3.jpg" alt="" className="h-12 w-12 rounded object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
