<script>
    import { mode, toggleMode } from "mode-watcher";
    import Button from "$lib/components/ui/button/button.svelte";
    import Moon from "$lib/assets/icons/cloud-moon.svelte";
    import Sun from "$lib/assets/icons/cloud-sun.svelte";
</script>

<Button
    size="icon"
    variant="secondary"
    class="inset-shadow"
    onclick={toggleMode}
>
    {#if mode.current === "dark"}
        <Moon class="size-4" />
    {:else}
        <Sun class="size-4" />
    {/if}
</Button>
