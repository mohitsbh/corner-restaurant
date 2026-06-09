import { Container, Section, SectionHeader, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

const FAQS = [
  { q: 'When is the bar open?', a: 'Mon–Thu: 12pm–8pm, Fri–Sat: 9am–10pm, Sun: 9am–8pm. Alcohol served from 12pm.' },
  { q: 'When is the food hall open?', a: 'Mon–Thu: Closed, Fri–Sat: 12pm–10pm, Sun: 12pm–8pm.' },
  { q: 'Is entry free?', a: 'Yes — all our music events are free entry and open to all. Workshops and special events may be ticketed.' },
  { q: 'Can I book a table?', a: 'Yes, we take bookings for the food hall and bar. Fill out the contact form or call 020 3370 2305.' },
  { q: 'Can I hire a space for a private event?', a: 'Absolutely. We have seven spaces available for private hire. Email hire@cornercorner.com.' },
  { q: 'Is there parking?', a: 'Limited on-street parking. Canada Water is a 4-minute walk from the venue. We recommend public transport.' },
  { q: 'Is the venue accessible?', a: 'Yes — Corner Corner is fully wheelchair accessible with step-free access throughout.' },
]

const PARTNERS = [
  { name: 'Broadwick', url: 'https://broadwick.com', desc: 'Leading hospitality and cultural venue operator behind some of London\'s most iconic spaces.' },
  { name: 'KERB', url: 'https://kerbfood.com', desc: 'Pioneers of London\'s street food scene. Operators of Seven Dials Market.' },
  { name: 'Harvest London', url: 'https://harvestlondon.com', desc: 'UK\'s leading vertical farming company. Growing fresh produce on-site.' },
]

export default function About() {
  return (
    <>
      <PageHero label="About" title="About Corner Corner" subtitle="A crossroad of food, music and community in the heart of Canada Water, London SE16. Crafted by Broadwick and KERB." />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div><SectionHeader title="Our Story" text="Corner Corner is a destination. A place where food, culture and community converge. Born out of a vision to create something truly unique in Canada Water, we've transformed over 3,297 SQM of space into London's newest cultural hub — complete with London's largest commercial indoor vertical farm, a rotating lineup of the city's best street food vendors, and a year-round programme of free live music and events." /></div>
            <Reveal delay={200}><div className="rounded-xl overflow-hidden h-[400px] bg-cover bg-center image-hover" style={{ backgroundImage: `url(${IMAGES.stage})` }} /></Reveal>
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <SectionHeader title="Our Partners" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PARTNERS.map((p, i) => (
              <Reveal delay={i * 150} key={p.name}>
                <GlassCard className="p-8">
                  <h3 className="font-serif text-[1.5rem] text-white mb-3">{p.name}</h3>
                  <p className="text-sm text-[#888] leading-relaxed mb-4">{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noopener" className="text-gold text-sm hover:text-gold-light transition-colors">Visit Website →</a>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader title="FAQs" />
          <div className="max-w-[720px] mx-auto divide-y divide-white/[0.06]">
            {FAQS.map(f => (
              <details key={f.q} className="group py-5 [&_[open]_summary]:mb-3">
                <summary className="flex justify-between items-center cursor-pointer text-[1.0625rem] text-white font-medium hover:text-gold transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {f.q}<span className="text-gold text-xl transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="text-[#b8b0a8] leading-relaxed text-[0.9375rem] mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader title="Visit Us" />
              <Reveal delay={200}><div className="grid grid-cols-2 gap-8 mt-8">
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Address</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Maritime Street<br />Canada Water<br />London SE16 7LL</p><a href="https://www.google.com/maps/place/Corner+Corner/@51.4963175,-0.050286,694m/" target="_blank" rel="noopener" className="text-gold text-sm mt-3 inline-block hover:text-gold-light transition-colors">Get Directions →</a></div>
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Contact</h4><p className="text-[0.9375rem] text-[#b8b0a8]"><a href="mailto:hello@cornercorner.com" className="text-[#f5f0eb] hover:text-gold transition-colors">hello@cornercorner.com</a></p><p className="text-[0.9375rem] text-[#b8b0a8]"><a href="tel:02033702305" className="text-[#f5f0eb] hover:text-gold transition-colors">020 3370 2305</a></p><p className="text-[0.9375rem] text-[#b8b0a8] mt-2">what3words: <a href="https://what3words.com/magma.oven.bolt" target="_blank" rel="noopener" className="text-[#f5f0eb] hover:text-gold transition-colors">///magma.oven.bolt</a></p></div>
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Nearest Tube</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Canada Water (Zone 2)<br />4 min walk<br />Jubilee Line</p></div>
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Follow</h4><div className="flex flex-col gap-2"><a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors text-[0.9375rem]">Instagram</a><a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors text-[0.9375rem]">TikTok</a><a href="https://www.facebook.com/cornercornercanadawater" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors text-[0.9375rem]">Facebook</a></div></div>
              </div></Reveal>
            </div>
            <Reveal delay={300}><div className="rounded-xl overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1!2d-0.050286!3d51.4963175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603269a66668b%3A0x310e4ee0ec6c59d0!2sCorner%20Corner!5e0!3m2!1sen!2suk" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Corner Corner location" /></div></Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
