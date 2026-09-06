export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
	company: {
		name: string;
		catchPhrase: string;
	};
}

export type Version = 'missing-deps' | 'race-condition' | 'no-cleanup' | 'fixed';

export interface ConsoleMessage {
	id: string;
	timestamp: number;
	type: 'fetch' | 'received' | 'cancelled' | 'error';
	userId: number;
	userName?: string;
	message: string;
}
