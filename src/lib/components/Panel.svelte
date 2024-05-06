<script>
    export let light = false;
    export let outline = false;
    export let style = "";
    export let className = "";
</script>

<div style="{outline ? 'border: 1px solid #ffffffcc;' : ''} {style}" class="{className} {light ? 'light' : ''}">
    <slot />
</div>

<style>
    div {
        display: inline-block;
        background-color: #000000dd;
        color: white;
        border-radius: .2rem;
    }

    div.light {
        background-color: #ffffffcc;
        color: black;
    }
</style>
