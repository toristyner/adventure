<script lang="ts">
	import { MapTool } from '../../types';

	export let active: MapTool = MapTool.Default;
</script>

<div class="trailTools">
	<h1 class="trailTools__heading">Trail Tools</h1>
	<div class="trailTools__radio">
		<label class="trailTools__radioOpt">
			<input type="radio" bind:group={active} value={MapTool.Marker} />
			<i class="fa-solid fa-location-dot" />
		</label>
		<label class="trailTools__radioOpt">
			<input type="radio" bind:group={active} value={MapTool.Default} />
			<i class="fa-solid fa-arrow-pointer" />
		</label>
	</div>
</div>

<style>
	.trailTools {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 0.4rem;
		margin: 0.8rem;
		padding: 1.2rem;
		position: absolute;
		top: 0;
		right: 0;
		width: 16rem;
		z-index: 99999;
	}

	.trailTools__heading {
		font-size: 1.4rem;
	}

	.trailTools__radio {
		display: flex;
		flex-direction: column;
	}

	.trailTools__radioOpt {
	}
</style>
