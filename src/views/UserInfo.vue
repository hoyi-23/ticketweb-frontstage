<template>
    <div class="my-4">
        <form @submit.prevent="submitUserInfo" class="row g-3">
                <div class="col-md-6">
                    <label for="userName" class="form-label">會員姓名</label>
                    <input type="text" class="form-control" id="userName" v-model="userInfo.name" placeholder="請填寫全名" required>
                </div>
                <div class="col-md-6">
                    <label for="userTel" class="form-label">連絡電話</label>
                    <input type="tel" class="form-control" id="userTel" v-model="userInfo.tel" placeholder="09xxxxxxxx" required>
                </div>
                <div class="col-md-6">
                    <label for="userEmail" class="form-label">電子信箱</label>
                    <input type="email" class="form-control" id="userEmail" v-model="userInfo.email" disabled>
                </div>
                
                <div class="col-12 d-flex align-items-center justify-content-end">
                    
                    <button type="reset" class="btn btn-cancel me-3">取消</button>
                   
                    <button type="submit" class="btn btn-primary">儲存</button>
                </div>
            </form>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import {computed,ref} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'UserInfo',
    setup(){
        //會員資料
        const store = useStore()
        const userData = computed(()=>store.getters.user)

        const userInfo = ref({
            name: userData.value.displayName,
            tele: userData.value.phoneNumber,
            email: userData.value.email
        })

        function submitUserInfo(){
            const user = firebase.auth(firebase.apps[1]).currentUser;
            user.updateProfile({
                displayName: userInfo.value.name,
                phoneNumber: userInfo.value.tele
            }).then(()=>{
                alert('更新成功，下次登入結帳時即可直接帶入資料')
            }).catch((error)=>{
                alert(error)
            })
        }

        return{
            userData,
            userInfo,
            submitUserInfo
        }
    }
}
</script>