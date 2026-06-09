import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-gold-glass-stroke">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <Link to="/" className="text-primary font-headline-md text-headline-md inline-block">Corner Corner</Link>
          <p className="font-body-md text-body-md text-muted-silver max-w-[220px]">A multi-space venue in the heart of London, dedicated to artisanal food, craft drinks, and curated culture.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="w-10 h-10 border border-gold-glass-stroke flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="w-10 h-10 border border-gold-glass-stroke flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 100 8 4 4 0 000-8z"/><path d="M15 8a4 4 0 01-4-4h-2v13a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3c.6 0 1.2.2 1.6.5L15 8z"/></svg>
            </a>
            <a href="https://www.facebook.com/cornercornercanadawater" target="_blank" rel="noopener" className="w-10 h-10 border border-gold-glass-stroke flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2.5">
            <li><Link to="/food" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Food & Drink</Link></li>
            <li><Link to="/events" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">What's On</Link></li>
            <li><Link to="/venue-hire" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Venue Hire</Link></li>
            <li><Link to="/farm" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Vertical Farm</Link></li>
            <li><Link to="/contact" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/about" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Locals Discount</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Visit</h4>
          <ul className="space-y-2.5">
            <li><Link to="/about" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Info & FAQs</Link></li>
            <li><Link to="/book" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Book a Table</Link></li>
            <li><Link to="/world-cup" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">World Cup 2026</Link></li>
            <li><a href="mailto:hello@cornercorner.com" className="font-label-md text-label-md text-muted-silver hover:text-primary transition-colors">Email Us</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Stay in Touch</h4>
          <p className="font-body-md text-body-md text-muted-silver">Be the first to know about events, new vendors, and exclusive offers.</p>
          <form onSubmit={e => e.preventDefault()} className="relative">
            <input type="email" placeholder="Email Address" className="w-full bg-surface-container-high border border-outline-variant px-4 py-3 text-on-surface focus:border-primary focus:ring-0 transition-colors font-label-md outline-none" />
            <button type="submit" className="absolute right-2 top-2 text-primary p-1">
              <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h8M7 2.5L10.5 6L7 9.5"/></svg>
            </button>
          </form>
          <div className="pt-6 space-y-2">
            <a href="https://cornercorner.com/privacy-and-cookie-policy/" target="_blank" rel="noopener" className="block font-label-sm text-label-sm text-muted-silver hover:text-primary transition-colors">Privacy Policy</a>
            <a href="https://cornercorner.com/website-terms-of-use/" target="_blank" rel="noopener" className="block font-label-sm text-label-sm text-muted-silver hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-12 pt-8 border-t border-gold-glass-stroke/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-muted-silver">&copy; 2026 Corner Corner London. All Rights Reserved. Crafted in Partnership by <span className="text-primary">Broadwick</span> and <span className="text-primary">KERB</span>.</p>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="font-label-sm text-label-sm text-muted-silver hover:text-primary transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="font-label-sm text-label-sm text-muted-silver hover:text-primary transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
