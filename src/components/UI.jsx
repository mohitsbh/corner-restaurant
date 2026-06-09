import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => el.classList.add('show'), delay); observer.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useReveal(delay)
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>
}

export function SectionLabel({ children }) {
  return <span className="text-xs tracking-[0.15em] uppercase text-gold font-semibold block mb-4">{children}</span>
}

export function SectionTitle({ children, as: Tag = 'h2', className = '' }) {
  return <Tag className={`font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-white mb-5 ${className}`}>{children}</Tag>
}

export function SectionText({ children, className = '' }) {
  return <p className={`text-[clamp(1rem,1.2vw,1.125rem)] text-[#b8b0a8] max-w-[680px] leading-relaxed ${className}`}>{children}</p>
}

export function SectionHeader({ label, title, text, center }) {
  return (
    <div className={`max-w-[720px] mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      {label && <Reveal delay={0}><SectionLabel>{label}</SectionLabel></Reveal>}
      {title && <Reveal delay={100}><SectionTitle>{title}</SectionTitle></Reveal>}
      {text && <Reveal delay={200}><SectionText>{text}</SectionText></Reveal>}
    </div>
  )
}

export function Section({ children, className = '', dark, id }) {
  return <section id={id} className={`py-20 md:py-30 lg:py-40 ${dark ? 'bg-[#0e0e0e]' : 'bg-[#0a0a0a]'} ${className}`}>{children}</section>
}

export function Container({ children, className = '' }) {
  return <div className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-16 ${className}`}>{children}</div>
}

export function Button({ children, href, variant = 'primary', size = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer border relative overflow-hidden btn-shine'
  const variants = {
    primary: 'bg-gold text-[#0a0a0a] border-transparent hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-[0.97]',
    outline: 'bg-transparent text-[#f5f0eb] border-white/20 hover:border-gold hover:text-gold hover:-translate-y-0.5 active:scale-[0.97]',
    'outline-gold': 'bg-transparent text-gold border-gold/40 hover:bg-gold/[0.06] hover:border-gold hover:-translate-y-0.5 active:scale-[0.97]',
    text: 'bg-none border-none p-0 text-gold tracking-normal normal-case font-medium hover:text-gold-light',
  }
  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    default: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-[0.9375rem]',
    xl: 'px-12 py-[18px] text-base',
  }
  const cls = `${base} ${variants[variant]} ${sizes[size]} tracking-[0.05em] uppercase ${className}`
  const Tag = href ? 'a' : 'button'
  return <Tag href={href} className={cls} {...props}>{children}</Tag>
}

export function GlassCard({ children, className = '', gold = false }) {
  return <div className={`${gold ? 'glass-gold' : 'glass glass-hover'} rounded-xl ${gold ? '' : 'glass-hover'} ${className}`}>{children}</div>
}

export function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="pt-45 pb-20 bg-gradient-to-br from-[#0a0a0a] via-[#151005] to-[#0a0a0a] relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold/20 after:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <Container>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#888] mb-8 hover:text-gold transition-colors group">
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to Home
        </Link>
        {label && <Reveal delay={0}><SectionLabel>{label}</SectionLabel></Reveal>}
        {title && <Reveal delay={100}><h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-white mb-4">{title}</h1></Reveal>}
        {subtitle && <Reveal delay={200}><p className="text-lg text-[#b8b0a8] max-w-[560px]">{subtitle}</p></Reveal>}
        {children && <Reveal delay={300}>{children}</Reveal>}
      </Container>
    </section>
  )
}

export function Pillar({ number, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="p-6 border border-white/[0.06] rounded-xl transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.03] hover:-translate-y-1 group">
        <span className="text-xs text-gold font-semibold tracking-[0.1em] group-hover:tracking-[0.15em] transition-all">{number}</span>
        <h3 className="font-serif text-2xl text-white mt-2 mb-3">{title}</h3>
        <p className="text-sm text-[#888] leading-relaxed">{text}</p>
      </div>
    </Reveal>
  )
}

export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-gold/10 text-gold border-gold/20',
    outline: 'bg-transparent text-[#a89070] border-[#a89070]/30',
  }
  return (
    <span className={`inline-block text-xs tracking-[0.15em] uppercase font-medium px-4 py-2 border rounded-full backdrop-blur-sm ${variants[variant]}`}>
      {children}
    </span>
  )
}

export function Divider({ className = '' }) {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 ${className}`} />
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-gold/10 backdrop-blur-xl border border-gold/20 flex items-center justify-center text-gold transition-all duration-300 hover:bg-gold/20 hover:border-gold/40 hover:-translate-y-1 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10.5V3M3 5.5L6 2.5L9 5.5"/></svg>
    </button>
  )
}

export const IMAGES = {
  chicken: 'https://cornercorner.com/app/uploads/2026/05/2026-51.png',
  farm: 'https://cornercorner.com/app/uploads/2026/05/2026-43.png',
  stage: 'https://cornercorner.com/app/uploads/2026/05/2026-52.png',
  cafe: 'https://cornercorner.com/app/uploads/2025/03/cc-homepage-11.png',
  heroVideo: 'https://cornercorner.com/app/uploads/2025/03/cc-web-04.mp4',
  drinksVideo: 'https://cornercorner.com/app/uploads/2025/03/cc-web-07.mp4',
  crowdVideo: 'https://cornercorner.com/app/uploads/2025/03/cc-web-06.mp4',
  atmosphereVideo: 'https://cornercorner.com/app/uploads/2025/03/cc-web-02-2.mp4',
}
