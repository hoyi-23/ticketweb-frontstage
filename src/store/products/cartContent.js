export default({
    state: {
        cartContent: [],
        total: 0,
    },
    actions:{
        getCartContent({commit}){
            commit('GET_CART_CONTENT')
        },
        addToCart({commit},payload){
            //payload為商品資料
            commit('ADD_CART_CONTENT',payload)
        },
        deleteFromCart({commit},payload){
            //payload為在cartContent中的索引位置
            commit('DELETE_CART_CONTENT',payload)
        },
        clearCart({commit}){
            commit('CLEAR_CART')
        }
    },
    mutations:{
        GET_CART_CONTENT(state){
            if(localStorage.getItem('cartItem') != null){
                state.cartContent = JSON.parse(localStorage.getItem('cartItem'))
                state.total = JSON.parse(localStorage.getItem('totalPrice'))
            }else{
                return
            }
        },
        ADD_CART_CONTENT(state,payload){
            state.cartContent.push(payload)
            state.total += payload.subTotal
            localStorage.setItem('cartItem',JSON.stringify(state.cartContent))
            localStorage.setItem('totalPrice',JSON.stringify(state.total))
        },
        DELETE_CART_CONTENT(state,payload){
            state.cartContent.splice(payload.index,1)
            state.total = state.total-payload.subTotal
            localStorage.setItem('cartItem',JSON.stringify(state.cartContent))
            localStorage.setItem('totalPrice',JSON.stringify(state.total))

        },
        CLEAR_CART(state){
            state.cartContent = []
            state.total = 0
            localStorage.clear('cartItem')
            localStorage.clear('totalPrice')

        }
    },
    getters:{
        cartContent(state){
            return state.cartContent;
        },
        total(state){
            return state.total;
        }
    }
})