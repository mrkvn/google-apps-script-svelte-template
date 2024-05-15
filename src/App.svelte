<script>
    import Router from "svelte-spa-router";
    import Nav from "./lib/Nav.svelte";
    import runGas from "./lib/api";
    import About from "./routes/About.svelte";
    import Home from "./routes/Home.svelte";
    import NotFound from "./routes/NotFound.svelte";
    let res = "";

    let routes = {
        "/": Home,
        "/about": About,
        "*": NotFound,
    };
    async function handleClick() {
        res = await runGas("echo", ["Hello from Svelte!"]);
    }
</script>

<main class="container mx-auto">
    <h1 class="text-9xl underline">Hello Svelte Apps Script</h1>
    <Nav />
    <Router {routes} />
    <button
        on:click={handleClick}
        class="py-2 px-4 bg-amber-600 text-white font-bold rounded-lg mt-8"
        >Call Apps Script Function</button
    >
    <p class="mt-2">Response from Apps Script: {res}</p>
</main>

<style>
</style>
