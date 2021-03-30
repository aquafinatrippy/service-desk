import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sort from "fast-sort";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: [],
    fetching: false
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
    SORT_TICKETS(state, sortKey) {
     
      const tickets = this.state.tickets;
      let sorted


      if(sortKey.status === false){
        sorted = sort(tickets).asc([
          u => u.[sortKey.key]
        ]) 
      }else{
        sorted = sort(tickets).desc([
        u => u.[sortKey.key]
      ]) 
      }
      
      state.tickets = sorted;
  }
  },
  actions: {
    
   
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
