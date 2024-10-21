<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Icons } from '../icons';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let sectionVisible = $state(false);
	let sectionElement: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						sectionVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.3
			}
		);

		if (sectionElement) {
			observer.observe(sectionElement);
		}

		return () => {
			if (sectionElement) {
				observer.unobserve(sectionElement);
			}
		};
	});
</script>

<section id="community" class="py-24 bg-primary/5" bind:this={sectionElement}>
	<div class="container px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			{#if sectionVisible}
				<div in:fly={{ x: -50, duration: 1000, delay: 200 }} class="space-y-6">
					<h2 class="text-3xl md:text-4xl font-bold text-primary">
						{m.why_choose_title({})}
					</h2>

					<p class="text-lg text-muted-foreground">
						{m.why_choose_description({})}
					</p>

					<div class="grid sm:grid-cols-2 gap-6">
						<div in:fly={{ x: -30, duration: 1000, delay: 400 }} class="flex items-start gap-4">
							<div class="bg-primary/10 p-3 rounded-lg">
								<Icons.Time class="size-6 text-primary" />
							</div>
							<div>
								<h3 class="font-semibold text-foreground">{m.support_title({})}</h3>
								<p class="text-sm text-muted-foreground">{m.support_description({})}</p>
							</div>
						</div>

						<div in:fly={{ x: -30, duration: 1000, delay: 600 }} class="flex items-start gap-4">
							<div class="bg-primary/10 p-3 rounded-lg">
								<Icons.Community2 class="text-primary size-6" />
							</div>
							<div>
								<h3 class="font-semibold text-foreground">{m.active_community_title({})}</h3>
								<p class="text-sm text-muted-foreground">{m.active_community_description({})}</p>
							</div>
						</div>
					</div>
				</div>

				<div in:fly={{ x: 50, duration: 1000, delay: 400 }} class="relative">
					<div class="aspect-square rounded-2xl overflow-hidden">
						<img
							src="./community.webp"
							alt="Community gathering"
							class="w-full h-full object-cover"
						/>
					</div>
					<div
						in:fly={{ y: 30, duration: 1000, delay: 800 }}
						class="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg"
					>
						<p class="text-2xl font-bold text-primary">{m.stats_members({})}</p>
						<p class="text-sm text-muted-foreground">In Local Communities</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
