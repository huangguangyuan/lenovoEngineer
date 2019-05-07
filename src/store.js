import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let orderModule = {
  state:{
    orderID:0,//订单ID号
    uploadImg:{
      beforeImg:'',
      afterImg:'',
      codeImg:''
    }//上传图片
  },
  mutations:{
    getOrderID(state, payload){
      state.orderID = payload.orderID;
    },
    // 保存上传图片
    saveUploadImg(state, payload){
      state.uploadImg = payload.uploadImg
    }
  }
}

export default new Vuex.Store({
  modules:{
    orderModule
  }
})
