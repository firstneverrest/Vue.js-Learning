<template>
  <section>
    <form>
      <label>Email </label>
      <input type="email" required v-model="email" />

      <label>Password </label>
      <input type="password" required v-model="password" />
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  align-self: flex-start;
}

input {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
