import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let orderModule = {
  state:{
    orderID:0,
  },
  mutations:{
    getOrderID(state, payload){
      state.orderID = payload.orderID;
    }
  }
}

export default new Vuex.Store({
  modules:{
    orderModule
  }
})
