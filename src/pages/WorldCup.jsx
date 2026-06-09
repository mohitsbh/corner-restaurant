import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard } from '../components/UI'

const MATCHES = [
  { day: '14', month: 'Jun', time: '6pm', teamA: 'Germany', teamB: 'Curaçao', group: 'Group A' },
  { day: '17', month: 'Jun', time: '9pm', teamA: 'England', teamB: 'Croatia', group: 'Group B' },
]

export default function WorldCup() {
  return (
    <>
      <PageHero label="World Cup 26" title="Watch at Corner Corner" subtitle="Catch all the World Cup 2026 action on our cinema-sized LED screen with table service, street food, and ice-cold beer." />
      <Section>
        <Container>
          <SectionHeader title="Match Schedule" text="Coming soon — full World Cup 26 schedule." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MATCHES.map((m, i) => (
              <Reveal delay={i * 150} key={m.teamA}>
                <div className="flex gap-5 p-5 glass rounded-xl transition-all duration-300 hover:border-gold/20 hover:translate-x-1 group">
                  <div className="text-center min-w-[64px] py-3 px-2 bg-gold/10 rounded-xl group-hover:bg-gold/15 transition-colors"><span className="block font-serif text-[1.75rem] text-gold leading-none group-hover:scale-110 transition-transform">{m.day}</span><span className="text-[0.6875rem] uppercase tracking-[0.1em] text-[#888]">{m.month}</span></div>
                  <div className="flex-1"><span className="text-[0.6875rem] tracking-[0.1em] uppercase text-gold font-semibold">{m.group}</span><h3 className="font-serif text-lg text-white mt-1.5 mb-2">{m.teamA} vs {m.teamB}</h3><p className="text-xs text-[#888]">{m.time} · Big Screen</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <SectionHeader title="The Ultimate Match Day Experience" text="Why watch at home when you can enjoy the game on our cinema-quality LED screen with food brought straight to your table?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Big Screen', desc: 'Cinema-quality LED screen — every angle is a great view.' },
              { title: 'Table Service', desc: 'Food and drinks brought directly to your table throughout the match.' },
              { title: 'Full Bar', desc: 'Craft beer, cocktails, and soft drinks served from kick-off to final whistle.' },
            ].map((f, i) => (
              <Reveal delay={i * 100} key={f.title}>
                <GlassCard className="p-6 text-center hover-glow">
                  <h4 className="font-serif text-[1.25rem] text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-[#888]">{f.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}><Button href="/book" variant="primary">Book Your Spot</Button></Reveal>
        </Container>
      </Section>
    </>
  )
}
