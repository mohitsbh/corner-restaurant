import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

const VENDORS = [
  { img: IMAGES.chicken, tag: 'Street Food', title: 'Chick N Sours', desc: 'Taiwanese-inspired fried chicken — crispy, bold, and packed with flavour. Served with signature sour cocktails and house-made sides.' },
  { img: IMAGES.cafe, tag: 'Café', title: 'Café by Sireli', desc: 'Speciality coffee, fresh pastries, and light bites. Your morning ritual reimagined. Open from 9am on weekends.' },
  { img: IMAGES.drinksVideo, tag: 'Bar', title: 'Craft Cocktails & Wine', desc: 'Curated wine list, craft beers, and signature cocktails. Don\'t miss Sundowner Hour — our daily happy hour.' },
  { img: IMAGES.farm, tag: 'Co-Working', title: 'The Daily Desk', desc: 'A flexible co-working space with great coffee, reliable WiFi, and a buzzing atmosphere. Day passes available.' },
]

export default function Food() {
  return (
    <>
      <PageHero label="Taste" title="Food & Drink" subtitle="Curated by KERB — London's best independent street food, craft cocktails, and farm-fresh produce, all under one roof." />
      <Section>
        <Container>
          <SectionHeader title="Our Vendors" text="Corner Corner's food and drink offering represents the best of London and caters to all tastes and budgets. Whether you're looking for a family-friendly eatery or an evening catching up with friends, this is the space for you." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENDORS.map((v, i) => (
              <Reveal delay={i * 100} key={v.title}>
                <GlassCard className="overflow-hidden group image-hover hover-glow">
                  <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${v.img})` }} />
                  <div className="p-6">
                    <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-gold font-semibold">{v.tag}</span>
                    <h3 className="font-serif text-[1.375rem] text-white mt-2 mb-2">{v.title}</h3>
                    <p className="text-sm text-[#888] leading-relaxed">{v.desc}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Reveal><div className="py-16 bg-[#111] border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><h4 className="font-serif text-lg text-gold mb-3">Café & Bar</h4><p className="text-sm text-[#888] leading-loose">Mon–Thu: 12pm–8pm<br />Fri–Sat: 9am–10pm<br />Sun: 9am–8pm</p></div>
            <div><h4 className="font-serif text-lg text-gold mb-3">Food Hall</h4><p className="text-sm text-[#888] leading-loose">Mon–Thu: Closed<br />Fri–Sat: 12pm–10pm<br />Sun: 12pm–8pm</p></div>
            <div><h4 className="font-serif text-lg text-gold mb-3">Bar (Late)</h4><p className="text-sm text-[#888] leading-loose">Mon–Thu: Closed<br />Fri–Sat: 12pm–10pm<br />Sun: 12pm–9pm</p></div>
            <div className="flex flex-col justify-center gap-3"><p className="text-xs text-[#666]">Alcohol served from 12pm.</p><Button href="/book" variant="primary" size="sm">Book a Table</Button></div>
          </div>
        </Container>
      </div></Reveal>
      <Section>
        <Container>
          <SectionHeader title="Something For Everyone" text={<>Corner Corner is a space for all — we accept bookings for any group size. For groups of 60+ or private hire, contact <a href="mailto:hire@cornercorner.com" className="text-gold">hire@cornercorner.com</a>.</>} />
          <Reveal delay={200}><div className="flex gap-4 flex-wrap"><Button href="/book" variant="primary">Book a Table</Button><Button href="/events" variant="outline" size="sm">See What's On</Button></div></Reveal>
        </Container>
      </Section>
    </>
  )
}
