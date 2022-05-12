import { createStore } from 'vuex';

import rootActions from './actions';
import rootGetters from './getters';
import rootMutations from './mutations';

const store = createStore({
  modules: {
    // modules
  },
  state() {
    return {
      counter: 0,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
