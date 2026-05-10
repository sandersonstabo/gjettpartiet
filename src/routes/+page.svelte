<script lang="ts" effect>
    import PartyButton from "./components/party-button.svelte";
    import { Parties, party_tags, type PartyTag } from "$lib/data/parties";
    import { guess_politician, random_politician } from "./page.remote";
    import { Effect, Fiber } from "effect";
    import Button from "$lib/components/ui/button/button.svelte";
    import { Tween } from "svelte/motion";
    import CloseX from "$lib/assets/icons/delete-x.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip";
    import CircleQuestion from "$lib/assets/icons/circle-question.svelte";

    let politician = yield * random_politician();
    const guess_duration = 3000;
    const timer_warning_at = 1000;

    let guessed = $state(false);
    let timer = $state<Fiber.Fiber<void, unknown>>();
    let time_remaining = $state(0);
    let streak = $state(0);
    let visible_streak = $state(0);
    let streak_breaking = $state(false);
    let streak_animation_key = $state(0);
    let guessed_party = $state<PartyTag>();

    const time_progress = new Tween(0, {
        duration: 0,
    });

    const stop_timer = () => {
        if (timer) {
            Effect.runFork(Fiber.interrupt(timer));
            timer = undefined;
        }
    };

    const start_timer = () => {
        stop_timer();

        timer = Effect.runFork(
            Effect.sync(() => {
                time_remaining = guess_duration;
                time_progress.set(100, { duration: 0 });
                time_progress.set(0, { duration: guess_duration });
            }).pipe(
                Effect.andThen(Effect.sleep(guess_duration - timer_warning_at)),
                Effect.tap(() =>
                    Effect.sync(() => {
                        time_remaining = timer_warning_at;
                    }),
                ),
                Effect.andThen(Effect.sleep(timer_warning_at)),
                Effect.tap(() =>
                    Effect.sync(() => {
                        time_remaining = 0;
                        timer = undefined;
                    }),
                ),
                Effect.andThen(reset()),
            ),
        );
    };

    const guess = (party: PartyTag) =>
        Effect.gen(function* () {
            if (guessed) return;

            const result = yield* guess_politician({
                politician: politician.id,
                party: party,
            });

            guessed_party = party;

            if (result.correct) {
                streak += 1;
                visible_streak = streak;
                streak_breaking = false;
                streak_animation_key += 1;
            } else {
                if (streak > 0) {
                    visible_streak = streak;
                    streak_breaking = true;
                    streak_animation_key += 1;

                    Effect.runFork(
                        Effect.sleep(360).pipe(
                            Effect.andThen(
                                Effect.sync(() => {
                                    streak_breaking = false;
                                    streak_animation_key += 1;
                                }),
                            ),
                        ),
                    );
                }

                streak = 0;
            }

            guessed = true;
            start_timer();
        });

    const handle_guess = (party: PartyTag) => {
        Effect.runFork(guess(party));
    };

    const politician_name = () =>
        [politician.title, politician.first_name, politician.last_name]
            .filter(Boolean)
            .join(" ");

    const politician_context = () =>
        [
            `for ${politician.area.name}`,
            politician.committees[0] && `hos ${politician.committees[0].name}`,
        ]
            .filter(Boolean)
            .join(" ");

    const reset = () =>
        Effect.gen(function* () {
            stop_timer();
            time_remaining = 0;
            time_progress.set(0, { duration: 0 });
            guessed = false;
            guessed_party = undefined;
            politician = yield* random_politician();
        });
</script>

