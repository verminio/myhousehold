<script lang="ts">
	import { goto } from '$app/navigation';
	import AppNav from '$lib/components/AppNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<Header />
<main>
	<aside class="nav">
		<AppNav />
	</aside>
	<section class="content">
		<slot />
	</section>
</main>
<Footer />

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		gap: 10px;
		flex-grow: 1;
	}

	aside.nav {
		flex: 0 1 auto;
		min-width: 15%;
		background-color: $primary-lighter;
	}

	section.content {
		flex: 2 1 auto;
	}

	@media (max-width: 854px) {
		main {
			flex-direction: column;
		}
	}
</style>
