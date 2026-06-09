import { Container, Section, SectionHeader, PageHero, Reveal, GlassCard } from '../components/UI'

export default function Contact() {
  return (
    <>
      <PageHero label="Contact" title="Get in Touch" subtitle="Have a question, want to book a table, or interested in hiring a space? We'd love to hear from you." />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <GlassCard className="p-8 lg:p-10">
                <h3 className="font-serif text-[1.5rem] text-white mb-6">Send us a message</h3>
                <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.12em] uppercase text-[#888] mb-2 font-semibold">Name</label>
                      <input type="text" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all placeholder:text-[#555]" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.12em] uppercase text-[#888] mb-2 font-semibold">Email</label>
                      <input type="email" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all placeholder:text-[#555]" placeholder="hello@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.12em] uppercase text-[#888] mb-2 font-semibold">Subject</label>
                    <select className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer">
                      <option className="bg-[#0e0e0e]">General enquiry</option>
                      <option className="bg-[#0e0e0e]">Table booking</option>
                      <option className="bg-[#0e0e0e]">Private hire</option>
                      <option className="bg-[#0e0e0e]">Event enquiry</option>
                      <option className="bg-[#0e0e0e]">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.12em] uppercase text-[#888] mb-2 font-semibold">Message</label>
                    <textarea rows={5} className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f0eb] text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all placeholder:text-[#555] resize-none" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer border relative overflow-hidden btn-shine bg-gold text-[#0a0a0a] border-transparent hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 active:scale-[0.95] px-8 py-3.5 text-sm tracking-wider uppercase shadow-lg shadow-gold/20 hover:shadow-gold/40 gap-2 w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-8">
                <div>
                  <SectionHeader title="Visit Us" />
                  <div className="grid grid-cols-2 gap-8 mt-8">
                    <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Address</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Maritime Street<br />Canada Water<br />London SE16 7LL</p><a href="https://www.google.com/maps/place/Corner+Corner/@51.4963175,-0.050286,694m/" target="_blank" rel="noopener" className="text-gold text-sm mt-3 inline-block hover:text-gold-light transition-colors">Get Directions →</a></div>
                    <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Contact</h4><p className="text-[0.9375rem] text-[#b8b0a8]"><a href="mailto:hello@cornercorner.com" className="text-[#f5f0eb] hover:text-gold transition-colors">hello@cornercorner.com</a></p><p className="text-[0.9375rem] text-[#b8b0a8]"><a href="tel:02033702305" className="text-[#f5f0eb] hover:text-gold transition-colors">020 3370 2305</a></p></div>
                    <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Nearest Tube</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Canada Water (Zone 2)<br />4 min walk<br />Jubilee Line</p></div>
                    <div><h4 className="text-xs tracking-[0.12em] uppercase text-gold font-semibold mb-3">Opening Hours</h4><p className="text-[0.9375rem] text-[#b8b0a8] leading-relaxed">Mon–Thu: 12pm–8pm<br />Fri–Sat: 9am–10pm<br />Sun: 9am–8pm</p></div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1!2d-0.050286!3d51.4963175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603269a66668b%3A0x310e4ee0ec6c59d0!2sCorner%20Corner!5e0!3m2!1sen!2suk" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Corner Corner location" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
      <Section dark className="bg-dots">
        <Container>
          <SectionHeader title="Private & Event Hire" />
          <p className="text-[#b8b0a8] text-center max-w-xl mx-auto mb-8">Looking to host a private event, party, or corporate gathering? We have seven unique spaces available for hire.</p>
          <div className="text-center">
            <a href="mailto:hire@cornercorner.com" className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer border relative overflow-hidden btn-shine bg-gold text-[#0a0a0a] border-transparent hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 active:scale-[0.95] px-8 py-3.5 text-sm tracking-wider uppercase shadow-lg shadow-gold/20 hover:shadow-gold/40 gap-2">
              Email hire@cornercorner.com
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
