<script lang="ts">
	import { currentUser, pb } from "$lib/pocketbase";

	const year = new Date().getFullYear();
	let userLabel: string = '';

	currentUser.subscribe((auth) => {
		if (pb.authStore.isAdmin) {
			userLabel = 'Admin';
		} else if (auth) {
			userLabel = auth.name;
		}
	});
</script>

<div class="user">Logged in as {userLabel}</div>
<footer>
	<a href="https://myhousehold.app/">MyHousehold.app</a> - {year}
</footer>

<style lang="scss">
	footer {
		height: 3em;
		text-align: center;
		background-color: $primary-lighter;
		font-size: 0.9em;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid $primary-darker;
	}

	.user {
		height: 1.5em;
		text-align: center;
		background-color: $primary-lighter;
		font-size: 0.9em;		
	}
</style>
