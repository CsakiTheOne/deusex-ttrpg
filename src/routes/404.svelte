<script>
    import { onMount } from "svelte";

    onMount(() => {
        if (location.href.includes(".html")) return;
        location.href += "index.html";
    });
</script>