import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (email === 'zenvexcapitalsupport@gmail.com' && password === '123456789') {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please use the demo account.');
      }
    } else {
      // For sign up, we just let them through or mock it for MVP
      navigate('/dashboard');
    }
  };

  const handleGoogleAuth = () => {
    // Mock Google Auth
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Zenvex Logo" className="w-20 h-20 object-contain mb-4 drop-shadow-[0_0_15px_rgba(0,200,150,0.2)]" />
          <h1 className="text-3xl font-bold tracking-tight text-white">Zenvex <span className="text-primary">Capital</span></h1>
          <p className="text-textMuted mt-2 text-center">
            {isLogin ? 'Log in to your trader dashboard to track assessments & payouts.' : 'Create an account to start your funded trading journey.'}
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-white/5 p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-xl text-center font-medium">
                {error}
              </div>
            )}

            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textMuted ml-1">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textMuted">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="John"
                      required
                      className="w-full bg-background border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textMuted ml-1">Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textMuted">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      required
                      className="w-full bg-background border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-textMuted ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textMuted">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="trader@example.com"
                  required
                  className="w-full bg-background border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-textMuted">Password</label>
                {isLogin && <button type="button" className="text-xs font-medium text-primary hover:underline">Forgot password?</button>}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textMuted">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-background border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-primary text-background font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-200 mt-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-textMuted">Or continue with</span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 py-3.5 bg-background border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>

          <div className="mt-8 text-center">
            <p className="text-sm text-textMuted">
              {isLogin ? "Don't have an evaluation account?" : "Already have an account?"}{' '}
              <button 
                type="button" 
                onClick={() => { setIsLogin(!isLogin); setError(''); }}
                className="font-bold text-white hover:text-primary transition-colors"
               >
                {isLogin ? 'Start a Challenge' : 'Sign In'}
              </button>
            </p>
          </div>
          
          {isLogin && (
            <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs text-center text-primary/80">
              <p className="font-bold mb-1">Demo Credentials:</p>
              <p>Email: zenvexcapitalsupport@gmail.com</p>
              <p>Pass: 123456789</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
