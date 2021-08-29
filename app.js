const app = Vue.createApp({
  data() {
    return {
      title: 'The Great Empire',
      author: 'Chitsanupong',
      age: 21,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount('#app');
