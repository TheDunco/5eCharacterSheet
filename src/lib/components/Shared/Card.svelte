<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { sineInOut as easing } from 'svelte/easing';

	export let title: string | undefined;

	let loading = true;
	onMount(() => {
		loading = false;
	});
	export let delay = 0;
</script>

{#if loading}
	<div />
{:else}
	<div
		in:fly={{ duration: 300, x: 200, easing, delay }}
		class="m-2 rounded-standard bg-c-near-white dark:bg-c-near-black md:m-4"
	>
		{#if title}
			<h2
				class="flex w-full items-center justify-center pt-4 align-middle font-cuprum text-2xl text-c-caption-gray"
			>
				{title}
			</h2>
		{/if}
		<div class="p-4 md:p-8">
			<slot />
		</div>
	</div>
{/if}
