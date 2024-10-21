<script lang="ts">
	import { Button } from '$lib/components/ui';
	import Icon from '@iconify/svelte';
	import { Logo } from '.';
	import { ValuLogo } from '../icons';
	import gsap from 'gsap';

	const currentYear = new Date().getFullYear();
	let footerVisible = $state(false);
	let footerElement: HTMLElement;

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

	const initializeAnimations = () => {
		// Set initial states
		gsap.set('.footer-brand', { y: 30, opacity: 0 });
		gsap.set('.footer-description', { y: 30, opacity: 0 });
		gsap.set('.footer-socials', { y: 20, opacity: 0 });
		gsap.set('.footer-newsletter', { y: 30, opacity: 0, scale: 0.95 });
		gsap.set('.footer-links-section', { y: 40, opacity: 0 });
		gsap.set('.footer-bottom', { y: 20, opacity: 0 });

		// Create timeline
		const tl = gsap.timeline();

		tl.to('.footer-brand', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out'
		})
			.to(
				'.footer-description',
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: 'power3.out'
				},
				'-=0.4'
			)
			.to(
				'.footer-socials',
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: 'power3.out'
				},
				'-=0.4'
			)
			.to(
				'.footer-newsletter',
				{
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.6,
					ease: 'power3.out'
				},
				'-=0.4'
			)
			.to(
				'.footer-links-section',
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: {
						each: 0.1,
						ease: 'power2.out'
					}
				},
				'-=0.3'
			)
			.to(
				'.footer-bottom',
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: 'power3.out'
				},
				'-=0.3'
			);
	};

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !footerVisible) {
						footerVisible = true;
						setTimeout(initializeAnimations, 100);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '0px',
				threshold: 0.1
			}
		);

		if (footerElement) {
			observer.observe(footerElement);
		}

		return () => {
			if (footerElement) {
				observer.unobserve(footerElement);
			}
		};
	});
</script>

<footer class="bg-muted/30 border-t border-border" bind:this={footerElement}>
	<div class="px-4 py-8 sm:py-12">
		{#if footerVisible}
			<!-- Top Section -->
			<div class="container grid gap-8 md:grid-cols-[1fr,40%] mb-8 sm:mb-12">
				<!-- Logo and Description -->
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
					<div class="flex gap-3 sm:gap-5 items-center justify-center">
						<ValuLogo height={28} width={28} />
						<a href="https://valu-media.com" class="hover:underline"
							>© {currentYear} Valu Media. All rights reserved.</a
						>
					</div>
					<div class="flex gap-4 sm:gap-6">
						<a href="/terms" class="hover:text-primary transition-colors">Terms</a>
						<a href="/privacy" class="hover:text-primary transition-colors">Privacy</a>
						<a href="/cookies" class="hover:text-primary transition-colors">Cookies</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</footer>
