import React, { useState } from 'react';
import { ImageIcon, Sparkles, Loader2, Download, RefreshCw, Layers } from 'lucide-react';
import { aiService } from '../services/aiService';
import { motion } from 'motion/react';

export default function ImageCreator() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [type, setType] = useState<'thumbnail' | 'banner' | 'product' | 'ad'>('thumbnail');

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const fullPrompt = `Create a high-quality ${type} for: ${prompt}. Professional lighting, 4k, marketing style.`;
      const url = await aiService.generateImage(fullPrompt);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const types = [
    { id: 'thumbnail', label: 'Thumbnail TikTok' },
    { id: 'banner', label: 'Banner Shopee' },
    { id: 'product', label: 'Ảnh Sản Phẩm 3D' },
    { id: 'ad', label: 'Ảnh Quảng Cáo' },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-2">Tạo Ảnh Marketing AI</h2>
        <p className="text-white/50">Tạo hình ảnh quảng cáo chuyên nghiệp chỉ với một câu lệnh.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-3xl space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Loại hình ảnh</label>
              <div className="grid grid-cols-1 gap-2">
                {types.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id as any)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                      type === t.id 
                        ? 'bg-emerald-500 text-black' 
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Mô tả hình ảnh</label>
              <textarea 
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ví dụ: Một chiếc máy lọc không khí hiện đại đặt trong phòng khách sang trọng, ánh sáng tự nhiên..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none text-sm"
              />
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <><Sparkles size={20} /> Tạo ảnh ngay</>}
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center relative">
            {imageUrl ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex flex-col items-center p-8"
              >
                <div className="relative group max-w-md w-full shadow-2xl shadow-emerald-500/10">
                  <img 
                    src={imageUrl} 
                    alt="Generated" 
                    className="w-full rounded-2xl border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><Download size={20} /></button>
                    <button onClick={handleGenerate} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><RefreshCw size={20} /></button>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                    <Layers size={18} /> Thêm Text AI
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-bold rounded-xl transition-colors">
                    Dùng cho Video
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="text-center p-12">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ImageIcon className="text-white/20" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Sẵn sàng tạo ảnh</h3>
                <p className="text-white/40 max-w-xs mx-auto">Nhập mô tả và chọn loại ảnh để AI bắt đầu thiết kế cho bạn.</p>
              </div>
            )}
            
            {loading && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                <Loader2 className="animate-spin text-emerald-500 mb-4" size={48} />
                <p className="text-emerald-500 font-medium animate-pulse">AI đang thiết kế ảnh cho bạn...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
