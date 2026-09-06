import type { Post as ApiPost, Id } from '$/common/api';

// Re-export the API Post type
export type { ApiPost as Post, Id };

// Form data for creating a new post
export interface PostFormData {
  title: string;
  body: string;
}

// Post with optional pending state for optimistic updates
export interface OptimisticPost extends ApiPost {
  isPending?: boolean;
}
