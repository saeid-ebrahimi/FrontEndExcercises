import type { DeepThought } from '../types';

export function createThought(content: string): DeepThought {
  return {
    id: crypto.randomUUID(),
    content,
    createdAt: Date.now(),
  };
}
