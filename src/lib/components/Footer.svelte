<script lang="ts">
	const year = new Date().getFullYear();
</script>

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
</style>
