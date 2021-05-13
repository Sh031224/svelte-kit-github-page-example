<script context="module" lang="ts">
  export const ssr = true;
</script>

<script lang="ts">
  export let count: number;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count += 1;
  };
</script>

<section>
  <h1>Svelte kit + Github Page</h1>
  <p>{count}</p>

  <article>
    <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button>
  </article>
</section>

<style lang="scss" scoped>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      font-size: 2.1rem;
    }

    p {
      font-size: 1.4rem;
      color: red;
    }

    button {
      border: black 0.5px solid;
      background-color: burlywood;
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
  }
</style>
