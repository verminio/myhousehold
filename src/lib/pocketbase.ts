import { goto } from '$app/navigation';
import { PUBLIC_POCKETBASE_HOST } from '$env/static/public';
import type Client from 'pocketbase';
import PocketBase, { type AuthModel } from 'pocketbase';
import { writable, type Writable } from 'svelte/store';

const appConfig = {
	pocketbase: {
		host: PUBLIC_POCKETBASE_HOST || ''
	}
};

export const pb: Client = new PocketBase(appConfig.pocketbase.host);

export const currentUser: Writable<AuthModel | null> = writable(null)

pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model)
})