<script lang="ts">
	import type { IconType } from '.';

	let { class: className, ...rest }: IconType = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={className}
	{...rest}
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
	/>
</svg>`
