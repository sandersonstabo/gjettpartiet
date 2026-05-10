<script lang="ts">
	import {
		type Row,
		getCoreRowModel,
		getFilteredRowModel,
		getPaginationRowModel,
		getSortedRowModel,
		type ColumnDef,
		type PaginationState,
		type SortingState,
		type Updater,
	} from "@tanstack/table-core";
	import { Effect, HashMap, Option } from "effect";
	import { Button } from "$lib/components/ui/button";
	import { createSvelteTable } from "$lib/components/ui/data-table";
	import * as InputGroup from "$lib/components/ui/input-group";
	import Progress from "$lib/components/ui/progress/progress.svelte";
	import * as Select from "$lib/components/ui/select";
	import * as Table from "$lib/components/ui/table";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import Magnifier from "$lib/assets/icons/magnifier.svelte";
	import { Parties, party_tags, type PartyTag } from "$lib/data/parties";
	import { PoliticianIds, Politicians } from "$lib/data/politicians";

	let { data } = $props();

	type PoliticianTableRow = {
		id: string;
		name: string;
		short_name: string;
		party: PartyTag;
		party_name: string;
		party_image: string;
		party_background: string;
		image: string;
		area_name: string;
		committee_name: string;
		total: number;
		accuracy: number;
	};

	const statistics = $derived(data.statistics);
	const format_number = new Intl.NumberFormat("nb-NO");
	const format_percent = new Intl.NumberFormat("nb-NO", {
		style: "percent",
		maximumFractionDigits: 1,
	});

	const format_count = (value: number) =>
		Effect.sync(() => format_number.format(Math.round(value)));

	const format_percentage = (value: number) =>
		Effect.sync(() => format_percent.format(value));

	const count = (value: number) => Effect.runSync(format_count(value));
	const percent = (value: number) => Effect.runSync(format_percentage(value));

	let sorting = $state<SortingState>([{ id: "accuracy", desc: true }]);
	let pagination = $state<PaginationState>({
		pageIndex: 0,
		pageSize: 12,
	});
	let search = $state("");
	let party_filter = $state<PartyTag | "all">("all");

	const politician_columns: ColumnDef<PoliticianTableRow>[] = [
		{ accessorKey: "name", header: "Politiker" },
		{ accessorKey: "party_name", header: "Parti" },
		{ accessorKey: "accuracy", header: "Resultat" },
	];

	const update_sorting = (updater: Updater<SortingState>) =>
		Effect.sync(() => {
			sorting = updater instanceof Function ? updater(sorting) : updater;
		});

	const update_pagination = (updater: Updater<PaginationState>) =>
		Effect.sync(() => {
			pagination = updater instanceof Function ? updater(pagination) : updater;
		});

	const politician_statistics_by_id = $derived(
		new Map(
			statistics.politician_statistics.map((row) => [
				row.politician_id,
				row,
			]),
		),
	);

	const politician_rows = $derived(
		PoliticianIds.flatMap((politician_id) => {
			const politician = Option.getOrUndefined(
				HashMap.get(Politicians, politician_id),
			);

			if (!politician) return [];

			const party = Parties[politician.party];
			const row = politician_statistics_by_id.get(politician.id);
			const total = row?.total ?? 0;
			const accuracy = row?.accuracy ?? 0;
			const short_name = `${politician.first_name} ${politician.last_name}`;
			const title = "title" in politician ? politician.title : undefined;

			return [
				{
					id: politician.id,
					name: title ? `${title} ${short_name}` : short_name,
					short_name,
					party: politician.party,
					party_name: party.name,
					party_image: party.image,
					party_background: party.colors.background,
					image: politician.image,
					area_name: politician.area.name,
					committee_name: politician.committees[0]?.name ?? "",
					total,
					accuracy,
				},
			];
		}),
	);

	const filtered_politician_rows = $derived(
		politician_rows.filter((row) => {
			return party_filter === "all" || row.party === party_filter;
		}),
	);

	const selected_party = $derived(
		party_filter === "all" ? undefined : Parties[party_filter],
	);

	const politician_filter_effect = (
		row: Row<PoliticianTableRow>,
		_column_id: string,
		filter_value: unknown,
	) =>
		Effect.sync(() => {
			const value = String(filter_value).trim().toLowerCase();

			if (!value) return true;

			return [
				row.original.name,
				row.original.short_name,
				row.original.party_name,
				row.original.area_name,
				row.original.committee_name,
			].some((text) => text.toLowerCase().includes(value));
		});

	const politician_filter = (
		row: Row<PoliticianTableRow>,
		column_id: string,
		filter_value: unknown,
	) => Effect.runSync(politician_filter_effect(row, column_id, filter_value));

	const politicians_table = createSvelteTable({
		get data() {
			return filtered_politician_rows;
		},
		columns: politician_columns,
		state: {
			get sorting() {
				return sorting;
			},
			get pagination() {
				return pagination;
			},
			get globalFilter() {
				return search;
			},
		},
		onSortingChange: (updater) => Effect.runSync(update_sorting(updater)),
		onPaginationChange: (updater) =>
			Effect.runSync(update_pagination(updater)),
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		globalFilterFn: politician_filter,
	});
