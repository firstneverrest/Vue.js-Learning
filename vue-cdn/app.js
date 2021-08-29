const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'The Great Empire',
          author: 'Chitsanupong',
          age: 21,
          isPublished: true,
        },
        {
          title: 'The Abyssal World',
          author: 'Carlos',
          age: 18,
          isPublished: true,
        },
        {
          title: 'The Motivation of Life',
          author: 'Mortos',
          age: 26,
          isPublished: false,
        },
      ],
      url: 'https://www.google.com/',
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
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isPublished);
    },
  },
});

app.mount('#app');
