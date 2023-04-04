<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from "@googlemaps/js-api-loader"

	export let center: google.maps.LatLngLiteral
	export let zoom: number

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

</script>

<div id="map">
	{#if !loading}
		<slot name="layers" map={map}></slot>
	{/if}
</div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}
</style>
