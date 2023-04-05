<script lang="ts">
	import markerStore from '../../stores/markers';
	import { MarkerType, type TrailMarker } from '../../types';
	import MarkerIcon from './MarkerIcon.svelte';

	export let marker: TrailMarker;


  const onChangeMarkerType = (e: Event) => {
    const type = (e.target as HTMLSelectElement).value as MarkerType
    markerStore.updateMarker({
      ...marker,
      type
    })
  }

  const onChangeMarkerLabel = (e: Event) => {
    const label = (e.target as HTMLInputElement).value
    markerStore.updateMarker({
      ...marker,
      label
    })
  }
</script>

<li class="markerListItem">
	<div class="header">
		<div>
			<MarkerIcon type={marker.type} />
			<input
        type="text"
        bind:value={marker.label}
        class="name"
        on:change={onChangeMarkerLabel}
      />
		</div>
		<select bind:value={marker.type} on:change={onChangeMarkerType}>
			{#each Object.values(MarkerType) as markerType}
				<option value={markerType}>{markerType}</option>
			{/each}
		</select>
	</div>

	<div class="position">
		<!-- <div class="position--latLng"><b>Lat: </b> <i>{marker.position.lat().toString()}</i></div>
    <div class="position--latLng"><b>Lng: </b> <i>{marker.position.lng().toString()}</i></div> -->
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
