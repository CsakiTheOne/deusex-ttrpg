<script>
    import { createEventDispatcher } from "svelte";

    export let disabled = false;

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("click")} {disabled}>
    <slot />
</button>

<style>
    button {
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
        padding: 0.6rem 0.7rem;
        border: 1px solid var(--color-outline);
        cursor: pointer;
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
        opacity: 0.5;
        cursor: not-allowed;
    }

    button:hover {
        background-color: var(--color-primary);
        color: var(--color-on-primary);
    }

    button:active {
        background-color: var(--color-panel-background);
        color: var(--color-on-panel-background);
    }
</style>
