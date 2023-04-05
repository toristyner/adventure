<script lang="ts">
	import { createEventDispatcher } from "svelte";
  import { SegmentStatus, type TrailSegment } from '../../types';

  export let segment: TrailSegment;

  const dispatch = createEventDispatcher()

</script>

<li class="segmentListItem">
  <div class="segmentListItem__icon">
    <i class="fa-solid fa-code-commit"></i>
  </div>
  <div class="segmentListItem__content">
    <div class="segmentListItem__status">
      <input 
        class="segmentListItem__name"
        type="text"
        value={segment.name}
        on:change={(e) => {
          dispatch('update-segment', {
            ...segment,
            name: e.target.value
          })
        }}
      />
      <select
        name={`${segment.id}-status-select`}
        value={segment.status}
        on:change={(e) => {
          dispatch('update-segment', {
            ...segment,
            status: e.target.value
          })
        }}
      >
        {#each Object.values(SegmentStatus) as status}
          <option value={status}>{status}</option>          
        {/each}
      </select>
    </div>
    <slot></slot>
  </div>
</li>

<style>
  .segmentListItem {
    display: flex;
    margin-bottom: 1.6rem;
  }

  .segmentListItem__icon {
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .segmentListItem__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 0.8rem;
  }

  .segmentListItem__name {
    border: none;
    font-size: 1.6rem;
  }

  .segmentListItem__status {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
</style>
