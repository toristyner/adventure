<script lang="ts">
	import segmentStore from "../../stores/segments";
  import type { TrailSegment } from '../../types';
	import MarkerListItem from "./MarkerListItem.svelte";

  export let segmentId: string;
  $: segment = $segmentStore[segmentId]

  const onUpdateSegment = (e: InputEvent, segment: TrailSegment) => {
    const name = (e.target as HTMLInputElement).value
    segmentStore.updateSegment({...segment, name})
  }

</script>

<li>
  <input
    type="text"
    value={segment.name}
    on:change={(e) => onUpdateSegment(e, segment)}
  />
  <div>Status: {segment.status}</div>

  <!-- <h2>Markers</h2>
  <ul class="marker-list">
    {#each segment.markers as markerId}
      <MarkerListItem {markerId} />
    {/each}
  </ul> -->
</li>
