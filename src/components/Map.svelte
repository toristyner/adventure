<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from "@googlemaps/js-api-loader"

	// type MapData = {
	// 	visible: boolean;
	// 	url: string
	// }

	export let center: google.maps.LatLngLiteral
	export let zoom: number
	// export let data: MapData[]

	const loader = new Loader({
		apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		version: "weekly",
	});

	let map: google.maps.Map;
	let loading = true;
	// let geoJsonLayers: any = {}

	onMount(async () => {
		await loader.load()
		map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
			center,
			zoom
		});
		loading = false
	});

	$: {
		map?.panTo(center)
	}

	$: {
		map?.setZoom(zoom)
	}


	// $: {
	// 	if (!loading) {
	// 		data.map(d => {
	// 			if (!geoJsonLayers[d.url]) {
	// 				const layerData = new google.maps.Data()
	// 				layerData.loadGeoJson(d.url)
	// 				geoJsonLayers[d.url] = layerData
	// 			}

	// 			console.log('Map - data - ', d)
	// 		})
	// 	}
	// }
</script>

<div id="map">
	<slot name="layers" map={map}></slot>
</div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}

	.map__layers {
		display: flex;
		flex-direction: column;
		padding: 1.2rem;
	}
</style>
