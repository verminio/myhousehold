<script>
</script>

<svelte:head>
    <title>My Household</title>
</svelte:head>

<header>
    <h1>My Household</h1>
</header>
<main>
    <slot/>
</main>
<footer>
    Footer
</footer>

<style lang="scss">
    main {
        display: flex;
        gap: 10px;
    }

    @media (max-width: 854px) {
        main {
            flex-direction: column;
        }
    }
</style>