<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";

  export let map: google.maps.Map;
  export let position: google.maps.LatLng;
  export let label: string;

  let marker: google.maps.Marker

  const dispatch = createEventDispatcher()

  const onMarkerClick = (e: google.maps.MapMouseEvent) => {
    dispatch('google-map-marker-click', e)
  }

  onMount(() => {
    marker = new google.maps.Marker({ position, map })
    marker.setLabel(label)
    marker.addListener('click', onMarkerClick)
  })

  $: {
    marker?.setPosition(position)
  }

  $: {
    marker?.setLabel(label)
  }

</script>

