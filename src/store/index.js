import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import dissertation from "./modules/dissertation";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        dissertation,
    },
    getters
})

export default store
