<script lang="ts">
	import '@fontsource-variable/exo-2';
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { Header, Footer } from '$lib/components/layout';
	let { children, data } = $props();
</script>

<ParaglideJS {i18n}>
	<Header lang={data.lang} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</ParaglideJS>
