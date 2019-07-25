import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],

  },
  getters:{
    getItems(state){
        return state.items;
    },
},
  mutations: {
    addItems(state,obj) {
      var newItems = {id: obj.id, name:obj.name, phone: obj.phone, status:"未预约" ,bookinkTime:""};
      state.items.push(newItems);   
  },

  },
  actions: {

  }
})
