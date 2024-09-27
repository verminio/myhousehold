<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	onMount(async () => {
		currentUser.subscribe((user) => {
			const isLoggedIn: boolean = user !== null && user !== undefined;
			if (!isLoggedIn || (isLoggedIn && !pb.authStore.isValid)) {
				goto('/');
			}
		});
	});
</script>

<svelte:head>
	<title>My Household</title>
</svelte:head>


<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
	}

	@media (max-width: 854px) {
		main {
			flex-direction: column;
		}
	}
</style>
