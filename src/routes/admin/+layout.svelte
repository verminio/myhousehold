<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	onMount(async () => {
		currentUser.subscribe((user) => {
            const isLoggedIn: boolean = user !== null && user !== undefined;
			if (!isLoggedIn ||
				(isLoggedIn && !pb.authStore.isValid) ||
                (isLoggedIn && !pb.authStore.isAdmin)
			) {
				goto('/');
			}
		});
	});
</script>

<svelte:head>
	<title>My Household: Admin</title>
</svelte:head>

<main>
	<Header />
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		gap: 10px;
	}

	@media (max-width: 854px) {
		main {
			flex-direction: column;
		}
	}
</style>
