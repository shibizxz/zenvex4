import { ArrowDownLeft, ArrowUpRight, DollarSign, Download, Plus } from 'lucide-react';

const TransactionRow = ({ type, amount, status, date, id }: any) => {
  const isDeposit = type === 'deposit';
  
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isDeposit ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'
        }`}>
          {isDeposit ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
        </div>
        <div>
          <p className="font-medium text-white">{isDeposit ? 'Deposit' : 'Withdrawal'}</p>
          <div className="flex items-center gap-2 text-sm text-textMuted mt-0.5">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-mono text-xs">{id}</span>
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <p className={`font-bold ${isDeposit ? 'text-primary' : 'text-white'}`}>
          {isDeposit ? '+' : '-'}${amount}
        </p>
        <p className="text-sm text-textMuted capitalize mt-0.5">{status}</p>
      </div>
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-white mb-8">My Wallet</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-card to-background border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 text-textMuted mb-2">
                <DollarSign size={20} />
                <span className="font-medium">Total Available Balance</span>
              </div>
              <p className="text-5xl font-bold text-white tracking-tight">$12,450.00</p>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-primary text-background font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                <Plus size={18} /> Deposit
              </button>
              <button className="flex-1 bg-white/10 text-white font-medium py-3 px-4 rounded-xl border border-white/5 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                <Download size={18} /> Payout
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-6 border border-white/5 flex flex-col justify-center">
            <h3 className="text-textMuted font-medium mb-1">Total Deposits</h3>
            <p className="text-2xl font-bold text-white">$5,000.00</p>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-white/5 flex flex-col justify-center">
            <h3 className="text-textMuted font-medium mb-1">Total Payouts</h3>
            <p className="text-2xl font-bold text-white">$17,450.00</p>
          </div>
          <div className="md:col-span-2 bg-card rounded-2xl p-6 border border-white/5">
             <h3 className="text-white font-bold mb-2">Next Eligible Payout</h3>
             <p className="text-textMuted text-sm mb-4">You can request your next profit split on <span className="text-primary font-bold">April 15, 2026</span>.</p>
             <div className="w-full bg-background h-2 rounded-full overflow-hidden">
               <div className="bg-primary h-full w-[65%]" />
             </div>
             <p className="text-xs text-right text-textMuted mt-2">65% of cycle completed</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-card rounded-2xl border border-white/5 overflow-hidden mt-8">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Transaction History</h2>
          <button className="text-sm font-medium text-primary hover:underline">View All</button>
        </div>
        
        <div className="divide-y divide-white/5">
          <TransactionRow type="deposit" amount="500.00" status="completed" date="Mar 24, 2026" id="TXN-9824HA" />
          <TransactionRow type="withdrawal" amount="2,400.00" status="processing" date="Mar 10, 2026" id="TXN-3341XQ" />
          <TransactionRow type="withdrawal" amount="5,000.00" status="completed" date="Feb 15, 2026" id="TXN-8812ZT" />
          <TransactionRow type="deposit" amount="1,000.00" status="completed" date="Jan 05, 2026" id="TXN-1100LM" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
