<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import '$lib/stores/auth';
	import { adminLogin, isAuthenticated, logout, usernameAndPasswordLogin } from '$lib/stores/auth';
	import { onMount } from 'svelte';

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
				adminLogin(email.toString(), password.toString()).then(() => goto('/admin'));
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
				<label>
					Email
					<input name="email" type="email" />
				</label>
				<label>
					Password
					<input name="password" type="password" />
				</label>
				<label>
					Admin
					<input name="admin" type="checkbox" />
				</label>
				<button>Log in</button>
			</form>
		{/if}
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
	}

	form {
		display: flex;
		flex-direction: column;
	}
</style>
