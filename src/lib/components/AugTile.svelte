<script>
    import { createEventDispatcher } from "svelte";
    import augs from "$lib/static-data/augs.json";

    export let style = "";
    export let augName;
    /** @type {"disabled" | "inactive" | "partially-active" | "fully-active"} */
    export let state = "inactive";

    const dispatch = createEventDispatcher();
    const aug = augs.find((a) => a.name === augName);

    let iconSrc = "";
    $: stateColor = {
        disabled: "#220000",
        inactive: "#121212",
        "partially-active": "#221100",
        "fully-active": "#002200",
    }[state];

    if (aug) {
        import(/* @vite-ignore */ `../media/aug-icons/${aug.iconPath}`).then(
            (module) => {
                iconSrc = module.default;
            },
        );
    }
</script>

<button on:click={() => dispatch("click")} style="background-color: {stateColor} {style}">
    <img src={iconSrc} alt="..." />
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
