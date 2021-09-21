<template>
    <div class="login pt-4">
        <form @submit.prevent="Login">
        <div class="d-flex flex-column mb-2">
            <label class="mb-1" for="email">帳號信箱</label>
            <input class="fs-5 mb-2" type="email" id="email" placeholder="輸入信箱" v-model="email" required/>
        </div>
        <div class="d-flex flex-column mb-2">
            <label class="mb-1" for="password">帳號密碼</label>
            <input class="fs-5 mb-2" type="password" placeholder="輸入密碼" v-model="password" required/>
        </div>
        <div class="d-flex flex-column pt-3">
            <input class="btn btn-primary" type="submit" value="登入">
        </div>
    </form>
    </div>
</template>

<script>
import{ref}from'vue';
import {useStore} from 'vuex'
export default {
    name: 'Login',
    setup(){
        const store = useStore()
        //與email輸入綁定
        const email = ref("");
        //與password輸入綁定
        const password = ref("");
        
        function Login(){
            store.dispatch('loginUser',{email: email.value, password: password.value})
        }



        return{
            email,
            password,
            Login
        }
    }
}
</script>