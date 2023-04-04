<script lang="ts">
	import { onDestroy, onMount } from "svelte";
  
  export let map: google.maps.Map;
  export let type: 'geoJson';
  export let url: string;
  export let visible: boolean;

  export const fillColor = 'black';
  export const strokeColor = fillColor || 'black';
  export const strokeWeight = 2;

  let data: google.maps.Data;

  onMount(() => {
    if (type === 'geoJson') {
      loadGeoJson()
    }
  })

  const loadGeoJson = () => {
    data = new google.maps.Data({map})
    data.loadGeoJson(url)
    data.setStyle({
      fillColor,
      strokeColor,
      strokeWeight: visible ? strokeWeight : 0
    })
  }

  $: {
    data?.setStyle({
      strokeWeight: visible ? strokeWeight : 0
    })
  }
</script>
