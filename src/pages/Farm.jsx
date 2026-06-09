import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

export default function Farm() {
  return (
    <>
      <PageHero label="Nature" title="Vertical Farm" subtitle="London's largest commercial indoor vertical farm. Growing hyper-local, sustainable produce year-round — right here on site." />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal delay={0}><div className="rounded-xl overflow-hidden image-hover"><img src={IMAGES.farm} alt="Harvest London vertical farm" className="w-full h-[450px] object-cover" loading="lazy" /></div></Reveal>
            <div>
              <SectionHeader title="Developed With Harvest London" text="Our on-site vertical farm is a pioneering partnership with Harvest London, the UK's leading vertical farming company. Using innovative hydroponic technology, we grow a variety of crops in a completely controlled environment — no pesticides, no soil, minimal water." />
              <Reveal delay={300}><div className="grid grid-cols-3 gap-6 py-8">
                <GlassCard gold className="text-center p-5 hover-glow"><span className="font-serif text-2xl text-gold block">95%</span><span className="text-xs text-[#666] uppercase tracking-[0.08em]">Less Water</span></GlassCard>
                <GlassCard gold className="text-center p-5 hover-glow"><span className="font-serif text-2xl text-gold block">0</span><span className="text-xs text-[#666] uppercase tracking-[0.08em]">Pesticides</span></GlassCard>
                <GlassCard gold className="text-center p-5 hover-glow"><span className="font-serif text-2xl text-gold block">365</span><span className="text-xs text-[#666] uppercase tracking-[0.08em]">Days/Year</span></GlassCard>
              </div></Reveal>
              <Reveal delay={400}><Button href="https://harvestlondon.com" variant="primary">Visit Harvest London</Button></Reveal>
            </div>
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <SectionHeader title="Book a Farm Tour" text="Come and see the farm in action. Tours are available for individuals, corporate groups, school groups, and charities. The tour is free." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: 'Public Tours', time: 'Fridays 11am', desc: 'Free guided tour open to everyone. Book in advance.' },
              { title: 'Corporate Tours', time: 'By arrangement', desc: 'Team-building and ESG-focused visits. Group sizes up to 20.' },
              { title: 'School & Charity', time: 'By arrangement', desc: 'Educational tours for schools and charitable organisations.' },
              { title: 'Private Events', time: 'By arrangement', desc: 'Dine inside the Plant Room — a unique greenhouse setting.' },
            ].map((t, i) => (
              <Reveal delay={i * 100} key={t.title}>
                <GlassCard className="p-6 hover-glow">
                  <h4 className="font-serif text-[1.25rem] text-white mb-1">{t.title}</h4>
                  <p className="text-xs text-gold uppercase tracking-[0.08em] mb-3">{t.time}</p>
                  <p className="text-sm text-[#888] leading-relaxed">{t.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}><Button href="mailto:hello@cornercorner.com" variant="primary">Book a Tour →</Button></Reveal>
        </Container>
      </Section>
    </>
  )
}
