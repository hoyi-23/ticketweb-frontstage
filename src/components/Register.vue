<template>
    <div class="register pt-4">
        <form @submit.prevent="register">
        <div class="d-flex flex-column mb-2">
            <label class="mb-1" for="setemail">帳號信箱</label>
            <input class="fs-5 mb-2" type="email" id="setemail" placeholder="輸入信箱" v-model="email" required/>
        </div>
        <div class="d-flex flex-column mb-2">
            <label class="mb-1" for="setpassword">帳號密碼</label>
            <input class="fs-5 mb-2" type="password" id="setpassword" placeholder="輸入密碼" v-model="password" required/>
        </div>
        <div class="d-flex flex-column mb-2">
            <label class="mb-1" for="setconfirmPassword">確認密碼 <span class="fs-6 text-danger">{{comparePassword}}</span></label>
            <input class="fs-5 mb-2" type="Password" id="setconfirmPassword" placeholder="再次輸入密碼" v-model="confirmPassword" required/>
        </div>
        <div class="d-flex flex-column pt-3">
            <input class="btn btn-primary" type="submit" value="註冊">
        </div>
    </form>
    </div>
</template>

<script>
import{ref,computed}from'vue';
import {useStore} from 'vuex'
export default {
    name: 'Register',
    setup(){
        const store = useStore()
        //與email輸入綁定
        const email = ref("");
        //與password輸入綁定
        const password = ref("");
        //與confirmPassword輸入綁定
        const confirmPassword = ref("")

        //確認輸入密碼判斷
        const comparePassword = computed(()=>{return password.value !== confirmPassword.value ? '密碼不相符' : ''})

        function register(){
            store.dispatch('registerUser',{email: email.value, password: password.value})
        }


        return{
            email,
            password,
            confirmPassword,
            comparePassword,
            register

        }
    }
}
</script>
