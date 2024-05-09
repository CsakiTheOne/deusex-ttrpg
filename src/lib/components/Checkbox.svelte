<script>
    import { createEventDispatcher } from "svelte";

    /** @type {boolean} */
    export let checked;
    export let label = "";

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("change", !checked)}>
    <input type="checkbox" {checked} />
    <span>{label}</span>
</button>

<style>
    button {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
        padding: 0.6rem 0.7rem;
        border: none;
        cursor: pointer;
        overflow: visible;
        position: relative;
    }

    button:hover {
        background-color: var(--color-panel-background-light);
        color: var(--color-on-panel-background-light);
    }

    button:has(input:checked) {
        background-color: var(--color-panel-background-light);
        color: var(--color-on-panel-background-light);
    }

    button:has(input:checked):hover {
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
    }

    input {
        cursor: pointer;
        pointer-events: none;
    }
</style>
