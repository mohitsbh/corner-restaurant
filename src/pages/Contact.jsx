import { Container, Section, SectionHeader, Button, PageHero, Reveal, GlassCard } from '../components/UI'

export default function Contact() {
  return (
    <>
      <PageHero label="Contact" title="Get in Touch" subtitle="Have a question, want to book a table, or interested in hiring a space?" />
      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <Reveal>
              <GlassCard className="p-6 lg:p-8">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Send us a message</h3>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Name</label>
                      <input type="text" className="w-full bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary/50 placeholder:text-on-surface-variant/50" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Email</label>
                      <input type="email" className="w-full bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary/50 placeholder:text-on-surface-variant/50" placeholder="hello@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Subject</label>
                    <select className="w-full bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
                      <option className="bg-surface">General enquiry</option>
                      <option className="bg-surface">Table booking</option>
                      <option className="bg-surface">Private hire</option>
                      <option className="bg-surface">Event enquiry</option>
                      <option className="bg-surface">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Message</label>
                    <textarea rows={4} className="w-full bg-surface-container-low border border-gold-glass-stroke/20 rounded px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary/50 placeholder:text-on-surface-variant/50 resize-none" placeholder="How can we help?" />
                  </div>
                  <Button variant="primary">Send Message</Button>
                </form>
              </GlassCard>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-6">
                <div>
                  <SectionHeader title="Visit Us" />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Address</h4><p className="font-body-md text-body-md text-on-surface-variant">Maritime Street<br />Canada Water<br />London SE16 7LL</p><a href="https://www.google.com/maps/place/Corner+Corner/" target="_blank" rel="noopener" className="text-primary font-body-md text-body-md mt-2 inline-block">Get Directions &rarr;</a></div>
                    <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Contact</h4><p className="font-body-md text-body-md text-on-surface-variant"><a href="mailto:hello@cornercorner.com" className="text-on-surface">hello@cornercorner.com</a></p><p className="font-body-md text-body-md text-on-surface-variant"><a href="tel:02033702305" className="text-on-surface">020 3370 2305</a></p></div>
                    <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Nearest Tube</h4><p className="font-body-md text-body-md text-on-surface-variant">Canada Water (Zone 2)<br />4 min walk<br />Jubilee Line</p></div>
                    <div><h4 className="font-label-sm text-label-sm text-primary mb-2">Opening Hours</h4><p className="font-body-md text-body-md text-on-surface-variant">Mon–Thu: 12pm–8pm<br />Fri–Sat: 9am–10pm<br />Sun: 9am–8pm</p></div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1!2d-0.050286!3d51.4963175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603269a66668b%3A0x310e4ee0ec6c59d0!2sCorner%20Corner!5e0!3m2!1sen!2suk" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Corner Corner location" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
      <Section dark className="!py-10">
        <Container>
          <SectionHeader title="Private & Event Hire" />
          <p className="text-on-surface-variant text-center max-w-xl mx-auto mb-6">Looking to host a private event, party, or corporate gathering? We have seven unique spaces available for hire.</p>
          <div className="text-center">
            <a href="mailto:hire@cornercorner.com" className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 inline-block hover:brightness-110 transition-all">Email hire@cornercorner.com</a>
          </div>
        </Container>
      </Section>
    </>
  )
}
