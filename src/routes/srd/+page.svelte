<script>
    import AlignRight from "$lib/components/AlignRight.svelte";
    import OutlinedButton from "$lib/components/OutlinedButton.svelte";
    import Panel from "$lib/components/Panel.svelte";
    import Stack from "$lib/components/Stack.svelte";
    import { setBackgrounImage, menuBackground } from "$lib/media/mediaRefs";
    import SrdRenderer from "$lib/components/srd/SrdRenderer.svelte";
    import { goto } from "$app/navigation";

    setBackgrounImage(menuBackground);
</script>

<Panel light>
    <Stack padding=".5rem">
        <h1 style="display: inline;">Deus Ex: The Tabletop Game</h1>
    </Stack>
</Panel>

<OutlinedButton on:click={() => goto("../")}>Back to Menu</OutlinedButton>

<SrdRenderer />
