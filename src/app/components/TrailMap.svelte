<script lang="ts">
	import { SectionStatus, TrailEnum } from '../types';
	import selectedStore from '../stores/selected.js';
	import trailStore from '../stores/trails.js'
	import {GoogleMap, GoogleMapData, GoogleMapMarker } from '../../packages/svelte-google-map'
	import type { GoogleMapDataMouseEvent } from '../../packages/svelte-google-map/types';
	import sectionStore from '../stores/section';

	let markers = [];

	$: centeredTrailId = $selectedStore[$selectedStore.length] || TrailEnum.AT;
	$: centeredTrail = $trailStore[centeredTrailId]

	$: trails = Object.values($trailStore).map(t => ({
		...t,
		visible: $selectedStore.includes(t.id)
	}))

	const onMouseOverTrail = (trailId: TrailEnum, detail: GoogleMapDataMouseEvent['detail']) => {
		console.log('TrailMap - onMouseOverTrail -', trailId, detail)

	}

	const onClickTrail = (trailId: TrailEnum,  detail: GoogleMapDataMouseEvent['detail']) => {
		markers = [
			...markers,
			{
				position: detail.latLng,
				label: 'My Marker'
			}
		]
	}
</script>

<div class="trail-map">
	<GoogleMap
		center={centeredTrail.overview.center}
		zoom={centeredTrail.overview.zoom}
	>
		<div slot="layers" let:map={map}>
			{#each trails as trail }
				{#each trail.data as layer}
					<GoogleMapData
						type="geoJson"
						map={map}
						url={layer.url}
						visible={trail.visible}
						on:google-map-data-click={({detail}) => onClickTrail(trail.id, detail)}
						on:google-map-data-mouseover={({detail}) => onMouseOverTrail(trail.id, detail)}
					/>				
				{/each}
			{/each}
			{#each markers as marker }
				<GoogleMapMarker {...marker} {map} />
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
