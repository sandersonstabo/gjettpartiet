<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import type { ButtonProps } from "$lib/components/ui/button/button.svelte";
    import { Parties, type PartyTag } from "$lib/data/parties";
    import { cn } from "$lib/utils";

    const {
        party,
        faded = false,
        class: className,
        ...props
    }: { party: PartyTag; faded?: boolean } & ButtonProps = $props();

    const data = $derived(Parties[party]);
</script>

<Button
    class={cn(
        "inset-shadow border-none bg-(--party-background) text-(--party-text) transition-opacity hover:bg-(--party-background)",
        faded && "opacity-35 grayscale",
        className,
    )}
    style={`--party-background: ${data.colors.background}; --party-text: ${data.colors.text};`}
    {...props}
>
    <img src={data.image} alt={data.name} class="w-4" />
    {data.name}
</Button>
