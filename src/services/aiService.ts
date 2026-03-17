import { GoogleGenAI, Type, Modality } from "@google/genai";
import { VideoScript } from "../types";

const getAI = () => new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const aiService = {
  async generateScript(product: string, desc: string, target: string, price: string): Promise<VideoScript> {
    const ai = getAI();
    const prompt = `Bạn là chuyên gia TikTok Marketing. Hãy tạo kịch bản video viral cho sản phẩm sau:
    Tên sản phẩm: ${product}
    Mô tả: ${desc}
    Đối tượng: ${target}
    Giá: ${price}
    
    Yêu cầu:
    1. Hook cực mạnh 3 giây đầu.
    2. Kịch bản 20-30 giây.
    3. Storytelling bán hàng.
    4. Caption TikTok viral.
    5. 10 hashtag thịnh hành.
    6. Storyboard chi tiết từng cảnh.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hook: { type: Type.STRING },
            body: { type: Type.STRING },
            cta: { type: Type.STRING },
            caption: { type: Type.STRING },
            hashtags: { type: Type.ARRAY, items: { type: Type.STRING } },
            storyboard: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  scene: { type: Type.STRING },
                  visual: { type: Type.STRING },
                  audio: { type: Type.STRING }
                }
              }
            }
          },
          required: ["hook", "body", "cta", "caption", "hashtags", "storyboard"]
        }
      }
    });

    return JSON.parse(response.text);
  },

  async generateImage(prompt: string): Promise<string> {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: { aspectRatio: "9:16", imageSize: "1K" }
      }
    });

    const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
    if (part?.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
    throw new Error("Failed to generate image");
  },

  async generateVideo(prompt: string): Promise<string> {
    const ai = getAI();
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '9:16'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation });
    }

    return operation.response?.generatedVideos?.[0]?.video?.uri || "";
  },

  async generateVoice(text: string, voiceName: string = 'Kore'): Promise<string> {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName }
          }
        }
      }
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio ? `data:audio/mpeg;base64,${base64Audio}` : "";
  }
};
