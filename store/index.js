//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store并导出
export default new Vuex.Store({
	state: {
		app: {
			token: '',
		}
	},
	mutations: {

	}
})

