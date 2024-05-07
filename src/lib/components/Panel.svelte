<script>
    import { panelBackground } from "$lib/media/mediaRefs";

    export let light = false;
    export let outline = false;
    export let style = "";
    export let className = "";
</script>

<div
    style="{outline
        ? 'border: 1px solid var(--color-outline);'
        : ''} background-image: url({panelBackground}); {style}"
    class="{className} {light ? 'light' : ''}"
>
    <slot />
</div>

<style>
    div {
        display: inline-block;
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
        border-radius: 0.1rem;
        animation: backgroundScroll 90s linear infinite;
    }

    @keyframes backgroundScroll {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 100%;
        }
    }

    div.light {
        background-image: none !important;
        background-color: var(--color-panel-background-light);
        color: var(--color-on-panel-background-light);
    }
</style>
