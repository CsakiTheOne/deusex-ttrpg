<script>
    import { iconInfolink } from "$lib/media/aug-icons/augIcons";
    import { createEventDispatcher } from "svelte";

    export let style = "";
    /** @type {import("$lib/model/Aug").default} */
    export let aug;
    /** @type {"disabled" | "inactive" | "partially-active" | "fully-active"} */
    export let state = "inactive";

    const dispatch = createEventDispatcher();

    let iconSrc = "";
    $: stateColor = {
        disabled: "#220000",
        inactive: "#121212",
        "partially-active": "#221100",
        "fully-active": "#002200",
    }[state];
</script>

<button on:click={() => dispatch("click")} style="background-color: {stateColor} {style}">
    <img src={iconInfolink} alt="..." />
</button>

<style>
    button {
        display: inline-block;
        color: var(--color-on-panel-background);
        width: 64px;
        aspect-ratio: 1 / 1;
        border: none;
        cursor: pointer;
    }

    button > img {
        width: 100%;
        height: 100%;
    }

    img:hover {
        background-color: var(--color-outline);
    }

    button:active {
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
    }
</style>
