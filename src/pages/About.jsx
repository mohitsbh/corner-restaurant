import { Container, Section, SectionHeader, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

const FAQS = [
  { q: 'When is the bar open?', a: 'Mon–Thu: 12pm–8pm, Fri–Sat: 9am–10pm, Sun: 9am–8pm. Alcohol served from 12pm.' },
  { q: 'When is the food hall open?', a: 'Mon–Thu: Closed, Fri–Sat: 12pm–10pm, Sun: 12pm–8pm.' },
  { q: 'Is entry free?', a: 'Yes — all our music events are free entry. Workshops may be ticketed.' },
  { q: 'Can I book a table?', a: 'Yes, fill out the form or call 020 3370 2305.' },
  { q: 'Can I hire a space for a private event?', a: 'Absolutely. Email hire@cornercorner.com.' },
  { q: 'Is there parking?', a: 'Limited on-street parking. Canada Water is a 4-minute walk.' },
  { q: 'Is the venue accessible?', a: 'Yes — fully wheelchair accessible with step-free access throughout.' },
]

const PARTNERS = [
  { name: 'Broadwick', url: 'https://broadwick.com', desc: 'Leading hospitality and cultural venue operator.' },
  { name: 'KERB', url: 'https://kerbfood.com', desc: 'Pioneers of London\'s street food scene.' },
  { name: 'Harvest London', url: 'https://harvestlondon.com', desc: 'UK\'s leading vertical farming company.' },
]

export default function About() {
  return (
    <>
      <PageHero label="About" title="About Corner Corner" subtitle="A crossroad of food, music and community in Canada Water, London SE16. Crafted by Broadwick and KERB." />
      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div><SectionHeader title="Our Story" text="Corner Corner is a destination where food, culture and community converge. We've transformed over 3,297 SQM of space into London's newest cultural hub." /></div>
            <Reveal delay={200}><div className="rounded overflow-hidden h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.stage})` }} /></Reveal>
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <SectionHeader title="Our Partners" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PARTNERS.map((p, i) => (
              <Reveal delay={i * 150} key={p.name}>
                <GlassCard className="p-6">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{p.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-3">{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noopener" className="text-primary font-label-md text-label-md">Visit Website &rarr;</a>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="!py-10">
        <Container>
          <SectionHeader title="FAQs" />
          <div className="max-w-[720px] mx-auto divide-y divide-gold-glass-stroke/20">
            {FAQS.map(f => (
              <details key={f.q} className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {f.q}<span className="text-primary text-xl transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="text-on-surface-variant font-body-md text-body-md mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <SectionHeader title="Visit Us" />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Address</h4><p className="font-body-md text-body-md text-on-surface-variant">Maritime Street<br />Canada Water<br />London SE16 7LL</p><a href="https://www.google.com/maps/place/Corner+Corner/" target="_blank" rel="noopener" className="text-primary font-body-md text-body-md mt-2 inline-block">Get Directions &rarr;</a></div>
                <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Contact</h4><p className="font-body-md text-body-md text-on-surface-variant"><a href="mailto:hello@cornercorner.com" className="text-on-surface">hello@cornercorner.com</a></p><p className="font-body-md text-body-md text-on-surface-variant"><a href="tel:02033702305" className="text-on-surface">020 3370 2305</a></p></div>
                <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Nearest Tube</h4><p className="font-body-md text-body-md text-on-surface-variant">Canada Water (Zone 2)<br />4 min walk<br />Jubilee Line</p></div>
                <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Follow</h4><div className="flex flex-col gap-1"><a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="text-on-surface-variant hover:text-primary font-body-md text-body-md">Instagram</a><a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="text-on-surface-variant hover:text-primary font-body-md text-body-md">TikTok</a></div></div>
              </div>
            </div>
            <Reveal delay={300}>
              <div className="rounded overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1!2d-0.050286!3d51.4963175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603269a66668b%3A0x310e4ee0ec6c59d0!2sCorner%20Corner!5e0!3m2!1sen!2suk" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Corner Corner location" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
