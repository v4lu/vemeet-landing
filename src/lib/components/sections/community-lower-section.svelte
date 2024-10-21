<script lang="ts">
	import { community_lower_features } from '$lib/config';
	import * as m from '$lib/paraglide/messages';
	import { fly } from 'svelte/transition';

	let sectionVisible = $state(false);
	let sectionElement: HTMLElement;

	$effect(() => {
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
				rootMargin: '0px',
				threshold: 0
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

<section class="py-24 bg-background relative" bind:this={sectionElement}>
	<div class="container">
		{#if sectionVisible}
			<div in:fly={{ y: 50, duration: 1000 }} class="max-w-4xl mx-auto text-center space-y-6 mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-primary">
					{m.features_title()}
				</h2>
				<p class="text-lg text-muted-foreground">
					{m.features_description()}
				</p>
			</div>

			<div in:fly={{ y: 50, duration: 1000, delay: 400 }} class="grid md:grid-cols-3 gap-8">
				{#each community_lower_features as { Icon, desc, title }}
					<div
						class="bg-primary/5 p-6 rounded-xl space-y-4 transform transition-all duration-300 hover:scale-105 hover:bg-primary/10"
					>
						<div class="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
							<Icon class="size-6 text-primary" />
						</div>
						<h3 class="text-xl font-semibold text-foreground">{title}</h3>
						<p class="text-muted-foreground">
							{desc}
						</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
