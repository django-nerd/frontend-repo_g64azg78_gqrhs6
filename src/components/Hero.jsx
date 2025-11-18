import { motion } from "framer-motion";

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(255,0,120,0.06),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(110,0,255,0.06),transparent_25%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop')] opacity-10 mix-blend-screen" />
      </div>

      <div className="relative container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent"
        >
          ELANOR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-300"
        >
          A gothic perfumery of seven stories. Each bottle a sin. Each breath a confession.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <button onClick={onExplore} className="px-6 py-3 rounded-full bg-zinc-900/60 border border-zinc-700 hover:border-zinc-500 transition">
            Explore the Sins
          </button>
          <a href="#about" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition">
            The House
          </a>
        </motion.div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-tr from-fuchsia-700/10 via-purple-700/10 to-indigo-700/10 blur-3xl" />
    </section>
  );
}
