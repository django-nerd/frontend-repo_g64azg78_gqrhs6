import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

const CARD = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function SinsGallery() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/fragrances`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setItems(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="sins" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-5xl font-black tracking-tight">The Seven</motion.h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">Seven bottles, seven parables. Crafted to embody a vice, written to haunt a memory.</p>

        {loading && <p className="mt-12 text-zinc-400">Summoning scents...</p>}
        {error && <p className="mt-12 text-red-400">{error}</p>}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {items.map((f, i) => (
              <motion.div
                key={f.slug}
                initial={CARD.initial}
                animate={CARD.animate}
                transition={{ delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-600 transition`}
              >
                <div className="aspect-[4/5] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">{f.name}</h3>
                      <span className="text-xs uppercase tracking-widest text-zinc-400">{f.sin}</span>
                    </div>
                    <p className="mt-3 text-zinc-400 text-sm">{f.description}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-zinc-400">Notes</p>
                    <p className="text-zinc-200 text-sm">{[...f.top_notes, ...f.heart_notes, ...f.base_notes].slice(0,6).join(', ')}</p>
                  </div>
                </div>
                <div className="border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
                  <span className="font-medium">${'{'}f.price{'}'}</span>
                  <button onClick={() => setActive(f)} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm transition">Read the story</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
            <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{y:10, opacity:0}} className="max-w-2xl w-full rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold">{active.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">{active.sin}</p>
                </div>
                <button onClick={() => setActive(null)} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm">Close</button>
              </div>
              <p className="mt-4 text-zinc-300 leading-relaxed whitespace-pre-line">{active.story}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
