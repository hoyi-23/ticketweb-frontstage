export default({
    state: {
        cartContent: [],
    },
    actions:{
        addToCart({commit},payload){
            //payload為商品資料
            commit('ADD_CART_CONTENT',payload)
        },
        deleteFromCart({commit},payload){
            //payload為在cartContent中的索引位置
            commit('DELETE_CART_CONTENT',payload)
        }
    },
    mutations:{
        ADD_CART_CONTENT(state,payload){
            state.cartContent.push(payload)
        },
        DELETE_CART_CONTENT(state,payload){
            state.cartContent.splice(payload,1)
        }
    },
    getters:{
        cartContent(state){
            return state.cartContent;
        }
    }
})