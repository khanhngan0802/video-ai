import React, { useState } from 'react';
import { UserCircle, Star, Check, Play, Mic, Video, Sparkles } from 'lucide-react';
import { KOLProfile } from '../types';
import { motion } from 'motion/react';

export default function KOLCreator() {
  const [selectedKOL, setSelectedKOL] = useState<string | null>(null);

  const kols: KOLProfile[] = [
    { id: '1', name: 'Linh Chi', role: 'Nữ xinh bán hàng', avatar: 'https://picsum.photos/seed/kol1/200/200', description: 'Giọng nói ngọt ngào, phù hợp mỹ phẩm, thời trang.' },
    { id: '2', name: 'Minh Quân', role: 'MC Review Công nghệ', avatar: 'https://picsum.photos/seed/kol2/200/200', description: 'Chuyên nghiệp, tin cậy, phù hợp đồ gia dụng, điện tử.' },
    { id: '3', name: 'Bác Ba', role: 'Người thợ điện', avatar: 'https://picsum.photos/seed/kol3/200/200', description: 'Chân chất, thật thà, phù hợp dụng cụ cầm tay, sửa chữa.' },
    { id: '4', name: 'Chị Hạnh', role: 'Người nội trợ', avatar: 'https://picsum.photos/seed/kol4/200/200', description: 'Gần gũi, kinh nghiệm, phù hợp đồ bếp, thực phẩm.' },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-3xl font-bold mb-2">Tạo KOL Ảo AI</h2>
        <p className="text-white/50">Chọn nhân vật AI đại diện cho thương hiệu của bạn.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kols.map((kol) => (
              <div 
                key={kol.id}
                onClick={() => setSelectedKOL(kol.id)}
                className={`relative bg-[#0A0A0A] border rounded-3xl p-6 cursor-pointer transition-all duration-300 group ${
                  selectedKOL === kol.id 
                    ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img 
                      src={kol.avatar} 
                      alt={kol.name} 
                      className="w-20 h-20 rounded-2xl object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    {selectedKOL === kol.id && (
                      <div className="absolute -top-2 -right-2 bg-emerald-500 text-black rounded-full p-1">
                        <Check size={14} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{kol.name}</h3>
                      <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        <Star size={10} fill="currentColor" /> AI Pro
                      </div>
                    </div>
                    <p className="text-emerald-500 text-sm font-medium mb-2">{kol.role}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{kol.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 py-2 rounded-xl text-xs font-bold transition-colors">
                    <Play size={14} /> Nghe thử giọng
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 py-2 rounded-xl text-xs font-bold transition-colors">
                    <Video size={14} /> Xem mẫu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl sticky top-24">
            <h3 className="text-xl font-bold mb-6">Cấu hình KOL</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Giọng nói</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 bg-emerald-500 text-black text-xs font-bold rounded-lg">Miền Bắc</button>
                  <button className="px-3 py-2 bg-white/5 text-white/60 text-xs font-bold rounded-lg hover:bg-white/10">Miền Nam</button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Tông giọng</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50">
                  <option>Hào hứng, năng lượng</option>
                  <option>Chân thành, tin cậy</option>
                  <option>Hài hước, dí dỏm</option>
                  <option>Trang trọng, lịch sự</option>
                </select>
              </div>

              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-500 mb-2">
                  <Mic size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Clone giọng nói</span>
                </div>
                <p className="text-[10px] text-white/40">Tải lên 30s giọng nói của bạn để AI tự động bắt chước.</p>
                <button className="mt-3 w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-colors border border-white/10">
                  Tải lên Audio
                </button>
              </div>

              <button 
                disabled={!selectedKOL}
                className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors disabled:opacity-50"
              >
                <Sparkles size={20} /> Tạo KOL nói về SP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
