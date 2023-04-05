<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

	export let center: google.maps.LatLngLiteral;
	export let zoom: number;

	const dispatch = createEventDispatcher();

	const loader = new Loader({
		apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		version: 'weekly'
	});

	let map: google.maps.Map;
	let loading = true;

	onMount(async () => {
		await loader.load();
		map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
			center,
			zoom
		});
		map.addListener('click', onMapClick);
		loading = false;
	});

	const onMapClick = (e: google.maps.MapMouseEvent) => {
		dispatch('google-map-click', e);
	};

	$: {
		map?.panTo(center);
	}

	$: {
		map?.setZoom(zoom);
	}
</script>

<div id="map">
	{#if !loading}
		<slot name="layers" {map} />
	{/if}
</div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}
</style>
