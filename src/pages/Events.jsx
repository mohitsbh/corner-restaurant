import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard } from '../components/UI'

const EVENTS = [
  { day: '12', month: 'Jun', tag: 'Live Music', title: 'Sarah Bird — Singer Guitarist', time: '6pm – 9pm · Free Entry' },
  { day: '13', month: 'Jun', tag: 'Live Music', title: 'Ben Eaton — Live Musician', time: '6pm – 9pm · Free Entry' },
  { day: '14', month: 'Jun', tag: 'Live Music', title: 'Mike Hogan — Irish Musician', time: '2pm – 5pm · Free Entry' },
  { day: '15', month: 'Jun', tag: 'Workshop', title: 'Terrarium Building Workshop', time: '7pm – 8:30pm · Ticketed' },
  { day: '19', month: 'Jun', tag: 'Live Music', title: 'Andrea Carola — Musician', time: '6pm – 9pm · Free Entry' },
  { day: '22', month: 'Jun', tag: 'Workshop', title: 'Kombucha Brewing Workshop', time: '7pm – 8:30pm · Ticketed' },
  { day: '27', month: 'Jun', tag: 'Live Music', title: 'Ollie Halvorsen — Musician', time: '6pm – 9pm · Free Entry' },
  { day: '14', month: 'Jun', tag: 'World Cup 26', title: 'Germany vs Curaçao', time: '6pm · Big Screen' },
  { day: '17', month: 'Jun', tag: 'World Cup 26', title: 'England vs Croatia', time: '9pm · Big Screen' },
  { day: '10', month: 'Jan', tag: 'Recurring', title: 'The Daily Desk — Remote Workers', time: 'Daily · Free' },
  { day: '13', month: 'Jan', tag: 'Recurring', title: 'Corner Corner Run Club', time: 'Every Mon 6:30pm · Free' },
  { day: '10', month: 'Jan', tag: 'Recurring', title: 'Vertical Farm Tour', time: 'Every Fri 11am · Free' },
]

const ARTISTS = [
  'Acantha Lang', 'Asere Trio', 'Cami Layé Okún', 'COLECTIVA', 'Corina Kwami Quartet', 'Djangada',
  'Donna Leake', 'Ed Babar Quartet', 'Eliana Veinberga', 'Filthy Six', 'Five Way Split', 'GAB Trio',
  'Gareth Lockrane', 'Gaspar Sena Trio', 'Graeme Flowers Trio', 'Haseeb Iqbal', 'Iain Mackenzie',
  'Irene Serra', 'Joy Ellis', 'Lily Dior', 'Lokkhi Terra', 'Mark Kuvuma Sextet', 'Millie Mckee',
  'Nick Etwell', 'Resolution 88', 'Shredding Histories', 'Tom O\'Grady Trio', 'Vandorta', 'Wild Card',
]

export default function Events() {
  return (
    <>
      <PageHero label="Rhythm" title="What's On" subtitle="Free live music, creative workshops, run club, World Cup screenings — programmed by Broadwick." />
      <Section className="!py-10">
        <Container>
          <SectionHeader title="Upcoming Events" text="Our music events are free to attend — book ahead to secure your spot." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENTS.map((e, i) => (
              <Reveal delay={i * 80} key={e.title}>
                <div className="glass-panel p-4 flex gap-4 group hover:-translate-y-1 transition-all duration-300">
                  <div className="text-center min-w-[56px] py-2 px-2 bg-primary/10 rounded-xl">
                    <span className="block font-headline-md text-headline-md text-primary leading-none">{e.day}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{e.month}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-label-sm text-label-sm text-primary">{e.tag}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-1">{e.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{e.time}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <SectionHeader title="Regular Events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tag: 'Daily', title: 'The Daily Desk', desc: 'Co-working space with coffee, WiFi, and community.' },
              { tag: 'Mon 6:30pm', title: 'Run Club', desc: 'Free group run. All paces welcome.' },
              { tag: 'Fri 11am', title: 'Vertical Farm Tour', desc: 'Tour London\'s largest vertical farm.' },
            ].map((r, i) => (
              <Reveal delay={i * 100} key={r.title}>
                <GlassCard className="p-5">
                  <span className="font-label-sm text-label-sm text-primary">{r.tag}</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mt-2 mb-2">{r.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{r.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="!py-10">
        <Container>
          <SectionHeader title="Meet the Artists" text="Corner Corner hosts a music initiative supporting emerging talent." />
          <div className="flex flex-wrap gap-2">
            {ARTISTS.map((a, i) => (
              <Reveal delay={i * 30} as="span" key={a}>
                <span className="px-3 py-1.5 bg-surface-container-low rounded-full font-body-md text-body-md text-on-surface-variant border border-gold-glass-stroke/20 inline-block">{a}</span>
              </Reveal>
            ))}
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md mt-4">Want to perform? <a href="mailto:hello@cornercorner.com" className="text-primary">Get in touch &rarr;</a></p>
        </Container>
      </Section>
    </>
  )
}
