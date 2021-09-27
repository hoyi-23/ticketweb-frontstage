import firebase from 'firebase/app';

import 'firebase/firestore'

export default({
    state:{
        userOrder: [],
    },
    actions:{
        getOrder({commit,state},payload){
            const userOrderCollection = firebase.firestore(firebase.apps[1]).collection('order')
            const results = userOrderCollection.where("userId", "==", payload).get()
            results.then((querySnapshot) => {
                querySnapshot.forEach( doc => {
                    //確保不重複拿取資料
                    if(!state.userOrder.some(order => order.docId === doc.id)){
                        const data = {
                            docId: doc.id,
                            orderDetail: doc.data().purchaseItems,
                            orderStatus: doc.data().buyerInfo.isPaid,
                            total: doc.data().total
                        }
                        commit('SET_ORDER_DETAIL',data)
                    }
                })
            })
            
        }
    },
    mutations:{
        SET_ORDER_DETAIL(state,payload){
            console.log(payload)
            state.userOrder.push(payload)
        }
    },
    getters:{
        userOrder(state){
            return state.userOrder
        }
    }
})