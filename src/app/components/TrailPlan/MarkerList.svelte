<script lang="ts">
	import activeTrailId from "../../stores/activeTrail";
	import markerStore from "../../stores/markers";
	import trailStore from "../../stores/trails";
	import type { TrailMarker } from "../../types";
	import MarkerListItem from "./MarkerListItem.svelte";

  export let segmentId: string;

  let markers: TrailMarker[] = []

  $: markers = $trailStore[$activeTrailId].markers
    .map(markerId => $markerStore[markerId])
    // .filter(marker => segmentId === undefined || marker.segmentId === segmentId)

</script>

<ul class="markerList">
  {#each markers as marker }
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