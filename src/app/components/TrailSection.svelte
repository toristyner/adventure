<script lang="ts">
  import sectionStore from "../stores/section";
</script>

<div class="sections">
  <h1>Selected Section</h1>
  <div>
    <pre>
      {JSON.stringify($sectionStore, null, '  ')}
    </pre>
  </div>
  <h1>My Sections</h1>
  <div>

  </div>
</div>

<style>
  .sections {
    padding: 1.2rem;
  }
</style>