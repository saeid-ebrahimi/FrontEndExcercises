import { Button } from '$components/button';

interface UserSelectorProps {
	selectedUserId: number;
	onSelectUser: (userId: number) => void;
}

const USER_IDS = [1, 2, 3, 4, 5];

export function UserSelector({ selectedUserId, onSelectUser }: UserSelectorProps) {
	return (
		<div className="flex gap-2">
			{USER_IDS.map((userId) => (
				<Button
					key={userId}
					onClick={() => onSelectUser(userId)}
					variant={selectedUserId === userId ? 'primary' : 'secondary'}
					className="min-w-[100px]"
				>
					User {userId}
				</Button>
			))}
		</div>
	);
}
