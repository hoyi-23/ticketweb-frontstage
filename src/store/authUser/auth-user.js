import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

export default({
    state:{
        user: null,
        userName: '',
    },
    actions:{
        //getCurrentUser
        getCurrentUser({commit}){
            commit('GET_CURRENT_USER')
        },
        //login
        loginUser({commit},payload){
            firebase.auth(firebase.apps[1]).signInWithEmailAndPassword(payload.email , payload.password)
            .then(
                userCredential => {
                    var user = userCredential.user;
                    alert('登入成功')
                    commit('setUser',user)
                },
            )
            .catch(err => alert('輸入的帳號密碼有誤或尚未註冊'))
        },
        //register
        registerUser({commit},payload){
            firebase.auth(firebase.apps[1]).createUserWithEmailAndPassword(payload.email,payload.password)
            .then(
                userCredential => {
                    var user = userCredential.user;
                    alert('註冊成功')
                    commit('setUser',user)
                },
            )
            .catch(err => alert(err.message))
        },
        //logout
        logout({commit}){
            firebase.auth(firebase.apps[1]).signOut()
            commit('setUser',null)
        },
        resetUserInfo({commit},payload){
            commit('setUser',payload)
        }
    },
    mutations:{
        setUser(state,payload){
            if(payload){
                state.user = payload
                state.userName = payload.email
                localStorage.setItem('user',JSON.stringify(payload))
            }else{
                state.user = null;
                state.userName = null
                localStorage.removeItem('user')
            }
        },
        GET_CURRENT_USER(state){
            if(localStorage.getItem('user') != null){
                state.user = JSON.parse(localStorage.getItem('user'))
                state.userName = JSON.parse(localStorage.getItem('user')).email
            }else{
                return
            }
        }
    },
    getters:{
        user(state){
            return state.user
        },
        userName(state){
            return state.userName.split('@')[0]
        }
    }
})