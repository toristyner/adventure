<script lang="ts">
	import { TrailEnum } from '../types';
	import selectedStore from '../stores/selected.js';
	import trailStore from '../stores/trails.js'
	import Map from './Map.svelte'
	import MapLayer from './MapLayer.svelte';

	$: centeredTrailId = $selectedStore.pop() || TrailEnum.AT;
	$: centeredTrail = $trailStore[centeredTrailId]

	$: layers = Object.values($trailStore)

</script>

<div class="trail-map">
	<Map
		center={centeredTrail.overview.center}
		zoom={centeredTrail.overview.zoom}
	>
		<div slot="layers" let:map={map}>
			{#each layers as layer }
				<MapLayer {map} {layer} />
			{/each}
		</div>
	</Map>
</div>

<style>
	.trail-map {
		display: flex;
		flex: 1;
	}
</style>
