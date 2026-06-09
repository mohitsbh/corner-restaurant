import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

export default function Farm() {
  return (
    <>
      <PageHero label="Nature" title="Vertical Farm" subtitle="London's largest commercial indoor vertical farm. Growing hyper-local, sustainable produce year-round." />
      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <Reveal delay={0}><div className="rounded overflow-hidden"><img src={IMAGES.farm} alt="Harvest London vertical farm" className="w-full h-[300px] object-cover" loading="lazy" /></div></Reveal>
            <div>
              <SectionHeader title="Developed With Harvest London" text="Our on-site vertical farm uses innovative hydroponic technology to grow a variety of crops in a completely controlled environment — no pesticides, no soil, minimal water." />
              <div className="grid grid-cols-3 gap-4 py-4">
                <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">95%</span><span className="font-label-sm text-label-sm text-on-surface-variant">Less Water</span></GlassCard>
                <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">0</span><span className="font-label-sm text-label-sm text-on-surface-variant">Pesticides</span></GlassCard>
                <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">365</span><span className="font-label-sm text-label-sm text-on-surface-variant">Days/Year</span></GlassCard>
              </div>
              <Reveal delay={400}><Button href="https://harvestlondon.com" variant="primary">Visit Harvest London</Button></Reveal>
            </div>
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <SectionHeader title="Book a Farm Tour" text="Come and see the farm in action. Tours are free and available for individuals, groups, schools, and charities." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { title: 'Public Tours', time: 'Fridays 11am', desc: 'Free guided tour open to everyone.' },
              { title: 'Corporate Tours', time: 'By arrangement', desc: 'Team-building visits. Groups up to 20.' },
              { title: 'School & Charity', time: 'By arrangement', desc: 'Educational tours for schools and charities.' },
              { title: 'Private Events', time: 'By arrangement', desc: 'Dine inside the Plant Room greenhouse.' },
            ].map((t, i) => (
              <Reveal delay={i * 100} key={t.title}>
                <GlassCard className="p-5">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-1">{t.title}</h4>
                  <p className="font-label-sm text-label-sm text-primary mb-2">{t.time}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">{t.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}><Button href="mailto:hello@cornercorner.com" variant="primary">Book a Tour &rarr;</Button></Reveal>
        </Container>
      </Section>
    </>
  )
}
