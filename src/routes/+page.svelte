<script lang="ts">
	import { HeroSection, MissionSection } from '$lib/components/sections';
	import CommunityUpperSection from '$lib/components/sections/community-upper-section.svelte';
	import { Button } from '$lib/components/ui';

	const roadmapSteps = [
		{
			date: 'Q1 2024',
			title: 'Community Launch',
			description: 'Initial platform release with core social features and recipe sharing.',
			status: 'completed',
			features: ['User profiles', 'Basic recipe sharing', 'Community feed']
		},
		{
			date: 'Q2 2024',
			title: 'Enhanced Interaction',
			description: 'New features to improve user engagement and community interaction.',
			status: 'in-progress',
			features: ['Live chat', 'Group creation', 'Event planning']
		},
		{
			date: 'Q3 2024',
			title: 'Content Creation',
			description: 'Tools for creating and sharing high-quality plant-based content.',
			status: 'upcoming',
			features: ['Recipe video upload', 'Blog platform', 'Resource library']
		},
		{
			date: 'Q4 2024',
			title: 'Mobile Experience',
			description: 'Native mobile apps and advanced features for on-the-go access.',
			status: 'planned',
			features: ['iOS app', 'Android app', 'Offline access']
		}
	];
</script>

<HeroSection />
<CommunityUpperSection />

<section class="py-24 bg-background container">
	<div class="container px-4">
		<div class="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-in fade-in duration-700">
			<h2 class="text-3xl md:text-4xl font-bold text-primary">What Our Community Offers</h2>
			<p class="text-lg text-muted-foreground">
				Discover all the ways our platform helps you grow and connect in your plant-based journey
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 animate-in fade-in duration-700 delay-150">
			<div class="bg-muted/30 p-6 rounded-xl space-y-4">
				<div class="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-6 text-primary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-foreground">Recipe Sharing</h3>
				<p class="text-muted-foreground">
					Share and discover delicious plant-based recipes from our community of home chefs and food
					enthusiasts.
				</p>
			</div>

			<div class="bg-muted/30 p-6 rounded-xl space-y-4">
				<div class="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-6 text-primary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-foreground">Live Events</h3>
				<p class="text-muted-foreground">
					Join virtual cooking classes, workshops, and meetups with fellow plant-based enthusiasts.
				</p>
			</div>

			<div class="bg-muted/30 p-6 rounded-xl space-y-4">
				<div class="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-6 text-primary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-foreground">Resource Library</h3>
				<p class="text-muted-foreground">
					Access our curated collection of guides, articles, and educational content about
					plant-based living.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-24 bg-muted/30">
	<div class="container px-4">
		<!-- Header -->
		<div class="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-in fade-in duration-700">
			<h2 class="text-3xl md:text-4xl font-bold text-primary">Our Journey Forward</h2>
			<p class="text-lg text-muted-foreground">
				Follow our roadmap as we build the future of plant-based social networking
			</p>
		</div>

		<!-- Timeline -->
		<div class="relative max-w-5xl mx-auto">
			<!-- Center Line -->
			<div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

			<!-- Timeline Items -->
			{#each roadmapSteps as step, index}
				<div
					class="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0 animate-in fade-in duration-700"
					style="animation-delay: {index * 150}ms"
				>
					<!-- Date and Line -->
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

					<!-- Content -->
					<div class={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
						<div class="bg-background p-6 rounded-xl shadow-sm space-y-4">
							<div class="flex items-center gap-3">
								<h3 class="text-xl font-semibold text-foreground">{step.title}</h3>
								{#if step.status === 'completed'}
									<span class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
										>Completed</span
									>
								{:else if step.status === 'in-progress'}
									<span class="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
										>In Progress</span
									>
								{:else}
									<span class="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
										>Planned</span
									>
								{/if}
							</div>
							<p class="text-muted-foreground">{step.description}</p>
							<ul class="grid grid-cols-2 gap-2">
								{#each step.features as feature}
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
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Call to Action -->
		<div class="text-center mt-16 animate-in fade-in duration-700 delay-500">
			<p class="text-muted-foreground mb-4">Want to be part of our journey?</p>
			<Button size="lg">
				Join Our Community
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-4 ml-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</Button>
		</div>
	</div>
</section>

<MissionSection />

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-20px) scale(1.05);
		}
	}

	@keyframes float-delayed {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(20px) scale(1.05);
		}
	}

	.animate-float {
		animation: float 20s ease-in-out infinite;
	}

	.animate-float-delayed {
		animation: float-delayed 25s ease-in-out infinite;
	}

	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: animate-in 0.6s ease-out forwards;
	}
</style>