</script>

<div class="min-h-screen w-full mt-16 flex flex-col gap-32">
	<section class="flex flex-col gap-8">
		<div class="flex flex-col">
			<h1 class="text-4xl font-semibold">Statistikk</h1>
			<span class="text-sm text-muted-foreground">
				Vi har samlet over <span class="font-medium"
					>{count(statistics.total_guesses)}</span
				>
				gjetninger. La oss gå over dem.
			</span>
		</div>
	</section>

	<section class="flex flex-col gap-8">
		<div class="flex flex-col">
			<h2 class="text-3xl font-semibold">De ulike partiene</h2>
			<span class="text-sm text-muted-foreground">
				Det finnes <span class="font-medium">{party_tags.length}</span> partier
				i Stortinget for perioden 2025-2029. Her er hvordan de har klart
				seg.
			</span>
		</div>

		<Table.Root class="table-fixed">
			<colgroup>
				<col class="w-56" />
				<col />
				<col class="w-28" />
				<col class="w-36" />
			</colgroup>
			<Table.Header>
				<Table.Row>
					<Table.Head>Parti</Table.Head>
					<Table.Head>Resultat</Table.Head>
					<Table.Head class="text-right">Gjetninger</Table.Head>
					<Table.Head class="text-right">Nøyaktighet %</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each statistics.party_accuracy as row}
					{@const party = Parties[row.party]}
					<Table.Row>
						<Table.Cell class="min-w-0">
							<div class="flex min-w-0 items-center gap-3">
								<span
									class="flex size-7 shrink-0 items-center justify-center rounded-sm inset-shadow bg-(--party-background) p-1.5"
									style={`--party-background: ${party.colors.background};`}
								>
									<img
										src={party.image}
										alt={party.name}
										class="max-h-full max-w-full object-contain"
									/>
								</span>
								<span class="truncate">{party.name}</span>
							</div>
						</Table.Cell>
						<Table.Cell>
							<Progress
								value={row.accuracy * 100}
								class="h-3 w-full [&>div]:bg-(--party-background)"
								style={`--party-background: ${party.colors.background};`}
							/>
						</Table.Cell>
						<Table.Cell
							class="text-right text-muted-foreground tabular-nums"
						>
							{count(row.total)}
						</Table.Cell>
						<Table.Cell
							class="text-right text-muted-foreground tabular-nums"
						>
							{percent(row.accuracy)}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</section>

	<section class="flex flex-col gap-8">
		<div class="flex flex-col">
			<h1 class="text-4xl font-semibold">De ulike politikerne</h1>
			<span class="text-sm text-muted-foreground">
				Det finnes <span class="font-medium"
					>{PoliticianIds.length}</span
				>
				politikere i Stortinget og Regjeringen for perioden 2025-2029. Her
				er hvordan de har klart seg.
			</span>
		</div>

		<div class="flex flex-col gap-3 md:flex-row md:items-center">
			<InputGroup.Root class="w-full md:flex-1">
				<InputGroup.Input
					bind:value={search}
					placeholder="Søk etter en politiker..."
				/>
				<InputGroup.Addon>
					<Magnifier class="size-4" />
				</InputGroup.Addon>
			</InputGroup.Root>

			<Select.Root type="single" bind:value={party_filter}>
				<Select.Trigger
					class="h-10 w-full justify-between bg-input/50 md:w-80"
					aria-label="Filtrer etter parti"
				>
					<span data-slot="select-value" class="min-w-0">
						{#if selected_party}
							<span
								class="flex size-6 shrink-0 items-center justify-center rounded-sm inset-shadow bg-(--party-background) p-1"
								style={`--party-background: ${selected_party.colors.background};`}
							>
								<img
									src={selected_party.image}
									alt={selected_party.name}
									class="max-h-full max-w-full object-contain"
								/>
							</span>
							<span class="truncate">{selected_party.name}</span>
						{:else}
							<span>Alle partier</span>
						{/if}
					</span>
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="all" label="Alle partier">
						<span>Alle partier</span>
					</Select.Item>
					{#each party_tags as party}
						{@const data = Parties[party]}
						<Select.Item value={party} label={data.name}>
							<span
								class="flex size-6 shrink-0 items-center justify-center rounded-sm inset-shadow bg-(--party-background) p-1"
								style={`--party-background: ${data.colors.background};`}
							>
								<img
									src={data.image}
									alt={data.name}
									class="max-h-full max-w-full object-contain"
								/>
							</span>
							<span class="truncate">{data.name}</span>
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<Tooltip.Provider>
			<Table.Root class="table-fixed">
				<colgroup>
					<col class="w-[42%]" />
					<col class="w-[24%]" />
					<col />
				</colgroup>
				<Table.Header>
					{#each politicians_table.getHeaderGroups() as header_group}
						<Table.Row>
							{#each header_group.headers as header}
								<Table.Head
									class={[
										header.column.id === "accuracy"
											? "text-right"
											: "",
									]}
								>
									{#if header.column.getCanSort()}
										<button
											class={[
												"inline-flex items-center gap-1 font-medium text-foreground hover:text-muted-foreground",
												header.column.id === "accuracy"
													? "justify-end"
													: "",
											]}
											onclick={() =>
												header.column.toggleSorting(
													header.column.getIsSorted() ===
														"asc",
												)}
										>
											{header.column.columnDef.header}
											<span
												class="w-3 text-xs text-muted-foreground"
											>
												{header.column.getIsSorted() ===
												"asc"
													? "↑"
													: header.column.getIsSorted() ===
														  "desc"
														? "↓"
														: ""}
											</span>
										</button>
									{:else}
										{header.column.columnDef.header}
									{/if}
								</Table.Head>
							{/each}
						</Table.Row>
					{/each}
				</Table.Header>
				<Table.Body>
					{#each politicians_table.getRowModel().rows as row}
						{@const politician = row.original}
						<Table.Row>
							<Table.Cell class="min-w-0">
								<div class="flex min-w-0 items-center gap-3">
									<img
										src={politician.image}
										alt={politician.short_name}
										class="size-10 shrink-0 inset-shadow rounded-md object-cover"
									/>
									<div class="min-w-0">
										<div class="truncate font-medium">
											{politician.name}
										</div>
										<div
											class="truncate text-sm text-muted-foreground"
										>
											{politician.committee_name ||
												politician.area_name}
										</div>
									</div>
								</div>
							</Table.Cell>
							<Table.Cell class="min-w-0">
								<div class="flex min-w-0 items-center gap-2">
									<span
										class="flex size-7 shrink-0 items-center justify-center rounded-sm inset-shadow bg-(--party-background) p-1.5"
										style={`--party-background: ${politician.party_background};`}
									>
										<img
											src={politician.party_image}
											alt={politician.party_name}
											class="max-h-full max-w-full object-contain"
										/>
									</span>
									<span class="truncate"
										>{politician.party_name}</span
									>
								</div>
							</Table.Cell>
							<Table.Cell>
								<Tooltip.Root>
									<Tooltip.Trigger>
										{#snippet child({ props })}
											<div
												{...props}
												class="w-full cursor-help py-2"
											>
												<Progress
													value={politician.accuracy *
														100}
													class="h-3 w-full [&>div]:bg-(--party-background)"
													style={`--party-background: ${politician.party_background};`}
												/>
											</div>
										{/snippet}
									</Tooltip.Trigger>
									<Tooltip.Content>
										Utover <span class="font-medium"
											>{count(politician.total)}</span
										>
										var
										<span class="font-medium"
											>{percent(
												politician.accuracy,
											)}</span
										>
										av de rette.
									</Tooltip.Content>
								</Tooltip.Root>
							</Table.Cell>
						</Table.Row>
					{:else}
						<Table.Row>
							<Table.Cell
								colspan={3}
								class="h-24 text-center text-muted-foreground"
							>
								Ingen politikere matcher filteret.
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Tooltip.Provider>

		<div
			class="flex items-center justify-between gap-3 text-sm text-muted-foreground"
		>
			<span>
				Viser {politicians_table.getRowModel().rows.length} av {politicians_table.getFilteredRowModel()
					.rows.length}
				politikere
			</span>
			<div class="flex items-center gap-2">
				<Button
					variant="outline"
					size="sm"
					disabled={!politicians_table.getCanPreviousPage()}
					onclick={() => politicians_table.previousPage()}
				>
					Forrige
				</Button>
				<span class="tabular-nums">
					Side {politicians_table.getState().pagination.pageIndex + 1}
					av {Math.max(politicians_table.getPageCount(), 1)}
				</span>
				<Button
					variant="outline"
					size="sm"
					disabled={!politicians_table.getCanNextPage()}
					onclick={() => politicians_table.nextPage()}
				>
					Neste
				</Button>
			</div>
		</div>
	</section>
</div>
