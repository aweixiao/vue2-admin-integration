import Vue from "vue";
import Vuex from "vuex";
// import routes from "@/router/roters";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // routerList: routes,
  },
  getters,
  mutations: {},
  actions: {},
  modules: {},
});
