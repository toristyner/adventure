<script lang="ts">
  export let markerId: string;
  import markerStore from "../../stores/markers";
  
  $: marker = $markerStore[markerId]
</script>

<li>
  <input type="text" value={marker.label} />
  <div>Location: {marker.position.toString()}</div>
</li>