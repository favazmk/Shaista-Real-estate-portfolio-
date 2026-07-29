import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Percent, TrendingUp, Sparkles, PieChart, ShieldCheck } from 'lucide-react';

export const InvestmentCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(15000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(25);
  const [expectedAnnualYield, setExpectedAnnualYield] = useState<number>(7.2);
  const [annualCapitalGrowth, setAnnualCapitalGrowth] = useState<number>(8.5);

  // Financial Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTermYears * 12;

  const monthlyMortgage = monthlyInterestRate > 0
    ? (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
    : loanAmount / totalPayments;

  const grossAnnualRentalIncome = (propertyPrice * expectedAnnualYield) / 100;
  const grossMonthlyRentalIncome = grossAnnualRentalIncome / 12;

  const netMonthlyCashFlow = grossMonthlyRentalIncome - monthlyMortgage;

  // 5 Year Projected Value
  const projected5YrPropertyValue = propertyPrice * Math.pow(1 + annualCapitalGrowth / 100, 5);
  const projected5YrCapitalGain = projected5YrPropertyValue - propertyPrice;

  return (
    <section id="calculator" className="py-28 bg-gradient-to-b from-[#0F0E0C] via-[#161410] to-[#0D0C0A] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting & Luxury Gold Grid */}
      <div className="absolute inset-0 bg-luxury-gold-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#C8A96A]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#C8A96A]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE HNW WEALTH MODELING ENGINE</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5F2]">
              Interactive Luxury <br />
              <span className="italic gold-text-gradient">ROI & Yield Calculator</span>
            </h2>
          </div>
          <p className="text-[#9C9C9C] text-sm max-w-md font-light leading-relaxed">
            Model capital appreciation, leverage scenarios, and net cash flows across multi-million dollar residential and commercial acquisitions.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12 rounded-2xl glass-panel border border-[#C8A96A]/30">
          
          {/* Left Column: Sliders & Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif-luxury text-2xl text-[#F7F5F2] flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-[#C8A96A]" />
              <span>Acquisition & Financing Parameters</span>
            </h3>

            {/* Property Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#9C9C9C]">PROPERTY VALUE</span>
                <span className="text-[#C8A96A] font-bold text-sm">
                  ${propertyPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={2000000}
                max={80000000}
                step={500000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#C8A96A] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#9C9C9C] font-mono">
                <span>$2M</span>
                <span>$40M</span>
                <span>$80M</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#9C9C9C]">DOWN PAYMENT ({downPaymentPercent}%)</span>
                <span className="text-[#F7F5F2] font-semibold text-xs">
                  ${downPaymentAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={60}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#C8A96A] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Two Column Grid for Interest Rate & Loan Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#9C9C9C]">
                  <span>MORTGAGE INTEREST RATE</span>
                  <span className="text-[#C8A96A]">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min={2.5}
                  max={9.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#C8A96A] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#9C9C9C]">
                  <span>LOAN TENURE</span>
                  <span className="text-[#C8A96A]">{loanTermYears} Years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={5}
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full accent-[#C8A96A] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Yield & Appreciation Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#9C9C9C]">
                  <span>GROSS ANNUAL RENTAL YIELD</span>
                  <span className="text-[#C8A96A]">{expectedAnnualYield}%</span>
                </div>
                <input
                  type="range"
                  min={3.0}
                  max={12.0}
                  step={0.1}
                  value={expectedAnnualYield}
                  onChange={(e) => setExpectedAnnualYield(Number(e.target.value))}
                  className="w-full accent-[#C8A96A] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#9C9C9C]">
                  <span>ANNUAL CAPITAL GROWTH</span>
                  <span className="text-[#C8A96A]">{annualCapitalGrowth}%</span>
                </div>
                <input
                  type="range"
                  min={2.0}
                  max={15.0}
                  step={0.5}
                  value={annualCapitalGrowth}
                  onChange={(e) => setAnnualCapitalGrowth(Number(e.target.value))}
                  className="w-full accent-[#C8A96A] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Financial Results Output Box */}
          <div className="lg:col-span-5 glass-panel-gold p-8 rounded-xl border border-[#C8A96A]/40 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#C8A96A] tracking-widest mb-4">
                <PieChart className="w-4 h-4" />
                <span>5-YEAR FINANCIAL PROJECTION</span>
              </div>

              {/* Major Highlight: Projected 5 Yr Value */}
              <div className="p-4 rounded-xl bg-[#0B0B0B]/80 border border-[#C8A96A]/30 mb-6">
                <div className="text-[10px] uppercase font-mono text-[#9C9C9C]">Projected 5-Year Portfolio Value</div>
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F7F5F2] mt-1">
                  ${Math.round(projected5YrPropertyValue).toLocaleString()}
                </div>
                <div className="text-xs text-[#C8A96A] font-mono mt-1">
                  +${Math.round(projected5YrCapitalGain).toLocaleString()} Estimated Capital Growth
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[#9C9C9C]">Est. Monthly Mortgage Payment:</span>
                  <span className="text-[#F7F5F2] font-semibold">${Math.round(monthlyMortgage).toLocaleString()}/mo</span>
                </div>

                <div className="flex justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[#9C9C9C]">Est. Gross Monthly Rental Income:</span>
                  <span className="text-[#F7F5F2] font-semibold">${Math.round(grossMonthlyRentalIncome).toLocaleString()}/mo</span>
                </div>

                <div className="flex justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[#9C9C9C]">Estimated Net Monthly Cash Flow:</span>
                  <span className={`font-semibold ${netMonthlyCashFlow >= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {netMonthlyCashFlow >= 0 ? '+' : ''}${Math.round(netMonthlyCashFlow).toLocaleString()}/mo
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[10px] text-[#9C9C9C] font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96A]" />
                <span>Projections for illustrative purpose. Consult Gro Vision for tax structuring.</span>
              </div>

              <a
                href="#contact"
                className="w-full py-3.5 rounded-full text-xs font-button uppercase tracking-widest font-bold text-[#0B0B0B] bg-gradient-to-r from-[#C8A96A] to-[#E5C378] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] transition-all"
              >
                <span>Request Custom Investment Deck</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
