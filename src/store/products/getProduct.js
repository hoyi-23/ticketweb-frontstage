import firebase from 'firebase/app';
import 'firebase/firestore'

export default({
    state: {
        productData: [],
        productLoaded: null,
    },
    actions:{
        async getProduct({commit,state}){
          var storageRef = firebase.storage().ref('Images/');
          var getData = firebase.firestore().collection('products');
          const results = await getData.get();
          results.forEach( doc => {
            //確保不重複拿取資料
            if(!state.productData.some( product => product.docId === doc.id) && doc.data().eventActive){
              //取得storage內圖片的url
              storageRef.child(doc.data().eventId+'.jpeg').getDownloadURL()
              .then((photoUrl) => {
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
                  eventPhotos: photoUrl,
                  eventActive: doc.data().eventActive,
                  eventDraft: doc.data().eventDraft
                }
                commit('SET_PRODUCT_DATA',data);
              })
              .catch((error) => {
                // Handle any errors
                console.log(error)
              });
            }else{
              console.log("No document!");
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