{#if politician}
    {@const data = Parties[politician.party]}

    <div class="flex flex-col gap-6 w-full sm:gap-8">
        <div class="flex flex-row justify-between items-center gap-3">
            <div class="flex flex-col -space-y-1 min-w-0">
                <span class="text-sm font-medium"
                    >Kjenner du virkelig til stortinget?</span
                >
                <span class="text-sm text-muted-foreground"
                    >De styrer livet ditt, men hvem er de egentlig?</span
                >
            </div>
            <!-- streak -->
            {#key streak_animation_key}
                <div
                    class={[
                        "flex shrink-0 flex-row items-center gap-2 rounded-3xl p-3 sm:p-4 bg-linear-to-t inset-shadow transition-colors duration-200",
                        streak_breaking
                            ? "streak-die from-red-800 to-red-500 text-red-100"
                            : streak > 0
                              ? "streak-shake from-orange-500 to-orange-600 text-orange-100"
                              : "invisible from-orange-500 to-orange-600 text-orange-100",
                    ]}
                >
                    <span class="text-sm font-medium"
                        >🔥 <span>{visible_streak}</span> på rad!</span
                    >
                </div>
            {/key}
        </div>
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-stretch">
            <div
                class="relative rounded-xl overflow-hidden w-full sm:w-auto sm:flex-shrink-0"
            >
                <!-- blur -->
                <div
                    class="absolute bottom-0 h-[50%] w-full backdrop-blur-lg"
                ></div>
                <img
                    src={politician.image}
                    alt={`${politician.first_name} ${politician.last_name}`}
                    class="aspect-square w-full sm:h-full sm:w-auto object-cover"
                />
                <!-- info quip -->
                <div class="absolute bottom-2 right-4 z-50">
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <CircleQuestion class="size-6" />
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                            Bilde er halvveeis sensurert fordi de fleste
                            politikerene har en nål med partiet sitt på hjertet.
                        </Tooltip.Content>
                    </Tooltip.Root>
                </div>
                <!-- timer -->
                <div
                    style={`width: ${time_progress.current}%`}
                    class={[
                        "absolute bottom-0 left-0 h-1 transition-colors",
                        guessed && time_remaining <= 1000
                            ? "bg-red-500"
                            : "bg-border",
                    ]}
                ></div>
            </div>
            <section
                class="flex w-full sm:w-max sm:max-w-64 flex-col gap-4 justify-between"
            >
                <span
                    class="text-wrap text-center text-sm text-muted-foreground"
                >
                    Alle partiene som har minst en representant i Stortinget i
                    perioden 2025-2029
                </span>
                <ul class="flex flex-col gap-2">
                    {#each party_tags as party}
                        <PartyButton
                            {party}
                            faded={guessed && party !== politician.party}
                            aria-disabled={guessed}
                            data-guessed={guessed_party === party}
                            onclick={() => handle_guess(party)}
                        />
                    {/each}
                </ul>
            </section>
        </div>

        <div
            class={[
                "p-4 rounded-3xl flex flex-row justify-between items-center gap-3 inset-shadow transition-opacity bg-(--party-background) text-(--party-text)",
                !guessed && "invisible opacity-0",
            ]}
            style={`--party-background: ${data.colors.background}; --party-text: ${data.colors.text};`}
            aria-hidden={!guessed}
        >
            <section
                class="flex flex-row gap-2 items-center min-w-0 flex-1"
            >
                <img
                    src={data.image}
                    alt={data.name}
                    class="w-6 shrink-0"
                />
                <div class="flex flex-col -space-y-1 min-w-0">
                    <span class="text-base sm:text-xl font-semibold truncate"
                        >{politician_name()}</span
                    >
                    <span class="text-xs sm:text-sm opacity-50 truncate"
                        >{politician_context()}</span
                    >
                </div>
            </section>
            <Button
                size="icon"
                variant="ghost"
                class="shrink-0 text-(--party-text) hover:bg-(--party-text)/25 hover:text-(--party-text)!"
                onclick={() => Effect.runFork(reset())}
            >
                <CloseX />
            </Button>
        </div>
    </div>
{/if}

<style>
    .streak-shake {
        animation: streak-shake 320ms ease-out;
    }

    .streak-die {
        animation: streak-die 360ms ease-in forwards;
        transform-origin: bottom center;
    }

    @keyframes streak-shake {
        0%,
        100% {
            transform: translateX(0) rotate(0deg) scale(1);
        }

        20% {
            transform: translateX(-3px) rotate(-2deg) scale(1.04);
        }

        45% {
            transform: translateX(3px) rotate(2deg) scale(1.04);
        }

        70% {
            transform: translateX(-2px) rotate(-1deg) scale(1.02);
        }
    }

    @keyframes streak-die {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
        }

        35% {
            opacity: 0.9;
            transform: translateY(4px) rotate(3deg) scale(0.98);
        }

        100% {
            opacity: 0;
            transform: translateY(18px) rotate(6deg) scale(0.96);
        }
    }
</style>
