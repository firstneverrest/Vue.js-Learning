<template>
  <section>
    <h3>Lifecycle Hooks show case</h3>
    <div v-if="showBox" class="center">
      <div class="box"></div>
    </div>
    <button @click="closeBox">Close Box</button>
    <button @click="openBox">Open Box</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showBox: false,
    };
  },
  beforeCreate() {
    console.log('%c Lifecycle Hooks', 'color: yellow; font-weight: bold');
    console.log('component before created');
  },
  created() {
    console.log('component created');
  },
  beforeMount() {
    console.log('component before mounted');
  },
  mounted() {
    console.log('component mounted');
  },
  beforeUpdate() {
    console.log('component before updated');
  },
  updated() {
    console.log('component updated');
  },
  beforeUnmount() {
    console.log('component before unmounted');
  },
  unmounted() {
    console.log('component after unmounted');
  },
  methods: {
    openBox() {
      this.showBox = true;
    },
    closeBox() {
      this.showBox = false;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 8px;
}
.center {
  display: grid;
  place-items: center;
}
.box {
  width: 200px;
  height: 200px;
  background-color: #0add0a;
}
</style>
