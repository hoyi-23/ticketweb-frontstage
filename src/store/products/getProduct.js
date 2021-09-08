import firebase from 'firebase/app';
import 'firebase/firestore'

export default({
    state: {
        productData: [],
        productLoaded: null,
    },
    actions:{
        async getProduct({commit,state}){
            var getData = firebase.firestore().collection('products');
            const results = await getData.get();
            results.forEach( doc => {
              //確保不重複拿取資料
              if(!state.productData.some( product => product.docId === doc.id)){
                const data = {
                  docId: doc.id,
                  eventId: doc.data().eventId,
                  eventTitle: doc.data().eventTitle, 
                  eventType: doc.data().eventType,
                  eventCategory: doc.data().eventCategory,
                  eventLocation: doc.data().eventLocation,
                  eventFullPrice: doc.data().eventFullPrice,
                  eventStudentPrice: doc.data().eventStudentPrice,
                  eventDiscountPrice: doc.data().eventDiscountPrice,
                  eventStartDate: doc.data().eventStartDate,
                  eventEndDate: doc.data().eventEndDate,
                  eventDescription: doc.data().eventDescription,
                  eventPhotos: doc.data().eventPhotos,
                  eventActive: doc.data().eventActive,
                  eventDraft: doc.data().eventDraft
                };
                commit('SET_PRODUCT_DATA',data);
              }
            });
            //確保資料完成拿取
            commit('PRODUCT_LOADED',true)
          },
    },
    mutations:{
        SET_PRODUCT_DATA(state,payload){
            state.productData.push(payload)
        },
        PRODUCT_LOADED(state,payload){
            state.productLoaded = payload
        },
    },
    getters:{
        productData(state){
            return state.productData
        },
        productLoaded(state){
            return state.productLoaded
        },
    }
})