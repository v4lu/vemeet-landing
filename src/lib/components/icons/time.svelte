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
		d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
	/>
</svg>
