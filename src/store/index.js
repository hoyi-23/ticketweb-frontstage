import { createStore } from 'vuex'
import getProduct from './products/getProduct'
import toggleEl from './toggleElements/toggleEl'
import cartContent from './products/cartContent'
import authUser from './authUser/auth-user'
import getOrder from './products/getOrder'
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
    authUser,
    getOrder
  }
})
