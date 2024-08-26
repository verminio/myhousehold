<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { logout } from '$lib/stores/auth';

	let isAuthenticated: boolean;
	$: isAuthenticated = pb.authStore.isValid;

	const doLogout = () => {
		logout().then(() => goto('/'));
	};
</script>

<header>
	<h1>My Household</h1>

	{#if isAuthenticated}
		<button on:click={doLogout}>Logout</button>
	{/if}
</header>
