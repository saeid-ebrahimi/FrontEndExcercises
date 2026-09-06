import { PostItem } from './post-item';
import { EmptyState } from '$components/empty-state';
import type { OptimisticPost } from '../types';

interface PostListProps {
  posts: OptimisticPost[];
  onDeletePost: (id: number) => void;
}

export function PostList({ posts, onDeletePost }: PostListProps) {
  if (posts.length === 0) {
    return (
      <EmptyState
        title="No posts yet"
        description="Create your first post using the form above."
      />
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        All Posts ({posts.length})
      </h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onDelete={onDeletePost} />
        ))}
      </div>
    </div>
  );
}
