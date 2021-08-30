<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Change Title</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" @close="toggleModal" />
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My first Vue App',
      header: 'This is Modal',
      text: 'Welcome to Vue project',
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      const title = this.$refs.name.value;
      this.title = title;
      this.$refs.name.classList.add('active');
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.active {
  border: 2px solid #fcba03;
}
</style>
