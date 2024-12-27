<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { Button } from '$lib/components/ui';
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';
	export const cookieConsent = writable({
		necessary: true
	});

	let showBanner = false;

	onMount(() => {
		const savedConsent = localStorage.getItem('cookieConsent');
		if (!savedConsent) {
			showBanner = true;
		} else {
			cookieConsent.set(JSON.parse(savedConsent));
		}
	});

	function acceptAll() {
		const consent = {
			necessary: true
		};
		saveConsent(consent);
	}

	function acceptSelected(settings: typeof $cookieConsent) {
		saveConsent(settings);
	}

	function saveConsent(settings: typeof $cookieConsent) {
		localStorage.setItem('cookieConsent', JSON.stringify(settings));
		cookieConsent.set(settings);
		showBanner = false;
	}
</script>

{#if showBanner}
	<div
		class="fixed inset-x-0 bottom-0 z-50 p-4 bg-card backdrop-blur-sm border-t border-border"
		in:fly={{ y: 100, duration: 500 }}
		out:fade
	>
		<div class="container mx-auto max-w-7xl">
			<div class="grid gap-4 lg:gap-10 md:grid-cols-[2fr,1fr]">
				<div class="space-y-4">
					<div class="flex gap-4 items-center justify-start">
						<Icon icon="emojione:cookie" class="size-10" />

						<h2 class="text-xl md:text-2xl font-semibold">Cookie Settings</h2>
					</div>
					<p class="text-sm text-muted-foreground">
						We use cookies to enhance your browsing experience, serve personalized content. Please
						select which cookies you're willing to store on your device.
					</p>

					<div class="space-y-2">
						<label class="flex items-center gap-2">
							<input type="checkbox" checked disabled class="rounded border-border" />
							<span class="text-sm font-medium">Necessary (Required)</span>
						</label>
					</div>

					<div
						class="flex flex-wrap items-center justify-center md:justify-start md:items-start gap-4 text-sm"
					>
						<a href="/legal/privacy" class="text-emerald-500 hover:underline">Privacy Policy</a>
						<a href="/legal/tos" class="text-emerald-500 hover:underline">Terms of Service</a>
						<a href="/legal/cookies" class="text-emerald-500 hover:underline">Cookie Policy</a>
					</div>
				</div>

				<div class="flex flex-col gap-2 justify-center">
					<Button variant="default" onclick={acceptAll} class="w-full">Accept All</Button>
					<Button variant="outline" onclick={() => acceptSelected($cookieConsent)} class="w-full">
						Accept Selected
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}
