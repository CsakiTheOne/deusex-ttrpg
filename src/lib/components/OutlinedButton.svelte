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
        background-color: #000000dd;
        color: white;
        padding: 0.6rem 0.7rem;
        border: 1px solid #ffffffcc;
        cursor: pointer;
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background-color: #000000dd;
        color: white;
        opacity: 0.5;
        cursor: not-allowed;
    }

    button:hover {
        background-color: #c4a46f;
        color: black;
    }

    button:active {
        background-color: #000000dd;
        color: white;
    }
</style>
