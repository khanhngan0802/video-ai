import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Play, Download, Share2, MessageSquare, Hash, Video } from 'lucide-react';
import { aiService } from '../services/aiService';
import { VideoScript } from '../types';
import { motion } from 'motion/react';

export default function VideoCreator() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState('');
  const [desc, setDesc] = useState('');
  const [target, setTarget] = useState('');
  const [price, setPrice] = useState('');
  const [script, setScript] = useState<VideoScript | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await aiService.generateScript(product, desc, target, price);
      setScript(result);
      
      // Auto-generate a preview video prompt based on the hook
      // In a real app, this would trigger the full video pipeline
      // const video = await aiService.generateVideo(result.hook);
      // setVideoUrl(video);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Input Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Sparkles className="text-emerald-500" size={20} />
            </div>
            <h2 className="text-xl font-bold">Thông tin sản phẩm</h2>
          </div>

          <form onSubmit={handleGenerate} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Tên sản phẩm</label>
              <input 
                type="text" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Ví dụ: Máy lọc không khí Xiaomi"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Mô tả & Lợi ích</label>
              <textarea 
                rows={4}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Mô tả các tính năng nổi bật..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Đối tượng</label>
                <input 
                  type="text" 
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  placeholder="Mẹ bỉm, Gen Z..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Giá bán</label>
                <input 
                  type="text" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="990.000đ"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <><Send size={20} /> Tạo kịch bản & Video</>}
            </button>
          </form>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="lg:col-span-7 space-y-6">
        {script ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Script Details */}
            <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">Kịch bản Viral AI</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Download size={18} /></button>
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Share2 size={18} /></button>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">Hook (3 giây đầu)</div>
                  <p className="text-lg font-medium italic">"{script.hook}"</p>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Nội dung chính</div>
                  <p className="text-white/80 leading-relaxed">{script.body}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <MessageSquare size={14} /> Caption TikTok
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl text-sm text-white/70">
                      {script.caption}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <Hash size={14} /> Hashtags
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {script.hashtags.map((tag, i) => (
                        <span key={i} className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-md">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storyboard */}
            <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Storyboard chi tiết</h3>
              <div className="space-y-4">
                {script.storyboard.map((scene, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl group hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-emerald-500">{scene.scene}</div>
                      <div className="text-xs text-white/60"><span className="text-white/40 font-medium">Hình ảnh:</span> {scene.visual}</div>
                      <div className="text-xs text-white/60"><span className="text-white/40 font-medium">Âm thanh:</span> {scene.audio}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="h-full min-h-[500px] bg-[#0A0A0A] border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Video className="text-white/20" size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Chưa có kịch bản nào</h3>
            <p className="text-white/40 max-w-xs">Điền thông tin bên trái và bấm nút tạo để bắt đầu xây dựng video viral của bạn.</p>
          </div>
        )}
      </div>
    </div>
  );
}
