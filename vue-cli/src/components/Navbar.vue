<template>
  <div>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.active-link {
  border: 2px solid #fcba03;
}
</style>
