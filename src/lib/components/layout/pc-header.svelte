<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { APP_URL } from '$lib/constants';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import Icon from '@iconify/svelte';
	import { Logo } from '.';
	import { buttonVariants } from '../ui';

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
			icon: 'flag:gb-4x3'
		},
		{
			code: 'de',
			label: 'DE',
			icon: 'twemoji:flag-germany'
		}
	] as const;
</script>

<svelte:window bind:scrollY={y} />

<div
	class="fixed top-0 hidden md:block left-0 right-0 border-b border-border z-50 transition-all duration-300"
	class:bg-background={scrolled}
	class:shadow-md={scrolled}
>
	<header class="container flex items-center justify-between h-16">
		<a
			href="/"
			class="flex items-center justify-center gap-2 text-xl font-bold text-primary transition-transform hover:scale-105"
		>
			<Logo class="size-10" />
			<span class="-mt-1" class:scrolled> Vemeet </span>
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
					{#each languages as { code, label, icon }}
						<button
							onclick={() => switchToLanguage(code)}
							type="button"
							class="px-2.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative flex items-center gap-2"
						>
							<div class="relative size-4 overflow-hidden rounded-[2px] ring-1 ring-border/50">
								<Icon {icon} class="size-4" />
							</div>
							<span>{label}</span>
							{#if lang === code}
								<div class="absolute inset-0 bg-primary/10 rounded-md"></div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</header>
</div>
