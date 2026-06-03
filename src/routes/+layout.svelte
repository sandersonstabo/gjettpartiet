<script lang="ts">
	import "$lib/styles/global.css";
	import * as Tooltip from "$lib/components/ui/tooltip";

	import favicon from "$lib/assets/favicon.svg";
	import { ModeWatcher } from "mode-watcher";
	import SquareChartLine from "$lib/assets/icons/square-chart-line.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import ThemeToggle from "./components/theme-toggle.svelte";
	import Norway from "$lib/assets/icons/norway.svelte";
	import {
		SvglGitHubLogo,
		SvglXformerlyTwitterLogo,
	} from "@selemondev/svgl-svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Tooltip.Provider>
	<!-- utilities -->
	<ModeWatcher />

	<!-- structure -->
	<div
		class="mx-auto grid min-h-screen max-w-4xl grid-rows-[auto_1fr] gap-8 p-4 sm:p-8 md:p-16"
	>
		<header class="flex flex-wrap items-center justify-between gap-3">
			<a
				href="/"
				class="flex items-center gap-2 text-lg font-semibold sm:text-xl"
			>
				Guess the Party
				<Norway class="size-5 sm:size-6" />
			</a>

			<div class="flex items-center gap-2">
				<ThemeToggle />
				<Button
					href="/statistikk"
					variant="secondary"
					class="inset-shadow"
				>
					<SquareChartLine class="size-4" />
					Statistikk
				</Button>
			</div>
		</header>

		<main class="flex w-full flex-col items-stretch justify-center">
			{@render children?.()}
		</main>
	</div>

	<footer class="mx-auto border-t bg-card w-full px-4 py-6 sm:px-8 md:px-16">
		<div
			class="flex flex-row flex-wrap justify-between items-end gap-6 max-w-4xl mx-auto"
		>
			<div class="flex flex-col gap-4">
				<span class="text-4xl font-heading text-muted-foreground"
					>ss</span
				>

				<div
					class="flex flex-row items-center gap-2 text-muted-foreground"
				>
					<a href="https://github.com/sandersonstabo" target="_blank">
						<SvglGitHubLogo
							class="size-4 **:fill-current **:stroke-current text-muted-foreground hover:text-foreground"
						/>
					</a>
				</div>
			</div>
			<div class="flex flex-col -space-y-1">
				<span class="text-muted-foreground text-xs">
					Med hjelp fra</span
				>
				<a
					href="https://data.stortinget.no/"
					class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					target="_blank"
				>
					Stortinget Open Data
				</a>
			</div>
		</div>
	</footer>
</Tooltip.Provider>
