<script lang="ts">
  import trailStore from "../../stores/trails.js";
  import selectedStore from "../../stores/selected.js";
	import type { TrailEnum } from "../../types.js";
	import activeTrailId from "../../stores/activeTrail.js";
  
  let selected: string[];

  activeTrailId
  selectedStore.subscribe(s => {
    selected = s
  })

  $: trails = Object.values($trailStore)

  const handleSelect = ({ target }: Event) => {
    const { value, checked } = target as HTMLInputElement;
    const trailId = value as TrailEnum
    checked ? selectedStore.select(trailId) : selectedStore.unselect(trailId)
  }

</script>

<div class="trailList">
	<h1 class="trailList__header">Trails</h1>
	<ul class="trailList__list">
    {#each trails as trail (trail.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      on:click={() => activeTrailId.set(trail.id)}
      class:active={$activeTrailId === trail.id}
    >
      <input
        class="trailList__input"
        type=checkbox bind:group={selected}
        value={trail.id}
        name={trail.id}
        on:change={handleSelect}
      >
      <label for={trail.id} class="trailList__label">{trail.name}</label>
    </li>
    {/each}
	</ul>
</div>

<style>
	.trailList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20rem;
    height: 8rem;
    position: absolute;
    z-index: 999999;
    background: white;
    border-radius: 0.8rem;
    margin: 1.2rem;
    overflow: hidden;
    padding: 1.2rem;
    bottom: 0;
    left: 0;
	}

	.trailList__header {
		font-size: 1.6rem;
    margin: 0.4rem 0;
	}

	.trailList__list {
    list-style: none;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
	}

  .trailList__label {
    font-size: 1.4rem;
  }
  
  ul {
    display: flex;
    flex: 1;
  }
  li {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0.4rem;
  }
  li.active {
    background-color: #7a8a7a;
  }
</style>
