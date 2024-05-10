<script>
    /** @type {"column" | "row"} */
    export let direction = "column";
    export let gap = "1rem";
    export let padding = "1rem";
    export let alignMain = "flex-start";
    export let alignCross = "flex-start";
    export let style = "";
</script>

<div
    style="flex-direction: {direction}; gap: {gap}; padding: {padding}; justify-content: {alignMain}; align-items: {alignCross}; {style}"
>
    <slot />
</div>

<style>
    div {
        display: inline-flex;
        flex-wrap: nowrap;
    }
</style>
