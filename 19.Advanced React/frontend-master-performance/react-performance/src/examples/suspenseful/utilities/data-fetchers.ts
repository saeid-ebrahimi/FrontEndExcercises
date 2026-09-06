import { getUser, listPostsForUser, listTodosForUser } from '$/common/api';
import type { User, Post, Todo } from '../types';

// Add artificial delay to simulate real network conditions
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchUser(userId: number): Promise<User> {
  await delay(800); // Simulate network delay
  return getUser(userId);
}

export async function fetchUserPosts(userId: number): Promise<Post[]> {
  await delay(1200); // Slower API
  return listPostsForUser(userId, { _limit: 5 });
}

export async function fetchUserTodos(userId: number): Promise<Todo[]> {
  await delay(1500); // Even slower API
  return listTodosForUser(userId, { _limit: 8 });
}

// Create promises that can be used with the use() hook
export function createUserPromise(userId: number) {
  return fetchUser(userId);
}

export function createUserPostsPromise(userId: number) {
  return fetchUserPosts(userId);
}

export function createUserTodosPromise(userId: number) {
  return fetchUserTodos(userId);
}
