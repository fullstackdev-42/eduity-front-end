import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import users from './modules/users.store'
import organization from './modules/organization.store'
import organizations from './modules/organizations.store'
import unit from './modules/unit.store'
import job from './modules/job.store'
import options from './modules/options.store';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state: {
    edit: false,
    showModal: false,
  },
  mutations: {
    toggle(state, payload) {
      state[payload] = !state[payload];
    },
  },
  modules: {
    users,
    organizations,
    organization,
    unit,
    job,
    options
  }
})

export default store