<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let map: google.maps.Map;
	export let position: google.maps.LatLng;
	export let label = '';
	export let icon: google.maps.Icon

	let marker: google.maps.Marker;

	const dispatch = createEventDispatcher();

	const onMarkerClick = (e: google.maps.MapMouseEvent) => {
		dispatch('google-map-marker-click', e);
	};

	onMount(() => {
		marker = new google.maps.Marker({ position, map });
		marker.setLabel(label);
		marker.addListener('click', onMarkerClick);

		if (icon) {
			marker.setIcon(icon)
		}
	});

	$: {
		marker?.setPosition(position);
	}

	$: {
		marker?.setLabel(label);
	}
</script>
