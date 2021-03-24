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
    async deleteTicket({ commit }, id) {
      await axios.delete(`http://localhost:8000/api/ticket/${id}`);
      const tickets = this.tickets.filter((o) => o._id !== id);
      commit("SET_TICKETS", tickets);
    },
  },
  modules: {},
  getters: {
    tickets: (state) => {
      return state.tickets;
    },
  },
});
