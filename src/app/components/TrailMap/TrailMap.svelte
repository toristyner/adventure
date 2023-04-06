<script lang="ts">
	import { MapTool, TrailEnum } from '../../types';
	import selectedStore from '../../stores/selected.js';
	import trailStore from '../../stores/trails.js';
	import markerStore from '../../stores/markers.js';

	import { GoogleMap, GoogleMapData } from '../../../packages/svelte-google-map';
	import type { GoogleMapMouseEvent } from '../../../packages/svelte-google-map/types';
	import activeTrailId from '../../stores/activeTrail';
	import GoogleMapMarker from '../../../packages/svelte-google-map/GoogleMapMarker.svelte';
	import { getId } from '../../utils';
	import TrailTools from './MapTools.svelte';

	let activeMapTool = MapTool.Default;

	$: markerToolActive = activeMapTool === MapTool.Marker;
	$: trails = Object.values($trailStore).map((t) => ({
		...t,
		visible: $selectedStore.includes(t.id)
	}));

	$: activeTrail = $trailStore[$activeTrailId];
	$: markers = Object.values($markerStore).filter((m) => m.trailId === $activeTrailId);

	const newTrailMarker = (position: google.maps.LatLng) => {
		const marker = {
			id: getId(),
			position,
			label: `Marker ${markers.length + 1}`,
			trailId: $activeTrailId
		};

		markerStore.addMarker(marker);
		trailStore.addTrailMarker($activeTrailId, marker.id);
	};

	const onClickMap = ({ detail }: GoogleMapMouseEvent) => {
		if (markerToolActive && detail.latLng) {
			newTrailMarker(detail.latLng);
		}
	};

	const onClickMarker = ({ detail }: GoogleMapMouseEvent) => {
		console.log('onClickMarker', detail);
	};
</script>

<div class="trail-map">
	<TrailTools bind:active={activeMapTool} />
	<GoogleMap
		center={activeTrail.overview.center}
		zoom={activeTrail.overview.zoom}
		on:google-map-click={onClickMap}
	>
		<div slot="layers" let:map>
			{#each trails as trail}
				{#each trail.data as { url }}
					<GoogleMapData
						type="geoJson"
						{map}
						{url}
						visible={trail.visible}
						on:google-map-data-click={onClickMap}
					/>
				{/each}
				{#each markers as { position, label }}
					<GoogleMapMarker {position} {map} {label} />
				{/each}
			{/each}
		</div>
	</GoogleMap>
</div>

<style>
	.trail-map {
		position: relative;
		display: flex;
		flex: 1;
	}
</style>
