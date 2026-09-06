import { useEffect, useState } from 'react';
import { Container } from '$components/container';
import { UserSelector } from './components/user-selector';
import { UserProfileCard } from './components/user-profile-card';
import { ConsoleOutput } from './components/console-output';
import { fetchUser } from './utilities/fetch-user';
import type { User, Version, ConsoleMessage } from './types';

// Version 1: Missing Dependencies Problem
function Version1MissingDeps() {
	console.log('🔴 Version1MissingDeps rendered');

	const [userId, setUserId] = useState(1);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<ConsoleMessage[]>([]);

	const addMessage = (type: ConsoleMessage['type'], message: string, userName?: string) => {
		setMessages((prev) => [
			...prev,
			{
				id: `${Date.now()}-${Math.random()}`,
				timestamp: Date.now(),
				type,
				userId,
				userName,
				message,
			},
		]);
	};

	// ❌ PROBLEM: Missing userId from dependency array
	// Effect only runs once on mount, ignoring subsequent userId changes
	useEffect(() => {
		const loadUser = async () => {
			setLoading(true);
			addMessage('fetch', `Fetching user ${userId}...`);

			try {
				const userData = await fetchUser(userId);
				setUser(userData);
				addMessage('received', `Received user ${userId}: ${userData.name}`, userData.name);
			} catch {
				addMessage('error', `Failed to fetch user ${userId}`);
			} finally {
				setLoading(false);
			}
		};

		loadUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // ❌ Empty array - effect ignores userId changes!

	return (
		<div className="space-y-6">
			<div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
				<h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">
					❌ Problem: Missing Dependencies
				</h3>
				<p className="text-sm text-red-700 dark:text-red-300">
					The effect only runs on mount. When you click different users, the effect doesn&apos;t re-run
					because <code className="rounded bg-red-100 px-1 dark:bg-red-800">userId</code> is not in the
					dependency array. The UI shows the same user no matter what you click.
				</p>
			</div>

			<UserSelector selectedUserId={userId} onSelectUser={setUserId} />
			<UserProfileCard user={user} loading={loading} selectedUserId={userId} />
			<ConsoleOutput messages={messages} />
		</div>
	);
}

// Version 2: Race Condition Problem
function Version2RaceCondition() {
	console.log('🟡 Version2RaceCondition rendered');

	const [userId, setUserId] = useState(1);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<ConsoleMessage[]>([]);

	const addMessage = (
		currentUserId: number,
		type: ConsoleMessage['type'],
		message: string,
		userName?: string,
	) => {
		setMessages((prev) => [
			...prev,
			{
				id: `${Date.now()}-${Math.random()}`,
				timestamp: Date.now(),
				type,
				userId: currentUserId,
				userName,
				message,
			},
		]);
	};

	// ✅ userId is in dependencies now
	// ❌ PROBLEM: No cleanup, causes race conditions
	useEffect(() => {
		const loadUser = async () => {
			setLoading(true);
			addMessage(userId, 'fetch', `Fetching user ${userId}...`);

			try {
				const userData = await fetchUser(userId);
				// ⚠️ This setState happens even if userId has changed!
				setUser(userData);
				addMessage(userId, 'received', `Received user ${userId}: ${userData.name}`, userData.name);
			} catch {
				addMessage(userId, 'error', `Failed to fetch user ${userId}`);
			} finally {
				setLoading(false);
			}
		};

		loadUser();
	}, [userId]); // ✅ Dependency is correct, but no cleanup!

	return (
		<div className="space-y-6">
			<div className="rounded-md bg-yellow-50 p-4 dark:bg-yellow-900/20">
				<h3 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
					⚠️ Problem: Race Condition
				</h3>
				<p className="text-sm text-yellow-700 dark:text-yellow-300">
					Dependencies are correct now, but there&apos;s no cleanup. If you rapidly click different users,
					requests return in unpredictable order due to random delays. You might see User 2&apos;s data
					even though you selected User 3. Click rapidly between users to see the race condition!
				</p>
			</div>

			<UserSelector selectedUserId={userId} onSelectUser={setUserId} />
			<UserProfileCard user={user} loading={loading} selectedUserId={userId} />
			<ConsoleOutput messages={messages} />
		</div>
	);
}

// Version 3: No Cleanup (Memory Leak)
function Version3NoCleanup() {
	console.log('🟠 Version3NoCleanup rendered');

	const [userId, setUserId] = useState(1);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<ConsoleMessage[]>([]);
	const [show, setShow] = useState(true);

	const addMessage = (
		currentUserId: number,
		type: ConsoleMessage['type'],
		message: string,
		userName?: string,
	) => {
		setMessages((prev) => [
			...prev,
			{
				id: `${Date.now()}-${Math.random()}`,
				timestamp: Date.now(),
				type,
				userId: currentUserId,
				userName,
				message,
			},
		]);
	};

	useEffect(() => {
		const loadUser = async () => {
			setLoading(true);
			addMessage(userId, 'fetch', `Fetching user ${userId}...`);

			try {
				const userData = await fetchUser(userId);
				// ❌ PROBLEM: Setting state even if component unmounted
				setUser(userData);
				setLoading(false);
				addMessage(userId, 'received', `Received user ${userId}: ${userData.name}`, userData.name);
			} catch {
				addMessage(userId, 'error', `Failed to fetch user ${userId}`);
				setLoading(false);
			}
		};

		loadUser();
		// ❌ No cleanup function!
	}, [userId]);

	if (!show) {
		return (
			<div className="space-y-6">
				<div className="rounded-md bg-slate-100 p-8 text-center dark:bg-slate-800">
					<p className="mb-4 text-slate-600 dark:text-slate-400">
						Component unmounted. Check your browser console for warnings about setting state on unmounted
						components.
					</p>
					<button
						onClick={() => setShow(true)}
						className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
					>
						Show Component Again
					</button>
				</div>
				<ConsoleOutput messages={messages} />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="rounded-md bg-orange-50 p-4 dark:bg-orange-900/20">
				<h3 className="mb-2 font-semibold text-orange-800 dark:text-orange-200">
					⚠️ Problem: No Cleanup (Memory Leak)
				</h3>
				<p className="mb-2 text-sm text-orange-700 dark:text-orange-300">
					When you select a user and then click &quot;Unmount Component&quot;, the fetch completes and
					tries to call <code className="rounded bg-orange-100 px-1 dark:bg-orange-800">setUser</code> and{' '}
					<code className="rounded bg-orange-100 px-1 dark:bg-orange-800">setLoading</code> on an unmounted
					component. Check your browser console for React warnings.
				</p>
				<button
					onClick={() => setShow(false)}
					className="rounded-md bg-orange-600 px-4 py-2 text-sm text-white hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800"
				>
					Unmount Component
				</button>
			</div>

			<UserSelector selectedUserId={userId} onSelectUser={setUserId} />
			<UserProfileCard user={user} loading={loading} selectedUserId={userId} />
			<ConsoleOutput messages={messages} />
		</div>
	);
}

// Version 4: Fixed with Proper Cleanup
function Version4Fixed() {
	console.log('🟢 Version4Fixed rendered');

	const [userId, setUserId] = useState(1);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<ConsoleMessage[]>([]);

	const addMessage = (
		currentUserId: number,
		type: ConsoleMessage['type'],
		message: string,
		userName?: string,
	) => {
		setMessages((prev) => [
			...prev,
			{
				id: `${Date.now()}-${Math.random()}`,
				timestamp: Date.now(),
				type,
				userId: currentUserId,
				userName,
				message,
			},
		]);
	};

	useEffect(() => {
		// ✅ Cancellation flag
		let cancelled = false;

		const loadUser = async () => {
			setLoading(true);
			addMessage(userId, 'fetch', `Fetching user ${userId}...`);

			try {
				const userData = await fetchUser(userId);

				// ✅ Check if still relevant before updating state
				if (!cancelled) {
					setUser(userData);
					addMessage(userId, 'received', `Received user ${userId}: ${userData.name}`, userData.name);
				} else {
					addMessage(userId, 'cancelled', `Cancelled fetch for user ${userId} (cleanup)`);
				}
			} catch {
				if (!cancelled) {
					addMessage(userId, 'error', `Failed to fetch user ${userId}`);
				}
			} finally {
				if (!cancelled) {
					setLoading(false);
				}
			}
		};

		loadUser();

		// ✅ Cleanup function
		return () => {
			cancelled = true;
		};
	}, [userId]); // ✅ Correct dependencies + cleanup

	return (
		<div className="space-y-6">
			<div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
				<h3 className="mb-2 font-semibold text-green-800 dark:text-green-200">✅ Fixed!</h3>
				<p className="text-sm text-green-700 dark:text-green-300">
					Now we have proper cleanup with a cancellation flag. When you rapidly click between users, the
					cleanup function sets <code className="rounded bg-green-100 px-1 dark:bg-green-800">cancelled = true</code>, preventing stale data from being set. The console shows cancelled requests.
					Try rapidly clicking between users - no more race conditions!
				</p>
			</div>

			<UserSelector selectedUserId={userId} onSelectUser={setUserId} />
			<UserProfileCard user={user} loading={loading} selectedUserId={userId} />
			<ConsoleOutput messages={messages} />
		</div>
	);
}

// Main Application with Tab Switcher
export default function Application() {
	const [activeVersion, setActiveVersion] = useState<Version>('missing-deps');

	const versions = [
		{ id: 'missing-deps' as Version, label: 'Missing Deps', icon: '❌' },
		{ id: 'race-condition' as Version, label: 'Race Condition', icon: '⚠️' },
		{ id: 'no-cleanup' as Version, label: 'No Cleanup', icon: '⚠️' },
		{ id: 'fixed' as Version, label: 'Fixed', icon: '✅' },
	];

	return (
		<Container className="my-8 space-y-8">
			<section>
				<h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
					Effect Essentials: useEffect Pitfalls
				</h1>
				<p className="text-slate-600 dark:text-slate-400">
					Understanding common useEffect mistakes and how to fix them. Each tab demonstrates a different
					problem with progressive solutions.
				</p>
			</section>

			<section>
				<div className="border-b border-slate-200 dark:border-slate-700">
					<div className="flex space-x-4">
						{versions.map((version) => (
							<button
								key={version.id}
								onClick={() => setActiveVersion(version.id)}
								className={`border-b-2 px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
									activeVersion === version.id
										? 'border-blue-500 text-blue-600 dark:text-blue-400'
										: 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
								}`}
							>
								{version.icon} {version.label}
							</button>
						))}
					</div>
				</div>

				<div className="pt-6">
					{activeVersion === 'missing-deps' && <Version1MissingDeps />}
					{activeVersion === 'race-condition' && <Version2RaceCondition />}
					{activeVersion === 'no-cleanup' && <Version3NoCleanup />}
					{activeVersion === 'fixed' && <Version4Fixed />}
				</div>
			</section>
		</Container>
	);
}
