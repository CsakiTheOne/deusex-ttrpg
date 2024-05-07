<script>
    import Button from "$lib/components/Button.svelte";
    import Music from "$lib/components/Music.svelte";
    import OutlinedButton from "$lib/components/OutlinedButton.svelte";
    import Panel from "$lib/components/Panel.svelte";
    import Stack from "$lib/components/Stack.svelte";
    import musicMenu from "$lib/media/music/1-01 Main Menu Theme.mp3";
    import { menuBackground, setBackgrounImage } from "$lib/media/mediaRefs";
    import { auth, signInWithGoogle, signOut } from "$lib/firebase/auth";
    import { onMount } from "svelte";

    /** @type {import("firebase/auth").User | null} */
    let currentUser = null;

    onMount(() => {
        auth.onAuthStateChanged((user) => {
            currentUser = user;
        });
    })

    setBackgrounImage(menuBackground);
</script>

<Panel light>
    <Stack padding=".5rem">
        <h1 style="display: inline;">Deus Ex: The Tabletop Game</h1>
    </Stack>
</Panel>

<Stack direction="row" alignMain="space-between" style="width: 100%;">
    <Stack>
        {#if currentUser}
            <Button>Start Game</Button>
            <Button>Host Game</Button>
            <Button>Profile and Characters</Button>
            <Button on:click={() => (window.location.href = "./srd/")}>
                Open the System Reference Document
            </Button>
            <Button
                on:click={() =>
                    window.open("https://github.com/CsakiTheOne/deusex-ttrpg")}
            >
                GitHub
            </Button>
            <Button
                on:click={() => {
                    signOut();
                }}
            >
                Sign Out
            </Button>
        {:else}
            <Button on:click={() => (window.location.href = "./srd/")}>
                Open the System Reference Document
            </Button>
            <Button
                on:click={() =>
                    window.open("https://github.com/CsakiTheOne/deusex-ttrpg")}
            >
                GitHub
            </Button>
            <Button
                on:click={() => {
                    signInWithGoogle();
                }}
            >
                Sign In with Google
            </Button>
        {/if}
        <Music src={musicMenu} />
    </Stack>
    <Panel>
        <Stack>
            <h2>Welcome to Deus Ex</h2>
            <Panel outline>
                <iframe
                    width="480"
                    style="aspect-ratio: 16 / 9; display: block;"
                    src="https://www.youtube.com/embed/UG_oThcYsn0?si=Qv77F0MRcCSYSBAU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </Panel>
            <Panel outline>
                <iframe
                    width="480"
                    style="aspect-ratio: 16 / 9; display: block;"
                    src="https://www.youtube.com/embed/IG56zvBVX98?si=HQPe3yRs3LtHuNLc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </Panel>
            <div style="display: flex; justify-content: flex-end; width: 100%;">
                <OutlinedButton
                    on:click={() => (window.location.href = "./srd/")}
                >
                    Read More About the World
                </OutlinedButton>
            </div>
        </Stack>
    </Panel>
</Stack>
