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
    async filtering({ commit }, filterType) {
      console.log(filterType);
      if (filterType === "Date") {
        const { data } = await axios.get("http://localhost:8000/api/tickets");
        commit("SET_TICKETS", data.reverse());
      }else if(filterType === "Ongoing" || filterType === "Closed" || filterType === "Open"){
        const { data } = await axios.get("http://localhost:8000/api/tickets");
        commit("SET_TICKETS", data.filter(x => x.status === filterType.toLowerCase()));
      }
       else {
        const { data } = await axios.get("http://localhost:8000/api/tickets");
        commit("SET_TICKETS", data);
      }
    },
    async getTickets({ commit }) {
      const { data } = await axios.get("http://localhost:8000/api/tickets");
      commit("SET_TICKETS", data);
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
          status
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
