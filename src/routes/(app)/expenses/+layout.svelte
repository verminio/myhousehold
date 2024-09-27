<nav>
	<ul>
		<li><a href="/expenses/recurring">Recurring</a></li>
		<li><a href="/expenses/recurring">Other</a></li>
	</ul>
</nav>
<slot />

<style lang="scss">
	@import '../../../styles/variables.scss';

	nav {
		min-width: 10%;
	}

	nav > ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		overflow: hidden;
	}

	nav > ul > li {
		line-height: 3em;
		text-align: center;
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
		background: $primary;
	}
</style>
