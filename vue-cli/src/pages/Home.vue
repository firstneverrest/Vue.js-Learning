<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to our Home</p>
    <p>{{ counter }}</p>
    <button @click="addCounter">Add</button>
    <button @click="removeCounter">Subtract</button>
  </div>
</template>

<script>
import useCounter from '../hooks/counter.js';
export default {
  setup() {
    const [counter, addCounter, removeCounter] = useCounter(12);

    return {
      counter,
      addCounter,
      removeCounter,
    };
  },
};
</script>

<style scoped></style>
