import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventServices.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Shadman Ah" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
  },
  modules: {},
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
});
