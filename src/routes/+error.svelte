<script lang="ts">
	import { buttonVariants } from '$lib/components/ui';
	import Icon from '@iconify/svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<div
	class="min-h-screen bg-gradient-to-b from-background to-background/50 flex items-center justify-center p-4"
>
	<div class="max-w-2xl w-full text-center space-y-12" in:fade={{ duration: 300 }}>
		<div class="space-y-6" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
			<h1
				class="text-8xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
			>
				404
			</h1>
			<h2 class="text-3xl font-semibold text-foreground">Oops! Page Not Found</h2>
			<p class="text-lg text-muted-foreground">
				We couldn't find the page you're looking for. Let's get you back on track!
			</p>
		</div>

		<div class="flex gap-4 justify-center" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
			<a href="/" class={buttonVariants({ size: 'lg' })}>
				<Icon icon="solar:home-2-linear" class="mr-2 size-5" />
				Go Home
			</a>
		</div>
	</div>
</div>
