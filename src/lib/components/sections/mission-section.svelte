<script lang="ts">
	import { cn } from '$lib';
	import { contributionAreas, repositories } from '$lib/config';
	import { Button } from '../ui';
	import * as m from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';
	import gsap from 'gsap';

	let sectionVisible = $state(false);
	let sectionElement: HTMLElement;

	const initializeAnimations = () => {
		// Set initial states
		gsap.set('.section-header', { y: 50, opacity: 0 });
		gsap.set('.repositories-title', { y: 30, opacity: 0 });
		gsap.set('.repository-card', { y: 50, opacity: 0 });
		gsap.set('.contribution-title', { y: 30, opacity: 0 });
		gsap.set('.contribution-card', { y: 40, opacity: 0 });
		gsap.set('.contact-section', { y: 30, opacity: 0, scale: 0.95 });

		// Create main timeline
		const tl = gsap.timeline();

		// Header animation
		tl.to('.section-header', {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out'
		});

		// Repositories section
		tl.to('.repositories-title', {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power2.out'
		});

		// Repository cards with stagger
		tl.to(
			'.repository-card',
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: {
					each: 0.2,
					ease: 'power2.out'
				}
			},
			'-=0.4'
		);

		// Contribution areas section
		tl.to(
			'.contribution-title',
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.out'
			},
			'-=0.2'
		);

		// Contribution cards with stagger
		tl.to(
			'.contribution-card',
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: {
					each: 0.2,
					ease: 'power2.out'
				}
			},
			'-=0.4'
		);

		// Contact section with scale
		tl.to(
			'.contact-section',
			{
				y: 0,
				opacity: 1,
				scale: 1,
				duration: 1,
				ease: 'power3.out'
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
						setTimeout(initializeAnimations, 100);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '0px',
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

<section class="py-24 bg-primary/5" bind:this={sectionElement}>
	<div class="container px-4">
		{#if sectionVisible}
			<div class="section-header mx-auto text-center space-y-6 mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-primary">{m.join_mission_title()}</h2>
				<p class="text-lg text-muted-foreground">
					{m.join_mission_description()}
				</p>
			</div>

			<div class="mx-auto mb-20">
				<h3 class="repositories-title text-2xl font-semibold mb-8 text-foreground">
					{m.repositories_title()}
				</h3>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each repositories as repo}
						<a
							href={`https://github.com/v4lu/${repo.name}`}
							target="_blank"
							rel="noopener noreferrer"
							class="repository-card block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
						>
							<div class="flex items-center justify-between mb-4">
								<h4 class="text-lg font-semibold text-foreground">{repo.name}</h4>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-5 text-muted-foreground"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</div>
							<p class="text-muted-foreground text-sm mb-4">{repo.description}</p>
							<div class="flex items-center gap-4 text-sm">
								<span class="flex items-center gap-1 text-muted-foreground">
									<span class={cn('size-3 rounded-full', repo.color)}></span>
									{repo.language}
								</span>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<div class="mx-auto mb-20">
				<h3 class="contribution-title text-2xl font-semibold mb-8 text-foreground">
					{m.contribute_section_title()}
				</h3>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{#each contributionAreas as { descriptionKey, Icon, titleKey }}
						<div class="contribution-card p-6 bg-muted/30 rounded-xl space-y-4">
							<div
								class="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary"
							>
								<Icon class="size-6" />
							</div>
							<h4 class="text-lg font-semibold text-foreground">{m[titleKey]()}</h4>
							<p class="text-sm text-muted-foreground">{m[descriptionKey]()}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="max-w-2xl mx-auto text-center">
				<div class="contact-section bg-muted/30 rounded-xl p-8 space-y-6">
					<h3 class="text-2xl font-semibold text-foreground">{m.get_in_touch_title()}</h3>
					<p class="text-muted-foreground">
						{m.get_in_touch_description()}
					</p>
					<div class="flex flex-wrap justify-center gap-4">
						<Button variant="outline">
							<Icon icon="line-md:email" class="size-5 mr-2" />
							Email
						</Button>
						<Button variant="outline">
							<Icon icon="ic:baseline-discord" class="size-5 mr-2" />
							Discord
						</Button>
						<Button variant="outline">
							<Icon icon="ic:baseline-telegram" class="size-5 mr-2" />
							Telegram
						</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
