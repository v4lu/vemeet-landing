<script lang="ts">
	import { community_lower_features } from '$lib/config';
	import * as m from '$lib/paraglide/messages';
	import gsap from 'gsap';

	let sectionVisible = $state(false);
	let sectionElement: HTMLElement;

	const initializeAnimations = () => {
		gsap.set('.features-header', { y: 50, opacity: 0 });
		gsap.set('.feature-card', { y: 50, opacity: 0 });

		const tl = gsap.timeline();

		tl.to('.features-header', {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out'
		});

		tl.to(
			'.feature-card',
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power2.out'
			},
			'-=0.5'
		);
	};

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !sectionVisible) {
						sectionVisible = true;
						setTimeout(initializeAnimations, 100);
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
			<div class="features-header max-w-4xl mx-auto text-center space-y-6 mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-primary">
					{m.features_title()}
				</h2>
				<p class="text-lg text-muted-foreground">
					{m.features_description()}
				</p>
			</div>
			<div class="grid md:grid-cols-3 gap-8">
				{#each community_lower_features as { Icon, titleKey, descriptionKey }}
					<div
						class="feature-card bg-primary/5 p-6 rounded-xl space-y-4 transform hover:scale-105 hover:bg-primary/10"
						style="transition: transform 0.3s ease"
					>
						<div class="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
							<Icon class="size-6 text-primary" />
						</div>
						<h3 class="text-xl font-semibold text-foreground">{m[titleKey]()}</h3>
						<p class="text-muted-foreground">
							{m[descriptionKey]()}
						</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
