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
        <div class="container" v-else>
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <router-link :to="{name: 'UserInfo'}" class="btn btn-outline-primary me-3">修改會員資料</router-link>
                    <router-link :to="{name: 'MyTicket'}" class="btn btn-outline-primary">查看票券</router-link>
                </div>
                <div>
                    <button type="button" @click="gotoCheckout()" v-if="cart.length > 0" class="btn btn-secondary me-2">
                        前往結帳
                    </button>
                    <!-- Button trigger modal 確認是否要登出-->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        登出
                    </button>
                </div>
                 
            </div>
            <router-view/>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            登出後，尚未完成結帳之商品將被清除!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">保持登入</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="logout()">確認登出</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import {computed,onBeforeMount} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name: 'Admin',
    components:{
        Login,
        Register
    },
    setup(){
        const router = useRouter()
        const store = useStore()
        const user = computed(()=>store.getters.user)
        const cart = computed(()=>store.getters.cartContent)
        async function logout(){
            
            store.dispatch('logout')
            store.dispatch('clearCart')
        }

        function gotoCheckout(){
            router.push('/checkout')
        }
        onBeforeMount(()=>{
            store.dispatch('getCurrentUser')
            
        })
        return{
            user,
            logout,
            cart,
            gotoCheckout
        }
    }
}
</script>

<style lang="scss" scoped>

</style>