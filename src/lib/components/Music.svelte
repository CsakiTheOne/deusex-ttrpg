<script>
    import Button from "./Button.svelte";
    import OutlinedButton from "./OutlinedButton.svelte";
    import Panel from "./Panel.svelte";
    import Stack from "./Stack.svelte";

    export let src = "";

    let audioRef;
    let volume = 0.3;

    function playPause() {
        if (audioRef.paused) audioRef.play();
        else {
            audioRef.pause();
            audioRef.currentTime = 0;
        }
        audioRef = audioRef;
    }
</script>

<audio {src} bind:this={audioRef} bind:volume={volume}></audio>

<Panel>
    <Stack direction="row" alignCross="center">
        <span>🎶</span>
        <OutlinedButton on:click={playPause}>
            {#if audioRef && audioRef.paused}
            Play
            {:else}
            Stop
            {/if}
        </OutlinedButton>
        <input type="range" bind:value={volume} min="0" max="1" step=".1">
    </Stack>
</Panel>
