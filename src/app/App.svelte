<script lang="ts">
	import Header from './components/Header.svelte';
	import TrailList from './components/TrailList.svelte';
	import TrailMap from './components/TrailMap.svelte';

</script>

<div class="app">
	<Header />
	<div class="app__content">
		<TrailList />
		<TrailMap />
	</div>
</div>

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
