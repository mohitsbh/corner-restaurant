import { Container, Section, SectionHeader, Button, Pillar, Reveal, GlassCard, Badge, IMAGES } from '../components/UI'

const EVENTS = [
  { day: '12', month: 'Jun', tag: 'Live Music', title: 'Sarah Bird — Singer Guitarist', time: '6pm – 9pm · Free' },
  { day: '13', month: 'Jun', tag: 'Live Music', title: 'Ben Eaton — Live Musician', time: '6pm – 9pm · Free' },
  { day: '14', month: 'Jun', tag: 'Live Music', title: 'Mike Hogan — Irish Musician', time: '2pm – 5pm · Free' },
  { day: '15', month: 'Jun', tag: 'Workshop', title: 'Terrarium Building Workshop', time: '7pm – 8:30pm · Ticketed' },
  { day: '22', month: 'Jun', tag: 'Workshop', title: 'Kombucha Brewing Workshop', time: '7pm – 8:30pm · Ticketed' },
  { day: '14', month: 'Jun', tag: 'World Cup 26', title: 'Germany vs Curaçao', time: '6pm · Big Screen' },
]

export default function Home() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 will-change-transform" style={{ transform: 'scale(1)' }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,110,0.08)_0%,transparent_50%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />
        </div>
        <Container className="relative z-10 w-full">
          <Reveal delay={0}>
            <Badge variant="outline">Canada Water, London SE16</Badge>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-serif text-[clamp(3rem,10vw,7rem)] leading-[1.05] text-white mb-6">
              <span className="block">Eat. Drink.</span>
              <span className="block gold-shine">Experience.</span>
            </h1>
          </Reveal>
          <Reveal delay={350}>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#b8b0a8] max-w-[560px] leading-relaxed mb-10">
              A crossroad of food, music & community — where London's street food culture meets live jazz, sustainable farming, and unforgettable moments.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="flex gap-4 flex-wrap mb-12">
              <Button href="/book" variant="primary" size="lg">Book a Table</Button>
              <Button href="/events" variant="outline" size="lg">Explore Events</Button>
            </div>
          </Reveal>
          <Reveal delay={650}>
            <div className="flex gap-8 sm:gap-12 flex-wrap">
              {[
                { num: '3,297', label: 'SQM Venue' },
                { num: '1,500', label: 'Event Capacity' },
                { num: '4.8', label: '★ Google Rating' },
                { num: '50+', label: 'Live Events/Year' },
              ].map(t => (
                <div key={t.label} className="text-center">
                  <span className="font-serif text-[1.75rem] text-gold block leading-none">{t.num}</span>
                  <span className="text-xs text-white/50 uppercase tracking-[0.08em] mt-1 block">{t.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[0.6875rem] tracking-[0.1em] uppercase z-10">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      <Section className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_left,rgba(201,169,110,0.04)_0%,transparent_60%)] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <SectionHeader label="The Concept" title="Craft. Connect. Compose. Cultivate." text="Corner Corner is more than just a space — it's a crossroads of food, culture and community. From sustainable farming and street food to live music and curated events, every detail is designed to bring people together. Crafted in partnership by Broadwick and KERB — the teams behind London's most iconic cultural destinations." />
              <Reveal delay={300}><Button href="/about" variant="text">Discover Our Story →</Button></Reveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Pillar delay={0} number="01" title="Nature" text="London's biggest commercial indoor vertical farm. Hyper-local, sustainable produce by Harvest London." />
              <Pillar delay={100} number="02" title="Rhythm" text="Live jazz, disco, funk & soul — programmed by Broadwick. Thu-Sun, always free." />
              <Pillar delay={200} number="03" title="Taste" text="Curated by KERB — a rotating lineup of London's best independent street food." />
              <Pillar delay={300} number="04" title="Culture" text="Open to all. Where creativity, connection and community thrive." />
            </div>
          </div>
        </Container>
      </Section>

      <div className="mb-20">
        <Container>
          <Reveal><div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl shadow-black/50"><iframe src="https://www.youtube.com/embed/2Tq2SBDOYsc?autoplay=1&mute=1&loop=1&playlist=2Tq2SBDOYsc" title="Corner Corner" className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen" loading="lazy" /></div></Reveal>
        </Container>
      </div>

      <Section dark className="bg-dots">
        <Container>
          <SectionHeader label="Taste" title="London's Best Street Food, Under One Roof" text="Curated by KERB — early pioneers of London's street food culture and operators of Seven Dials Market." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: IMAGES.chicken, tag: 'Street Food', title: 'Chick N Sours', desc: 'Taiwanese-inspired fried chicken with bold flavours and signature cocktails.' },
              { img: IMAGES.cafe, tag: 'Café', title: 'Café by Sireli', desc: 'Speciality coffee, fresh pastries, and light bites to start your day.' },
              { img: IMAGES.drinksVideo, tag: 'Bar', title: 'Craft Drinks', desc: 'Curated wine, craft beers, signature cocktails, and Sundowner Hour.' },
              { img: IMAGES.farm, tag: 'Farm Fresh', title: 'Farm to Fork', desc: 'Produce from our on-site vertical farm, served directly at your table.' },
            ].map((item, i) => (
              <Reveal delay={i * 100} key={item.title}>
                <GlassCard className="overflow-hidden group image-hover hover-glow">
                  <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }} />
                  <div className="p-6">
                    <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-gold font-semibold">{item.tag}</span>
                    <h3 className="font-serif text-[1.375rem] text-white mt-2 mb-2">{item.title}</h3>
                    <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}><div className="flex gap-4 flex-wrap mt-12"><Button href="/food" variant="primary">View Full Menu</Button><Button href="/book" variant="outline">Book a Table</Button></div></Reveal>
        </Container>
      </Section>

      <div className="py-16 bg-[#111] border-y border-white/[0.04]">
        <Container>
          <Reveal><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><h4 className="font-serif text-lg text-gold mb-3">Café & Bar</h4><p className="text-sm text-[#888] leading-loose">Mon–Thu: 12pm–8pm<br />Fri–Sat: 9am–10pm<br />Sun: 9am–8pm</p></div>
            <div><h4 className="font-serif text-lg text-gold mb-3">Food Hall</h4><p className="text-sm text-[#888] leading-loose">Mon–Thu: Closed<br />Fri–Sat: 12pm–10pm<br />Sun: 12pm–8pm</p></div>
            <div><h4 className="font-serif text-lg text-gold mb-3">Bar (Late)</h4><p className="text-sm text-[#888] leading-loose">Mon–Thu: Closed<br />Fri–Sat: 12pm–10pm<br />Sun: 12pm–9pm</p></div>
            <div className="flex flex-col justify-center gap-3"><p className="text-xs text-[#666]">Alcohol served from 12pm.</p><Button href="/book" variant="primary" size="sm">Reserve Now</Button></div>
          </div></Reveal>
        </Container>
      </div>

      <Section>
        <Container>
          <SectionHeader label="Rhythm" title="Live Music & Events" text="Free live jazz, DJ sets blending disco, funk & soul, workshops, run club, and more. Every Thursday through Sunday." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENTS.map((e, i) => (
              <Reveal delay={i * 80} key={e.title}>
                <div className="flex gap-5 p-5 glass rounded-xl transition-all duration-300 hover:border-gold/20 hover:bg-[#161616] hover:translate-x-1 group">
                  <div className="text-center min-w-[64px] py-3 px-2 bg-gold/10 rounded-xl group-hover:bg-gold/15 transition-colors"><span className="block font-serif text-[1.75rem] text-gold leading-none transition-transform duration-300 group-hover:scale-110">{e.day}</span><span className="text-[0.6875rem] uppercase tracking-[0.1em] text-[#888]">{e.month}</span></div>
                  <div className="flex-1"><span className="text-[0.6875rem] tracking-[0.1em] uppercase text-gold font-semibold">{e.tag}</span><h3 className="font-serif text-lg text-white mt-1.5 mb-2">{e.title}</h3><p className="text-xs text-[#888]">{e.time}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}><div className="flex gap-4 flex-wrap mt-12"><Button href="/events" variant="primary">View All Events</Button><Button href="/events" variant="outline">Event Calendar</Button></div></Reveal>
        </Container>
      </Section>

      <Section dark className="bg-dots">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader label="Space" title="Host Your Event at Corner Corner" text="3,297 SQM across seven versatile spaces — from the 1,698 SQM Event Hall (capacity 1,500) to the intimate Studio with dockside views." />
              <Reveal delay={300}><div className="grid grid-cols-2 gap-6 my-8">
                {[{ value: '3,297', label: 'SQM Total' },{ value: '1,500', label: 'Max Capacity' },{ value: '7', label: 'Unique Spaces' },{ value: '3AM', label: 'Late Licence' }].map(s => (
                  <div key={s.label} className="text-center p-5 glass rounded-xl"><span className="font-serif text-2xl text-gold block">{s.value}</span><span className="text-xs text-[#666] uppercase tracking-[0.08em] mt-1 block">{s.label}</span></div>
                ))}
              </div></Reveal>
              <Reveal delay={500}><div className="flex gap-4 flex-wrap"><Button href="/venue-hire" variant="primary">Explore Spaces</Button><Button href="/venue-hire#enquire" variant="outline">Enquire Now</Button></div></Reveal>
            </div>
            <Reveal delay={200}><div className="h-[500px] rounded-xl overflow-hidden relative bg-cover bg-center image-hover" style={{ backgroundImage: `url(${IMAGES.stage})` }}>
              <span className="absolute bottom-8 left-8 text-xs bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-[#f5f0eb]">Event Hall — 1,500 capacity</span>
            </div></Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal delay={0}><div className="rounded-xl overflow-hidden image-hover"><img src={IMAGES.farm} alt="Vertical farm" className="w-full h-[450px] object-cover" loading="lazy" /></div></Reveal>
            <div>
              <SectionHeader label="Nature" title="London's Largest Vertical Farm" text="Developed by Harvest London, our on-site vertical farm grows produce year-round with no pesticides. Available for public tours, corporate visits, school groups, and charities." />
              <Reveal delay={400}><Button href="/farm" variant="primary">Book a Farm Tour</Button></Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section dark className="bg-dots">
        <Container>
          <SectionHeader label="Community" title="What People Say" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { stars: '★★★★★', text: '"Incredible venue — the food hall is amazing, great atmosphere and the vertical farm tour was fascinating."', author: 'Google Reviews', rating: '4.8 ★' },
              { stars: '★★★★★', text: '"The perfect spot for watching the World Cup. Big screens, great food brought to your table, electric atmosphere."', author: 'World Cup 26 Fan', rating: '5.0 ★' },
              { stars: '★★★★★', text: '"Hosted our corporate event here. The team was exceptional, the space is stunning, and the catering was world-class."', author: 'Corporate Client', rating: '5.0 ★' },
            ].map((t, i) => (
              <Reveal delay={i * 150} key={t.author}>
                <GlassCard gold className="p-8 hover-glow">
                  <div className="text-gold text-xl tracking-[4px] mb-4">{t.stars}</div>
                  <p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed italic">{t.text}</p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/[0.06]"><span className="text-sm text-white font-medium">{t.author}</span><span className="text-xs text-gold">{t.rating}</span></div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader label="Follow Us" title="@cornercornercanadawater" text="Tag us for a chance to be featured." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[IMAGES.chicken, IMAGES.farm, IMAGES.stage, IMAGES.cafe].map((img, i) => (
              <Reveal delay={i * 100} key={img}>
                <a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="aspect-square bg-cover bg-center relative group overflow-hidden rounded-sm image-hover" style={{ backgroundImage: `url(${img})` }}>
                  <span className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium tracking-wider backdrop-blur-sm">Follow →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="bg-dots">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader label="Visit Us" title="Canada Water's Destination" />
              <Reveal delay={200}><div className="grid grid-cols-2 gap-8 mt-8">
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Address</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Maritime Street<br />Canada Water<br />London SE16 7LL</p><a href="https://www.google.com/maps/place/Corner+Corner/@51.4963175,-0.050286,694m/" target="_blank" rel="noopener" className="text-gold text-sm mt-3 inline-block hover:text-gold-light transition-colors">Get Directions →</a></div>
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Contact</h4><p className="text-[0.9375rem] text-[#b8b0a8]"><a href="mailto:hello@cornercorner.com" className="text-[#f5f0eb] hover:text-gold transition-colors">hello@cornercorner.com</a></p><p className="text-[0.9375rem] text-[#b8b0a8]"><a href="tel:02033702305" className="text-[#f5f0eb] hover:text-gold transition-colors">020 3370 2305</a></p><p className="text-[0.9375rem] text-[#b8b0a8] mt-2">what3words: <a href="https://what3words.com/magma.oven.bolt" target="_blank" rel="noopener" className="text-[#f5f0eb] hover:text-gold transition-colors">///magma.oven.bolt</a></p></div>
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Nearest Tube</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Canada Water (Zone 2)<br />4 min walk<br />Jubilee Line</p></div>
                <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Follow</h4><div className="flex flex-col gap-2"><a href="https://www.instagram.com/cornercornercanadawater/" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors text-[0.9375rem]">Instagram</a><a href="https://www.tiktok.com/@cornercornercanadawater" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors text-[0.9375rem]">TikTok</a><a href="https://www.facebook.com/cornercornercanadawater" target="_blank" rel="noopener" className="text-[#b8b0a8] hover:text-gold transition-colors text-[0.9375rem]">Facebook</a></div></div>
              </div></Reveal>
            </div>
            <Reveal delay={300}><div className="rounded-xl overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1!2d-0.050286!3d51.4963175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603269a66668b%3A0x310e4ee0ec6c59d0!2sCorner%20Corner!5e0!3m2!1sen!2suk" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Corner Corner location" /></div></Reveal>
          </div>
        </Container>
      </Section>

      <section className="py-40 bg-gradient-to-br from-[#0a0a0a] via-[#1a1508] to-[#0a0a0a] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Reveal>
            <div className="max-w-[720px] mx-auto">
              <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white mb-5 gold-shine">Your Table Is Waiting</h2>
              <p className="text-lg text-[#b8b0a8] mb-10">Whether it's dinner, drinks, live music, or a private event — Corner Corner is yours to discover.</p>
              <div className="flex gap-4 justify-center flex-wrap mb-6">
                <Button href="/book" variant="primary" size="xl">Book a Table</Button>
                <Button href="/venue-hire#enquire" variant="outline" size="xl">Enquire About Venue Hire</Button>
              </div>
              <p className="text-sm text-[#666]">Groups of 60+? Email <a href="mailto:hire@cornercorner.com" className="text-gold">hire@cornercorner.com</a></p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
