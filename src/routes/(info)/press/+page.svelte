<script lang="ts">
	import { browser } from '$app/environment';

	import { fly } from 'svelte/transition';

	let progress = $state(0);

	function startProgress() {
		const interval = setInterval(() => {
			progress = progress >= 100 ? 0 : progress + 1;
		}, 50);

		return () => clearInterval(interval);
	}

	$effect(() => {
		if (browser) {
			startProgress();
		}
	});
</script>

<div class="container min-h-screen pt-32 relative overflow-hidden">
	<!-- Main Content -->
	<div class="max-w-2xl mx-auto text-center space-y-12">
		<!-- Growing Garden Animation -->

		<!-- Text Content -->
		<div class="space-y-6 mt-16 xl:mt-64" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
			<h1 class="text-4xl md:text-6xl font-bold text-foreground">
				Growing Something
				<span class="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
					Special
				</span>
			</h1>
			<p class="text-xl text-muted-foreground">
				Our vegan social platform is currently sprouting! We're cultivating a space where
				plant-based communities can thrive.
			</p>
			<p class="text-xl font-medium">This page is under construction.</p>
		</div>

		<div class="w-full max-w-md mx-auto space-y-2" in:fly={{ y: 50, duration: 1000, delay: 300 }}>
			<div class="h-2 bg-muted rounded-full overflow-hidden">
				<div
					class="h-full bg-primary transition-all duration-300 rounded-full"
					style="width: {progress}%"
				></div>
			</div>
			<p class="text-sm text-muted-foreground">
				{progress}% Grown
			</p>
		</div>
	</div>
</div>
