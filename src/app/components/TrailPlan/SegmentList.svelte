<script lang="ts">

	import { SegmentStatus, type TrailSegment, type Trail } from '../../types';
	import { getId } from '../../utils';
	import SegmentListItem from './SegmentListItem.svelte';

	import activeTrailId from '../../stores/activeTrail';
  import segmentStore from '../../stores/segments'
  import trailStore from '../../stores/trails'

  export let segments: Trail['segments'];
  
  const onAddSegment = () => {
    const segment: TrailSegment = {
      id: `${$activeTrailId}-${getId()}`,
      name: `My Segment`,
      status: SegmentStatus.Planned,
      markers: []
    }

    segmentStore.addSegment(segment)
    trailStore.addTrailSegment($activeTrailId, segment.id)
  }

</script>

<button on:click={() => onAddSegment()}>Add Segment</button>
<ul class="segment-list">
  {#each segments as segmentId }
    <SegmentListItem {segmentId} />
  {/each}
</ul>