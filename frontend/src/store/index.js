import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sort from "fast-sort";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: [],
    fetching: false,
  },
  mutations: {
    SET_TICKETS(state, tickets) {
      state.tickets = tickets;
    },
    START_FETCH(state) {
      state.fetching = true;
    },
    STOP_FETCH(state) {
      state.fetching = false;
    },
  },
  actions: {
    async sortTickets({ commit }, sortBy) {
     
      try {
        const { data } = await axios.get("http://localhost:8000/api/tickets");
        

        let sortedData = sort(data).by([
          { [sortBy[0].date]: (u) => u.created_at },
          { [sortBy[0].priority]: (u) => u.priority },
          { [sortBy[0].status]: (u) => u.status },
        ]);
        console.log(sort(data).[sortBy[0].date](u => u.created_at))
        console.log(sort(data).[sortBy[0].priority](u => u.priority))
        console.log(sort(data).[sortBy[0].status](u => u.status))
        

        commit("SET_TICKETS", sortedData);
      } catch (error) {
        console.log(error);
      }
    },
    async getTickets({ commit }) {
      commit("START_FETCH");
      const { data } = await axios.get("http://localhost:8000/api/tickets");
      commit("SET_TICKETS", data);
      commit("STOP_FETCH");
    },
    async deleteTicket({ commit }, id) {
      await axios.delete(`http://localhost:8000/api/ticket/${id}`);
      const { data } = await axios.get("http://localhost:8000/api/tickets");
      commit("SET_TICKETS", data);
    },
    async createTicket({ commit }, ticketInfo) {
      let nr = Math.floor(Math.random() * 999);
      try {
        await axios.post("http://localhost:8000/api/ticket", {
          title: ticketInfo.title,
          description: ticketInfo.description,
          email: ticketInfo.email,
          priority: ticketInfo.rating,
          ticketNr: nr,
        });
        const { data } = await axios.get("http://localhost:8000/api/tickets");
        commit("SET_TICKETS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateTicket({ commit }, ticketInfo) {
      try {
        const { title, description, email, rating, id, status } = ticketInfo;
        await axios.put(`http://localhost:8000/api/ticket/${id}`, {
          title,
          description,
          email,
          priority: rating,
          status,
        });
        const { data } = await axios.get("http://localhost:8000/api/tickets");
        commit("SET_TICKETS", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    tickets: (state) => {
      return state.tickets;
    },
  },
});
