<script lang="ts">
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	import { guardValue } from '$lib/utils';
	import Card from '../Shared/Card.svelte';
	import LabelValue from '../Shared/LabelValue.svelte';

	export let character: FifthEditionCharacter;
	export let delay: number;

	const halfSpeed = (character.character.speed || 30) / 2;
	const strength = character.AbilityScoresAndSkills.abilityScores.strength;
	const carryCapacity = (strength.strengthScore || 10) * 15;
</script>

<Card title={undefined} {delay}>
	<div class="flex flex-col gap-2">
		<span class="text-4xl">
			{character.name}
			<span class="font-raleway text-base text-c-caption-gray">
				({guardValue(character.character.pronouns || 'Pronouns')})
			</span>
		</span>
		<span>
			<span class="font-bold text-c-gold">Level {character.character.overallLevel}</span>
			<span class="text-c-caption-gray">{guardValue(character.character.race || 'Race')}</span>
			{#each character.character.classes as indivClass}
				<span class="text-c-caption-gray">
					{guardValue(indivClass.class)}
					<!-- TODO: And this is not the last element -->
					{#if character.character.classes.length > 1}
						/
					{/if}
				</span>
			{/each}
		</span>

		<div class="h-5" />

		<span class="grid w-full grid-cols-2 justify-between gap-4 xs:flex xs:flex-row md:gap-6">
			<LabelValue label="XP">
				{guardValue(character.character.xp)}
			</LabelValue>
			<LabelValue label="Inspiration">
				{#if character.character.inspiration}
					Yes
				{:else}
					No
				{/if}
			</LabelValue>
			<LabelValue label="Proficiency Bonus">
				+{guardValue(character.character.proficiencyBonus)}
			</LabelValue>
			<LabelValue label="AC">
				{guardValue(character.combat.ac || 10)}
			</LabelValue>
			<LabelValue label="Speed">
				{guardValue(character.character.speed || 30)}
			</LabelValue>
		</span>
		<span class="mt-8 grid w-full grid-cols-2 justify-between gap-4 xs:flex xs:flex-row md:gap-6">
			<LabelValue label="Swim/Fly Speed">
				<span class="flex flex-row gap-2">
					<div>
						{guardValue(character.character.swimSpeed || halfSpeed)}
					</div>
					<div class="font-raleway text-c-caption-gray">|</div>
					<div>
						{guardValue(character.character.flySpeed || halfSpeed)}
					</div>
				</span>
			</LabelValue>
			<LabelValue label="Carry Capacity">
				{carryCapacity}<span class="text-sm">lbs</span>
			</LabelValue>
			<LabelValue label="Push/Lift/Drag Weight">
				<div>
					{carryCapacity * 2}<span class="text-sm">lbs</span>
				</div>
			</LabelValue>
			<LabelValue label="Long/High Jump">
				<span class="flex flex-row gap-2">
					<div>
						{strength.strengthScore}<span class="text-sm">ft</span>
					</div>
					<div class="font-raleway text-c-caption-gray">|</div>
					<div>
						{3 + (strength.strengthModifier || 10)}<span class="text-sm">ft</span>
					</div>
				</span>
			</LabelValue>
		</span>
	</div>
</Card>
