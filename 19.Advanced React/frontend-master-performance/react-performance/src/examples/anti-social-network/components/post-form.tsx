import { useState } from 'react';
import { Card, CardContent } from '$components/card';
import { Input } from '$components/input';
import { Textarea } from '$components/textarea';
import { Button } from '$components/button';
import type { PostFormData } from '../types';

interface PostFormProps {
  onSubmit: (data: PostFormData) => Promise<void>;
  isPending?: boolean;
}

export function PostForm({ onSubmit, isPending = false }: PostFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    await onSubmit({ title, body });

    // Clear form after successful submission
    setTitle('');
    setBody('');
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Create a New Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Title
            </label>
            <Input
              id="title"
              type="text"
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPending}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="body" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Body
            </label>
            <Textarea
              id="body"
              placeholder="What's on your mind?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={isPending}
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!title.trim() || !body.trim() || isPending}
            className="w-full"
          >
            {isPending ? 'Posting...' : 'Post'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
