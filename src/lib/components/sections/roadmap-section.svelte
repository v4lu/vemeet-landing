<script lang="ts">
	import { roadmapSteps } from '$lib/config';
	import * as m from '$lib/paraglide/messages';
	import gsap from 'gsap';
	import { Icons } from '../icons';
	import { Button } from '../ui';
	import { cn } from '$lib';

	let sectionVisible = $state(false);
	let sectionElement: HTMLElement;

	const initializeAnimations = () => {
		gsap.set('.roadmap-header', { y: 50, opacity: 0 });
		gsap.set('.timeline-line', { scaleY: 0, transformOrigin: 'top center' });
		gsap.set('.roadmap-item', { opacity: 0 });
		gsap.set('.feature-item', { y: 20, opacity: 0 });
		gsap.set('.roadmap-cta', { y: 30, opacity: 0 });

		const tl = gsap.timeline();

		tl.to('.roadmap-header', {
			y: 0,
			opacity: 1,
			duration: 0.4,
			ease: 'power2.out'
		});

		tl.to(
			'.timeline-line',
			{
				scaleY: 1,
				duration: 0.7,
				ease: 'none'
			},
			'-=0.3'
		);
		const roadmapItems = document.querySelectorAll('.roadmap-item');
		roadmapItems.forEach((item, index) => {
			const isLeft = index % 2 === 0;
			gsap.set(item, { x: isLeft ? -100 : 100 });

			tl.to(
				item,
				{
					x: 0,
					opacity: 1,
					duration: 0.6,
					ease: 'power2.out'
				},
				`-=${0.5}`
			);

			const features = item.querySelectorAll('.feature-item');
			features.forEach((feature) => {
				tl.to(
					feature,
					{
						y: 0,
						opacity: 1,
						duration: 0.3,
						ease: 'power1.out'
					},
					`-=${0.2}`
				);
			});
		});

		tl.to(
			'.roadmap-cta',
			{
				y: 0,
				opacity: 1,
				duration: 0.4,
				ease: 'power2.out'
			},
			'-=0.3'
		);
	};

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !sectionVisible) {
						sectionVisible = true;
						setTimeout(initializeAnimations, 50);
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
			<div class="roadmap-header max-w-4xl mx-auto text-center space-y-6 mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-primary">{m.roadmap_title()}</h2>
				<p class="text-lg text-muted-foreground">
					{m.roadmap_description()}
				</p>
			</div>

			<div class="relative max-w-5xl mx-auto">
				<div
					class="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"
				></div>

				{#each roadmapSteps as step, index}
					<div class="roadmap-item relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0">
						<div class={cn(index % 2 === 0 ? 'md:order-1' : 'md:order-2')}>
							<div
								class={cn(
									'flex items-center justify-center gap-4',

									index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
								)}
							>
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
							<div class="p-6 space-y-4">
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
										<li class="feature-item flex items-center gap-2 text-sm text-muted-foreground">
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

			<div class="roadmap-cta text-center mt-16">
				<p class="text-muted-foreground mb-4">{m.roadmap_cta_text()}</p>
				<Button size="lg">
					{m.roadmap_cta_button()}
					<Icons.RightArrow class="size-6 ml-2" />
				</Button>
			</div>
		{/if}
	</div>
</section>
