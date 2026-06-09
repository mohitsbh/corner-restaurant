import { Link } from 'react-router-dom'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-3 bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/5 flex gap-2 md:hidden lg:hidden animate-fade-in-up">
      <Link to="/book" className="flex-1 text-center py-3.5 px-5 rounded-full bg-gold text-[#0a0a0a] text-xs font-semibold tracking-wider uppercase transition-all hover:bg-gold-light active:scale-[0.97]">
        Book a Table
      </Link>
      <a href="tel:02033702305" className="flex-1 text-center py-3.5 px-5 rounded-full bg-white/10 text-[#f5f0eb] text-xs font-semibold tracking-wider uppercase transition-all hover:bg-white/15 active:scale-[0.97]">
        Call Us
      </a>
    </div>
  )
}
