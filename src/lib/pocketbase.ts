import { PUBLIC_POCKETBASE_HOST } from '$env/static/public';
import type Client from 'pocketbase';
import PocketBase from 'pocketbase';

const appConfig = {
	pocketbase: {
		host: PUBLIC_POCKETBASE_HOST || ''
	}
};

export const pb: Client = new PocketBase(appConfig.pocketbase.host);
