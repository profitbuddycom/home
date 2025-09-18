export interface QuizState {
  goal: string;
  timeInvestment: string;
  biggestObstacle: string;
  experience: string;
  workStyle: string;
  priority: string;
  incomeGoal: string;
  personality: string[];
  skills: string[];
  interest: string;
}

export interface QuizResult {
  archetype: string;
  archetypeDescription: string;
  strengths: string[];
  potentialBlockers: string[];
  recommendationTeaser: string;
  callToAction: string;
  affiliateLink: string;
  isFavorite?: boolean;
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    body: string;
}

export interface BlogCategory {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    posts: BlogPost[];
}


// FIX: Add missing type definitions for ChatMessage, Choice, and DynamicQuestion to fix errors in Conversation.tsx
export interface Choice {
  value: string;
  text: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text?: string;
  choices?: Choice[];
  isMultiSelect?: {
    options: Choice[];
    submitText: string;
  };
}

export interface DynamicQuestion {
  inputType: 'text' | 'single-choice' | 'multi-select' | 'submit';
  choices?: Choice[];
}