<script>
    import augs from "$lib/static-data/augs.json";
    import { createEventDispatcher } from "svelte";
    import AugTile from "./AugTile.svelte";
    import Stack from "./Stack.svelte";

    /** @type {import("$lib/model/Aug").default} */
    export let aug;

    const dispatch = createEventDispatcher();
</script>

<Stack alignCross="center" alignMain="center" gap="0" padding="0">
    <AugTile {aug} on:click={() => dispatch("click", aug)} />
    <Stack direction="row" alignMain="center">
        {#each aug.children as childName}
            <svelte:self
                aug={augs.find((aug) => aug.name === childName)}
                on:click={() => dispatch("click", augs.find((aug) => aug.name === childName))}
            />
        {/each}
    </Stack>
</Stack>
