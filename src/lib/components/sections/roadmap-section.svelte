<script lang="ts">
	import { Icons } from '../icons';
	import { Button } from '../ui';
	import * as m from '$lib/paraglide/messages';
	import { fly } from 'svelte/transition';

	let sectionVisible = $state(false);
	let sectionElement: HTMLElement;

	const roadmapSteps = [
		{
			date: 'Q4 2024',
			titleKey: 'roadmap_q4_2024_title',
			descriptionKey: 'roadmap_q4_2024_description',
			status: 'in-progress',
			features: [
				'feature_swiper',
				'feature_messages',
				'feature_locations',
				'feature_recipes',
				'feature_posts'
			]
		},
		{
			date: 'Q1 2025',
			titleKey: 'roadmap_q1_2025_title',
			descriptionKey: 'roadmap_q1_2025_description',
			status: 'planned',
			features: ['feature_ios', 'feature_android']
		},
		{
			date: 'Q2 2025',
			titleKey: 'roadmap_q2_2025_title',
			descriptionKey: 'roadmap_q2_2025_description',
			status: 'planeed',
			features: ['feature_video', 'feature_blog', 'feature_library']
		},
		{
			date: 'Q4 2025',
			titleKey: 'roadmap_q4_2025_title',
			descriptionKey: 'roadmap_q4_2025_description',
			status: 'planned',
			features: ['feature_calls', 'feature_groups', 'feature_planning']
		}
	];

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
				rootMargin: '50px',
				threshold: 0.1
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

<section class="py-24" bind:this={sectionElement}>
	<div class="container px-4">
		{#if sectionVisible}
			<div
				in:fly={{ y: 50, duration: 1000 }}
				class="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-in fade-in duration-700"
			>
				<h2 class="text-3xl md:text-4xl font-bold text-primary">{m.roadmap_title()}</h2>
				<p class="text-lg text-muted-foreground">
					{m.roadmap_description()}
				</p>
			</div>

			<div class="relative max-w-5xl mx-auto">
				<div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

				{#each roadmapSteps as step, index}
					<div
						class="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0 animate-in fade-in duration-700"
						style="animation-delay: {index * 150}ms"
					>
						<div class={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
							<div class="flex items-center justify-center md:justify-end gap-4">
								<span class="text-xl font-semibold text-primary">{step.date}</span>
								<div class="relative">
									<div
										class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary"
									></div>
									{#if step.status === 'completed'}
										<div
											class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
										></div>
									{/if}
								</div>
							</div>
						</div>

						<div class={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
							<div class="bg-background p-6 rounded-xl shadow-sm space-y-4">
								<div class="flex items-center gap-3">
									<h3 class="text-xl font-semibold text-foreground">{m[step.titleKey]()}</h3>
									{#if step.status === 'completed'}
										<span class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
											{m.status_completed()}
										</span>
									{:else if step.status === 'in-progress'}
										<span class="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500">
											{m.status_in_progress()}
										</span>
									{:else}
										<span class="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
											{m.status_planned()}
										</span>
									{/if}
								</div>
								<p class="text-muted-foreground">{m[step.descriptionKey]()}</p>
								<ul class="grid grid-cols-2 gap-2">
									{#each step.features as featureKey}
										<li class="flex items-center gap-2 text-sm text-muted-foreground">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="size-4 text-primary"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											{m[featureKey]()}
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mt-16 animate-in fade-in duration-700 delay-500">
				<p class="text-muted-foreground mb-4">{m.roadmap_cta_text()}</p>
				<Button size="lg">
					{m.roadmap_cta_button()}
					<Icons.RightArrow class="size-6 ml-2" />
				</Button>
			</div>
		{/if}
	</div>
</section>
