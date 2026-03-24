import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Wallet, User, LogOut, Menu, X, Award, Target, Banknote } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/challenges', label: 'Challenges', icon: Target },
    { path: '/assessment', label: 'Assessment', icon: CheckSquare },
    { path: '/wallet', label: 'My Wallet', icon: Wallet },
    { path: '/payouts', label: 'Payouts', icon: Banknote },
    { path: '/certificates', label: 'Certificates', icon: Award },
    { path: '/profile', label: 'My Profile', icon: User },
  ];

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-3 mb-10 px-2 mt-4">
        {/* Zenvex Logo */}
        <img src="/logo.png" alt="Zenvex Logo" className="w-8 h-8 object-contain drop-shadow-md" />
        <span className="text-xl font-bold tracking-tight text-textLight">
          Zenvex <span className="text-primary">Capital</span>
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border border-transparent ${
                isActive 
                  ? 'bg-primary/10 text-primary border-primary/20 shadow-[inset_0_1px_0_0_rgba(0,200,150,0.1)]' 
                  : 'text-textMuted hover:bg-white/5 hover:text-textLight'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-primary' : 'text-textMuted'} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 pt-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-400/10 hover:text-red-300 transition-colors duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 flex-col bg-card/60 backdrop-blur-xl border-r border-white/5 p-6 z-20">
        <SidebarContent />
      </aside>

      {/* Mobile Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative z-10 w-full">
        {/* Top Navbar */}
        <header className="h-20 flex items-center justify-between px-6 md:px-8 border-b border-white/5 bg-background/80 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4 hidden md:flex">
             <span className="text-lg font-semibold text-textLight capitalize">
               {location.pathname.replace('/', '') || 'Dashboard'}
             </span>
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Zenvex Logo" className="w-7 h-7 object-contain" />
              <span className="font-bold text-textLight">Zenvex</span>
            </div>
            {/* The standard hamburger remains for extra navigation, mostly supplementary now */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-textMuted hover:text-textLight rounded-lg hover:bg-white/5"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Header Right Side items: Notifications, User Avatar */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-blue-500 border-2 border-card flex items-center justify-center text-white font-medium text-sm shadow-md">
                TR
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-textLight leading-none">Trader</span>
                <span className="text-xs text-textMuted mt-1">Funded</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto w-full flex justify-center pb-20 md:pb-0 relative z-0">
            {/* Limit max width for extreme ultrawide monitors and align center */}
            <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-10 pb-28 md:pb-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Outlet />
                  </motion.div>
                </AnimatePresence>
            </div>
        </main>

        {/* --- NEW: Mobile Bottom App Bar Navigation --- */}
        <div className="md:hidden fixed bottom-0 inset-x-0 bg-card/90 backdrop-blur-xl border-t border-white/5 z-40 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-around px-2 h-20">
             {[
               { path: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
               { path: '/challenges', icon: Target, label: 'Evaluate' },
               { path: '/assessment', icon: CheckSquare, label: 'Assess' },
               { path: '/wallet', icon: Wallet, label: 'Wallet' },
               { path: '/profile', icon: User, label: 'Profile' },
             ].map((item) => {
               const isActive = location.pathname === item.path;
               const Icon = item.icon;
               return (
                 <Link
                   key={item.path}
                   to={item.path}
                   className={`flex flex-col items-center justify-center w-16 h-full gap-1.5 px-1 rounded-2xl transition-all duration-300 ${
                     isActive 
                       ? 'text-primary' 
                       : 'text-textMuted hover:text-white'
                   }`}
                 >
                   <div className={`relative flex items-center justify-center ${isActive ? 'scale-110' : ''}`}>
                      <Icon size={22} className={isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(0,200,150,0.5)]' : ''} />
                      {isActive && <span className="absolute -bottom-4 w-1 h-1 rounded-full bg-primary" />}
                   </div>
                   <span className={`text-[10px] font-bold ${isActive ? 'text-primary' : ''}`}>{item.label}</span>
                 </Link>
               )
             })}
          </div>
        </div>

      </div>

      {/* Mobile Sidebar Overlay (Hamburger Menu for extra options) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-72 bg-card border-r border-white/5 p-6 z-[60] flex flex-col md:hidden pb-safe"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
