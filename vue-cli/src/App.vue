<template>
  <div>
    <router-view />
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: { Navbar },
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
  methods: {},
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
