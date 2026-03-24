import { Activity, ArrowUpRight, DollarSign, Target, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', equity: 100000 },
  { name: 'Tue', equity: 101200 },
  { name: 'Wed', equity: 100500 },
  { name: 'Thu', equity: 102800 },
  { name: 'Fri', equity: 104500 },
  { name: 'Sat', equity: 104500 },
  { name: 'Sun', equity: 105200 },
];

const MetricCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-background/50 rounded-lg shrink-0 text-primary">
        <Icon size={24} />
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-primary' : 'text-red-400'}`}>
          {trend}
        </span>
      )}
    </div>
    <div>
      <h3 className="text-textMuted text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold tracking-tight text-textLight">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">Overview</h1>
      
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Account Balance" value="$100,000.00" icon={DollarSign} />
        <MetricCard title="Current Equity" value="$105,200.00" icon={TrendingUp} trend="+5.2%" />
        <MetricCard title="Margin Level" value="100%" icon={Activity} />
        <MetricCard title="Win Rate" value="68.5%" icon={Target} trend="+2.1%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-card rounded-2xl border border-white/5 p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Equity Curve</h2>
            <button className="text-xs px-3 py-1.5 bg-background rounded-lg border border-white/10 text-textMuted hover:text-white transition-colors">
              Last 7 Days
            </button>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C896" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00C896" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E2A3A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#00C896' }}
                />
                <Area type="monotone" dataKey="equity" stroke="#00C896" strokeWidth={3} fillOpacity={1} fill="url(#colorEquity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-2xl border border-white/5 p-6 flex flex-col">
          <h2 className="text-lg font-bold text-white mb-6">Recent Trades</h2>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
             {[
               { pair: 'XAUUSD', type: 'BUY', profit: '+$450.00', status: 'win', date: 'Today, 14:30' },
               { pair: 'EURUSD', type: 'SELL', profit: '-$120.00', status: 'loss', date: 'Today, 10:15' },
               { pair: 'GBPUSD', type: 'BUY', profit: '+$890.00', status: 'win', date: 'Yesterday' },
               { pair: 'WS30', type: 'SELL', profit: '+$1,200.00', status: 'win', date: 'Yesterday' },
             ].map((trade, i) => (
               <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-white/5 hover:bg-background/80 transition-colors">
                 <div className="flex items-center gap-3">
                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${trade.type === 'BUY' ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                     {trade.type}
                   </div>
                   <div>
                     <p className="font-bold text-textLight text-sm">{trade.pair}</p>
                     <p className="text-xs text-textMuted">{trade.date}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className={`font-bold text-sm ${trade.status === 'win' ? 'text-primary' : 'text-red-400'}`}>
                     {trade.profit}
                   </p>
                 </div>
               </div>
             ))}
          </div>
          <button className="w-full mt-4 py-3 rounded-xl text-primary font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
             View All History <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
