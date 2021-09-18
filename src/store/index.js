import { createStore } from 'vuex'
import getProduct from './products/getProduct'
import toggleEl from './toggleElements/toggleEl'
import cartContent from './products/cartContent'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    getProduct,
    toggleEl,
    cartContent,
  }
})
