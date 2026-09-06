import { Card } from '$components/card';
import type { ConsoleMessage } from '../types';

interface ConsoleOutputProps {
	messages: ConsoleMessage[];
}

const MESSAGE_ICONS = {
	fetch: '→',
	received: '✓',
	cancelled: '✗',
	error: '⚠',
} as const;

const MESSAGE_COLORS = {
	fetch: 'text-blue-600 dark:text-blue-400',
	received: 'text-green-600 dark:text-green-400',
	cancelled: 'text-orange-600 dark:text-orange-400',
	error: 'text-red-600 dark:text-red-400',
} as const;

export function ConsoleOutput({ messages }: ConsoleOutputProps) {
	return (
		<Card className="p-4">
			<div className="mb-2 flex items-center justify-between">
				<h3 className="font-mono text-sm font-semibold text-slate-700 dark:text-slate-300">
					Console Output
				</h3>
				<span className="text-xs text-slate-500 dark:text-slate-500">
					{messages.length} {messages.length === 1 ? 'message' : 'messages'}
				</span>
			</div>

			<div className="max-h-[300px] space-y-1 overflow-y-auto rounded bg-slate-900 p-3 font-mono text-xs">
				{messages.length === 0 ? (
					<p className="text-slate-500">No events yet. Select a user to start.</p>
				) : (
					messages.map((msg) => (
						<div key={msg.id} className={MESSAGE_COLORS[msg.type]}>
							{MESSAGE_ICONS[msg.type]} {msg.message}
						</div>
					))
				)}
			</div>
		</Card>
	);
}
