<script lang="ts">
	import { onMount } from "svelte";
  
  export let map: google.maps.Map;
  export let type: 'geoJson';
  export let url: string;

  export const fillColor = 'black';
  export const strokeColor = fillColor || 'black';
  export const strokeWeight = 2;

  onMount(() => {
    if (type === 'geoJson') {
      loadGeoJson()
    }
  })

  const loadGeoJson = () => {
    const data = new google.maps.Data({map})
    data.loadGeoJson(url)
    data.setStyle({
      fillColor,
      strokeColor,
      strokeWeight
    })
  }
</script>
