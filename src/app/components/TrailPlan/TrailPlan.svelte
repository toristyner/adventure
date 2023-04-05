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
    <label for="trailPlan__label">Select a Trail</label>
    <select
      name="activeTrail"
      class="trailPlan__select"
      bind:value={$activeTrailId}
    >
      <option value={TrailEnum.AT}>{$trailStore[TrailEnum.AT].name}</option>
      <option value={TrailEnum.PCT}>{$trailStore[TrailEnum.PCT].name}</option>
    </select>
  </div>

  <SegmentList segments={trail.segments} />


</div>

<style>
  .trailPlan {
    padding: 1.2rem;
  }

  .trailPlan__header {
    display: flex;
    flex-direction: column;
  }
  
  .trailPlan__label {
    
  }

  .trailPlan__select {

  }
</style>