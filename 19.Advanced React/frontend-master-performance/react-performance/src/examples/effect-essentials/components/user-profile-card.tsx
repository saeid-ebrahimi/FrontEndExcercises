import { Card } from '$components/card';
import { Spinner } from '$components/spinner';
import type { User } from '../types';

interface UserProfileCardProps {
	user: User | null;
	loading: boolean;
	selectedUserId: number;
}

export function UserProfileCard({ user, loading, selectedUserId }: UserProfileCardProps) {
	if (loading) {
		return (
			<Card className="flex flex-col items-center justify-center space-y-4 p-8">
				<Spinner size="lg" />
				<p className="text-sm text-slate-600 dark:text-slate-400">Loading user {selectedUserId}...</p>
			</Card>
		);
	}

	if (!user) {
		return (
			<Card className="p-8">
				<p className="text-center text-slate-600 dark:text-slate-400">No user loaded yet</p>
			</Card>
		);
	}

	// Highlight if there's a mismatch between selected and displayed user
	const mismatch = user.id !== selectedUserId;

	return (
		<Card className={`p-6 ${mismatch ? 'border-2 border-red-500' : ''}`}>
			{mismatch && (
				<div className="mb-4 rounded-md bg-red-50 p-3 dark:bg-red-900/20">
					<p className="text-sm font-medium text-red-800 dark:text-red-200">
						⚠️ Race condition detected! Selected User {selectedUserId}, but showing User {user.id}
					</p>
				</div>
			)}

			<div className="space-y-4">
				<div>
					<h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{user.name}</h3>
					<p className="text-slate-600 dark:text-slate-400">@{user.username}</p>
				</div>

				<div className="grid gap-3 text-sm">
					<div>
						<span className="font-medium text-slate-700 dark:text-slate-300">Email: </span>
						<span className="text-slate-600 dark:text-slate-400">{user.email}</span>
					</div>

					<div>
						<span className="font-medium text-slate-700 dark:text-slate-300">Phone: </span>
						<span className="text-slate-600 dark:text-slate-400">{user.phone}</span>
					</div>

					<div>
						<span className="font-medium text-slate-700 dark:text-slate-300">Website: </span>
						<span className="text-slate-600 dark:text-slate-400">{user.website}</span>
					</div>

					<div>
						<span className="font-medium text-slate-700 dark:text-slate-300">Company: </span>
						<span className="text-slate-600 dark:text-slate-400">{user.company.name}</span>
					</div>

					<div>
						<span className="font-medium text-slate-700 dark:text-slate-300">Location: </span>
						<span className="text-slate-600 dark:text-slate-400">
							{user.address.city}, {user.address.street}
						</span>
					</div>
				</div>
			</div>
		</Card>
	);
}
