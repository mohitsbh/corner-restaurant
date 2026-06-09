import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

const VENDORS = [
  { img: IMAGES.cafe, tag: 'Café', title: 'Café by Sireli', desc: 'Speciality coffee, fresh pastries, and light bites. Your morning ritual reimagined.' },
  { img: IMAGES.chicken, tag: 'Street Food', title: 'Chick N Sours', desc: 'Taiwanese-inspired fried chicken — crispy, bold, and packed with flavour.' },
  { img: IMAGES.drinksVideo, tag: 'Bar', title: 'Craft Cocktails & Wine', desc: 'Curated wine list, craft beers, and signature cocktails.' },
  { img: IMAGES.drinksVideo, tag: 'Happy Hour', title: 'Sundowner Hour', desc: 'Mon–Fri 5pm–7pm. Discounted drinks and bar snacks.' },
  { img: IMAGES.farm, tag: 'Co-Working', title: 'The Daily Desk', desc: 'Flexible co-working with great coffee, reliable WiFi, and a buzzing atmosphere.' },
  { img: IMAGES.farm, tag: 'Rewards', title: 'Corner Corner Rewards', desc: 'Earn points on every visit. Redeem for free drinks, food, and exclusive access.' },
]

export default function Food() {
  return (
    <>
      <PageHero label="Taste" title="Food & Drink" subtitle="Curated by KERB — London's best independent street food, craft cocktails, and farm-fresh produce, all under one roof." />
      <Section className="!py-10">
        <Container>
          <SectionHeader title="Our Vendors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VENDORS.map((v, i) => (
              <Reveal delay={i * 100} key={v.title}>
                <GlassCard className="overflow-hidden group">
                  <div className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${v.img})` }} />
                  <div className="p-5">
                    <span className="font-label-sm text-label-sm text-primary">{v.tag}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-2 mb-1.5">{v.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{v.desc}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <div className="py-6 bg-surface-container-low border-y border-gold-glass-stroke/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><h4 className="font-headline-md text-headline-md text-primary mb-1.5">Café & Bar</h4><p className="font-body-md text-body-md text-on-surface-variant">Mon–Thu: 12pm–8pm<br />Fri–Sat: 9am–10pm<br />Sun: 9am–8pm</p></div>
            <div><h4 className="font-headline-md text-headline-md text-primary mb-1.5">Food Hall</h4><p className="font-body-md text-body-md text-on-surface-variant">Mon–Thu: Closed<br />Fri–Sat: 12pm–10pm<br />Sun: 12pm–8pm</p></div>
            <div><h4 className="font-headline-md text-headline-md text-primary mb-1.5">Bar (Late)</h4><p className="font-body-md text-body-md text-on-surface-variant">Mon–Thu: Closed<br />Fri–Sat: 12pm–10pm<br />Sun: 12pm–9pm</p></div>
            <div className="flex flex-col justify-center gap-2"><p className="font-label-sm text-label-sm text-on-surface-variant/60">Alcohol served from 12pm.</p><Button href="/book" variant="primary" size="sm">Book a Table</Button></div>
          </div>
        </Container>
      </div>
      <Section className="!py-10">
        <Container>
          <SectionHeader title="Something For Everyone" text={<>Corner Corner is a space for all. For groups of 60+ or private hire, contact <a href="mailto:hire@cornercorner.com" className="text-primary">hire@cornercorner.com</a>.</>} />
          <Reveal delay={200}><div className="flex gap-4 flex-wrap"><Button href="/book" variant="primary">Book a Table</Button><Button href="/events" variant="outline">See What's On</Button></div></Reveal>
        </Container>
      </Section>
    </>
  )
}
