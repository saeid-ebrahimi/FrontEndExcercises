export type DeepThought = {
  id: string;
  content: string;
  createdAt: number;
  pinned?: boolean;
};

export type ThoughtChanges = Partial<Pick<DeepThought, 'content' | 'pinned'>>;

export type ThoughtActions = {
  addThought: (content: string) => void;
  updateThought: (id: string, changes: ThoughtChanges) => void;
  deleteThought: (id: string) => void;
};
