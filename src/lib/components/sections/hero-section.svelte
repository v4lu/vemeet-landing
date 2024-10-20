<script>
	import { Button } from '../ui';
	import * as m from '$lib/paraglide/messages';
	import { hero_features } from '$lib/config';
	import { Icons } from '../icons';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section
	class="pt-32 md:pt-0 pb-8 md:pb-0 relative min-h-[100dvh] bg-background flex items-center justify-center overflow-hidden"
>
	<!-- Animated Background Pattern -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 pattern-bg opacity-[0.04]"></div>
	</div>

	<!-- Gradient Overlays -->
	<div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-background"></div>

	<div class="container relative">
		<div class="max-w-4xl mx-auto text-center space-y-6 md:space-y-12 px-4">
			{#if mounted}
				<div in:fly={{ y: -20, duration: 1000, delay: 200 }} class="inline-block">
					<div
						class="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium border border-primary/20 flex items-center gap-2"
					>
						<span class="size-2 bg-primary rounded-full animate-pulse"></span>
						{m.join_waitlist({})}
					</div>
				</div>

				<div class="space-y-8">
					<h1
						in:fly={{ y: 20, duration: 1000, delay: 400 }}
						class="text-4xl text-pretty md:text-6xl font-bold text-primary"
					>
						{m.hero_title({})}
					</h1>

					<p
						in:fly={{ y: 20, duration: 1000, delay: 600 }}
						class="text-base md:text-2xl text-muted-foreground"
					>
						{m.hero_description({})}
					</p>

					<div
						in:fly={{ y: 20, duration: 1000, delay: 800 }}
						class="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Button size="lg" class="group relative overflow-hidden">
							<span class="relative z-10">
								{m.join_waitlist2({})}
							</span>
							<div
								class="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
							></div>
						</Button>
						<Button variant="outline" size="lg" class="group">
							<span>{m.learn_more({})}</span>
							<Icons.RightArrow
								class="size-4 ml-2 transform group-hover:translate-x-1 transition-transform"
							/>
						</Button>
					</div>
				</div>

				<div
					in:fly={{ y: 20, duration: 1000, delay: 1000 }}
					class="grid grid-cols-3 gap-8 pt-8 border-t border-border"
				>
					{#each hero_features as feature, i}
						<div
							in:fly={{ y: 20, duration: 1000, delay: 1200 + i * 200 }}
							class="group p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300"
						>
							<div class="flex flex-col items-center gap-3 text-center">
								<div
									class="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
								>
									<svelte:component this={feature.Icon} class="size-5" />
								</div>
								<div class="font-medium text-foreground">{feature.getMessage()}</div>
							</div>
						</div>
					{/each}
				</div>

				<div
					in:fly={{ y: 20, duration: 1000, delay: 1800 }}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 text-sm text-muted-foreground"
				>
					<Icons.Leaf class="size-4" />
					{m.grow({})}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.pattern-bg {
		background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
