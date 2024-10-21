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
		company: [
			{ label: 'About Us', href: '/about' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Press Kit', href: '/press' }
		],
		resources: [
			{ label: 'Documentation', href: '/docs' },
			{ label: 'Community', href: '/community' },
			{ label: 'API', href: '/api' }
		],
		legal: [
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms of Service', href: '/terms' },
			{ label: 'Cookie Policy', href: '/cookies' },
			{ label: 'License', href: '/license' }
		]
	};

	const socials = [
		{
			label: 'GitHub',
			href: 'https://github.com/vemeet',
			icon: 'mdi:github'
		},
		{
			label: 'Twitter',
			href: 'https://twitter.com/vemeet',
			icon: 'prime:twitter'
		},
		{
			label: 'Discord',
			href: 'https://discord.gg/vemeet',
			icon: 'ic:baseline-discord'
		},
		{
			label: 'Telegram',
			href: 'https://linkedin.com/company/vemeet',
			icon: 'ic:baseline-telegram'
		}
	];
</script>

<footer class="bg-muted/30 border-t border-border">
	<div class=" px-4 py-12">
		<!-- Top Section -->
		<div class="grid container lg:grid-cols-2 gap-8 mb-12">
			<!-- Logo and Description -->
			<div class="space-y-4">
				<a href="/" class="flex items-center gap-2 text-xl font-bold text-primary">
					<Logo class="size-10" />
					<span class="-mt-1">vemeet</span>
				</a>
				<p class="text-muted-foreground max-w-md">
					Join our growing community of plant-based enthusiasts. Share recipes, find friends, and
					make a positive impact on the world together.
				</p>
				<!-- Social Links -->
				<div class="flex gap-4">
					{#each socials as social}
						<a
							href={social.href}
							class="text-muted-foreground hover:text-primary transition-colors"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
						>
							<Icon icon={social.icon} class="size-6" />
						</a>
					{/each}
				</div>
			</div>

			<div class="lg:pl-8">
				<h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
				<p class="text-muted-foreground mb-4">
					Subscribe to our newsletter for the latest updates and vegan community news.
				</p>
				<form class="flex gap-2 max-w-md">
					<input
						type="email"
						placeholder="Enter your email"
						class="flex-1 bg-background px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
						required
					/>
					<Button>Subscribe</Button>
				</form>
			</div>
		</div>

		<div class="grid container grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border">
			{#each Object.entries(footerLinks) as [category, links]}
				<div>
					<h3 class="font-semibold capitalize mb-4">{category}</h3>
					<ul class="space-y-3">
						{#each links as link}
							<li>
								<a
									href={link.href}
									class="text-muted-foreground hover:text-primary transition-colors"
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
				class="pt-8 flex container flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
			>
				<div class="flex gap-5 items-center justify-center">
					<ValuLogo height={32} width={32} />
					<a href="https://valu-media.com" class="hover:underline"
						>© {currentYear} Valu Media. All rights reserved.</a
					>
				</div>
				<div class="flex gap-6">
					<a href="/terms" class="hover:text-primary transition-colors">Terms</a>
					<a href="/privacy" class="hover:text-primary transition-colors">Privacy</a>
					<a href="/cookies" class="hover:text-primary transition-colors">Cookies</a>
				</div>
			</div>
		</div>
	</div>
</footer>
