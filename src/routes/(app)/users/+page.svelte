<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Verified</th>
			<th>Created</th>
		</tr>
	</thead>
	<tbody>
		{#each data.items as user}
			<tr>
				<td>{user.name}</td>
				<td>{user.verified}</td>
				<td>{user.created}</td>
			</tr>
		{/each}
	</tbody>
</table>
