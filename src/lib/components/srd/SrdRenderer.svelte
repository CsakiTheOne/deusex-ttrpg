<script>
    import { createEventDispatcher, onMount, setContext } from "svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Stack from "../Stack.svelte";
    import Panel from "../Panel.svelte";
    import SrdLink from "./SrdLink.svelte";
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";
    import { parseActionCodeURL } from "firebase/auth";
    import OutlinedButton from "../OutlinedButton.svelte";
    import SrdTable from "./table/SrdTable.svelte";
    import SrdTableRow from "./table/SrdTableRow.svelte";
    import SrdTableCell from "./table/SrdTableCell.svelte";
    import SrdInlineCode from "./SrdInlineCode.svelte";

    export let style = "";
    export let showCloseButton = false;

    let path = "SRD.md";
    /** @type {string | null} */
    let markdown = "Loading...";

    let srdPath = writable("SRD.md");
    srdPath.subscribe((value) => {
        path = value;
        if (browser) {
            fetch(`../srd-content/${path}`)
                .then((response) => response.text())
                .then((text) => {
                    markdown = text;
                });
        }
    });
    setContext("srdPath", srdPath);

    onMount(async () => {
        fetch(`../srd-content/${path}`)
            .then((response) => response.text())
            .then((text) => {
                markdown = text;
            });
    });

    const dispatch = createEventDispatcher();
</script>

<Panel style="overflow-y: scroll; {style}">
    <Panel light style="width: 100%;">
        <Stack
            direction="row"
            alignMain="space-between"
            alignCross="center"
            style="width: 100%;"
        >
            <Stack direction="row" alignCross="center" padding="">
                {#each path.split("/") as pathSection}
                    {#if pathSection === "."}
                        <OutlinedButton on:click={() => srdPath.set("SRD.md")}>
                            Back to Root
                        </OutlinedButton>
                    {:else}
                        <span>{pathSection.replace(".md", "")}</span>
                    {/if}
                {/each}
            </Stack>
            {#if showCloseButton}
                <OutlinedButton on:click={() => dispatch("close")}>
                    Close
                </OutlinedButton>
            {/if}
        </Stack>
    </Panel>
    <Stack>
        <SvelteMarkdown
            source={markdown}
            renderers={{
                link: SrdLink,
                table: SrdTable,
                tablerow: SrdTableRow,
                tablecell: SrdTableCell,
                codespan: SrdInlineCode,
            }}
        />
    </Stack>
</Panel>
