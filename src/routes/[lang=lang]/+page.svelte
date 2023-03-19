<script lang="ts">
	import AbilityScoresCard from '$lib/components/Cards/AbilityScoresCard.svelte';
	import BackgroundAndClassCard from '$lib/components/Cards/BackgroundAndClassCard.svelte';
	import GeneralSummaryCard from '$lib/components/Cards/GeneralSummaryCard.svelte';
	import VisualAppearanceCard from '$lib/components/Cards/VisualAppearanceCard.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Card from '$lib/components/Shared/Card.svelte';
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	const delayFactor = 30;

	export let data;

	const character: FifthEditionCharacter = data.props?.character;
</script>

<div
	class="mx-auto max-w-7xl px-2 transition-all duration-300 ease-in-out md:px-4 lg:grid lg:grid-cols-2 xl:px-0"
>
	<GeneralSummaryCard {character} delay={delayFactor} />
	<VisualAppearanceCard {character} delay={2 * delayFactor} />
	<BackgroundAndClassCard {character} delay={3 * delayFactor} />
	<AbilityScoresCard {character} delay={4 * delayFactor} />
	<Card title="Test 3" delay={5 * delayFactor}>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
	</Card>
	<Card title="Test 4" delay={6 * delayFactor}>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
	</Card>
</div>

<Footer />
