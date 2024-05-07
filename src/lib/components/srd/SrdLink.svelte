<script>
    import { getContext } from "svelte";

    /** @type {string} */
    export let href = "";
    export let text = "";

    /** @type {import("svelte/store").Writable<string>} */
    let srdPath = getContext("srdPath");
</script>

<a
    href={href.startsWith("http") ? href : `#${href}`}
    on:click={() => {
        if (href.startsWith("http") || href.startsWith("#")) return;
        srdPath.set(href.split("#")[0]);
    }}
    target={href.startsWith("http") ? "_blank" : "_self"}
>
    {text}
</a>

<style>
    a {
        color: var(--color-primary);
        text-decoration: none;
    }
</style>
