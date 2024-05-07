<script>
    import { getContext } from "svelte";

    /** @type {string} */
    export let href = "";
    export let text = "";

    /** @type {import("svelte/store").Writable<string>} */
    let srdPath = getContext("srdPath");
</script>

{#if href.startsWith("http")}
    <a {href} target={href.startsWith("http") ? "_blank" : "_self"}>
        {text}
    </a>
{:else}
    <span
        on:click={() => {
            if (href.startsWith("#")) return;
            srdPath.set(href.split("#")[0].replace("..", "."));
        }}
        on:keydown={(event) => {
            if (event.key === "Enter") {
                if (href.startsWith("#")) return;
                srdPath.set(href.split("#")[0].replace("..", "."));
            }
        }}
        role="button"
        tabindex="0"
    >
        {text}
    </span>
{/if}

<style>
    a,
    span {
        color: var(--color-primary);
        text-decoration: none;
        cursor: pointer;
    }
</style>
