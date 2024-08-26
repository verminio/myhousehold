<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { logout } from '$lib/stores/auth';

	const isAdmin: boolean = pb.authStore.isAdmin;

	const doLogout = () => {
		logout().then(() => goto('/'));
	};
</script>

<nav>
	<ul>
		<li><a href="/dashboard">Dashboard</a></li>
		{#if isAdmin}
			<li><a href="/users">Users</a></li>
		{/if}
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#" on:click={doLogout}>Logout</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '../../styles/variables.scss';

	nav {
		flex-grow: 1;
		background-color: $primary-lighter;
	}

	nav > ul {
		margin: 0;
		padding: 0;
		text-indent: 0;
		list-style-type: 0;
	}

	nav > ul > li {
		text-align: center;
		line-height: 3em;
	}

	a,
	a:visited {
		color: lighten($text, 20%);
		text-decoration: none;
		font-size: 1.1em;
		display: block;
	}

	a:hover,
	a:focus {
		color: inherit;
		text-decoration: none;
	}

	li:hover {
		background: $primary;
	}
</style>
