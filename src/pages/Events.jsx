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
      <PageHero label="Rhythm" title="What's On" subtitle="Free live music, creative workshops, run club, World Cup screenings — programmed by Broadwick. Music events run Thu-Sun." />
      <Section>
        <Container>
          <SectionHeader title="Upcoming Events" text="Our music events are free to attend — book ahead to secure your spot." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENTS.map((e, i) => (
              <Reveal delay={i * 80} key={e.title}>
                <div className="flex gap-5 p-5 glass rounded-xl transition-all duration-300 hover:border-gold/20 hover:bg-[#161616] hover:translate-x-1 group">
                  <div className="text-center min-w-[64px] py-3 px-2 bg-gold/10 rounded-xl group-hover:bg-gold/15 transition-colors"><span className="block font-serif text-[1.75rem] text-gold leading-none group-hover:scale-110 transition-transform">{e.day}</span><span className="text-[0.6875rem] uppercase tracking-[0.1em] text-[#888]">{e.month}</span></div>
                  <div className="flex-1"><span className="text-[0.6875rem] tracking-[0.1em] uppercase text-gold font-semibold">{e.tag}</span><h3 className="font-serif text-lg text-white mt-1.5 mb-2">{e.title}</h3><p className="text-xs text-[#888]">{e.time}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <SectionHeader title="Regular Events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '☕', tag: 'Daily', title: 'The Daily Desk', desc: 'Co-working space with coffee, WiFi, and community.' },
              { icon: '🏃', tag: 'Mon 6:30pm', title: 'Run Club', desc: 'Free group run. All paces welcome.' },
              { icon: '🌿', tag: 'Fri 11am', title: 'Vertical Farm Tour', desc: 'Tour London\'s largest vertical farm.' },
            ].map((r, i) => (
              <Reveal delay={i * 100} key={r.title}>
                <div className="flex gap-5 p-5 glass rounded-xl">
                  <div className="text-center min-w-[64px] py-3 px-2 bg-gold/10 rounded-xl text-2xl">{r.icon}</div>
                  <div className="flex-1"><span className="text-[0.6875rem] tracking-[0.1em] uppercase text-gold font-semibold">{r.tag}</span><h3 className="font-serif text-lg text-white mt-1.5 mb-2">{r.title}</h3><p className="text-xs text-[#888]">{r.desc}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader title="Meet the Artists" text="Corner Corner hosts a music initiative supporting emerging talent, giving artists the chance to perform on Friday and Saturday nights." />
          <div className="flex flex-wrap gap-3">
            {ARTISTS.map((a, i) => (
              <Reveal delay={i * 30} as="span" key={a}>
                <span className="px-4 py-3 bg-[#111] rounded-full text-xs text-[#b8b0a8] border border-white/[0.04] transition-all hover:border-gold/30 hover:text-gold inline-block">{a}</span>
              </Reveal>
            ))}
          </div>
          <p className="text-[#b8b0a8] mt-8">Want to perform? <a href="mailto:hello@cornercorner.com" className="text-gold">Get in touch →</a></p>
        </Container>
      </Section>
    </>
  )
}
