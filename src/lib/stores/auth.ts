import '$lib/pocketbase';
import { pb } from '$lib/pocketbase';

const col: string = 'users';

export const usernameAndPasswordLogin = async (username: string, password: string) => {
	return pb
		.collection(col)
		.authWithPassword(username, password);
};

export const isAuthenticated: Promise<boolean> = async () => {
	const isValid = pb.authStore.isValid;
	if (isValid) {
		return pb
			.collection(col)
			.authRefresh()
			.then(() => true)
			.catch(() => false);
	}

	return new Promise<boolean>(() => false);
};

export const authRefresh = async () => {
	return pb.collection(col).authRefresh();
};

export const logout = async () => {
	pb.authStore.clear();
	return true;
};
