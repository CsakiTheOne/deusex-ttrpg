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
        background-color: #000000ee;
        color: white;
        padding: 0.6rem 0.7rem;
        border: none;
        cursor: pointer;
        overflow: visible;
        position: relative;
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background-color: #000000ee;
        color: white;
        opacity: 0.5;
        cursor: not-allowed;
    }

    button:hover {
        background-color: #ffffffdd;
        color: black;
    }

    button::before {
        content: "▶";
        position: absolute;
        left: -12px;
        opacity: 0;
        color: #ffffff;
        transition: color 0.2s;
    }

    button:hover::before {
        content: "▶";
        position: absolute;
        left: -16px;
        opacity: 1;
        color: #ffffff88;
    }

    button:disabled:hover::before {
        content: "";
    }
</style>
