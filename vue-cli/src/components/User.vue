<template>
  <div class="container">
    <h1>Id {{ id }} : {{ title }}</h1>
    <p>{{ name }}</p>
    <p>{{ emailAddress }}</p>
    <button @click="handleClick()">Change Name</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: 'My first Vue App',
      required: true,
    },
    name: String,
    emailAddress: String,
    age: {
      type: Number,
      required: true,
      validator: (value) => {
        return value > 0;
      },
    },
  },
  emits: {
    'change-name': (id) => {
      if (id) {
        return true;
      }
      console.warn('Id is required!');
      return false;
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('change-name', this.id);
    },
  },
};
</script>

<style scoped></style>
