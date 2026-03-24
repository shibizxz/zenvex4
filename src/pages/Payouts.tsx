import { useState } from 'react';
import { Banknote, CreditCard, Landmark, Clock } from 'lucide-react';

const Payouts = () => {
  const [payoutMethod, setPayoutMethod] = useState('crypto');
  const [amount, setAmount] = useState('5000');

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Request Payout</h1>
        <p className="text-textMuted">Withdraw your hard-earned profits securely. Next eligible payout is April 15, 2026.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 space-y-8 lg:pr-4">
          
          {/* Eligible Amount */}
          <div className="bg-card rounded-2xl border border-white/5 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h2 className="text-lg font-bold text-white mb-4 relative z-10">Eligible Amount</h2>
            <div className="flex items-end gap-3 mb-8 relative z-10">
              <span className="text-5xl font-bold text-primary tracking-tight">$12,450.00</span>
              <span className="text-textMuted mb-2 font-medium">Available to withdraw</span>
            </div>
            
            <div className="relative z-10">
              <label className="text-sm font-medium text-textMuted mb-2 block">Withdrawal Amount (USD)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-textMuted font-bold text-lg">
                  $
                </div>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-background/50 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-bold text-xl"
                />
              </div>
            </div>
          </div>

          {/* Payout Method */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,200,150,0.2)]">1</span> 
              Select Payout Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'crypto', label: 'Crypto (USDT)', icon: Banknote },
                { id: 'bank', label: 'Bank Transfer', icon: Landmark },
                { id: 'deel', label: 'Deel', icon: CreditCard },
              ].map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setPayoutMethod(method.id)}
                    className={`p-6 rounded-2xl border transition-all flex flex-col items-center justify-center gap-3 ${
                      payoutMethod === method.id 
                        ? 'bg-primary/10 border-primary text-primary shadow-[inset_0_0_0_1px_rgba(0,200,150,0.5),0_0_15px_rgba(0,200,150,0.1)]' 
                        : 'bg-card border-white/5 text-textMuted hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={32} />
                    <span className="font-bold">{method.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Method Details */}
          {payoutMethod === 'crypto' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,200,150,0.2)]">2</span> 
                Crypto Details
              </h2>
              <div className="bg-card rounded-2xl border border-white/5 p-6 space-y-5">
                <div>
                  <label className="text-sm font-medium text-textMuted mb-2 block ml-1">Network</label>
                  <select className="w-full bg-background border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                    <option>TRC20 (Tron)</option>
                    <option>ERC20 (Ethereum)</option>
                    <option>BEP20 (BSC)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-textMuted mb-2 block ml-1">USDT Wallet Address</label>
                  <input 
                    type="text" 
                    placeholder="T..."
                    className="w-full bg-background border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {payoutMethod === 'bank' && (
             <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,200,150,0.2)]">2</span> 
                Bank Details
              </h2>
              <div className="bg-card rounded-2xl border border-white/5 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-textMuted mb-2 block ml-1">Account Holder Name</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-textMuted mb-2 block ml-1">Bank Name</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-textMuted mb-2 block ml-1">Account Number / IBAN</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-textMuted mb-2 block ml-1">Routing Number / SWIFT</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>
            </div>
          )}

          {payoutMethod === 'deel' && (
             <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,200,150,0.2)]">2</span> 
                Deel Integration
              </h2>
              <div className="bg-card rounded-2xl border border-white/5 p-6 space-y-4">
                 <p className="text-sm text-textMuted">Withdraw directly to your Deel account. Please enter your registered Deel email address so we can issue the payment contract to you.</p>
                 <div>
                    <label className="text-sm font-medium text-textMuted mb-2 block ml-1">Deel Email</label>
                    <input type="email" placeholder="trader@example.com" className="w-full bg-background border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
              </div>
            </div>
          )}
          
        </div>

        {/* Right Column: Summary */}
        <div className="w-full">
          <div className="bg-card rounded-2xl border border-white/5 overflow-hidden sticky top-28 shadow-2xl">
            <div className="p-6 border-b border-white/5 bg-gradient-to-br from-background/80 to-transparent">
              <h3 className="font-bold text-white text-lg">Payout Summary</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-textMuted">Requested Amount</span>
                  <span className="font-bold text-white">${parseFloat(amount || '0').toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-textMuted">Profit Split (80%)</span>
                  <span className="font-bold text-primary">${(parseFloat(amount || '0') * 0.8).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-textMuted">Zenvex Share (20%)</span>
                  <span className="font-bold text-white">${(parseFloat(amount || '0') * 0.2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm pb-1 border-b border-white/5">
                  <span className="text-textMuted">Processing Fee</span>
                  <span className="font-bold text-primary">Free</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-textMuted font-medium">You Will Receive</span>
                  <div className="text-right flex items-start gap-1">
                     <span className="text-sm font-bold text-primary mt-1">$</span>
                     <span className="text-4xl font-bold text-white tracking-tight">{(parseFloat(amount || '0') * 0.8).toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full py-4.5 bg-primary text-background font-bold text-lg rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,200,150,0.3)] hover:shadow-[0_0_25px_rgba(0,200,150,0.4)] active:scale-[0.98]">
                   Confirm Payout
                </button>
                <div className="flex items-center justify-center gap-2 mt-5 text-sm font-medium text-textMuted bg-background/50 py-3 rounded-lg border border-white/5 text-center px-4">
                  <Clock size={16} className="text-primary"/> Processing time: 24-48 Hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
