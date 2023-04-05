<script lang="ts">
	import { MarkerType, type TrailMarker } from "../../types";
	import MarkerIcon from "./MarkerIcon.svelte";
  
  export let marker: TrailMarker;
</script>

<li class="markerListItem">
  <div class="header">
    <div>
      <MarkerIcon type={marker.type}/>
      <input
        type="text"
        value={marker.label}
        class='name'
      />
    </div>
    <select value={marker.type}>
      {#each Object.values(MarkerType) as markerType}
        <option value={markerType}>{markerType}</option>
      {/each}
    </select>
  </div>

  <div class="position">
    <div class="position--latLng"><b>Lat: </b> <i>{marker.position.lat().toString()}</i></div>
    <div class="position--latLng"><b>Lng: </b> <i>{marker.position.lng().toString()}</i></div>
  </div>

</li>

<style>
  .markerListItem {
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    border: none;
    font-size: 1.4rem;
  }

  .position {
    margin-left: 1.6rem;
  }
</style>