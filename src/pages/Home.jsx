import { Link } from 'react-router-dom'
import { Container, SectionHeader, Reveal, IMAGES } from '../components/UI'

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
          <Reveal delay={0}>
            <h1 className="font-display-lg text-display-lg md:text-[80px] text-primary mb-4 leading-none">Craft. Connect. Compose. Cultivate.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Corner Corner is your place to create and connect. It is more than just a space — it's a crossroads of food, culture and community. From sustainable farming and street food to live music and curated events.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/book" className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 uppercase tracking-widest hover:brightness-110 transition-all inline-block">Book a Table</Link>
              <Link to="/events" className="border border-primary text-primary font-label-md text-label-md px-8 py-4 uppercase tracking-widest hover:bg-primary/10 transition-all inline-block">What's On</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10 bg-surface-container-lowest">
        <Container>
          <div className="aspect-video w-full rounded overflow-hidden">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/2Tq2SBDOYsc" title="Corner Corner" allowFullScreen />
          </div>
        </Container>
      </section>

      <section className="py-14 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: '1', subtitle: 'Sustainable Farming', title: 'Nature', desc: 'Home to London\'s biggest commercial indoor vertical farm, developed by Harvest London. Providing locally grown produce directly to our bars while supplying restaurants across London.' },
            { num: '2', subtitle: 'A Curated Soundtrack', title: 'Rhythm', desc: 'Programmed by Broadwick, Corner Corner showcases weekly live music and rotating selectors spinning a blend of disco, funk, and soul.' },
            { num: '3', subtitle: 'Locally Sourced Street Food', title: 'Taste', desc: 'Curated by KERB, early pioneers of London\'s street food culture, our food offering showcases the diversity of the city\'s independent food scene.' },
            { num: '4', subtitle: 'Community Focused', title: 'Culture', desc: 'Open to all, Corner Corner is your space to connect, where culture, creativity and community thrive.' },
          ].map((p, i) => (
            <Reveal delay={i * 100} key={p.title}>
              <div className="glass-panel p-6 ambient-glow group hover:-translate-y-1 transition-transform duration-500">
                <span className="font-label-sm text-label-sm text-primary">{p.subtitle}</span>
                <h3 className="font-headline-md text-headline-md text-primary mt-3 mb-2"><span className="text-on-surface-variant/40">{p.num}</span> {p.title}</h3>
                <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 bg-surface-container-lowest">
        <Container>
          <div className="text-center mb-6">
            <span className="text-primary font-label-sm text-label-sm uppercase tracking-[0.2em]">Our Partners</span>
            <h2 className="font-headline-lg text-headline-lg text-off-white mt-2 mb-2">We Collaborate</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Our business is built on partnerships and harnessing the strength, diversity, and expertise of those we work with.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Broadwick', 'KERB', 'Harvest London', 'Sireli'].map((p, i) => (
              <Reveal delay={i * 100} key={p}>
                <div className="glass-panel p-6 ambient-glow flex items-center justify-center h-24">
                  <span className="font-headline-md text-headline-md text-on-surface-variant/40 text-center">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="glass-panel p-8 ambient-glow text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">The Space for Anything</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-6">Our private hire spaces are ideal for everything from conferences and awards dinners to exhibitions and celebrations. A unique, flexible venue layout designed to adapt effortlessly to events of any scale.</p>
            <Link to="/venue-hire" className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 inline-block hover:brightness-110 transition-all">Explore Spaces</Link>
          </div>
        </Container>
      </section>

      <section className="py-14 bg-surface-container-lowest">
        <Container>
          <SectionHeader label="Taste" title="The Food Hall" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: IMAGES.chicken, title: 'Chick N Sours', desc: 'Fried Chicken & Sour Cocktails' },
              { img: IMAGES.cafe, title: 'Café by Sireli', desc: 'Levantine-inspired brunch' },
              { img: IMAGES.farm, title: 'Izakaya Corner', desc: 'Experimental Japanese Tapas' },
            ].map((item, i) => (
              <Reveal delay={i * 100} key={item.title}>
                <div className="relative group overflow-hidden rounded">
                  <div className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${item.img})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 p-6">
                    <h4 className="font-headline-md text-headline-md text-primary">{item.title}</h4>
                    <p className="font-label-md text-label-md text-muted-silver mt-1">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <h4 className="text-primary font-headline-md text-headline-md mb-1">Café & Bar</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Mon–Thu: 12pm–8pm<br/>Fri–Sat: 9am–10pm<br/>Sun: 9am–8pm</p>
            </div>
            <div>
              <h4 className="text-primary font-headline-md text-headline-md mb-1">Food Hall</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Mon–Thu: Closed<br/>Fri–Sat: 12pm–10pm<br/>Sun: 12pm–8pm</p>
            </div>
            <div>
              <h4 className="text-primary font-headline-md text-headline-md mb-1">Bar (Late)</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Mon–Thu: Closed<br/>Fri–Sat: 12pm–10pm<br/>Sun: 12pm–9pm</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="font-label-sm text-label-sm text-on-surface-variant/60">Alcohol served from 12pm.</p>
              <Link to="/book" className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 hover:brightness-110 transition-all inline-block">Reserve Now</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeader label="What's On" title="Upcoming Events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { date: 'FRI 24 MAY · 20:00', title: 'Late Night Jazz Sessions', desc: 'Experience the smooth sounds of the Blue Corner Quartet in our intimate lounge.' },
              { date: 'SAT 25 MAY · 14:00', title: 'Natural Wine Workshop', desc: 'A curated journey through European low-intervention vineyards with sommelier Luca Rossi.' },
              { date: 'SUN 26 MAY · 11:00', title: 'The Art of Fermentation', desc: 'Master the secrets of artisanal kimchi and kombucha in our sustainable kitchen workshop.' },
            ].map((e, i) => (
              <Reveal delay={i * 100} key={e.title}>
                <div className="glass-panel p-5 ambient-glow flex flex-col group hover:-translate-y-1 transition-transform duration-500">
                  <span className="font-label-sm text-label-sm text-primary mb-2">{e.date}</span>
                  <h4 className="font-headline-md text-headline-md text-off-white mb-2">{e.title}</h4>
                  <p className="text-on-surface-variant font-body-md text-body-md mb-4">{e.desc}</p>
                  <button className="mt-auto text-primary font-label-md text-label-md border-b border-primary self-start pb-1 hover:pb-2 transition-all">Get Tickets</button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="text-center mt-6">
              <Link to="/events" className="border border-primary text-primary font-label-md text-label-md px-8 py-3 hover:bg-primary/10 transition-all inline-block">View All Events</Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 bg-surface-container-lowest">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Reveal delay={0}>
              <div className="glass-panel p-3 ambient-glow">
                <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.farm})` }} />
              </div>
            </Reveal>
            <div>
              <SectionHeader label="Sustainability" title="London's Largest Vertical Farm" text="Developed by Harvest London, our on-site vertical farm grows produce year-round with no pesticides. Available for public tours, corporate visits, school groups, and charities." />
              <Reveal delay={400}>
                <Link to="/farm" className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 inline-block hover:brightness-110 transition-all">Book a Farm Tour</Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Ready to Visit?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Join us for an evening of artisanal discovery. Tables fill up quickly — reserve yours today.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/book" className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 uppercase tracking-widest hover:brightness-110 transition-all inline-block">Book Now</Link>
              <Link to="/contact" className="text-primary font-label-md text-label-md px-10 py-4 uppercase tracking-widest border border-gold-glass-stroke hover:bg-white/5 transition-all inline-block">Contact Us</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
