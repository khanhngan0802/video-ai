import React from 'react';
import { BarChart3, TrendingUp, AlertCircle, CheckCircle2, Lightbulb, ArrowUpRight } from 'lucide-react';

export default function Analysis() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-2">Phân tích Video Viral</h2>
        <p className="text-white/50">AI phân tích dữ liệu và gợi ý cách tối ưu hóa video của bạn.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Performance Chart Placeholder */}
          <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">Hiệu suất Video</h3>
                <p className="text-sm text-white/40">Dữ liệu tổng hợp từ TikTok & Reels</p>
              </div>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none">
                <option>7 ngày qua</option>
                <option>30 ngày qua</option>
              </select>
            </div>
            
            <div className="h-64 flex items-end gap-2 px-4">
              {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div 
                    className="w-full bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors rounded-t-lg relative"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}k
                    </div>
                  </div>
                  <span className="text-[10px] text-white/30 font-bold uppercase">Thứ {i + 2}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-500">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="font-bold">Điểm mạnh</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-white/70 italic">
                  <span className="text-emerald-500">•</span> Hook 3 giây đầu cực kỳ ấn tượng, tỷ lệ giữ chân 85%.
                </li>
                <li className="flex gap-2 text-sm text-white/70 italic">
                  <span className="text-emerald-500">•</span> Ánh sáng và chất lượng hình ảnh đạt chuẩn 4K.
                </li>
              </ul>
            </div>

            <div className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                  <AlertCircle size={20} />
                </div>
                <h4 className="font-bold">Cần cải thiện</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-white/70 italic">
                  <span className="text-orange-500">•</span> Phần Call To Action hơi dài, làm giảm tỷ lệ click.
                </li>
                <li className="flex gap-2 text-sm text-white/70 italic">
                  <span className="text-orange-500">•</span> Nhạc nền đôi khi át tiếng KOL nói.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-yellow-500" size={24} />
              <h3 className="text-xl font-bold">Gợi ý từ AI</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">Hook mới mạnh hơn</div>
                <p className="text-sm italic text-white/80">"Dừng lại ngay nếu bạn vẫn đang dùng máy lọc không khí kiểu cũ!"</p>
                <button className="mt-3 flex items-center gap-1 text-xs text-emerald-500 font-bold hover:underline">
                  Thử ngay <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">Xu hướng âm nhạc</div>
                <p className="text-sm text-white/80">Sử dụng bản phối "Lofi Chill 2024" để tăng 40% khả năng lên xu hướng.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">Thời điểm đăng</div>
                <p className="text-sm text-white/80">Đăng vào lúc 19:45 tối nay để tiếp cận tối đa tệp khách hàng mục tiêu.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-8 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Tự động đăng Video</h4>
              <p className="text-white/70 text-sm mb-6">Kết nối TikTok, Facebook, YouTube để AI tự động đăng video cho bạn.</p>
              <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:scale-105 transition-transform">
                Kết nối ngay
              </button>
            </div>
            <BarChart3 className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
