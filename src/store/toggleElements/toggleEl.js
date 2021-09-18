export default({
    state: {
        showingCartContent: false,
    },
    actions:{
        showingCartContent({commit},payload){
            commit('SHOW_CART_CONTENT',payload)
        }
    },
    mutations:{
        SHOW_CART_CONTENT(state,payload){
            state.showingCartContent = payload
        }
    },
    getters:{
        showCartContent(state){
            return state.showingCartContent
        }
    }
})