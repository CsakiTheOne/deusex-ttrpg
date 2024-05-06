<script>
    import { onMount } from "svelte";
    import background from "$lib/media/backgrounds/titan-shield-wallpaper.jpg";
    import Stack from "$lib/components/Stack.svelte";

    onMount(() => {
        document.body.style.backgroundImage = `url(${background})`;
    });
</script>

<Stack style="width: 100%;">
    <slot />
</Stack>
