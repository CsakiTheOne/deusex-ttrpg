<script>
    import { augBodyParts, augClasses } from "$lib/model/Aug";
    import augs from "$lib/static-data/augs.json";
    import { createEventDispatcher } from "svelte";
    import AugTile from "./AugTile.svelte";
    import Checkbox from "./Checkbox.svelte";
    import OutlinedButton from "./OutlinedButton.svelte";
    import Panel from "./Panel.svelte";
    import Stack from "./Stack.svelte";
    import AugTree from "./AugTree.svelte";

    export let allowInteractions = false;
    /** @type {import("$lib/model/Character").default | null} */
    export let character = null;

    const dispatch = createEventDispatcher();

    // Base augs are augs that have no parent
    const baseAugs = augs.filter((aug) =>
        augs.every((other) => !other.children.includes(aug.name)),
    );

    let sorting = "aug-class";
    /** @type {import("$lib/model/Aug").default | null} */
    let selectedAug = null;
</script>

<Stack direction="row" alignMain="space-between" style="width: 100%;">
    <Stack>
        {#if allowInteractions && character}
            <Stack direction="row" alignCross="center" padding="0">
                <span>Praxis: {character?.praxis}</span>
                <span>System stability: ?%</span>
            </Stack>
        {/if}
        <Stack direction="row" alignCross="center" padding="0">
            <span>Sort by</span>
            <Checkbox
                checked={sorting === "aug-class"}
                on:change={(value) => {
                    if (value) sorting = "aug-class";
                }}
                label="Class"
            />
            <Checkbox
                checked={sorting === "body-part"}
                on:change={(value) => {
                    if (value) sorting = "body-part";
                }}
                label="Body Part"
            />
        </Stack>
        <Stack gap="0" padding="0">
            {#if sorting === "aug-class"}
                {#each augClasses as augClass}
                    <Stack direction="row" gap="0" padding="0">
                        <div class="row-title"><span>{augClass}</span></div>
                        {#each baseAugs.filter((aug) => aug.augClass === augClass) as aug}
                            <AugTile
                                {aug}
                                on:click={() => (selectedAug = aug)}
                            />
                        {/each}
                    </Stack>
                {/each}
            {:else if sorting === "body-part"}
                {#each augBodyParts as bodyPart}
                    <Stack direction="row" gap="0" padding="0">
                        <div class="row-title"><span>{bodyPart}</span></div>
                        {#each baseAugs.filter((aug) => aug.bodyPart === bodyPart) as aug}
                            <AugTile
                                {aug}
                                on:click={() => (selectedAug = aug)}
                            />
                        {/each}
                    </Stack>
                {/each}
            {/if}
        </Stack>
    </Stack>
    {#if selectedAug}
        <Panel outline>
            <Stack style="width: 100%;">
                <h3>{selectedAug.name}</h3>
                <p>{selectedAug.description} Activation: {selectedAug.activation}.</p>
                <p>
                    Power usage:
                    <abbr title="Cost per use"
                        >{selectedAug.costOnActivation}/u</abbr
                    >
                    <abbr title="Cost per moving 1m"
                        >{selectedAug.costPerMove}/m</abbr
                    >
                    <abbr title="Cost per one turn in combat"
                        >{selectedAug.costPerTurn}/t</abbr
                    >
                </p>
                {#if selectedAug.bonuses.length > 0}
                    <div>
                        Bonuses:
                        <ul>
                            {#each selectedAug.bonuses as bonus}
                                <li>{bonus.stat} {bonus.unit} {bonus.value}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
                <Stack direction="row">
                    {#if allowInteractions && character && !character.augs.includes(selectedAug.name)}
                        <OutlinedButton
                            on:click={() => dispatch("unlock", selectedAug)}
                        >
                            Unlock for {selectedAug.praxis} praxis
                        </OutlinedButton>
                    {/if}
                    {#if allowInteractions && character && character.augs.includes(selectedAug.name)}
                        <OutlinedButton
                            on:click={() => dispatch("use", selectedAug)}
                            >Use</OutlinedButton
                        >
                    {/if}
                    {#if allowInteractions && character && character.augs.includes(selectedAug.name)}
                        <OutlinedButton
                            on:click={() => dispatch("toggle", selectedAug)}
                        >
                            Toggle Activation
                        </OutlinedButton>
                    {/if}
                </Stack>
                <Stack alignCross="center" style="width: 100%;">
                    <AugTree
                        aug={selectedAug}
                        on:click={(e) => (selectedAug = e.detail)}
                    />
                </Stack>
            </Stack>
        </Panel>
    {/if}
</Stack>

<style>
    .row-title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        width: 20px;
        height: 72px;
        background-color: var(--color-panel-background-light);
        color: var(--color-on-panel-background-light);
        text-align: center;
        overflow: hidden;
    }

    .row-title span {
        font-size: 0.55rem;
        font-weight: bold;
        rotate: -90deg;
    }
</style>
