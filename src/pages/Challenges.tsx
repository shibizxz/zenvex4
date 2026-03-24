import { useState } from 'react';
import { Target, ShieldAlert, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const accountSizes = [5000, 10000, 25000, 50000, 100000, 200000];
const platforms = ['MetaTrader 5', 'MetaTrader 4', 'cTrader'];

const Challenges = () => {
  const [phaseType, setPhaseType] = useState('2-Step');
  const [selectedSize, setSelectedSize] = useState(100000);
  const [selectedPlatform, setSelectedPlatform] = useState('MetaTrader 5');

  // Dynamic pricing mock
  const prices: Record<number, number> = {
    5000: 49,
    10000: 99,
    25000: 199,
    50000: 299,
    100000: 499,
    200000: 999,
  };

  const currentPrice = phaseType === '1-Step' ? prices[selectedSize] * 1.2 : prices[selectedSize];

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Start a Challenge</h1>
        <p className="text-textMuted">Choose your preferred evaluation model and account size to get funded.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Configuration */}
        <div className="lg:col-span-2 space-y-8 lg:pr-4">
          
          {/* Evaluation Type */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</span> 
              Evaluation Type
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['1-Step', '2-Step'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPhaseType(type)}
                  className={`p-5 rounded-2xl border transition-all text-left ${
                    phaseType === type 
                      ? 'bg-primary/10 border-primary text-primary shadow-[inset_0_0_0_1px_rgba(0,200,150,0.5)]' 
                      : 'bg-card border-white/5 text-textMuted hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-lg mb-1">{type} Evaluation</div>
                  <div className="text-sm opacity-80">{type === '1-Step' ? 'One phase to pass, higher target' : 'Industry standard, two phases'}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Account Balance */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</span> 
              Account Balance
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {accountSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-4 rounded-2xl border transition-all text-sm font-bold ${
                    selectedSize === size 
                      ? 'bg-primary/10 border-primary text-primary shadow-[inset_0_0_0_1px_rgba(0,200,150,0.5)]' 
                      : 'bg-card border-white/5 text-textLight hover:border-white/20'
                  }`}
                >
                  ${size >= 1000 ? `${size / 1000}k` : size}
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">3</span> 
              Trading Platform
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center justify-center gap-2 ${
                    selectedPlatform === platform 
                      ? 'bg-primary/10 border-primary text-primary shadow-[inset_0_0_0_1px_rgba(0,200,150,0.5)]' 
                      : 'bg-card border-white/5 text-textMuted hover:border-white/20'
                  }`}
                >
                  <span className="font-bold">{platform}</span>
                </button>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Summary & Rules */}
        <div className="w-full">
          <div className="bg-card rounded-2xl border border-white/5 overflow-hidden sticky top-28 shadow-2xl z-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="p-6 border-b border-white/5 bg-gradient-to-br from-background/50 to-transparent">
              <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{phaseType} Evaluation</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white tracking-tight">${selectedSize.toLocaleString()}</span>
                <span className="text-textMuted font-medium">Account</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6 relative">
              <h3 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                Challenge Rules <Clock size={16} className="text-textMuted" />
              </h3>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-textMuted flex items-center gap-2"><Target size={16}/> Profit Target</span>
                  <span className="font-bold text-white">{phaseType === '1-Step' ? '10%' : '8% Phase 1 / 5% Phase 2'}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-textMuted flex items-center gap-2"><ShieldAlert size={16}/> Max Daily Loss</span>
                  <span className="font-bold text-white">{phaseType === '1-Step' ? '4%' : '5%'}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-textMuted flex items-center gap-2"><ShieldAlert size={16}/> Max Overall Loss</span>
                  <span className="font-bold text-white">{phaseType === '1-Step' ? '6%' : '10%'}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-textMuted flex items-center gap-2"><Clock size={16}/> Min. Trading Days</span>
                  <span className="font-bold text-white">5 Days</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-textMuted flex items-center gap-2"><CheckCircle2 size={16}/> Profit Split</span>
                  <span className="font-bold text-white">Up to 90%</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-2">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-textMuted font-medium">Refundable Fee</span>
                  <div className="text-right flex items-start gap-1">
                     <span className="text-sm font-bold text-primary mt-1">$</span>
                     <span className="text-3xl font-bold text-white">{currentPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full py-4.5 bg-primary text-background font-bold text-lg rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,200,150,0.3)] hover:shadow-[0_0_25px_rgba(0,200,150,0.4)]">
                  Proceed to Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-textMuted mt-4">Fees are completely refundable upon first payout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
