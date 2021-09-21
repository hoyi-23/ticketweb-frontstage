<template>
    <div class="admin py-5">
        <!--v-if尚未登入，需驗證登入-->
        <div class="container d-flex flex-column align-items-center" v-if="user == null">
            <ul class="nav pb-4" id="pills-tab" role="tablist">
                <li class="me-3" role="presentation">
                    <button class="btn btn-outline-primary active" id="login" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true">會員登入</button>
                </li>
                <li role="presentation">
                    <button class="btn btn-outline-primary" id="pills-register-tab" data-bs-toggle="pill" data-bs-target="#pills-register" type="button" role="tab" aria-controls="pills-register" aria-selected="false">會員註冊</button>
                </li>
            </ul>
            <div class="tab-content border-top border-3" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                    <Login></Login>
                </div>
                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                    <Register></Register>
                </div>
            </div>
        </div>

        <!--v-if已登入，顯示內容-->
        <div v-if="user != null">
            {{userName}}
            <button @click="logout()">Logout</button>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

import {computed,onBeforeMount} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'Admin',
    components:{
        Login,
        Register
    },
    setup(){
        const store = useStore()
        const user = computed(()=>store.getters.user)
        const userName = computed(()=>store.getters.userName)

        function logout(){
            store.dispatch('logout')
        }
        onBeforeMount(()=>{
            store.dispatch('getCurrentUser')
        })
        return{
            user,
            userName,
            logout
        }
    }
}
</script>

<style lang="scss" scoped>

</style>