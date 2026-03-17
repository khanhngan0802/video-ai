import React from 'react';
import { Play, TrendingUp, MessageSquare, Heart, Share2, Filter, Search } from 'lucide-react';

export default function VideoLibrary() {
  const videos = [
    { id: 1, title: 'Review Máy lọc không khí', views: '1.2M', likes: '45K', comments: '1.2K', category: 'Review' },
    { id: 2, title: 'Tips phối đồ mùa hè', views: '850K', likes: '32K', comments: '800', category: 'Fashion' },
    { id: 3, title: 'Unboxing iPhone 15 Pro', views: '2.5M', likes: '120K', comments: '5.6K', category: 'Tech' },
    { id: 4, title: 'Nấu ăn cùng AI', views: '450K', likes: '15K', comments: '300', category: 'Food' },
    { id: 5, title: 'Daily Vlog x AI', views: '670K', likes: '28K', comments: '450', category: 'Lifestyle' },
    { id: 6, title: 'Marketing 101', views: '1.1M', likes: '56K', comments: '2.1K', category: 'Business' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <section>
          <h2 className="text-3xl font-bold mb-2">Thư viện Video Viral</h2>
          <p className="text-white/50">Khám phá và học hỏi từ những video thành công nhất.</p>
        </section>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Tìm kiếm video..." 
              className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500/50 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
            <Filter size={18} /> Lọc
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden group">
            <div className="relative aspect-[9/16] max-h-[400px] overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/viral${video.id}/400/711`} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-black px-2 py-1 rounded">
                  {video.category}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Play className="text-white fill-current ml-1" size={32} />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-bold text-lg mb-3 line-clamp-1">{video.title}</h3>
                <div className="flex items-center justify-between text-white/60">
                  <div className="flex items-center gap-1.5 text-xs">
                    <TrendingUp size={14} className="text-emerald-500" /> {video.views}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs"><Heart size={14} /> {video.likes}</div>
                    <div className="flex items-center gap-1 text-xs"><MessageSquare size={14} /> {video.comments}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex gap-2">
              <button className="flex-1 bg-white/5 hover:bg-white/10 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2">
                <Share2 size={14} /> Chia sẻ
              </button>
              <button className="flex-1 bg-emerald-500 text-black py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2">
                Dùng mẫu này
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
