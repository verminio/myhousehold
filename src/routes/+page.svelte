<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { adminLogin, isAuthenticated, logout, usernameAndPasswordLogin } from '$lib/stores/auth';
	import { onMount } from 'svelte';

	const year = new Date().getFullYear();

	let hasValidToken: boolean = false;
	onMount(async () => {
		isAuthenticated().then((val: boolean) => {
			if (pb.authStore.isAdmin) {
				logout();
			} else {
				hasValidToken = val;
			}
		});
	});

	const login = async (event: any) => {
		const data = new FormData(event.currentTarget);
		const email = data.get('email');
		const password = data.get('password');
		const admin = data.get('admin');
		if (email && password) {
			if (admin) {
				adminLogin(email.toString(), password.toString()).then(() => goto('/dashboard'));
			} else {
				usernameAndPasswordLogin(email.toString(), password.toString()).then(() =>
					goto('/dashboard')
				);
			}
		}
	};
</script>

<main>
	<section id="login">
		<header>
			<h1>My Household</h1>
		</header>
		{#if hasValidToken}
			<p>Already authenticated, go ahead to the <a href="/dashboard">Dashboard</a>.</p>
		{:else}
			<form method="POST" on:submit|preventDefault={login}>
				<label for="email">Email</label>
				<input name="email" type="email" />
				<label for="password">Password</label>
				<input name="password" type="password" />
				<label><input name="admin" type="checkbox" /> Admin</label>
				<button>Log in</button>
			</form>
		{/if}
		<footer><a href="https://myhousehold.app/">MyHousehold.app</a> - {year}</footer>
	</section>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
	}

	#login {
		width: 33%;
		background-color: $primary-lighter;
		border-radius: 20px;
	}

	header {
		background-color: $primary-darker;
		height: 4em;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px 20px 0px 0px;
	}

	footer {
		text-align: center;
		font-size: 0.9em;
		border-top: 1px solid $primary-darker;
		height: 2em;
	}

	label {
		margin: 10px 0 0 0;
	}

	form {
		padding: 25px 25px 15px 25px;
		margin: 0px 20px 0 20px;
		display: flex;
		flex-direction: column;
	}

	form > button {
		margin: 20px 0 0 0;
		align-self: center;
	}
</style>
