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
    import AlignRight from "$lib/components/AlignRight.svelte";
    import { getUserData, setUserData } from "$lib/firebase/firestore";
    import SrdRenderer from "$lib/components/srd/SrdRenderer.svelte";
    import AugRegistry from "$lib/components/AugRegistry.svelte";

    /** @type {import("firebase/auth").User | null} */
    let currentUser = null;
    /** @type {import("$lib/firebase/firestore").UserData | null} */
    let currentUserData = null;

    let isCharactersPanelOpen = false;
    let isSrdOpen = false;

    onMount(() => {
        auth.onAuthStateChanged((user) => {
            currentUser = user;
            if (user) {
                getUserData(user.uid).then((data) => {
                    if (data.exists()) {
                        currentUserData = data.data();
                    }
                });
            } else {
                currentUserData = null;
            }
        });
    });

    setBackgrounImage(menuBackground);

    // TESTING
    let praxis = 10;
    let unlockedAugs = [];
    let disabledAugs = [];
</script>

<!-- Header -->
<Panel light>
    <Stack padding=".5rem">
        <h1 style="display: inline;">Deus Ex: The Tabletop Game</h1>
    </Stack>
</Panel>

<Stack direction="row" alignMain="space-between" style="width: 100%;">
    <Stack>
        {#if currentUser}
            <Stack direction="row" alignCross="center">
                <h2
                    style="color: var(--color-on-background);"
                    class="font-normal"
                >
                    {#if currentUserData && currentUserData.username}
                        Welcome back, {currentUserData?.username}!
                    {:else}
                        Welcome! Be sure to set a nickname.
                    {/if}
                </h2>
                <OutlinedButton
                    on:click={() => {
                        const newName = prompt(
                            "Enter your new username:",
                            currentUserData?.username ?? "",
                        );

                        if (currentUser && newName) {
                            setUserData(currentUser.uid, {
                                username: newName,
                            }).then(() =>
                                getUserData(currentUser?.uid).then(
                                    (data) => (currentUserData = data.data()),
                                ),
                            );
                        }
                    }}
                >
                    Edit
                </OutlinedButton>
            </Stack>
            <Button disabled>Start Game</Button>
            <Button disabled>Host Game</Button>
            <Button
                on:click={() =>
                    (isCharactersPanelOpen = !isCharactersPanelOpen)}
            >
                Characters
            </Button>
            {#if isCharactersPanelOpen}
                <Panel>
                    <Stack>
                        <h3>Characters</h3>
                        <OutlinedButton>+ New Character</OutlinedButton>
                    </Stack>
                </Panel>
            {/if}
        {/if}
        <Button on:click={() => (isSrdOpen = true)}>
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
                if (currentUser) signOut();
                else signInWithGoogle();
            }}
        >
            {#if currentUser}
                Sign Out
            {:else}
                Sign In with Google
            {/if}
        </Button>
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
            <AlignRight>
                <OutlinedButton on:click={() => (isSrdOpen = true)}>
                    Read More About the World
                </OutlinedButton>
            </AlignRight>
        </Stack>
    </Panel>
</Stack>

<Panel style="width: 100%;">
    <AugRegistry />
</Panel>

<dialog open={isSrdOpen}>
    <SrdRenderer
        showCloseButton
        on:close={() => (isSrdOpen = false)}
        style="position: fixed; width: 100%; height: 100%; top: 0; left: 0;"
    />
</dialog>
