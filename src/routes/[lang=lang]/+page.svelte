<script lang="ts">
	import AbilityScoresCard from '$lib/components/Cards/AbilityScoresCard.svelte';
	import GeneralSummaryCard from '$lib/components/Cards/GeneralSummaryCard.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Card from '$lib/components/Shared/Card.svelte';
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	const delayFactor = 30;

	export let data;

	const character: FifthEditionCharacter = data.props?.character;
</script>

<div class="mx-auto max-w-7xl transition-all duration-300 ease-in-out lg:grid lg:grid-cols-2">
	<GeneralSummaryCard {character} />
	<AbilityScoresCard {character} />
	<Card title="Test 2" delay={delayFactor}>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
		<div>Test 2</div>
	</Card>
	<Card title="Test 3" delay={2 * delayFactor}>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
		<div>Test3</div>
	</Card>
	<Card title="Test 4" delay={3 * delayFactor}>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
		<div>Test4</div>
	</Card>
</div>

<Footer />
