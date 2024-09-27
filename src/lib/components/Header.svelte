<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { logout } from '$lib/stores/auth';

	const isAdmin: boolean = pb.authStore.isAdmin;

	const doLogout = () => {
		logout().then(() => goto('/'));
	};
</script>

<header>
	<h1>My Household</h1>
	<nav>
		<ul>
			<li><a href="/dashboard">Dashboard</a></li>
			<li><a href="/expenses">Expenses</a></li>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li><a href="#" on:click={doLogout}>Logout</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '../../styles/variables.scss';

	header {
		display: flex;
		flex-direction: row;
		height: 4em;
		align-items: center;
		padding: 0px 15px 0px 15px;
		background-color: $primary;
	}

	h1 {
		flex-grow: 1;
	}

	nav > ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		overflow: hidden;
	}

	nav > ul > li {
		display: inline-block;
		text-align: center;
		line-height: 3em;
	}

	a,
	a:visited {
		color: lighten($text, 20%);
		text-decoration: none;
		font-size: 1.1em;
		display: block;
		padding: 0.5em 1em;
	}

	a:hover,
	a:focus {
		color: inherit;
		text-decoration: none;
	}

	li:hover {
		background: lighten($primary, 20%);
	}
</style>
