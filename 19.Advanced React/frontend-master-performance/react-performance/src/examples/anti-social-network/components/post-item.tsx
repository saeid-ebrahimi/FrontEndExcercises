import { Card, CardContent } from '$components/card';
import { Button } from '$components/button';
import type { OptimisticPost } from '../types';

interface PostItemProps {
  post: OptimisticPost;
  onDelete: (id: number) => void;
}

export function PostItem({ post, onDelete }: PostItemProps) {
  return (
    <Card className={`transition-opacity ${post.isPending ? 'opacity-50' : 'opacity-100'}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {post.title}
              </h3>
              {post.isPending && (
                <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Saving...
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {post.body}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <span>Post #{post.id}</span>
              <span>•</span>
              <span>User {post.userId}</span>
            </div>
          </div>
          <Button
            variant="danger"
            size="small"
            onClick={() => onDelete(post.id as number)}
            disabled={post.isPending}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
