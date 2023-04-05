<script lang="ts">
	import Theme from '../packages/theme/Theme.svelte';
	import Header from './components/Header.svelte';
	import TrailList from './components/TrailList/TrailList.svelte';
	import TrailMap from './components/TrailMap/TrailMap.svelte';
	import AdventurePlan from './components/TrailPlan/TrailPlan.svelte';
</script>

<Theme>
	<div class="app">
		<Header />
		<div class="app__content">
			<TrailList />
			<TrailMap />
			<AdventurePlan />
		</div>
	</div>
</Theme>

<style>
	.app {
		display: flex;
		flex: 1;
		height: 100%;
		flex-direction: column;
	}

	.app__content {
		display: flex;
		flex: 1;
		flex-direction: row;
	}
</style>
