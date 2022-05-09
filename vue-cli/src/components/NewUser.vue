<template>
  <div class="user-form">
    <h1>Add New user</h1>
    <div class="user-container">
      <section>
        <label>Id:</label>
        <input type="text" required v-model="id" />
      </section>

      <section>
        <label>Title:</label>
        <input type="text" required v-model="title" />
      </section>

      <section>
        <label>Name:</label>
        <input type="text" required v-model="name" />
      </section>

      <section>
        <label>E-mail:</label>
        <input type="text" required v-model="emailAddress" />
      </section>

      <section>
        <label>Age:</label>
        <input type="number" required v-model="age" />
      </section>
      <button @click="addUser()">Add User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      title: '',
      name: '',
      emailAddress: '',
      age: 0,
    };
  },
  methods: {
    addUser() {
      this.$emit('add-user', {
        id: parseInt(this.id),
        title: this.title,
        name: this.name,
        email: this.emailAddress,
        age: this.age,
      });
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  margin: 1rem 0;
}

.user-container {
  align-self: center;
}

.user-form {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
