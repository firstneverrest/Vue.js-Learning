const app = Vue.createApp({
  data() {
    return {
      username: '',
      users: [],
    };
  },
  methods: {
    addUser() {
      this.users.push(this.username);
      this.username = '';
    },
  },
});

app.component('user-list', {
  template: `
  <li
  >
    <p>{{ user }}</p>
    <input type="text" @click.stop />
    <p>{{ isChecked }}</p>
    <button @click="check">Check</button>
  </li>
  `,
  data() {
    return {
      isChecked: false,
      user: '',
    };
  },
  methods: {
    check() {
      this.isChecked = !this.isChecked;
    },
  },
});

app.mount('#user');
