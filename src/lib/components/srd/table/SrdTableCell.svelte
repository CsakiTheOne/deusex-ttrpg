<script>
    export let header;
    export let align;
</script>

{#if header}
    <th align="center">
        <slot></slot>
    </th>
{:else}
    <td {align}>
        <slot></slot>
    </td>
{/if}

<style>
    th, td {
        padding: 8px;
    }

    th {
        border-bottom: 2px solid var(--color-on-panel-background-light);
    }
</style>