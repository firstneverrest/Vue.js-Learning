import { ref } from 'vue';

export default function useCounter(startValue = 0) {
  const counter = ref(startValue);

  function addCounter() {
    counter.value++;
  }

  function removeCounter() {
    counter.value--;
  }

  return [counter, addCounter, removeCounter];
}
