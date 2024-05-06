<script>
    import OutlinedButton from "./OutlinedButton.svelte";
    import Panel from "./Panel.svelte";
    import Stack from "./Stack.svelte";

    export let src = "";

    /** @type {HTMLAudioElement} */
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

<audio {src} bind:this={audioRef} bind:volume></audio>

<Panel>
    <Stack direction="row" alignCross="center">
        <span>Music</span>
        <OutlinedButton on:click={playPause}>
            {#if audioRef && audioRef.paused}
                Play
            {:else}
                Stop
            {/if}
        </OutlinedButton>
        <input type="range" bind:value={volume} min="0" max="1" step=".05" />
    </Stack>
</Panel>

<style>
    input[type="range"] {
        appearance: none;
        background-color: transparent;
        border-bottom: dotted 2px var(--color-outline);
        height: 0px;
    }

    input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        width: 10px;
        height: 10px;
        background: white;
        transform: rotateZ(45deg);
    }

    input[type="range"]::-moz-range-thumb {
        appearance: none;
        width: 10px;
        height: 10px;
        background: white;
        transform: rotateZ(45deg);
    }
</style>
