<script lang="ts">
	import { SegmentStatus, type TrailSegment, type Trail } from '../../types';
	import { getId } from '../../utils';
	import SegmentListItem from './SegmentListItem.svelte';

	import activeTrailId from '../../stores/activeTrail';
	import segmentStore from '../../stores/segments';
	import trailStore from '../../stores/trails';
	import MarkerList from './MarkerList.svelte';

	export let segmentIds: Trail['segments'] = [];
	export let activeSegmentId: string | undefined;

	$: segments = segmentIds?.map((id) => $segmentStore[id]);

	const onAddSegment = () => {
		const segment: TrailSegment = {
			id: `${$activeTrailId}-${getId()}`,
			name: `My Segment`,
			status: SegmentStatus.Planned
		};

		segmentStore.addSegment(segment);
		trailStore.addTrailSegment($activeTrailId, segment.id);
	};

	const onUpdateSegment = ({ detail }: CustomEvent) => {
		segmentStore.updateSegment(detail);
	};
</script>

<div class="segments__header">
	<h2>Trail Segments</h2>
	<button class="segements__button" on:click={() => onAddSegment()}>
		<i class="fa-solid fa-square-plus fa-xl" />
	</button>
</div>

<ul class="segments__list">
	{#each segments as segment (segment.id)}
		<SegmentListItem
			{segment}
			active={segment.id === activeSegmentId}
			on:update-segment={onUpdateSegment}
		>
			<MarkerList segmentId={segment.id} />
		</SegmentListItem>
	{/each}
</ul>

<style>
	.segments__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.segements__button {
		border: none;
		background-color: transparent;
		color: var(--ui-theme-hookers-green);
	}

	.segments__list {
		display: grid;
		width: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
