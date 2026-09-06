import { getUser } from '$/common/api';
import type { User } from '../types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetches a user with a random delay to simulate real-world API variability.
 * The random delay (500-2000ms) is CRITICAL for demonstrating race conditions.
 * Without random delays, race conditions would be hidden and the educational value lost.
 *
 * @param userId - The ID of the user to fetch
 * @returns Promise resolving to the User data
 */
export async function fetchUser(userId: number): Promise<User> {
	// Random delay between 500ms and 2000ms
	const delay = 500 + Math.random() * 1500;
	await sleep(delay);

	// Use the JSONPlaceholder API via our existing getUser utility
	const user = await getUser(userId);
	return user;
}
