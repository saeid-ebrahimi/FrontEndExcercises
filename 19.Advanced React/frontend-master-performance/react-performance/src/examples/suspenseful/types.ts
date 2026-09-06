import type { User, Post, Todo } from '$/common/api';

export type { User, Post, Todo };

export interface UserProfileData {
  user: User;
  posts: Post[];
  todos: Todo[];
}
