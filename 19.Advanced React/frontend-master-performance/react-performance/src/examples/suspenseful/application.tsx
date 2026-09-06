import { useState, useEffect } from 'react';
import { Container } from '$components/container';
import { Card } from '$components/card';
import { Spinner } from '$components/spinner';
import { fetchUser, fetchUserPosts, fetchUserTodos } from './utilities/data-fetchers';
import type { User, Post, Todo } from './types';

const USER_ID = 1;

function Application() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TRADITIONAL APPROACH: useEffect + loading states
    // Wait for ALL data before showing anything
    const loadData = async () => {
      setLoading(true);
      try {
        // Sequential loading - very slow!
        const userData = await fetchUser(USER_ID);
        setUser(userData);

        const userPosts = await fetchUserPosts(USER_ID);
        setPosts(userPosts);

        const userTodos = await fetchUserTodos(USER_ID);
        setTodos(userTodos);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Container className="my-8 flex min-h-[400px] items-center justify-center">
        <div className="text-center space-y-4">
          <Spinner size="xl" />
          <p className="text-slate-600 dark:text-slate-400">
            Loading all data... This will take a while.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Suspenseful
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Traditional loading pattern: Everything waits for the slowest API. Notice how you see
          nothing until ALL data has loaded (user + posts + todos). This feels slow and unresponsive.
        </p>
        <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">
            ❌ Traditional pattern: Waterfall loading, blank screen until everything is ready
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section>
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
              User Information
            </h2>
            {user && (
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {user.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">@{user.username}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Website:</strong> {user.website}
                  </p>
                </div>
              </div>
            )}
          </Card>
        </section>

        <section>
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Recent Posts
            </h2>
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <h3 className="mb-1 font-medium text-slate-900 dark:text-slate-100">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {post.body.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Todo List
            </h2>
            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center space-x-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    className="h-5 w-5 rounded"
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'text-slate-500 line-through dark:text-slate-500'
                        : 'text-slate-900 dark:text-slate-100'
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Problem
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• User sees a spinner for 3-4 seconds (sum of all API calls)</li>
          <li>• Page is completely blank until everything loads</li>
          <li>• Fast data (user info) waits for slow data (todos)</li>
          <li>• Complex loading state management with useEffect</li>
          <li>• Can&apos;t show partial data as it arrives</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
