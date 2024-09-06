import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.ts'],

	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import 'src/styles/variables.scss';
				`
			}
		}
	}
});
