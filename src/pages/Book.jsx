import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard } from '../components/UI'

export default function Book() {
  return (
    <>
      <PageHero label="Reserve" title="Book a Table" subtitle="Reserve your spot at Corner Corner. Whether it's dinner, drinks, or a special occasion — we're ready for you." />
      <Section className="relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_right,rgba(201,169,110,0.03)_0%,transparent_60%)] pointer-events-none" />
        <Container>
          <div className="max-w-[680px] mx-auto">
            <SectionHeader title="Make a Reservation" text="Fill out the form below and we'll confirm your booking. For groups of 8+ or private hire, please email hire@cornercorner.com." />
            <Reveal delay={200}>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Name *" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" required />
                <input type="email" placeholder="Email *" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" required />
                <input type="tel" placeholder="Phone" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" />
                <input type="number" placeholder="Number of Guests" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" min="1" />
                <input type="date" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors" />
                <input type="time" className="col-span-2 sm:col-span-1 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors" />
                <select className="col-span-2 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors">
                  <option value="">Occasion (optional)</option>
                  <option>Birthday</option><option>Anniversary</option><option>Business Meeting</option><option>Casual Dinner</option><option>Special Occasion</option>
                </select>
                <textarea rows={3} placeholder="Special requests (dietary, seating, etc.)" className="col-span-2 bg-[#141414] border border-white/[0.08] rounded-lg px-5 py-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-gold/40 transition-colors" />
                <div className="col-span-2 flex flex-col sm:flex-row gap-4 items-start">
                  <Button variant="primary" size="lg">Confirm Booking</Button>
                  <p className="text-xs text-[#666] mt-2">We'll confirm your reservation by email. You can also call <a href="tel:02033702305" className="text-gold">020 3370 2305</a>.</p>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <SectionHeader title="Large Groups & Private Events" text="Planning an event with 60+ guests? Our dedicated events team will take care of everything." />
          <Reveal delay={200}><Button href="/venue-hire#enquire" variant="primary">Enquire About Venue Hire</Button></Reveal>
        </Container>
      </Section>
    </>
  )
}
