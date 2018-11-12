export default {
  state: {
    count: 1,
    show: false
  },
  getters: {
    not_show(state) {
      return !state.show;
    }
  },
  mutations: {
    increament(state) {
      state.count++;
    }
  },
  actions: {
    act_increament(context) {
      context.commit("increament");
    }
  }
};
