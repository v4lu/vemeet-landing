<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { APP_URL } from '$lib/constants';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import Icon from '@iconify/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { Logo } from '.';

	type Props = {
		lang: 'en' | 'de';
	};

	let { lang }: Props = $props();
	let isOpen = $state(false);
	let scrolled = $state(false);
	let y = $state(0);

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

	const menuItems = [
		{ label: 'Item', href: '/contact' },
		{ label: 'Item', href: '/contact' },
		{ label: 'Item', href: '/contact' },
		{ label: 'Item', href: '/contact' },
		{ label: 'Item', href: '/contact' }
	];

	$effect(() => {
		scrolled = y > 20;
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	});

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<svelte:window bind:scrollY={y} />

<div
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden"
	class:bg-background={scrolled || isOpen}
	class:shadow-md={scrolled || isOpen}
>
	<header class="px-4 flex items-center justify-between h-16 border-b border-border">
		<a
			href="/"
			class="flex items-center gap-2 text-xl font-bold text-primary transition-transform hover:scale-105"
		>
			<Logo class="size-8" />
			<span class="-mt-1">Vemeet</span>
		</a>

		<button
			class="relative size-10 flex items-center justify-center group"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<div class="relative w-6 h-5 flex flex-col justify-center">
				<span
					class="absolute h-0.5 w-full bg-foreground rounded transition-all duration-300 ease-out"
					class:top-0={!isOpen}
					class:top-2={isOpen}
					class:rotate-45={isOpen}
				></span>
				<span
					class="absolute h-0.5 w-full bg-foreground rounded top-2 transition-all duration-200 ease-out"
					class:opacity-0={isOpen}
					class:scale-0={isOpen}
				></span>
				<span
					class="absolute h-0.5 w-full bg-foreground rounded transition-all duration-300 ease-out"
					class:top-4={!isOpen}
					class:top-2={isOpen}
					class:-rotate-45={isOpen}
				></span>
			</div>
		</button>
	</header>

	{#if isOpen}
		<div
			class="fixed inset-0 top-16 bg-background overflow-y-auto"
			transition:slide={{ duration: 300, easing: cubicInOut }}
		>
			<nav class="h-full flex flex-col p-6">
				<ul class="space-y-6 mb-8">
					{#each menuItems as item}
						<li>
							<a
								href={item.href}
								class="text-lg font-medium text-foreground hover:text-primary transition-colors"
								onclick={closeMenu}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>

				<div
					class="border border-border rounded-lg p-1 flex items-center bg-muted/30 self-start mb-8"
				>
					{#each languages as { code, label, icon }}
						<button
							onclick={() => switchToLanguage(code)}
							type="button"
							class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative flex items-center gap-2"
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

				<a
					href={`${APP_URL}/sign-in`}
					class="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-center font-medium transition-colors"
					onclick={closeMenu}
				>
					{m.sign_in({})}
				</a>
			</nav>
		</div>
	{/if}
</div>
