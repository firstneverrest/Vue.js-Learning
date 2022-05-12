<template>
  <div>
    <h2>About Page</h2>
    <p>Created by: Chitsanupong Tangvasinkul</p>
    <button @click="goToHomePage()">Home Page</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
