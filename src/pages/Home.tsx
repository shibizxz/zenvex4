import { ArrowRight, Shield, Zap, Target, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30 selection:text-white pb-0">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Zenvex Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,200,150,0.2)]" />
            <span className="text-xl font-bold tracking-tight">Zenvex <span className="text-primary">Capital</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#evaluations" className="hover:text-white transition-colors">Evaluations</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold hover:text-primary transition-colors">Log In</Link>
            <Link to="/login" className="px-5 py-2.5 bg-primary text-background font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(0,200,150,0.3)] hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] hover:-translate-y-0.5">
              Get Funded
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Background Gradients & Grid SVG */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMGg1MHY1MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDI1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold mb-8 flex items-center gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(0,200,150,0.2)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Revolutionizing Prop Trading in 2026
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
              Trade Up to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-blue-400 drop-shadow-sm">
                $200,000
              </span>
            </h1>
            
            <p className="text-xl text-textMuted mb-12 max-w-2xl leading-relaxed">
              Prove your trading skills, pass the evaluation, and manage our capital. Keep up to <span className="text-white font-bold">90% of your profits</span> with absolutely zero liability for losses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link to="/login" className="w-full sm:w-auto px-8 py-4.5 bg-primary text-background font-black text-lg rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,200,150,0.3)] hover:shadow-[0_0_40px_rgba(0,200,150,0.5)] hover:-translate-y-1">
                Start Challenge <ArrowRight size={20} />
              </Link>
               <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4.5 bg-white/5 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all border border-white/5 backdrop-blur-md flex items-center justify-center hover:-translate-y-1">
                Learn More
              </a>
            </div>

            {/* Platform Trust */}
            <div className="mt-28 pt-10 border-t border-white/5 w-full">
               <p className="text-xs text-textMuted font-medium mb-8 uppercase tracking-[0.2em]">Trusted by 10,000+ traders & institutional partners</p>
               <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter"><Globe size={28} className="text-blue-500"/> MetaQuotes</div>
                 <div className="flex items-center gap-2 font-bold text-2xl"><Shield size={28} className="text-primary"/> Deel</div>
                 <div className="flex items-center gap-2 font-bold text-2xl tracking-tight"><TrendingUp size={28} className="text-purple-400"/> TradingView</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-32 bg-card/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Why Choose <span className="text-primary">Zenvex?</span></h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto">We provide the best trading conditions in the industry, ensuring our traders have the highest probability of success without hidden rules.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast Payouts", desc: "Request your profit split any time after your first 14 days. Processed within 24 hours directly via Deel, Bank Transfer, or Crypto." },
              { icon: Target, title: "No Time Limits at All", desc: "Trade completely stress-free. Take as long as you need to hit the profit targets on any evaluation phase without the pressure." },
              { icon: Shield, title: "Raw Spreads & Low Comm.", desc: "Trade with premium institutional grade liquidity. We offer absolutely zero markups on spreads and minimal commission structures." }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-card to-background p-10 rounded-3xl border border-white/5 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,200,150,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <Icon size={32} className="text-primary group-hover:text-background transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{f.title}</h3>
                  <p className="text-textMuted leading-relaxed relative z-10">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how-it-works" className="py-32 relative overflow-hidden">
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2 space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]">Your Path to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Financial Freedom</span></h2>
                    <p className="text-lg text-textMuted leading-relaxed max-w-lg">We're looking for disciplined traders. Show us your risk management skills in a pristine trading environment, and we'll reward you with funded capital.</p>
                  </div>
                  
                  <div className="space-y-8 pl-2">
                    {[
                      { num: "01", title: "Prove Your Skills", desc: "Choose a 1-step or 2-step evaluation. Follow the drawdown rules and simply hit the profit target." },
                      { num: "02", title: "Get Verified Instantly", desc: "Pass our secure KYC process with lightning speed through our automated verification partners." },
                      { num: "03", title: "Trade Funded Capital", desc: "Receive your live funded account within hours. Keep up to 90% of your generated profits." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="text-4xl font-black text-white/5 mt-1 group-hover:text-primary/20 transition-colors">{step.num}</div>
                        <div>
                          <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
                          <p className="text-textMuted leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                     <Link to="/login" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all uppercase tracking-wider">
                        Explore Evaluations <ArrowRight size={20} />
                     </Link>
                  </div>
               </div>

               {/* UI Mockup / Decorative Element */}
               <div className="lg:w-1/2 w-full relative">
                  <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-[100%] pointer-events-none" />
                  
                  {/* Floating abstract cards simulating the dashboard UI */}
                  <div className="relative bg-[#111A24] border border-white/10 rounded-3xl shadow-2xl p-8 rotate-3 hover:rotate-0 transition-all duration-700 ease-out overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,200,150,0.3)] z-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                    
                    <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                    
                    <div className="space-y-6 relative z-10">
                      <div className="h-5 w-40 bg-white/10 rounded-md" />
                      <div className="flex items-end gap-3 pb-8 border-b border-white/5">
                        <div className="text-5xl font-black text-primary">$12,450.00</div>
                        <div className="text-base font-medium text-textMuted mb-2">Available Payout</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-28 bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
                          <div className="h-3 w-20 bg-white/20 rounded-full" />
                          <div className="h-8 w-28 bg-white/30 rounded-lg" />
                        </div>
                        <div className="h-28 bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
                           <div className="h-3 w-24 bg-white/20 rounded-full" />
                           <div className="h-8 w-24 bg-primary/60 rounded-lg" />
                        </div>
                      </div>
                      
                      <div className="h-14 w-full bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center gap-3">
                         <div className="w-5 h-5 rounded-full bg-primary/50" />
                         <div className="h-3 w-32 bg-primary/40 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative blur element behind */}
                  <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-blue-500/20 rounded-2xl -rotate-6 blur-2xl -z-10" />
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">Ready to become a <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Zenvex Trader?</span></h2>
          <p className="text-xl text-textMuted mb-12 max-w-2xl mx-auto leading-relaxed text-balance">Join thousands of profitable traders worldwide. Stop risking your own capital and elevate your trading career today.</p>
          <Link to="/login" className="inline-flex px-12 py-5 bg-primary text-background font-black text-xl rounded-2xl hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(0,200,150,0.4)] hover:shadow-[0_0_50px_rgba(0,200,150,0.6)] hover:-translate-y-1">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B0F1A] pb-10 pt-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
             <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Zenvex Logo" className="w-10 h-10 object-contain drop-shadow-lg" />
              <span className="font-bold text-xl tracking-tight">Zenvex <span className="text-primary">Capital</span></span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-textMuted">
              <Link to="/login" className="hover:text-white transition-colors">Client Portal</Link>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-textMuted text-sm font-medium">© 2026 Zenvex Capital. All rights reserved.</p>
            <p className="text-textMuted text-xs max-w-md md:text-right">All information provided on this site is intended solely for educational purposes related to trading.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
