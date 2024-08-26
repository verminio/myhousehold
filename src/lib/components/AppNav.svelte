<nav>
	<ul>
		<li><a href="/dashboard">Dashboard</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '../../styles/variables.scss';

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
