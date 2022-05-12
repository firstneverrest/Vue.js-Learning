export default {
  increment(state) {
    state.counter += 1;
  },
  increase(state, payload) {
    state.counter += payload.value;
  },
};
