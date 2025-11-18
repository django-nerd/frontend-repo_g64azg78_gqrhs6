export default function Footer(){
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-500 text-sm">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ELANOR — Gothic Perfumery</p>
        <nav className="flex items-center gap-6">
          <a href="#sins" className="hover:text-zinc-300">The Seven</a>
          <a href="#about" className="hover:text-zinc-300">The House</a>
        </nav>
      </div>
    </footer>
  )
}
