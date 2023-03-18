<script lang="ts">
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	import { toInitialCase } from '$lib/utils/toInitialCase';
	import Card from '../Shared/Card.svelte';
	import LabelValue from '../Shared/LabelValue.svelte';

	export let character: FifthEditionCharacter;
</script>

<Card title={undefined}>
	<div class="flex flex-col gap-2">
		<span class="text-4xl">
			{character.name}
			<span class="font-raleway text-base text-c-caption-gray">
				({character.character.pronouns || 'Pronouns'})
			</span>
		</span>
		<span>
			<span class="font-bold text-c-gold">Level {character.character.overallLevel}</span>
			<span class="text-c-caption-gray">{character.character.race || 'Race'}</span>
			{#each character.character.classes as indivClass}
				<span class="text-c-caption-gray">
					{toInitialCase(indivClass.class)}
					{#if character.character.classes.length > 1}
						/
					{/if}
				</span>
			{/each}
		</span>

		<div class="h-5" />

		<span class="grid w-full grid-cols-2 justify-between gap-4 xs:flex xs:flex-row md:gap-6">
			<LabelValue label="XP">
				{character.character.xp}
			</LabelValue>
			<LabelValue label="Inspiration">
				{#if character.character.inspiration}
					Yes
				{:else}
					No
				{/if}
			</LabelValue>
			<LabelValue label="Proficiency Bonus">
				+{character.character.proficiencyBonus}
			</LabelValue>
			<LabelValue label="AC">
				{character.combat.ac || 10}
			</LabelValue>
			<LabelValue label="Speed">
				{character.character.speed || 30}
			</LabelValue>
		</span>
	</div>
</Card>
