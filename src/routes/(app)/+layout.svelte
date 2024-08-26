<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	onMount(async () => {
		currentUser.subscribe((user) => {
			if (
				user == null ||
				user == undefined ||
				(user !== null && user !== undefined && !pb.authStore.isValid)
			) {
				goto('/');
			}
		});
	});
</script>

<svelte:head>
	<title>My Household</title>
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
