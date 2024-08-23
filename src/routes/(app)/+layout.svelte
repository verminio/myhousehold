<script lang="ts">
	import Header from '$lib/components/Header.svelte';
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
