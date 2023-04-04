<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
  
  export let map: google.maps.Map;
  export let type: 'geoJson' | 'line';
  export let url: string | undefined;
  export let visible: boolean;

  export let fillColor = 'purple';
  export let strokeColor = fillColor || 'purple';
  export let strokeWeight = 4;

  let data: google.maps.Data;
  let loading = true;

  const dispatch = createEventDispatcher()

  onMount(async () => {
    if (type === 'geoJson' && url !== undefined) {
      await loadGeoJson(url)
      loading = false
    }
  })

  $: dataStyle = {
    fillColor,
    strokeColor,
    strokeWeight: visible ? strokeWeight : 0
  }

  const loadGeoJson = async (src: string) => {
    data = new google.maps.Data({map})
    await data.loadGeoJson(src)
    data.setStyle(dataStyle)
    data.addListener('click', onClickLayer)
  }

  $: {
    data?.setStyle(dataStyle)
  }

  const onClickLayer = (e: google.maps.Data.MouseEvent) => {
    dispatch('google-map-data-click', e)
  }

  // const onMouseOverLayer = (e: google.maps.Data.MouseEvent) => {
  //   dispatch('google-map-data-mouseover', e)
  // }

</script>
