import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { Sparkles, Calendar, Clock, Send, MessageSquare, PhoneCall, MapPin, CheckCircle2, Mail } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestCategory: 'Off-Plan Property Acquisition',
    budgetRange: 'AED 2M - AED 5M (Golden Visa)',
    preferredDate: '',
    preferredTime: '10:00 AM (GST)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      `*DUBAI REAL ESTATE CONSULTATION REQUEST*`,
      `----------------------------------------`,
      `*Client Name:* ${formData.fullName}`,
      `*Email Address:* ${formData.email}`,
      `*Service Interest:* ${formData.interestCategory}`,
      `*Budget Range:* ${formData.budgetRange}`,
      formData.preferredDate ? `*Preferred Date:* ${formData.preferredDate}` : null,
      `*Preferred Time:* ${formData.preferredTime}`,
      formData.notes ? `*Investment Goals / Notes:* ${formData.notes}` : null,
      `----------------------------------------`,
      `_Sent via Shaista Fathima Official Advisory Portfolio_`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/971525970116?text=${encodeURIComponent(formattedMessage)}`;

    // Immediately trigger WhatsApp redirect
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 md:py-16 bg-gradient-to-b from-primary via-[#14120D] to-[#0A0A09] bg-architectural-lines relative overflow-hidden border-t border-white/10">
      {/* Background Architectural Grid & Glow */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[220px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIMARY CONTACT & CONSULTATION</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white mb-4">
            Connect With <br />
            <span className="italic gold-text-gradient">Shaista Fathima</span>
          </h2>
          <p className="text-text-muted text-sm max-w-md mx-auto font-light leading-relaxed">
            Co-Founder & RERA Certified Property Advisor at Gro Vision Real Estate LLC. Schedule a free consultation or message directly on WhatsApp.
          </p>
        </motion.div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Office & Contact Details */}
          <motion.div variants={fadeUpBlur} className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl glass-panel-gold border border-gold/40 space-y-6">
              <h3 className="font-serif-luxury text-2xl text-text-white">Gro Vision Real Estate LLC</h3>
              <p className="text-xs text-text-muted font-light leading-relaxed">
                Primary contact desk for overseas, NRI, and global property buyers in Dubai.
              </p>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 text-text-white">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-text-muted text-[10px]">DUBAI HEADQUARTERS</div>
                    <div>{CLIENT_PROFILE.officeAddress}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-text-white">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-text-muted text-[10px]">PRIMARY WHATSAPP</div>
                    <div>{CLIENT_PROFILE.primaryWhatsapp}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-text-white">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-text-muted text-[10px]">DIRECT EMAIL</div>
                    <div>{CLIENT_PROFILE.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-text-white">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-text-muted text-[10px]">COMPANY DESK</div>
                    <div>{CLIENT_PROFILE.companyPhone} | {CLIENT_PROFILE.companyEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-text-white">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-text-muted text-[10px]">OFFICE HOURS</div>
                    <div>{CLIENT_PROFILE.officeHours}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp VIP Button */}
              <a
                href={CLIENT_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full text-xs font-button uppercase tracking-widest font-bold text-primary bg-gold hover:bg-gold-light flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(200,169,106,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Free Consultation (WhatsApp)</span>
              </a>
            </div>

            {/* Office Location Map */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-secondary">
              <iframe
                title="Dubai Office Location Map"
                src="https://maps.google.com/maps?q=Sheikh%20Zayed%20Road%2019/8,%20Dubai,%20UAE&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter brightness-90 contrast-125 saturate-50 hover:saturate-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 right-3 pointer-events-none z-10 glass-panel p-3 rounded-lg border border-white/10 text-xs">
                <span className="font-bold text-text-white">Sheikh Zayed Road Office</span>
                <span className="text-text-muted block text-[10px]">Sheikh Zayed Rd 19/8, Dubai, UAE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Consultation Schedule Form */}
          <motion.div variants={fadeUpBlur} className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-2xl border border-white/10 relative">
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif-luxury text-3xl text-text-white">Consultation Request Received</h3>
                    <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed font-light">
                      Thank you <strong className="text-text-white font-semibold">{formData.fullName || 'Valued Client'}</strong>. Shaista Fathima's advisory desk has logged your request for <strong className="text-gold font-semibold">{formData.interestCategory}</strong>.
                    </p>
                  </div>

                  {/* Instant WhatsApp Handshake Option */}
                  <div className="p-4 rounded-xl bg-primary border border-gold/30 max-w-md w-full space-y-3 text-left">
                    <div className="text-[10px] font-mono uppercase text-gold font-bold tracking-wider">
                      ⚡ Instant Advisory Connect
                    </div>
                    <p className="text-[11px] text-text-muted">
                      Want to connect with Shaista immediately without waiting for an email response?
                    </p>
                    <a
                      href={`https://wa.me/971525970116?text=${encodeURIComponent(
                        `Hi Shaista, I just submitted a consultation request on your portfolio website:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nInterest: ${formData.interestCategory}\nBudget: ${formData.budgetRange}\nPreferred Time: ${formData.preferredDate} @ ${formData.preferredTime}\nNotes: ${formData.notes}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs font-mono uppercase font-bold text-primary bg-gradient-to-r from-gold to-gold-light flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Form Details to WhatsApp Now</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-mono uppercase tracking-widest text-text-muted hover:text-gold underline transition-colors pt-2"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                        Service Interest
                      </label>
                      <select
                        value={formData.interestCategory}
                        onChange={(e) => setFormData({ ...formData, interestCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none"
                      >
                        <option value="Off-Plan Property Acquisition">Off-Plan Property Acquisition</option>
                        <option value="Golden Visa & Residency">Golden Visa & Residency (10-Yr / 5-Yr)</option>
                        <option value="Ready Property Buying / Selling">Ready Property Buying / Selling</option>
                        <option value="Leasing & Rental Management">Leasing & Rental Management</option>
                        <option value="Snagging & Technical Survey">Snagging & Technical Survey</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                        Budget Range (AED)
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none"
                      >
                        <option value="AED 1M - AED 2M">AED 1M - AED 2M</option>
                        <option value="AED 2M - AED 5M (Golden Visa)">AED 2M - AED 5M (Golden Visa Qualifying)</option>
                        <option value="AED 5M - AED 10M">AED 5M - AED 10M</option>
                        <option value="AED 10M+ Ultra Luxury">AED 10M+ Ultra Luxury</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                        Preferred Time (GST / Dubai Time)
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none"
                      >
                        <option value="10:00 AM (GST)">10:00 AM (GST)</option>
                        <option value="02:00 PM (GST)">02:00 PM (GST)</option>
                        <option value="05:00 PM (GST)">05:00 PM (GST)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-text-muted mb-2">
                      Investment Goals / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share preferred locations (Downtown, Palm Jumeirah, Business Bay), NRI timeline, or specific questions..."
                      className="w-full px-4 py-3 rounded-xl bg-primary border border-white/10 focus:border-gold text-xs text-text-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-button uppercase tracking-widest font-bold text-primary bg-gradient-to-r from-gold via-gold-light to-gold hover:shadow-[0_0_30px_rgba(200,169,106,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Schedule</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
