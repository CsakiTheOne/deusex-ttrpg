<script>
    import { getAugIcon } from "$lib/media/mediaRefs";
    import { createEventDispatcher } from "svelte";

    export let style = "";
    /** @type {import("$lib/model/Aug").default} */
    export let aug;
    /** @type {"disabled" | "inactive" | "partial" | "full"} */
    export let state = "inactive";

    const dispatch = createEventDispatcher();

    $: stateColor = {
        disabled: "#220000",
        inactive: "#080808",
        partial: "#222200",
        full: "#002200",
    }[state];
</script>

<button
    on:click={() => dispatch("click")}
    style="background-color: {stateColor} {style}"
>
    {#await getAugIcon(aug) then src}
        <img {src} alt="..." />
    {/await}
    <span>{aug.name}</span>
</button>

<style>
    button {
        display: inline-block;
        color: var(--color-on-panel-background);
        width: 72px;
        aspect-ratio: 1 / 1;
        border: none;
        cursor: pointer;
    }

    button > img {
        width: 100%;
        height: 100%;
        padding: 4px;
    }

    button:active {
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
    }

    img:hover {
        background-color: var(--color-outline);
    }

    span {
        display: none;
    }

    button:hover span {
        display: block;
        position: absolute;
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
        padding: 4px;
        border: 1px solid var(--color-outline);
        border-radius: 2px;
    }
</style>
