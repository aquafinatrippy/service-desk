import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: [],
  },
  mutations: {
    SET_TICKETS(state, tickets) {
      state.tickets = tickets;
    },
  },
  actions: {
    async getTickets({ commit }) {
      const { data } = await axios.get("http://localhost:8000/api/tickets");
      commit("SET_TICKETS", data);
    },
  },
  modules: {},
  getters: {
    tickets: (state) => {
      return state.tickets;
    },
  },
});
