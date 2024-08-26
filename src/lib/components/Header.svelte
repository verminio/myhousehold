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

	<section class="actions">
		{#if isAuthenticated}
			<button on:click={doLogout}>Logout</button>
		{/if}
	</section>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		height: 4em;
		align-items: center;
		padding: 0px 15px 0px 15px;
		background-color: $primary;
	}

	.actions {
		margin-left: auto;
	}
</style>
