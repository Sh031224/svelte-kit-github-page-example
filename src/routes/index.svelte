<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Counter from "$lib/Counter.svelte";

  let count: number = 0;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Counter />
