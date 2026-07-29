import React from 'react';
import { motion } from 'motion/react';
import { INVESTMENT_INSIGHTS, CLIENT_PROFILE } from '../data/portfolioData';
import { 
  TrendingUp, 
  Coins, 
  Sparkles, 
  Lock, 
  Wallet, 
  ArrowRight, 
  MessageSquare,
  BadgePercent,
  Landmark,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface InvestmentInsightsSectionProps {
  onBookClick: () => void;
}

export const InvestmentInsightsSection: React.FC<InvestmentInsightsSectionProps> = ({ onBookClick }) => {
  const getInsightIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldPercent': return <BadgePercent className="w-5 h-5 text-[#937332]" />;
      case 'Coins': return <Coins className="w-5 h-5 text-[#937332]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#937332]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#937332]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#937332]" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-[#937332]" />;
      default: return <Landmark className="w-5 h-5 text-[#937332]" />;
    }
  };

  return (
    <section id="investment-insights" className="py-28 bg-[#FAF8F5] bg-architectural-lines-light text-[#1A1918] relative overflow-hidden border-t border-b border-[#C8A96A]/20">
      {/* Background Decorative Gold Grid Glow */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />

      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C8A96A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A96A]/30 bg-white/80 text-[#937332] text-xs uppercase tracking-[0.2em] font-mono mb-4 shadow-sm">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>MACROECONOMIC & NRI INVESTMENT ADVANTAGE</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918]">
              Why Global & NRI Investors <br />
              <span className="italic text-[#937332]">Choose Dubai Real Estate</span>
            </h2>
          </div>
          <p className="text-[#55524D] text-sm max-w-md font-light leading-relaxed">
            Data-backed fundamentals explaining why global wealth and Non-Resident Indians (NRIs) are redirecting capital into Dubai freehold assets for tax immunity, high yields, and currency stability.
          </p>
        </div>

        {/* Investment Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INVESTMENT_INSIGHTS.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl glass-panel-light border border-[#C8A96A]/30 hover:border-[#937332] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Header Tag & Stat Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#C8A96A]/15 border border-[#C8A96A]/30 text-[#937332]">
                    {getInsightIcon(insight.iconName)}
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                      {insight.tag}
                    </span>
                  </div>

                  <span className="font-serif-luxury text-xl font-bold text-[#937332] px-3 py-1 rounded-full bg-white border border-[#C8A96A]/40 shadow-sm">
                    {insight.stat}
                  </span>
                </div>

                {/* Insight Title & Subtitle */}
                <h3 className="font-serif-luxury text-2xl text-[#1A1918] group-hover:text-[#937332] transition-colors mb-2">
                  {insight.title}
                </h3>
                <p className="text-[11px] font-mono uppercase text-[#937332] tracking-wider mb-4 font-semibold">
                  {insight.subtitle}
                </p>

                {/* Core Description */}
                <p className="text-xs text-[#55524D] font-light leading-relaxed mb-6">
                  {insight.description}
                </p>
              </div>

              {/* NRI Specific Advantage Highlight */}
              <div className="pt-4 border-t border-[#C8A96A]/20 space-y-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/90 border border-[#C8A96A]/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#937332] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-mono uppercase text-[#937332] block font-bold tracking-wider">
                      NRI Specific Benefit
                    </span>
                    <span className="text-[11px] text-[#1A1918] font-light leading-snug block">
                      {insight.nriSpecificBenefit}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20want%20to%20understand%20more%20about%20${encodeURIComponent(insight.title)}%20for%20NRI%20investors.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-[11px] font-mono uppercase font-semibold text-[#1A1918] hover:text-[#1A1918] bg-white hover:bg-[#C8A96A]/30 border border-[#C8A96A]/40 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Inquire NRI Structuring</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tailored NRI Advisory CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl glass-panel-light-gold border-2 border-[#C8A96A]/50 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-md"
        >
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C8A96A]/40 text-[#937332] text-[10px] uppercase font-mono tracking-widest font-bold shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>BESPOKE NRI REAL ESTATE ADVISORY</span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1A1918]">
              Need Help Tax-Structuring Your Dubai Property Investment?
            </h3>
            <p className="text-xs text-[#55524D] font-light leading-relaxed">
              Shaista Fathima provides confidential 1-on-1 consultations for overseas Indian investors regarding bank transfer compliance (LRS), NRE/NRO account routing, and Golden Visa eligibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href={CLIENT_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 rounded-full text-xs font-mono uppercase font-bold text-[#1A1918] bg-gradient-to-r from-[#C8A96A] via-[#E5C378] to-[#C8A96A] hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="w-full sm:w-auto py-4 px-8 rounded-full text-xs font-mono uppercase font-semibold text-[#1A1918] border border-[#937332] hover:bg-[#937332]/10 transition-all"
            >
              Book Advisory Call
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
