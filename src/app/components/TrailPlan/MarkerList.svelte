<script lang="ts">
	import activeTrailId from '../../stores/activeTrail';
	import markerStore from '../../stores/markers';
	import segmentStore from '../../stores/segments';
	import trailStore from '../../stores/trails';
	import { HikingDirection, type TrailMarker } from '../../types';
	import MarkerListItem from './MarkerListItem.svelte';

	export let segmentId: string | undefined = undefined;

	let markers: TrailMarker[] = [];

	const sortSouthBound = (a: TrailMarker, b: TrailMarker) => {
		return b.position.lat - a.position.lat;
	};

	const sortNorthBound = (a: TrailMarker, b: TrailMarker) => {
		return a.position.lat - b.position.lat;
	};

	$: segmentDirection = segmentId ? $segmentStore[segmentId].hikingDirection : HikingDirection.NOBO;
	$: markers = $trailStore[$activeTrailId].markers
		.map((markerId) => $markerStore[markerId])
		.filter((marker) => marker.segmentId === segmentId)
		.sort(segmentDirection === HikingDirection.SOBO ? sortSouthBound : sortNorthBound);
</script>

<ul class="markerList">
	{#each markers as marker}
		<MarkerListItem {marker} />
	{/each}
</ul>

<style>
	.markerList {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
