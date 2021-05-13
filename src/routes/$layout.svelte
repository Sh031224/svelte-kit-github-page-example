<script lang="ts">
  import Header from "$lib/Header/index.svelte";
  import "../style/app.scss";
</script>

<Header />

<main>
  <slot />
</main>

<style lang="scss" scoped>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
