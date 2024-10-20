<script lang="ts">
	import { APP_URL } from '$lib/constants';
	import { i18n } from '$lib/i18n';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { Logo } from '.';
	import { buttonVariants } from '../ui';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	type Props = {
		lang: 'en' | 'de';
	};

	let scrolled = $state(false);
	let y = $state(0);

	$effect(() => {
		scrolled = y > 20;
	});

	let { lang }: Props = $props();

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	const languages = [
		{
			code: 'en',
			label: 'EN',
			flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="size-4">
              <path fill="#012169" d="M0 0h640v480H0z"/>
              <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
              <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
              <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
              <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
            </svg>`
		},
		{
			code: 'de',
			label: 'DE',
			flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="size-4">
              <path fill="#FFCE00" d="M0 320h640v160H0z"/>
              <path d="M0 0h640v160H0z"/>
              <path fill="#D00" d="M0 160h640v160H0z"/>
            </svg>`
		}
	] as const;
</script>

<svelte:window bind:scrollY={y} />

<div
	class="fixed top-0 left-0 right-0 border-b border-border z-50 transition-all duration-300"
	class:bg-background={scrolled}
	class:shadow-md={scrolled}
>
	<header class="container flex items-center justify-between h-16">
		<a
			href="/"
			class="flex items-center justify-center gap-2 text-xl font-bold text-primary transition-transform hover:scale-105"
		>
			<Logo class="size-10" />
			<span class="-mt-1" class:scrolled> vemeet </span>
		</a>

		<div class="flex items-center gap-4">
			<a
				class={`${buttonVariants()} transition-all duration-300`}
				class:scale-95={scrolled}
				href={`${APP_URL}/sign-in`}
			>
				{m.sign_in({})}
			</a>
			<div class="flex items-center">
				<div class="border border-border rounded-lg p-0.5 flex items-center bg-muted/30">
					{#each languages as { code, label, flag }}
						<button
							onclick={() => switchToLanguage(code)}
							type="button"
							class="px-2.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative flex items-center gap-2"
						>
							<div class="relative size-4 overflow-hidden rounded-[2px] ring-1 ring-border/50">
								{@html flag}
							</div>
							<span>{label}</span>
							{#if lang === code}
								<div
									class="absolute inset-0 bg-primary/10 rounded-md animate-in fade-in zoom-in duration-200"
								></div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</header>
</div>

<style>
	@keyframes zoom-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate-in {
		animation: zoom-in 0.2s ease-out;
	}

	button:hover .size-4 {
		transform: scale(1.05);
		transition: transform 0.2s ease;
	}
</style>
