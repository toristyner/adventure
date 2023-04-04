<script lang="ts">
  import trailStore from "../stores/trails.js";
  import selectedStore from "../stores/selected.js";
	import type { TrailEnum } from "../types.js";
  
  let selected: string[];

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

<div class="nav">
	<h1 class="nav__header">Trails</h1>
	<ul class="nav__list">
    {#each trails as trail (trail.id)}
    <label
      class="nav__listitem--label"
      class:active={selected.includes(trail.id)}
    >
      <input
        class="nav__listitem--input"
        type=checkbox bind:group={selected}
        value={trail.id}
        on:change={handleSelect}
      >
      {trail.name}
    </label>
    {/each}
	</ul>
</div>

<style>
	.nav {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.nav__header {
		font-size: 1.6rem;
    margin: 1.2rem;
	}

	.nav__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
	}

  .nav__listitem--input {
    display: none;
  }

  .nav__listitem--label {
    padding: 0.4rem 1.2rem;
    font-size: 1.4rem;
  }

  .nav__listitem--label.active {
    background-color: #537e5d;
  }
</style>
