import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    account: {
      wallet: ''
    },
    action: {
      label: '',
      object: '',
    },
  },
  getters: {
    account: state => state.account,
    action: state => state.action,
    rememberMe: state => state.rememberMe,
  },
  mutations: {
    REMEMBER_DEV_ACCOUNT: (state, payload) => {
      state.account.username = payload.username;
      state.account.password = payload.password;
    },
    SET_ACTION: (state, payload) => {
      state.action.label = payload.label;
      state.action.object = payload.object;
    },
    SET_REMEMBER_ME: (state, payload) => {
      state.rememberMe = payload;
    },
  actions: {
    setAction: (context, payload) => {
      context.commit('SET_ACTION', payload);
    },
    rememberDevAccount: (context, payload) => {
      context.commit('REMEMBER_DEV_ACCOUNT', payload);
    },
  },
});
