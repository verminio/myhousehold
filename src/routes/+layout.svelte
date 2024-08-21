<script>
    import '../app.scss';
    import "@picocss/pico/css/pico.fluid.classless.orange.css";
</script>

<svelte:head>
    <title>My Household</title>
</svelte:head>

<header>
    <h1>My Household</h1>
</header>
<div id="main-container">
<aside>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </nav>
</aside>
<main>
    <slot/>
</main>
</div>
<footer>
    Footer
</footer>

<style>
    #main-container {
        display: flex;
        gap: 10px;
    }

    #main-container > aside {
        min-width: 10%;
    }

    @media (max-width: 854px) {
        #main-container {
            flex-direction: column;
        }
    }
</style>