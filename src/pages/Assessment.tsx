import { AlertTriangle } from 'lucide-react';

const ObjectiveRow = ({ title, status, current, target, unit, description }: any) => {
  const isPassed = status === 'passed';
  const isFailed = status === 'failed';


  const progress = Math.min((parseFloat(current) / parseFloat(target)) * 100, 100);

  return (
    <div className="bg-background/50 rounded-xl p-5 border border-white/5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-bold text-textLight">{title}</h4>
          <p className="text-sm text-textMuted mt-1">{description}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          isPassed ? 'bg-primary/20 text-primary' : 
          isFailed ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-400'
        }`}>
          {status}
        </div>
      </div>
      
      <div className="flex justify-between items-end mb-2">
        <div className="text-2xl font-bold tracking-tight text-white">
          {current} {unit}
        </div>
        <div className="text-sm font-medium text-textMuted">
          Target: {target} {unit}
        </div>
      </div>

      <div className="h-2 w-full bg-card rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${
            isPassed ? 'bg-primary' : isFailed ? 'bg-red-500' : 'bg-blue-500'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const Assessment = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Assessment Phase</h1>
        <p className="text-textMuted mt-2">Track your progress to become a Zenvex Funded Trader.</p>
      </div>

      {/* Phase Tracker */}
      <div className="bg-card rounded-2xl border border-white/5 p-8 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between relative z-10 w-full mb-8">
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10">
              <span className="text-xl font-bold text-background">1</span>
            </div>
            <p className="mt-4 font-bold text-textLight">Phase 1</p>
            <p className="text-xs font-medium text-primary mt-1">In Progress</p>
          </div>
          
          <div className="hidden md:block h-[2px] w-full max-w-[150px] bg-white/10 mx-4" />
          
          <div className="flex flex-col items-center flex-1 md:mt-0 mt-8 opacity-50">
            <div className="w-16 h-16 rounded-full bg-background border-2 border-white/10 flex items-center justify-center z-10">
              <span className="text-xl font-bold text-textMuted">2</span>
            </div>
            <p className="mt-4 font-bold text-textLight">Phase 2</p>
            <p className="text-xs font-medium text-textMuted mt-1">Locked</p>
          </div>
          
          <div className="hidden md:block h-[2px] w-full max-w-[150px] bg-white/10 mx-4" />
          
          <div className="flex flex-col items-center flex-1 md:mt-0 mt-8 opacity-50">
            <div className="w-16 h-16 rounded-full bg-background border-2 border-white/10 flex items-center justify-center z-10">
              <span className="text-xl font-bold text-textMuted">🏅</span>
            </div>
            <p className="mt-4 font-bold text-textLight">Funded</p>
            <p className="text-xs font-medium text-textMuted mt-1">Goal</p>
          </div>
        </div>

        <div className="bg-background/50 rounded-xl p-4 border border-white/5 text-sm flex items-start gap-3">
          <AlertTriangle size={20} className="text-primary mt-0.5 shrink-0" />
          <p className="text-textLight leading-relaxed">
            You are currently undergoing <span className="font-bold text-primary">Zenvex Phase 1 Challenge</span>. 
            Trade carefully, respect the drawdown limits, and achieve the 8% profit target to unlock Phase 2.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ObjectiveRow 
          title="Profit Target (8%)" 
          description="Reach a total profit of $8,000 to pass."
          status="ongoing" 
          current="5200" 
          target="8000" 
          unit="$" 
        />
        <ObjectiveRow 
          title="Minimum Trading Days" 
          description="Trade for at least 5 different days."
          status="passed" 
          current="6" 
          target="5" 
          unit="Days" 
        />
        <ObjectiveRow 
          title="Max Daily Loss (5%)" 
          description="Do not exceed a $5,000 loss in a single day."
          status="ongoing" 
          current="1200" 
          target="5000" 
          unit="$" 
        />
        <ObjectiveRow 
          title="Max Overall Loss (10%)" 
          description="Do not let equity drop below $90,000."
          status="ongoing" 
          current="3400" 
          target="10000" 
          unit="$" 
        />
      </div>
    </div>
  );
};

export default Assessment;
