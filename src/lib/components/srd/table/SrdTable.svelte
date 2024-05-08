<script>
    import Panel from "$lib/components/Panel.svelte";
</script>

<Panel light>
    <table>
        <slot />
    </table>
</Panel>

<style>
    table {
        border-collapse: collapse;
    }
</style>