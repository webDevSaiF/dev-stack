export type DifficultyLevel = "Beginner-Friendly" | "Intermediate" | "Advanced";

export interface ITech {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: DifficultyLevel;
  badge?: string;
}

export type TechPromise = Promise<ITech[]>;
