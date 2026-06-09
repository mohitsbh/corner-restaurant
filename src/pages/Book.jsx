import { Container, Section, SectionHeader, Button, PageHero, Reveal } from '../components/UI'

export default function Book() {
  return (
    <>
      <PageHero label="Reserve" title="Book a Table" subtitle="Reserve your spot at Corner Corner. Whether it's dinner, drinks, or a special occasion." />
      <Section className="!py-10">
        <Container>
          <div className="max-w-[680px] mx-auto">
            <SectionHeader title="Make a Reservation" text="Fill out the form below. For groups of 8+ or private hire, email hire@cornercorner.com." />
            <Reveal delay={200}>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Name *" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" required />
                <input type="email" placeholder="Email *" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" required />
                <input type="tel" placeholder="Phone" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" />
                <input type="number" placeholder="Number of Guests" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" min="1" />
                <input type="date" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary/40" />
                <input type="time" className="col-span-2 sm:col-span-1 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary/40" />
                <select className="col-span-2 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary/40">
                  <option value="">Occasion (optional)</option>
                  <option>Birthday</option><option>Anniversary</option><option>Business Meeting</option><option>Casual Dinner</option><option>Special Occasion</option>
                </select>
                <textarea rows={3} placeholder="Special requests" className="col-span-2 bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/40" />
                <div className="col-span-2 flex flex-col sm:flex-row gap-4 items-start">
                  <Button variant="primary">Confirm Booking</Button>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Or call <a href="tel:02033702305" className="text-primary">020 3370 2305</a></p>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <SectionHeader title="Large Groups & Private Events" text="Planning an event with 60+ guests? Our events team will take care of everything." />
          <Reveal delay={200}><Button href="/venue-hire#enquire" variant="primary">Enquire About Venue Hire</Button></Reveal>
        </Container>
      </Section>
    </>
  )
}
