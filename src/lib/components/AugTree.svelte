<script>
    import augs from "$lib/static-data/augs.json";
    import { createEventDispatcher } from "svelte";
    import AugTile from "./AugTile.svelte";
    import Stack from "./Stack.svelte";
    import { getAugState } from "$lib/model/Aug";
    import { baseCharacter } from "$lib/model/Character";

    /** @type {import("$lib/model/Aug").default} */
    export let aug;
    /** @type {import("$lib/model/Character").default} */
    export let character = baseCharacter;

    const dispatch = createEventDispatcher();
</script>

<Stack alignCross="center" alignMain="center" gap="0" padding="0">
    <AugTile {aug} state={getAugState(character, aug)} on:click={() => dispatch("click", aug)} />
    <Stack direction="row" alignMain="center">
        {#each aug.children as childName}
            <svelte:self
                aug={augs.find((aug) => aug.name === childName)}
                on:click={() => dispatch("click", augs.find((aug) => aug.name === childName))}
            />
        {/each}
    </Stack>
</Stack>
