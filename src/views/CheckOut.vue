<template>
    <div class="checkout py-5">
        <div class="container ">
            <!--購物車內容-->
            <div class="table-responsive-lg">
                <h2 class="fs-3 mb-3">購買內容</h2>
                <table class="table table-hover table-primary py-3 text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">票券名稱</th>
                            <th scope="col" class="text-nowrap">全票</th>
                            <th scope="col" class="text-nowrap">學生票</th>
                            <th scope="col" class="text-nowrap">優惠票</th>
                            <th scope="col" class="text-nowrap">小計</th>
                            <th scope="col" class="text-nowrap">刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in cartItem" :key="index">
                            <th scope="row">{{`${index+1}`}}</th>
                            <td class="text-nowrap">{{item.title}}</td>
                            <td>{{item.num.full}}</td>
                            <td>{{item.num.student}}</td>
                            <td>{{item.num.discount}}</td>
                            <td>{{item.subTotal}}</td>
                            <td>
                                <a href="#" @click.prevent="deleteFromCart(index,item.subTotal)">
                                    <span class="material-icons-outlined">delete_forever</span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" class="text-nowrap">總計</th>
                            <td colspan="5"></td>
                            <td class="fs-2 fw-bold">{{total}}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <hr>
            <form @submit.prevent="submitCheckoutForm" class="buyerInfo row g-3">
                <div class="d-flex align-items-center">
                    <h2 class="fs-3">填寫購買資訊</h2>
                    <div class="form-check ms-5">
                        <input class="form-check-input" type="checkbox" id="sameAsUser" v-model="sameAsUser">
                        <label class="form-check-label" for="sameAsUser">
                            帶入用戶資料
                        </label>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault01" class="form-label">購買人姓名</label>
                    <input type="text" class="form-control" id="validationDefault01" placeholder="請填寫全名" v-model="buyer.name" required>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">電子信箱</label>
                    <input type="email" class="form-control" id="validationDefault02" placeholder="xxx@gmail.com" v-model="buyer.email" required>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault03" class="form-label">連絡電話</label>
                    <input type="tel" class="form-control" id="validationDefault03" placeholder="09xxxxxxxx" v-model="buyer.tele" required>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">付款方式</label>
                    <select class="form-select" id="validationDefault04" v-model="buyer.payment" required>
                        <option selected disabled value="">請選擇付款方式</option>
                        <option value="cash">超商付款取票</option>
                        <option value="credit">線上付款</option>
                    </select>
                </div>
                <!--信用卡資訊 if payment == credit card-->
                <transition name="fade">
                    <div class="col-md-6" v-if="buyer.payment == 'credit'">
                        <div class="rounded bg-primary p-3 text-white">
                            <p class="fs-5">信用卡資訊</p>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="validationDefault04" class="form-label">信用卡持有人</label>
                                    <input type="text" class="form-control" id="validationDefault04" placeholder="請填寫全名" v-model="buyer.creditCard.name" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationDefault05" class="form-label">信用卡號碼(16碼)</label>
                                    <input type="text" class="form-control" id="validationDefault05" placeholder="xxxx xxxx xxxx xxxx" v-model="buyer.creditCard.num" required>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault06" class="form-label">到期日(Exp)</label>
                                    <input type="text" class="form-control" id="validationDefault06" placeholder="xx/xx" v-model="buyer.creditCard.exp" required>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault07" class="form-label">驗證碼(3碼)</label>
                                    <input type="text" class="form-control" id="validationDefault07" placeholder="xxx" v-model="buyer.creditCard.verified" required>
                                </div>
                            </div>
                        </div> 
                    </div>
                </transition>
                <div class="col-12 d-flex align-items-center justify-content-end">
                    <div class="form-check me-4">
                        <input class="form-check-input" type="checkbox" id="invalidCheck2" v-model="buyer.agreement" required>
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                    <!-- if payment == credit card-->
                    <button type="submit" v-if="buyer.payment == 'credit'" class="btn btn-primary">確認付款</button>
                    <!-- else-->
                    <button type="submit" v-else class="btn btn-primary">送出訂單</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed,ref,watch} from 'vue'
import firebase from 'firebase/app';
import 'firebase/firestore'
import {useRouter} from 'vue-router'
export default {
    name: 'CheckOut',

    setup(){
        const store = useStore()
        const router = useRouter()
        //購物車內容
        const cartItem = computed(()=>store.getters.cartContent)

        function deleteFromCart(index,subTotal){
            store.dispatch('deleteFromCart',{index,subTotal})
        }
        const total = computed(()=>store.getters.total)
        //購買資訊
        const userData = computed(()=>store.getters.user)

        const sameAsUser = ref()
        const buyer = ref({
            name: null,
            email: null,
            tele: null,
            payment: null,
            isPaid: null,
            agreement: null,
            creditCard: {
                name: null,
                num: null,
                exp: null,
                verified: null
            }

        })
        //若帶入會員資料為true，判斷會員資料使否有填寫，若有填入，若無alert尚未填寫會員資料
        watch(sameAsUser,val =>{
            if(val == true){
                buyer.value.name = userData.value.displayName
                buyer.value.email = userData.value.email
                buyer.value.tele = userData.value.phoneNumber
            }else{
                buyer.value.name = null
                buyer.value.email = null
                buyer.value.tele = null
            }
        })

        //送出表單
        async function submitCheckoutForm(){
            //收款與否目前先以簡單的按 結帳 或 下訂單 按鈕做區分 
            if(buyer.value.payment == 'credit'){
                buyer.value.isPaid == true
            }else{
                buyer.value.isPaid == false
            }
            const ordersCollection = await firebase.firestore(firebase.apps[1]).collection('order').doc();
            await ordersCollection.set({
                userId: userData.value.uid,
                buyerInfo: buyer.value,
                purchaseItems: cartItem.value,
                total: total.value
            })
            router.push({
                path: '/admin/myticket'
            })
            store.dispatch('clearCart')
        }
        return{
            cartItem,
            deleteFromCart,
            total,
            userData,

            //form data
            sameAsUser,
            buyer,

            //checkoutForm
            submitCheckoutForm


        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>