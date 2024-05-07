<script>
    import { onMount, setContext } from "svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Stack from "../Stack.svelte";
    import Panel from "../Panel.svelte";
    import SrdLink from "./SrdLink.svelte";
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";
    import { parseActionCodeURL } from "firebase/auth";
    import OutlinedButton from "../OutlinedButton.svelte";

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

    console.log(`Loading SRD page from ./srd/${path}`);

    onMount(async () => {
        fetch(`../srd-content/${path}`)
            .then((response) => response.text())
            .then((text) => {
                markdown = text;
            });
    });

    setContext("srdPath", srdPath);
</script>

<Panel style="width: 100%;">
    <Panel light style="width: 100%;">
        <Stack direction="row" alignCross="center">
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
    </Panel>
    <Stack>
        <SvelteMarkdown source={markdown} renderers={{ link: SrdLink }} />
    </Stack>
</Panel>
