<script lang="ts">
	import { Button } from '$lib/components/ui';
	import Icon from '@iconify/svelte';
	import { Logo } from '.';
	import { ValuLogo } from '../icons';

	const currentYear = new Date().getFullYear();

	const footerLinks = {
		product: [
			{ label: 'Features', href: '/features' },
			{ label: 'Download', href: '/download' },
			{ label: 'Roadmap', href: '/roadmap' }
		],
		team: [
			{ label: 'About Us', href: '/about' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Press Kit', href: '/press' }
		],
		resources: [
			{ label: 'Documentation', href: '/docs' },
			{ label: 'API', href: 'https://core.vemeet.me/swagger-ui/index.html' }
		],
		legal: [
			{ label: 'Privacy Policy', href: '/legal/privacy' },
			{ label: 'Terms of Service', href: '/legal/tos' },
			{ label: 'Cookie Policy', href: '/legal/cookies' },
			{ label: 'License', href: '/legal/license' }
		]
	};

	const socials = [
		{
			label: 'GitHub',
			href: 'https://github.com/v4lu',
			icon: 'mdi:github'
		},
		{
			label: 'Telegram',
			href: 'https://t.me/vemeetapp',
			icon: 'ic:baseline-telegram'
		}
	];
</script>

<footer class="bg-muted/30 border-t border-border">
	<div class="px-4 py-8 sm:py-12">
		<div class="container grid gap-8 md:grid-cols-[1fr,40%] mb-8 sm:mb-12">
			<div class="space-y-4">
				<a href="/" class="footer-brand flex items-center gap-2 text-xl font-bold text-primary">
					<Logo class="size-8 sm:size-10" />
					<span class="-mt-1">vemeet</span>
				</a>
				<p class="footer-description text-muted-foreground max-w-md text-sm sm:text-base">
					Join our growing community of plant-based enthusiasts. Share recipes, find friends, and
					make a positive impact on the world together.
				</p>
				<!-- Social Links -->
				<div class="footer-socials flex gap-4">
					{#each socials as social}
						<a
							href={social.href}
							class="text-muted-foreground hover:text-primary transition-colors"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
						>
							<Icon icon={social.icon} class="size-5 sm:size-6" />
						</a>
					{/each}
				</div>
			</div>

			<div class="footer-newsletter space-y-4">
				<h3 class="text-lg font-semibold">Stay Updated</h3>
				<p class="text-muted-foreground text-sm sm:text-base">
					Subscribe to our newsletter for the latest updates and vegan community news.
				</p>
				<form class="flex flex-col sm:flex-row gap-2 max-w-md">
					<input
						type="email"
						placeholder="Enter your email"
						class="flex-1 bg-background px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
						required
					/>
					<Button class="w-full sm:w-auto">Subscribe</Button>
				</form>
			</div>
		</div>

		<div
			class="container grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 py-8 border-t border-border"
		>
			{#each Object.entries(footerLinks) as [category, links]}
				<div class="footer-links-section">
					<h3 class="font-semibold capitalize mb-3 sm:mb-4 text-sm sm:text-base">{category}</h3>
					<ul class="space-y-2 sm:space-y-3">
						{#each links as link}
							<li>
								<a
									href={link.href}
									class="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="border-t border-border">
			<div
				class="footer-bottom container pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground"
			>
				<div class="flex gap-3 sm:gap-5 items-center justify-center w-full">
					<ValuLogo height={28} width={28} />
					<a href="https://valu-media.com" class="hover:underline"
						>© {currentYear} Valu Media. All rights reserved.</a
					>
				</div>
			</div>
		</div>
	</div>
</footer>
