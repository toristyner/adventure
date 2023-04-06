<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { HikingDirection, SegmentStatus, type TrailSegment } from '../../types';

	export let segment: TrailSegment;
	export let active = false;

	const dispatch = createEventDispatcher();

	const onChangeSegmentName = (e: Event) => {
		const name = (e.target as HTMLInputElement).value;
		dispatch('update-segment', {
			...segment,
			name
		});
	};

	const onChangeSegmentType = (e: Event) => {
		const status = (e.target as HTMLSelectElement).value;
		dispatch('update-segment', {
			...segment,
			status
		});
	};

	// const onChangeHikingDirection = (e: Event) => {
	// 	const hikingDirection = (e.target as HTMLSelectElement).value;
	// 	dispatch('update-segment', {
	// 		...segment,
	// 		hikingDirection
	// 	});
	// };
</script>

<li class="segment-list-item">
	<div class="segment-info">
		<i class="segment-icon fa-solid fa-code-commit fa-xl" class:active />
		<input type="text" value={segment.name} on:change={onChangeSegmentName} />
		<select
			name={`${segment.id}-status-select`}
			value={segment.status}
			on:change={onChangeSegmentType}
		>
			{#each Object.values(SegmentStatus) as status}
				<option value={status}>{status}</option>
			{/each}
		</select>
	</div>
	<!-- 
	<div class="segment-direction">
		<i class="segment-icon fa-regular fa-compass fa-xl" />
		<select
			name={`${segment.id}-direction-select`}
			value={segment.hikingDirection}
			on:change={onChangeHikingDirection}
		>
			{#each Object.values(HikingDirection) as direction}
				<option value={direction}>{direction}</option>
			{/each}
		</select>
	</div> -->

	<div class="segment-markers">
		<div />
		<slot />
	</div>
</li>

<style>
	.segment-list-item {
		display: grid;
		padding-bottom: 1.6rem;
		margin-bottom: 1.6rem;
		border-bottom: 1px solid var(--ui-theme-border-color);
	}

	.segment-info {
		display: grid;
		grid-template-columns: 0.25fr 2fr 1fr;
		align-items: center;
		gap: 0.8rem;
		margin-bottom: 0.8rem;
	}

	/* .segment-direction {
		display: grid;
		grid-template-columns: 0.25fr 3fr;
		align-items: center;
		gap: 0.8rem;
	} */

	.segment-markers {
		display: grid;
		grid-template-columns: 0.25fr 3fr;
		gap: 0.8rem;
	}

	.segment-icon {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.active {
		color: var(--ui-theme-glacuos-blue);
	}
</style>
