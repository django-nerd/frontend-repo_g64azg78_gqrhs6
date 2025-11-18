import { useState } from "react";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="about" className="relative py-24 bg-black text-zinc-100">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="text-3xl md:text-4xl font-black tracking-tight">The House of Elanor</motion.h2>
        <p className="mt-4 text-zinc-400 max-w-3xl">Born in shadow, bottled in glass, our craft is storytelling through scent. We compose not for the polite hour, but for the unforgettable one.</p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Enter your email" className="flex-1 bg-black/60 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-zinc-500" />
            <button disabled={status==='loading'} className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition">
              {status==='loading' ? 'Subscribing…' : 'Join the Chronicle'}
            </button>
          </form>
          {status==='success' && <p className="mt-3 text-emerald-400">You are in. Watch your midnight inbox.</p>}
          {status==='error' && <p className="mt-3 text-red-400">Something slipped into the fog. Try again.</p>}
        </div>
      </div>
    </section>
  );
}
