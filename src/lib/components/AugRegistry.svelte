<script>
    import { augBodyParts, augLevels } from "$lib/model/Aug";
    import augs from "$lib/static-data/augs.json";
    import AugTile from "./AugTile.svelte";
    import Checkbox from "./Checkbox.svelte";
    import Stack from "./Stack.svelte";

    // Base augs are augs that have no dependencies
    const baseAugs = augs.filter((aug) => aug.dependencies.length === 0);

    let sorting = "level";
</script>

<Stack>
    <Stack direction="row" alignCross="center">
        <span>Sort by</span>
        <Checkbox
            checked={sorting === "level"}
            on:change={(value) => {
                if (value) sorting = "level";
            }}
            label="Level"
        />
        <Checkbox
            checked={sorting === "body-part"}
            on:change={(value) => {
                if (value) sorting = "body-part";
            }}
            label="Body Part"
        />
    </Stack>
    <Stack gap="0">
        {#if sorting === "level"}
            {#each augLevels as level}
                <Stack direction="row" gap="0" padding="0">
                    <div class="row-title"><span>{level}</span></div>
                    {#each baseAugs.filter((aug) => aug.level === level) as aug}
                        <AugTile {aug} />
                    {/each}
                </Stack>
            {/each}
        {:else if sorting === "body-part"}
            {#each augBodyParts as bodyPart}
                <Stack direction="row" gap="0" padding="0">
                    <div class="row-title"><span>{bodyPart}</span></div>
                    {#each baseAugs.filter((aug) => aug.bodyPart === bodyPart) as aug}
                        <AugTile {aug} />
                    {/each}
                </Stack>
            {/each}
        {/if}
    </Stack>
</Stack>

<style>
    .row-title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        width: 20px;
        height: 64px;
        background-color: var(--color-panel-background-light);
        color: var(--color-on-panel-background-light);
        text-align: center;
        overflow: hidden;
    }

    .row-title span {
        font-size: .6rem;
        font-weight: bold;
        rotate: -90deg;
    }
</style>