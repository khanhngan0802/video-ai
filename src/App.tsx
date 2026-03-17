import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Video, 
  Image as ImageIcon, 
  UserCircle, 
  Library, 
  BarChart3, 
  Settings,
  Menu,
  X,
  Zap,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppTab } from './types';
import Dashboard from './components/Dashboard';
import VideoCreator from './components/VideoCreator';
import ImageCreator from './components/ImageCreator';
import KOLCreator from './components/KOLCreator';
import VideoLibrary from './components/VideoLibrary';
import Analysis from './components/Analysis';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'video', label: 'Tạo Video AI', icon: Video },
    { id: 'image', label: 'Tạo Ảnh AI', icon: ImageIcon },
    { id: 'kol', label: 'Tạo KOL Ảo', icon: UserCircle },
    { id: 'library', label: 'Thư viện Video', icon: Library },
    { id: 'analysis', label: 'Phân tích Video', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-screen transition-transform bg-[#0A0A0A] border-r border-white/5 ${
          isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
        }`}
      >
        <div className="flex flex-col h-full px-4 py-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Zap className="text-black fill-current" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              TikTokAI <span className="text-emerald-500">PRO</span>
            </span>
          </div>

          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AppTab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  activeTab === item.id 
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={20} className={activeTab === item.id ? 'text-emerald-500' : 'group-hover:text-white'} />
                <span className="font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <motion.div layoutId="active-pill" className="ml-auto">
                    <ChevronRight size={16} />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white transition-colors">
              <Settings size={20} />
              <span className="font-medium">Cài đặt</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 bg-[#050505]/80 backdrop-blur-xl border-bottom border-white/5">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium">Khanh Ngan</span>
              <span className="text-xs text-emerald-500">Pro Plan</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
                <UserCircle size={24} className="text-white/80" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
              {activeTab === 'video' && <VideoCreator />}
              {activeTab === 'image' && <ImageCreator />}
              {activeTab === 'kol' && <KOLCreator />}
              {activeTab === 'library' && <VideoLibrary />}
              {activeTab === 'analysis' && <Analysis />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
