<template>
  <div>
    <user
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :title="user.title"
      :name="user.name"
      :email-address="user.email"
      :age="user.age"
      @change-name="changeName"
      @toggle="changeButton"
    ></user>
    <new-user @add-user="addUser"></new-user>
    <show-user></show-user>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      users: [
        {
          id: 1,
          title: 'Life at Finnomena',
          name: 'Carlos1',
          email: 'first1@finnomena.com',
          age: 22,
        },
        {
          id: 2,
          title: 'A day in the life of a Software Engineer (Finnomena)',
          name: 'Carlos2',
          email: 'first2@finnomena.com',
          age: 24,
        },
        {
          id: 3,
          title: 'Agile and Scrum',
          name: 'Carlos3',
          email: 'first3@finnomena.com',
          age: 25,
        },
      ],
    };
  },
  provide() {
    return {
      users: this.users,
    };
  },
  methods: {
    changeName(id) {
      const identifiedUser = this.users.find((user) => user.id === id);
      identifiedUser.name = 'Neverrest';
    },
    addUser(user) {
      console.log(this.users);
      this.users.push(user);
    },
  },
};
</script>

<style>
.active {
  border: 2px solid #fcba03;
}

button {
  background: #fcba03;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  cursor: pointer;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
