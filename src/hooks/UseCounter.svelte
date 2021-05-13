<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };
</script>

<slot {count} {increment} {decrement} />
