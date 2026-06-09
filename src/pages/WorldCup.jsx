import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard } from '../components/UI'

const MATCHES = [
  { day: '14', month: 'Jun', time: '6pm', teamA: 'Germany', teamB: 'Curaçao', group: 'Group A' },
  { day: '17', month: 'Jun', time: '9pm', teamA: 'England', teamB: 'Croatia', group: 'Group B' },
]

export default function WorldCup() {
  return (
    <>
      <PageHero label="World Cup 26" title="Watch at Corner Corner" subtitle="Catch all the World Cup 2026 action on our cinema-sized LED screen with table service, street food, and ice-cold beer." />
      <Section className="!py-10">
        <Container>
          <SectionHeader title="Match Schedule" text="Full World Cup 26 schedule coming soon." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MATCHES.map((m, i) => (
              <Reveal delay={i * 150} key={m.teamA}>
                <div className="glass-panel p-4 flex gap-4 group hover:-translate-y-1 transition-all duration-300">
                  <div className="text-center min-w-[60px] py-2 px-2 bg-primary/10 rounded-xl">
                    <span className="block font-headline-md text-headline-md text-primary leading-none">{m.day}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{m.month}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-label-sm text-label-sm text-primary">{m.group}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-1">{m.teamA} vs {m.teamB}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{m.time} &middot; Big Screen</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <SectionHeader title="The Ultimate Match Day Experience" text="Why watch at home when you can enjoy the game on our cinema-quality LED screen with food brought straight to your table?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Big Screen', desc: 'Cinema-quality LED screen.' },
              { title: 'Table Service', desc: 'Food and drinks brought to your table.' },
              { title: 'Full Bar', desc: 'Craft beer, cocktails, and soft drinks.' },
            ].map((f, i) => (
              <Reveal delay={i * 100} key={f.title}>
                <GlassCard className="p-5 text-center">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{f.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{f.desc}</p>
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
