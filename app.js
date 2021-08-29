const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Great Empire',
      author: 'Chitsanupong',
      age: 21,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
