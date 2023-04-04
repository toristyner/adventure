<script lang="ts">
	import { TrailEnum } from '../types';
	import selectedStore from '../stores/selected.js';
	import trailStore from '../stores/trails.js'
	import {GoogleMap, GoogleMapData } from '../../packages/svelte-google-map'

	$: trails = Object.values($trailStore).map(t => ({
		...t,
		visible: $selectedStore.includes(t.id)
	}))

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
			{#each trails as trail }
				{#each trail.data as layer}
					<GoogleMapData url={layer.url} type="geoJson" map={map} visible={trail.visible} />					
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
