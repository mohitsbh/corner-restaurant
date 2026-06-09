import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard, IMAGES } from '../components/UI'

const SPACES = [
  { img: IMAGES.stage, name: 'Event Hall', size: '1,698 SQM', cap: '1,500 standing / 900 seated', desc: 'The largest event space in the area with a stage, cinema-quality LED screen, 7m ceilings, and full production capabilities.', features: ['7m ceiling height', 'Full AV & lighting', 'Backstage area', 'Cinema LED screen', '320 standing / 150 seated dinner'] },
  { img: IMAGES.farm, name: 'Food Hall', size: '854 SQM', cap: '800 standing / 400 seated', desc: 'High-energy space with four serving stations and two bars.', features: ['Four serving stations', 'Two bars', '202 standing / 130 seated dinner', 'Flexible layout', 'Street food catering'] },
  { img: IMAGES.cafe, name: 'Studio', size: '144 SQM', cap: '120 standing / 60 seated', desc: 'Intimate space with Canada Water views, suspended fireplace, and private bar.', features: ['Water-facing views', 'Suspended fireplace', 'Private bar', '60 seated dinner', 'Intimate atmosphere'] },
  { img: IMAGES.cafe, name: 'Loft', size: '227 SQM', cap: '143 standing / 80 seated', desc: 'Mezzanine level with two bars, DJ booth, and balcony overlooking the Event Hall.', features: ['Mezzanine level', 'Two bars', 'DJ booth', 'Balcony over Event Hall', '80 seated dinner'] },
  { img: IMAGES.chicken, name: 'Terrace', size: '130 SQM', cap: '80 standing', desc: 'Covered outdoor terrace with retractable roof.', features: ['Retractable roof', 'Outdoor heating', 'Festival lighting', 'Garden furniture', 'Al fresco dining'] },
  { img: IMAGES.farm, name: 'Plant Room', size: '88 SQM', cap: '60 standing', desc: 'Unique greenhouse-style room within the vertical farm.', features: ['Glasshouse setting', 'Live greenery', 'Intimate dining', 'Farm-to-table concept', 'Photo-worthy backdrop'] },
]

export default function VenueHire() {
  return (
    <>
      <PageHero label="Space" title="Venue Hire" subtitle="From a 1,500-capacity Event Hall to an intimate Plant Room — seven versatile spaces for every occasion." />
      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">3,297</span><span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">SQM Total</span></GlassCard>
            <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">1,500</span><span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">Max Capacity</span></GlassCard>
            <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">7</span><span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">Unique Spaces</span></GlassCard>
            <GlassCard className="text-center p-5"><span className="font-display-lg text-display-lg text-primary block">3AM</span><span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">Late Licence</span></GlassCard>
          </div>
          {SPACES.map((s, i) => (
            <Reveal delay={i * 100} key={s.name}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-8 items-center">
                <div className={`${i % 2 ? 'lg:order-2' : ''}`}>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{s.name}</h3>
                  <div className="flex gap-3 font-body-md text-body-md text-on-surface-variant mb-3"><span>{s.size}</span><span className="text-on-surface/20">|</span><span>{s.cap}</span></div>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">{s.features.map(f => <li key={f} className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />{f}</li>)}</ul>
                </div>
                <div className={`h-[280px] rounded overflow-hidden bg-cover bg-center ${i % 2 ? 'lg:order-1' : ''}`} style={{ backgroundImage: `url(${s.img})` }} />
              </div>
            </Reveal>
          ))}
        </Container>
      </Section>
      <Section dark className="!py-10" id="enquire">
        <Container>
          <SectionHeader title="Enquire About Venue Hire" text="Interested in hosting your event at Corner Corner? Fill out the form or email hire@cornercorner.com." />
          <Reveal delay={200}>
            <form className="max-w-[680px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Name *" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" required />
              <input type="email" placeholder="Email *" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" required />
              <input type="tel" placeholder="Phone" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" />
              <select className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary/40"><option value="">Event Type</option><option>Corporate Event</option><option>Private Party</option><option>Wedding</option><option>Product Launch</option><option>Film/Photo Shoot</option><option>Other</option></select>
              <input type="number" placeholder="Number of Guests" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" />
              <select className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary/40"><option value="">Preferred Space</option><option>Event Hall</option><option>Food Hall</option><option>Studio</option><option>Loft</option><option>Terrace</option><option>Plant Room</option><option>Multiple Spaces</option><option>Not Sure</option></select>
              <textarea rows={3} placeholder="Tell us about your event..." className="col-span-2 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" />
              <div className="col-span-2"><Button variant="primary">Submit Enquiry</Button></div>
            </form>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
