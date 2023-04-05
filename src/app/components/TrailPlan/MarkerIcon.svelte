<script lang="ts">
	import { MarkerType } from "../../types";

  export let type: MarkerType = MarkerType.Default

  const iconClassByType: {
    [key in MarkerType]: string
  } = {
    [MarkerType.Default]: 'fa-location-pin',
    [MarkerType.Camp]: 'fa-tents',
    [MarkerType.Parking]: 'fa-square-parking',
    [MarkerType.ReSupply]: 'fa-parachute-box',
    [MarkerType.Shelter]: 'fa-people-roof',
    [MarkerType.TrailStart]: 'fa-location-dot',
    [MarkerType.TrailEnd]: 'fa-location-dot',
    [MarkerType.ViewPoint]: 'fa-mountain',
    [MarkerType.Water]: 'fa-droplet',
  }

</script>

<i
  class="markerIcon fa-solid {iconClassByType[type]} fa-lg"
></i>

<style>
  .markerIcon {
    color: var(--ui-theme-yinmn-blue);
    margin-right: 0.4rem;
  }
</style>