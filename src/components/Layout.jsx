import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import StickyCTA from './StickyCTA'
import Footer from './Footer'
import Logo from './Logo'
import { BackToTop, Button } from './UI'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/food', label: 'Food & Drink' },
  {
    label: "What's On", to: '/events',
    sub: [
      { to: '/events', label: 'All Events' },
      { to: '/world-cup', label: 'World Cup 26' },
    ],
  },
  {
    label: 'Venue Hire', to: '/venue-hire',
    sub: [
      { to: '/venue-hire', label: 'All Spaces' },
      { to: '/venue-hire#enquire', label: 'Enquire Now' },
    ],
  },
  { to: '/farm', label: 'Vertical Farm' },
  { to: '/about', label: 'Info' },
  { to: '/contact', label: 'Contact' },
]

function MobileNavItem({ link, pathname, menuOpen, index, onClose }) {
  const [subOpen, setSubOpen] = useState(false)
  const hasSub = !!link.sub
  const isActive = hasSub ? pathname.startsWith(link.to) : pathname === link.to

  return (
    <li style={{ transitionDelay: `${index * 60}ms` }} className={`transition-all duration-500 ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
      <div className="flex items-center justify-between">
        <Link to={link.to} onClick={onClose} className={`font-label-md text-label-md py-2.5 transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
          {link.label}
        </Link>
        {hasSub && (
          <button onClick={() => setSubOpen(!subOpen)} className="p-2 text-on-surface-variant hover:text-primary transition-colors" aria-label="Toggle submenu">
            <svg className={`w-3 h-3 transition-transform duration-300 ${subOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
          </button>
        )}
      </div>
      {hasSub && (
        <div className={`overflow-hidden transition-all duration-300 ease-out`} style={{ maxHeight: subOpen ? '200px' : '0px', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <ul className="ml-4 space-y-0.5 mb-1 border-l border-gold-glass-stroke pl-4">
            {link.sub.map((s, j) => (
              <li key={s.label}>
                <Link to={s.to} onClick={onClose} className="block py-2 text-sm text-muted-silver hover:text-primary transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

function CursorFollower() {
  const ref = useRef(null)
  const isMobile = useRef(typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)

  const onMove = useCallback((e) => {
    if (!ref.current || isMobile.current) return
    ref.current.style.left = `${e.clientX}px`
    ref.current.style.top = `${e.clientY}px`
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [onMove])

  if (isMobile.current) return null
  return <div ref={ref} className="cursor-follower hidden lg:block" />
}

function NavLink({ to, children, active, onClick }) {
  return (
    <Link to={to} onClick={onClick} className={`font-label-md text-label-md whitespace-nowrap shrink-0 transition-colors py-1.5 group ${active ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary transition-colors'}`}>
      {children}
    </Link>
  )
}

const DROPDOWN_ICONS = {
  'All Events': 'M8 2.5a1 1 0 011 1v1h-2v-1a1 1 0 011-1zM5.5 5v-1a2.5 2.5 0 015 0v1H12a1 1 0 011 1v5.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 11.5V6a1 1 0 011-1h3.5z',
  'World Cup 26': 'M12.5 2.5A1 1 0 0011 2H3a1 1 0 00-1 1v9a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-.5-.9zM7 11a2 2 0 110-4 2 2 0 010 4z',
  'All Spaces': 'M2 3h10a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v6h8V5H3z',
  'Enquire Now': 'M3.5 2A1.5 1.5 0 002 3.5v7A1.5 1.5 0 003.5 12h7a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0010.5 2h-7zm.5 2h6v1H4V4zm0 2h6v1H4V6zm0 2h4v1H4V8z',
}

function DesktopDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isActive = pathname.startsWith(item.to)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`font-label-md text-label-md whitespace-nowrap shrink-0 transition-colors py-1.5 flex items-center gap-1 group ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary transition-colors'}`}>
        {item.label}
        <svg className={`w-3 h-3 transition-all duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
        <div className={`absolute -top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-surface-container-lowest border-l border-t border-gold-glass-stroke transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
        <div className="bg-surface-container-lowest/98 backdrop-blur-2xl border border-gold-glass-stroke rounded-xl p-1.5 shadow-2xl shadow-black/70 overflow-hidden relative">
          {item.sub.map((s, i) => (
            <Link key={s.label} to={s.to} onClick={() => setOpen(false)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 font-label-md text-label-md rounded-lg transition-all ${i > 0 ? 'mt-0.5' : ''} text-muted-silver hover:text-primary hover:bg-white/[0.04] ${open ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}
              style={{ transitionDelay: `${i * 60}ms`, transitionProperty: 'all', transitionDuration: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={DROPDOWN_ICONS[s.label] || 'M7 1v12M1 7h12'} />
              </svg>
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  )
}

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)} />

      <CursorFollower />
      <StickyCTA />
      <BackToTop />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 z-[60] h-[2px] bg-gold/60 transition-opacity duration-300" style={{ width: `${scrollProgress * 100}%`, opacity: scrollProgress > 0.02 ? 1 : 0 }} />

      <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-background/80 backdrop-blur-xl border-b border-gold-glass-stroke shadow-2xl`}>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
          <Link to="/" className={`text-primary font-headline-md text-headline-md tracking-tight transition-all duration-500 hover:text-primary flex items-center h-full`}>
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link =>
              link.sub ? (
                <DesktopDropdown key={link.label} item={link} pathname={pathname} />
              ) : (
                <NavLink key={link.to} to={link.to} active={pathname === link.to}>{link.label}</NavLink>
              )
            )}
            <div className="flex items-center gap-4">
              <Link to="/book" className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 hover:brightness-110 transition-all active:scale-95 duration-200">
                Book Now
              </Link>
            </div>
          </nav>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className={`relative z-50 flex flex-col items-center justify-center w-11 h-11 -mr-1 bg-none border-none cursor-pointer lg:hidden group transition-transform duration-300 ${menuOpen ? 'scale-90' : ''}`} aria-label="Toggle menu">
              <span className={`block w-5 h-[1.5px] bg-off-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5.5px]' : ''} group-hover:bg-primary`} />
              <span className={`block w-5 h-[1.5px] bg-off-white rounded-full transition-all duration-300 mt-[5.5px] ${menuOpen ? 'opacity-0 scale-0' : ''} group-hover:bg-primary`} />
              <span className={`block w-5 h-[1.5px] bg-off-white rounded-full transition-all duration-300 mt-[5.5px] ${menuOpen ? '-rotate-45 -translate-y-[5.5px]' : ''} group-hover:bg-primary`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav panel */}
      <div className={`fixed top-0 right-0 w-4/5 max-w-sm h-full z-40 transition-all duration-500 ease-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <div className="h-full bg-surface backdrop-blur-2xl border-l border-gold-glass-stroke shadow-2xl shadow-black/60 flex flex-col">
          {/* Mobile panel header */}
          <div className="flex items-center justify-between pt-8 pb-4 px-6 relative">
            <div className="absolute bottom-0 left-6 right-6 gold-divider" />
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-primary font-headline-md text-headline-md">
              Corner Corner
            </Link>
            <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors -mr-1 border border-gold-glass-stroke" aria-label="Close menu">
              <svg className="w-3.5 h-3.5 text-on-surface-variant" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 2L10 10M10 2L2 10" /></svg>
            </button>
          </div>

          <div className="py-6 px-6 flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {NAV_LINKS.map((link, i) => (
                <MobileNavItem key={link.to || link.label} link={link} pathname={pathname} menuOpen={menuOpen} index={i} onClose={() => setMenuOpen(false)} />
              ))}
            </ul>
          </div>

          <div className="px-6 pb-8 space-y-3 border-t border-gold-glass-stroke pt-6">
            <Link to="/book" onClick={() => setMenuOpen(false)} className="flex items-center justify-center w-full text-center bg-primary text-on-primary px-6 py-3.5 font-label-md text-label-md hover:brightness-110 transition-all active:scale-[0.97]">
              Book a Table
            </Link>
            <a href="tel:02033702305" className="flex items-center justify-center w-full text-center bg-surface-container text-on-surface-variant px-6 py-3.5 font-label-md text-label-md border border-gold-glass-stroke hover:bg-surface-container-high transition-all">
              Call 020 3370 2305
            </a>
            <div className="flex justify-center gap-6 pt-4">
              <a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="text-muted-silver hover:text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="text-muted-silver hover:text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 100 8 4 4 0 000-8z"/><path d="M15 8a4 4 0 01-4-4h-2v13a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3c.6 0 1.2.2 1.6.5L15 8z"/></svg>
              </a>
              <a href="https://www.facebook.com/cornercornercanadawater" target="_blank" rel="noopener" className="text-muted-silver hover:text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 pt-20"><Outlet /></main>
      <Footer />
    </div>
  )
}
