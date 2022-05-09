<template>
  <div>
    <h1>Users</h1>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['users'],
};
</script>

<style></style>
