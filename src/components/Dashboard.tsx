import React from 'react';
import { Zap, Video, Image as ImageIcon, TrendingUp, ArrowRight, Play } from 'lucide-react';
import { AppTab } from '../types';

interface DashboardProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function Dashboard({ setActiveTab }: DashboardProps) {
  const stats = [
    { label: 'Video đã tạo', value: '128', icon: Video, color: 'text-emerald-500' },
    { label: 'Ảnh Marketing', value: '456', icon: ImageIcon, color: 'text-cyan-500' },
    { label: 'Tỷ lệ chuyển đổi', value: '+24%', icon: TrendingUp, color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Chào buổi sáng, Khanh!</h1>
        <p className="text-white/50 text-lg">Hôm nay bạn muốn tạo nội dung viral nào?</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-medium text-white/30 uppercase tracking-wider">Tháng này</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 p-8">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
              <Zap className="text-black" size={24} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Tạo Video Viral 30s</h2>
            <p className="text-white/60 mb-8 max-w-md">
              Chỉ cần nhập tên sản phẩm, AI sẽ tự động viết kịch bản, tạo hình ảnh, lồng tiếng và dựng video hoàn chỉnh.
            </p>
            <button 
              onClick={() => setActiveTab('video')}
              className="flex items-center gap-2 bg-emerald-500 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              Bắt đầu ngay <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-colors" />
        </div>

        <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Thư viện mẫu Viral</h3>
            <button className="text-emerald-500 text-sm font-medium hover:underline">Xem tất cả</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/tiktok${i}/400/225`} 
                  alt="Template" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Play className="text-black fill-current ml-1" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-black px-2 py-1 rounded">Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
