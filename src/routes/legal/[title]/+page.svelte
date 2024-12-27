<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Vemeet Legal - {data.title}</title>
</svelte:head>
<main class=" container mx-auto mt-20 flex w-full flex-col xl:flex-row">
	<article class="mx-auto w-full px-4 xl:px-0">
		<div class="content prose prose-invert max-w-none lg:prose-xl mb-12">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.content}
		</div>
	</article>
</main>

<style lang="postcss">
	:global(.content) {
		@apply text-base text-foreground/80 lg:text-lg;
	}

	:global(.content > *) {
		@apply mx-auto max-w-full;
	}

	:global(.content h1) {
		@apply mb-4 mt-8 text-3xl font-semibold text-foreground sm:text-3xl;
	}

	:global(.content h2) {
		@apply mb-4 mt-8 text-2xl font-semibold text-foreground sm:text-2xl;
	}

	:global(.content h3) {
		@apply mb-3 mt-6 text-xl font-semibold text-foreground sm:text-xl;
	}

	:global(.content p) {
		@apply mb-4;
	}
	:global(.content p) {
		@apply mb-4;
	}

	:global(.content ul),
	:global(.content ol) {
		@apply mb-4 pl-6;
	}

	:global(.content li) {
		@apply mb-2;
	}

	:global(.content img) {
		@apply my-4 h-auto max-w-full rounded-lg bg-cover bg-center object-cover object-center shadow-lg;
	}

	:global(.content blockquote) {
		@apply my-4 border-l-4 border-primary pl-4 italic text-muted-foreground;
	}

	:global(.content pre) {
		@apply my-4 overflow-x-auto rounded-lg border border-white/10 bg-slate-900/20 p-4;
	}

	:global(.content code) {
		@apply rounded px-1 py-0.5 font-mono text-sm;
	}

	:global(.content a) {
		@apply text-primary transition-colors duration-200 hover:text-primary/80;
	}
</style>
