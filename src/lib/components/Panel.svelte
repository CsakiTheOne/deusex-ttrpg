<script>
    export let light = false;
    export let outline = false;
    export let style = "";
    export let className = "";
</script>

<div style="{outline ? 'border: 1px solid var(--color-outline);' : ''} {style}" class="{className} {light ? 'light' : ''}">
    <slot />
</div>

<style>
    div {
        display: inline-block;
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
        border-radius: .2rem;
    }

    div.light {
        background-color: var(--color-panel-background-light);
        color: var(--color-on-panel-background-light);
    }
</style>
