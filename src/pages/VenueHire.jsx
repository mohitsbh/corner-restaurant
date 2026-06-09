import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

const SPACES = [
  { img: IMAGES.stage, name: 'Event Hall', size: '1,698 SQM', cap: '1,500 standing / 900 seated', desc: 'The largest event space in the area with a stage, cinema-quality LED screen, 7m ceilings, and full production capabilities. Licensed until 3AM.', features: ['7m ceiling height', 'Full AV & lighting', 'Backstage area', 'Cinema LED screen', '320 standing / 150 seated dinner'] },
  { img: IMAGES.farm, name: 'Food Hall', size: '854 SQM', cap: '800 standing / 400 seated', desc: 'High-energy space with four serving stations and two bars. Perfect for product launches, parties, and large receptions.', features: ['Four serving stations', 'Two bars', '202 standing / 130 seated dinner', 'Flexible layout', 'Street food catering'] },
  { img: IMAGES.cafe, name: 'Studio', size: '144 SQM', cap: '120 standing / 60 seated', desc: 'An intimate space with Canada Water views, suspended fireplace, and private bar. Ideal for cocktails, private dinners, and creative workshops.', features: ['Water-facing views', 'Suspended fireplace', 'Private bar', '60 seated dinner', 'Intimate atmosphere'] },
  { img: IMAGES.cafe, name: 'Loft', size: '227 SQM', cap: '143 standing / 80 seated', desc: 'Mezzanine level with two bars, DJ booth, and an open-view balcony overlooking the Event Hall.', features: ['Mezzanine level', 'Two bars', 'DJ booth', 'Balcony over Event Hall', '80 seated dinner'] },
  { img: IMAGES.chicken, name: 'Terrace', size: '130 SQM', cap: '80 standing', desc: 'Covered outdoor terrace with retractable roof. Perfect for summer parties, networking, and al fresco dining.', features: ['Retractable roof', 'Outdoor heating', 'Festival lighting', 'Garden furniture', 'Al fresco dining'] },
  { img: IMAGES.farm, name: 'Plant Room', size: '88 SQM', cap: '60 standing', desc: 'Unique greenhouse-style room set within the vertical farm. A stunning backdrop for intimate dinners and brand experiences.', features: ['Glasshouse setting', 'Live greenery', 'Intimate dining', 'Farm-to-table concept', 'Photo-worthy backdrop'] },
]

export default function VenueHire() {
  return (
    <>
      <PageHero label="Space" title="Venue Hire" subtitle="From a 1,500-capacity Event Hall to an intimate Plant Room nestled in our vertical farm — seven versatile spaces for every occasion." />
      <Section>
        <Container>
          <Reveal delay={0}><div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <GlassCard gold className="text-center p-6 hover-glow"><span className="font-serif text-3xl text-gold block">3,297</span><span className="text-xs text-[#666] uppercase tracking-[0.08em] mt-1 block">SQM Total</span></GlassCard>
            <GlassCard gold className="text-center p-6 hover-glow"><span className="font-serif text-3xl text-gold block">1,500</span><span className="text-xs text-[#666] uppercase tracking-[0.08em] mt-1 block">Max Capacity</span></GlassCard>
            <GlassCard gold className="text-center p-6 hover-glow"><span className="font-serif text-3xl text-gold block">7</span><span className="text-xs text-[#666] uppercase tracking-[0.08em] mt-1 block">Unique Spaces</span></GlassCard>
            <GlassCard gold className="text-center p-6 hover-glow"><span className="font-serif text-3xl text-gold block">3AM</span><span className="text-xs text-[#666] uppercase tracking-[0.08em] mt-1 block">Late Licence</span></GlassCard>
          </div></Reveal>
          {SPACES.map((s, i) => (
            <Reveal delay={i * 100} key={s.name}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-center">
                <div className={`${i % 2 ? 'lg:order-2' : ''}`}>
                  <h3 className="font-serif text-[2rem] text-white mb-1">{s.name}</h3>
                  <div className="flex gap-4 text-sm text-[#888] mb-4"><span>{s.size}</span><span className="text-white/20">|</span><span>{s.cap}</span></div>
                  <p className="text-[#b8b0a8] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-6">{s.features.map(f => <li key={f} className="text-sm text-[#888] flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" />{f}</li>)}</ul>
                </div>
                <div className={`h-[400px] rounded-xl overflow-hidden bg-cover bg-center image-hover ${i % 2 ? 'lg:order-1' : ''}`} style={{ backgroundImage: `url(${s.img})` }} />
              </div>
            </Reveal>
          ))}
        </Container>
      </Section>
      <Section dark id="enquire" className="relative bg-dots">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_left,rgba(201,169,110,0.03)_0%,transparent_60%)] pointer-events-none" />
        <Container>
          <SectionHeader title="Enquire About Venue Hire" text="Interested in hosting your event at Corner Corner? Fill out the form or email us directly at hire@cornercorner.com." />
          <Reveal delay={200}><form className="max-w-[680px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name *" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" required />
            <input type="email" placeholder="Email *" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" required />
            <input type="tel" placeholder="Phone" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" />
            <select className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors"><option value="">Event Type</option><option>Corporate Event</option><option>Private Party</option><option>Wedding</option><option>Product Launch</option><option>Film/Photo Shoot</option><option>Other</option></select>
            <input type="number" placeholder="Number of Guests" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" />
            <select className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors"><option value="">Preferred Space</option><option>Event Hall</option><option>Food Hall</option><option>Studio</option><option>Loft</option><option>Terrace</option><option>Plant Room</option><option>Multiple Spaces</option><option>Not Sure</option></select>
            <textarea rows={4} placeholder="Tell us about your event..." className="col-span-2 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" />
            <div className="col-span-2"><Button variant="primary" size="lg">Submit Enquiry</Button></div>
          </form></Reveal>
        </Container>
      </Section>
    </>
  )
}
