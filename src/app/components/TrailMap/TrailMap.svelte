<script lang="ts">
	import { TrailEnum, type TrailMarker } from '../../types';
	import selectedStore from '../../stores/selected.js';
	import trailStore from '../../stores/trails.js';
	import markerStore from '../../stores/markers.js'

	import {GoogleMap, GoogleMapData} from '../../../packages/svelte-google-map'
	import type { GoogleMapDataMouseEvent, GoogleMapMouseEvent } from '../../../packages/svelte-google-map/types';
	import activeTrailId from '../../stores/activeTrail';
	import GoogleMapMarker from '../../../packages/svelte-google-map/GoogleMapMarker.svelte';
	import { getId } from '../../utils';

	$: centeredTrailId = $selectedStore[$selectedStore.length] || TrailEnum.AT;
	$: centeredTrail = $trailStore[centeredTrailId]

	$: trails = Object.values($trailStore).map(t => ({
		...t,
		visible: $selectedStore.includes(t.id)
	}))

	$: markers = Object.values($markerStore).filter(m => m.trailId === $activeTrailId)

	const addTrailMarker = (marker: TrailMarker) => {
		markerStore.addMarker(marker);
		trailStore.addTrailMarker($activeTrailId, marker.id);
	}

	const onClickMap = ({detail}: GoogleMapMouseEvent) => {
		if (detail.latLng) {
			addTrailMarker({
				id: getId(),
				position: detail.latLng,
				label: `Marker ${markers.length + 1}`,
				trailId: $activeTrailId
			})
		}
	}

	const onClickTrail = (trailId: TrailEnum, {detail}: GoogleMapDataMouseEvent) => {
		console.log('on click trail')
	}

	const onClickMarker = ({ detail }: GoogleMapMouseEvent) => {
		console.log('onClickMarker', detail)
	}
</script>

<div class="trail-map">
	<GoogleMap
		center={centeredTrail.overview.center}
		zoom={centeredTrail.overview.zoom}
		on:google-map-click={onClickMap}
	>
		<div slot="layers" let:map={map}>
			{#each trails as trail }
				{#each trail.data as {url}}
					<GoogleMapData
						type="geoJson"
						{map}
						{url}
						visible={trail.visible}
						on:google-map-data-click={(e) => onClickTrail(trail.id, e)}
					></GoogleMapData>
				{/each}
				{#each markers as {position, label}}
					<GoogleMapMarker
						{label}
						{position}
						{map}
					/>
				{/each}
			{/each}
		</div>
	</GoogleMap>
</div>

<style>
	.trail-map {
		display: flex;
		flex: 1;
	}
</style>
