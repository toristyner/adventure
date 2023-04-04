<script lang="ts">
	import { onMount } from "svelte";


  export let map: google.maps.Map;
  export let position: google.maps.LatLng;
  export let label: google.maps.MarkerLabel

  let marker: google.maps.Marker

  onMount(() => {
    marker = new google.maps.Marker({ position, map, label })
  })

  $: {
    marker?.setPosition(position)
  }

  $: {
    marker?.setLabel(label)
  }

</script>

