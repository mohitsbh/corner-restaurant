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

export function SectionLabel({ children, className = '' }) {
  return <span className={`text-primary font-label-sm text-label-sm uppercase tracking-[0.2em] block mb-4 ${className}`}>{children}</span>
}

export function SectionTitle({ children, as: Tag = 'h2', className = '' }) {
  return <Tag className={`font-headline-lg text-headline-lg text-off-white mb-3 ${className}`}>{children}</Tag>
}

export function SectionText({ children, className = '' }) {
  return <p className={`font-body-md text-body-md text-on-surface-variant max-w-[680px] leading-relaxed ${className}`}>{children}</p>
}

export function SectionHeader({ label, title, text, center }) {
  return (
    <div className={`max-w-[720px] mb-4 ${center ? 'mx-auto text-center' : ''}`}>
      {label && <Reveal delay={0}><SectionLabel>{label}</SectionLabel></Reveal>}
      {title && <Reveal delay={100}><SectionTitle>{title}</SectionTitle></Reveal>}
      {text && <Reveal delay={200}><SectionText>{text}</SectionText></Reveal>}
    </div>
  )
}

export function Section({ children, className = '', dark, id }) {
  return <section id={id} className={`py-12 md:py-16 lg:py-20 ${dark ? 'bg-surface-container-lowest' : 'bg-surface'} ${className}`}>{children}</section>
}

export function Container({ children, className = '' }) {
  return <div className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${className}`}>{children}</div>
}

export function Button({ children, href, variant = 'primary', size = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-label-md text-label-md transition-all duration-300 cursor-pointer active:scale-95'
  const variants = {
    primary: 'bg-primary text-on-primary hover:brightness-110',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10',
    'outline-gold': 'bg-transparent text-primary border border-gold-glass-stroke hover:bg-white/5',
    text: 'bg-none border-none p-0 text-primary tracking-normal normal-case font-medium hover:text-primary',
  }
  const sizes = {
    sm: 'px-5 py-2',
    default: 'px-8 py-4',
    lg: 'px-10 py-5',
    xl: 'px-12 py-6',
  }
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const Tag = href ? 'a' : 'button'
  return <Tag href={href} className={cls} {...props}>{children}</Tag>
}

export function GlassCard({ children, className = '' }) {
  return <div className={`glass-panel ambient-glow rounded-xl ${className}`}>{children}</div>
}

export function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="relative min-h-[300px] lg:min-h-[380px] flex items-center overflow-hidden bg-surface py-10 lg:py-14">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #c9a96e 0%, transparent 60%)' }} />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-2xl space-y-4">
          {label && <Reveal delay={0}><span className="inline-block text-primary font-label-sm text-label-sm tracking-[0.2em] uppercase border-b border-primary/30 pb-2">{label}</span></Reveal>}
          {title && <Reveal delay={100}><h1 className="font-display-lg text-display-lg text-off-white leading-tight">{title}</h1></Reveal>}
          {subtitle && <Reveal delay={200}><p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-lg">{subtitle}</p></Reveal>}
          {children && <Reveal delay={300}><div className="flex gap-4 pt-2">{children}</div></Reveal>}
        </div>
      </div>
    </section>
  )
}

export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-primary/10 text-primary border-primary/20',
    outline: 'bg-transparent text-primary border-gold-glass-stroke',
  }
  return (
    <span className={`inline-block font-label-sm text-label-sm uppercase tracking-widest px-3 py-1 border ${variants[variant]}`}>
      {children}
    </span>
  )
}

export function Divider({ className = '' }) {
  return (
    <div className={`gold-divider my-16 ${className}`} />
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
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-lg bg-surface-container backdrop-blur-xl border border-gold-glass-stroke flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
