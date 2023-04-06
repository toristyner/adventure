<script lang="ts">
	import activeTrailId from '../../stores/activeTrail';
	import trailStore from '../../stores/trails';
	import { TrailEnum } from '../../types';
	import MarkerList from './MarkerList.svelte';
	import SegmentList from './SegmentList.svelte';

	$: trail = $trailStore[$activeTrailId];
	$: segmentId = undefined;
</script>

<div class="trailPlan">
	<h1>Plan Your Hike</h1>

	<h2>Trail</h2>
	<select name="activeTrail" class="trailPlan__select" bind:value={$activeTrailId}>
		<option value={TrailEnum.AT}>{$trailStore[TrailEnum.AT].name}</option>
		<option value={TrailEnum.PCT}>{$trailStore[TrailEnum.PCT].name}</option>
	</select>

	<SegmentList activeSegmentId={segmentId} segmentIds={trail.segments} />

	<h2>Map Markers</h2>

	<MarkerList />
</div>

<style>
	.trailPlan {
		padding: 1.2rem;
		width: 30rem;
		display: flex;
		flex-direction: column;
	}
	.trailPlan__select {
		margin-bottom: 0.8rem;
		background-color: #7a8a7a;
		border: none;
		padding: 0.4rem;
		border-radius: 0.4rem;
	}
</style>
