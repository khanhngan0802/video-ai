export interface VideoScript {
  hook: string;
  body: string;
  cta: string;
  caption: string;
  hashtags: string[];
  storyboard: {
    scene: string;
    visual: string;
    audio: string;
  }[];
}

export interface VideoPrompt {
  prompt: string;
  settings: {
    camera: string;
    lighting: string;
    movement: string;
    style: string;
  };
}

export interface MarketingImage {
  url: string;
  type: 'thumbnail' | 'banner' | 'product' | 'ad';
}

export interface KOLProfile {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export type AppTab = 'dashboard' | 'video' | 'image' | 'kol' | 'library' | 'analysis';
