import { Award, Download, Share2, Lock } from 'lucide-react';

const CertificateCard = ({ title, date, accountSize, isLocked }: any) => (
  <div className={`relative bg-card rounded-2xl border ${isLocked ? 'border-white/5 opacity-75' : 'border-primary/20'} overflow-hidden group transition-all hover:scale-[1.02] transform duration-300`}>
    {isLocked && (
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
          <Lock className="text-textMuted" size={24} />
        </div>
        <p className="font-bold text-textLight">Locked</p>
        <p className="text-sm text-textMuted">Pass Phase 2 to unlock</p>
      </div>
    )}
    
    <div className="aspect-[1.5] bg-gradient-to-br from-background to-card p-6 flex flex-col items-center justify-center border-b border-white/5 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 z-10 shadow-lg shadow-primary/20">
        <Award size={32} />
      </div>
      <h3 className="text-xl font-bold text-white text-center z-10">{title}</h3>
      <p className="text-primary font-bold mt-1 z-10">{accountSize}</p>
    </div>
    
    <div className="p-5 flex items-center justify-between bg-card relative z-0">
      <div>
        <p className="text-xs text-textMuted uppercase tracking-wider font-bold mb-1">Earned On</p>
        <p className="font-medium text-white text-sm">{date || 'TBD'}</p>
      </div>
      <div className="flex gap-2">
        <button className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLocked}>
          <Share2 size={18} />
        </button>
        <button className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLocked}>
          <Download size={18} />
        </button>
      </div>
    </div>
  </div>
);

const Certificates = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">My Certificates</h1>
        <p className="text-textMuted">View, download, and share your trading achievements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CertificateCard 
          title="Phase 1 Passed" 
          accountSize="$100,000 Account" 
          date="Mar 15, 2026" 
          isLocked={false} 
        />
        <CertificateCard 
          title="Phase 2 Passed" 
          accountSize="$100,000 Account" 
          date="---" 
          isLocked={true} 
        />
        <CertificateCard 
          title="Zenvex Funded Trader" 
          accountSize="$100,000 Account" 
          date="---" 
          isLocked={true} 
        />
        <CertificateCard 
          title="First Payout" 
          accountSize="$100,000 Account" 
          date="---" 
          isLocked={true} 
        />
      </div>
    </div>
  );
};

export default Certificates;
