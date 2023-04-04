<script lang="ts">
	import { TrailEnum } from '../types';
	import selectedStore from '../stores/selected.js';
	import trailStore from '../stores/trails.js'
	import {GoogleMap, GoogleMapData } from '../../packages/svelte-google-map'

	$: centeredTrailId = $selectedStore[$selectedStore.length] || TrailEnum.AT;
	$: centeredTrail = $trailStore[centeredTrailId]

	$: {
		console.log($selectedStore)
	}
</script>

<div class="trail-map">
	<GoogleMap
		center={centeredTrail.overview.center}
		zoom={centeredTrail.overview.zoom}
	>
		<div slot="layers" let:map={map}>
			{#each $selectedStore as trailId}
				{#each $trailStore[trailId].data as layer}
					<GoogleMapData url={layer.url} type="geoJson" map={map} />
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
