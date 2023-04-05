<script lang="ts">
	import activeTrailId from '../../stores/activeTrail';
  import trailStore from '../../stores/trails'
	import { TrailEnum } from '../../types';
	import MarkerListItem from './MarkerListItem.svelte';
	import SegmentList from './SegmentList.svelte';
  
  $: trail = $trailStore[$activeTrailId]

</script>

<div class="trailPlan">
  <div class="trailPlan__header">
    <label
      class="trailPlan__label"
      for="trailPlan__label">Plan your hike</label>
    <select
      name="activeTrail"
      class="trailPlan__select"
      bind:value={$activeTrailId}
    >
      <option value={TrailEnum.AT}>{$trailStore[TrailEnum.AT].name}</option>
      <option value={TrailEnum.PCT}>{$trailStore[TrailEnum.PCT].name}</option>
    </select>
  </div>

  <SegmentList segmentIds={trail.segments} />
</div>

<style>
  .trailPlan {
    padding: 1.2rem;
    width: 30rem;
  }

  .trailPlan__header {
    display: flex;
    flex-direction: column;
  }
  
  .trailPlan__label {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }

  .trailPlan__select {
    margin-bottom: 0.8rem;
    background-color: #7a8a7a;
    border: none;
    padding: 0.4rem;
    border-radius: 0.4rem;
    
  }
</style>