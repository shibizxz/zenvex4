import { Lock, Mail, Shield, User } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-white mb-8">My Profile</h1>
      
      <div className="space-y-8">
        {/* Personal Info Section */}
        <section className="bg-card rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <User size={20} className="text-primary" /> Personal Information
            </h2>
            <p className="text-sm text-textMuted mt-1">Update your personal details.</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-6 pb-6 border-b border-white/5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                JD
              </div>
              <div>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-sm font-medium text-white border border-white/5 text-left">
                  Upload Photo
                </button>
                <p className="text-xs text-textMuted mt-2">JPG, GIF or PNG. Max size 2MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-textMuted">First Name</label>
                <input 
                  type="text" 
                  defaultValue="John"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-textMuted">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Doe"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-textMuted flex items-center gap-2">
                  <Mail size={16} /> Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="john.doe@example.com"
                  disabled
                  className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-3 text-textMuted cursor-not-allowed"
                />
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <button className="px-6 py-3 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-card rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield size={20} className="text-primary" /> Security Settings
            </h2>
            <p className="text-sm text-textMuted mt-1">Manage your password and security.</p>
          </div>
          
          <div className="p-6 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-textMuted flex items-center gap-2">
                  <Lock size={16} /> Current Password
                </label>
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="hidden md:block" /> {/* spacer */}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-textMuted">New Password</label>
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-textMuted">Confirm New Password</label>
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div>
                <h3 className="font-bold text-white">Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-textMuted mt-1">Add an extra layer of security to your account.</p>
              </div>
              <button className="px-5 py-2.5 bg-background border border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors">
                Enable 2FA
              </button>
            </div>
            
            <div className="flex justify-end pt-4">
              <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/5">
                 Update Security Info
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
