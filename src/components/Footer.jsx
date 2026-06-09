import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#070707] pt-20 pb-10 border-t border-white/5 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1.5fr] gap-12 mb-12">
          <div>
            <Link to="/" className="text-white inline-block w-[100px]"><Logo className="w-full h-auto" /></Link>
            <p className="text-sm text-[#666] mt-4 leading-relaxed">
              Crafted in Partnership by<br />
              <a href="http://broadwick.com" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors">Broadwick</a> &{' '}
              <a href="https://www.kerbfood.com/" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors">KERB</a>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-4">Explore</h4>
              <ul className="space-y-2.5">
                <li><Link to="/food" className="text-sm text-[#888] hover:text-white transition-colors">Food & Drink</Link></li>
                <li><Link to="/events" className="text-sm text-[#888] hover:text-white transition-colors">What's On</Link></li>
                <li><Link to="/venue-hire" className="text-sm text-[#888] hover:text-white transition-colors">Venue Hire</Link></li>
                <li><Link to="/farm" className="text-sm text-[#888] hover:text-white transition-colors">Vertical Farm</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-4">Visit</h4>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm text-[#888] hover:text-white transition-colors">Info & FAQs</Link></li>
                <li><Link to="/book" className="text-sm text-[#888] hover:text-white transition-colors">Book a Table</Link></li>
                <li><Link to="/world-cup" className="text-sm text-[#888] hover:text-white transition-colors">World Cup 2026</Link></li>
                <li><a href="https://cornercorner.com/locals-discount-sign-up/" target="_blank" rel="noopener" className="text-sm text-[#888] hover:text-white transition-colors">Locals Discount</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li><a href="mailto:hello@cornercorner.com" className="text-sm text-[#888] hover:text-white transition-colors">Email Us</a></li>
                <li><a href="tel:02033702305" className="text-sm text-[#888] hover:text-white transition-colors">020 3370 2305</a></li>
                <li><a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="text-sm text-[#888] hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="text-sm text-[#888] hover:text-white transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-8 lg:border-l border-white/5">
            <h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-4">Stay in Touch</h4>
            <p className="text-sm text-[#888] mb-4 leading-relaxed">Be the first to know about events, new vendors, and exclusive offers.</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 min-w-0 bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-gold/40 transition-colors" />
              <button type="submit" className="px-4 py-3 bg-gold text-[#0a0a0a] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-all shrink-0">Join</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-white/5 text-sm text-[#555]">
          <p>&copy; 2026 Corner Corner. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap">
            <a href="https://cornercorner.com/privacy-and-cookie-policy/" target="_blank" rel="noopener" className="text-[#666] hover:text-[#b8b0a8] transition-colors">Privacy Policy & Cookies</a>
            <a href="https://cornercorner.com/website-terms-of-use/" target="_blank" rel="noopener" className="text-[#666] hover:text-[#b8b0a8] transition-colors">Terms of Use</a>
            <a href="https://cornercorner.com/app/uploads/2025/04/corner-corner-venue-terms-and-conditions-030425.pdf" target="_blank" rel="noopener" className="text-[#666] hover:text-[#b8b0a8] transition-colors">Venue T&Cs</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
