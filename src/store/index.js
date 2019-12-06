import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lingeringObj: null,
  },
  mutations: {
    SET_LINGERING_OBJ: (state, val) => (state.lingeringObj = val),
  },
  actions: {
    setLingeringObj: ({ commit, state }, lo) => {
      commit(
        "SET_LINGERING_OBJ",
        lo
      );
    },
  },
  getters: {
    lingeringObjChildren(state) {
      if (state.lingeringObj)
        return state.lingeringObj.children;
      return [];
    },
  }
});
