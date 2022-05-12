<template>
  <div>
    <h2>Users</h2>
    <p>{{ uName }}</p>
    <p>{{ providedName }}</p>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['username', 'password'],
  setup(props) {
    const uName = computed(() => props.username + ' ' + props.password);

    const providedName = inject('name');

    return {
      uName: uName,
      providedName,
    };
  },
};
</script>

<style></style>
