<script>
	import { cn } from '$lib';
	import { Button } from '../ui';

	const repositories = [
		{
			name: 'vemeet-web',
			description: 'Main web application',
			language: 'TypeScript Svelte',
			color: 'bg-orange-600'
		},
		{
			name: 'vemeet-api',
			description: 'Backend API and services',
			language: 'Kotlin Springboot',
			color: 'bg-purple-600'
		},
		{
			name: 'vemeet-mobile',
			description: 'TBA',
			language: 'TBA',
			color: 'bg-red-500'
		},
		{
			name: 'vemeet-api',
			description: 'Backend API rewritted in Rust',
			language: 'Rust',
			color: 'bg-[#dea584]'
		}
	];

	const contributionAreas = [
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>`,
			title: 'Code',
			description: 'Contribute to our codebase through bug fixes and new features'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>`,
			title: 'Design',
			description: 'Help improve our UI/UX and create visual assets'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>`,
			title: 'Translation',
			description: 'Help translate the app into different languages'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>`,
			title: 'Documentation',
			description: 'Improve our docs and help others learn'
		}
	];
</script>

<section class="py-24 bg-background">
	<div class="container px-4">
		<!-- Header -->
		<div class="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-in fade-in duration-700">
			<h2 class="text-3xl md:text-4xl font-bold text-primary">Join Our Mission</h2>
			<p class="text-lg text-muted-foreground">
				We're building this platform together. Every contribution makes a difference, no matter how
				small.
			</p>
		</div>

		<!-- GitHub Repositories -->
		<div class="max-w-5xl mx-auto mb-20">
			<h3
				class="text-2xl font-semibold mb-8 text-foreground animate-in fade-in duration-700 delay-100"
			>
				Our Repositories
			</h3>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each repositories as repo, index}
					<a
						href={`https://github.com/vemeet/${repo.name}`}
						target="_blank"
						rel="noopener noreferrer"
						class="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors animate-in fade-in duration-700"
						style="animation-delay: {(index + 1) * 150}ms"
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

		<!-- Ways to Contribute -->
		<div class="max-w-5xl mx-auto mb-20">
			<h3
				class="text-2xl font-semibold mb-8 text-foreground animate-in fade-in duration-700 delay-200"
			>
				Ways to Contribute
			</h3>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each contributionAreas as area, index}
					<div
						class="p-6 bg-muted/30 rounded-xl space-y-4 animate-in fade-in duration-700"
						style="animation-delay: {(index + 4) * 150}ms"
					>
						<div
							class="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary"
						>
							{@html area.icon}
						</div>
						<h4 class="text-lg font-semibold text-foreground">{area.title}</h4>
						<p class="text-sm text-muted-foreground">{area.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Contact Section -->
		<div class="max-w-2xl mx-auto text-center animate-in fade-in duration-700 delay-500">
			<div class="bg-muted/30 rounded-xl p-8 space-y-6">
				<h3 class="text-2xl font-semibold text-foreground">Get in Touch</h3>
				<p class="text-muted-foreground">
					Have questions or want to get involved? Reach out to us through any of these channels:
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<Button variant="outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Email Us
					</Button>
					<Button variant="outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
						Discord
					</Button>
					<Button variant="outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							/>
						</svg>
						LinkedIn
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
