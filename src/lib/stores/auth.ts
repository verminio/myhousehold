import '$lib/pocketbase';
import { pb } from '$lib/pocketbase';

const col: string = 'users';

export const usernameAndPasswordLogin = async (username: string, password: string) => {
	return pb.collection(col).authWithPassword(username, password);
};

export const adminLogin = async (username: string, password: string) => {
	return pb.admins.authWithPassword(username, password)
}

export const isAuthenticated = async (): Promise<boolean> => {
	const isValid = pb.authStore.isValid;
	if (isValid) {
		return pb
			.collection(col)
			.authRefresh()
			.then(() => true)
			.catch(() => {
				pb.authStore.clear();
				return false
			});
	}

	return new Promise<boolean>(() => false);
};

export const logout = async () => {
	pb.authStore.clear();
	return true;
};
