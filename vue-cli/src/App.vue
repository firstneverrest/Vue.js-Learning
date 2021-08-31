<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name" />
  <button @click="handleClick">Change Title</button>
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">more info</a>
      </template>
      <h3>{{ header }}</h3>
      <p>{{ text }}</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">open modal</button>
  <hr /> -->
  <ShowLifeCycle />
  <SignupForm />
</template>

<script>
import ShowLifeCycle from './components/ShowLifeCycle.vue';
import SignupForm from './components/SignupForm.vue';

export default {
  name: 'App',
  components: {
    // Modal,
    ShowLifeCycle,
    SignupForm,
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
