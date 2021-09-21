<template>
    <div class="eventDetail">
        <div class="container pt-5 pb-lg-4">
            <div class="row align-items-center">
            <!--左側圖片-->
                <div class="col-12 col-lg-6">
                    <img :src="eventData.eventPhotos" :alt="eventData.eventTitle" class="img" style="max-height: 500px">
                </div>
            <!--右側標題/活動介紹-->
            <div class="col-12 col-lg-6 d-flex flex-column">
                <h1 class="text-center py-3 pt-lg-0  fw-bold">{{eventData.eventTitle}}</h1>
                <div class="contentDetail border-top border-3 py-3">
                    <h2 class="fs-4 fw-bold">活動介紹</h2>
                    <p class="py-2">{{eventData.eventDescription}}</p>
                    <div class="d-flex">
                        <ul>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventType === 'temp'">短期活動</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventType === 'regular'">常設活動</li>
                        </ul>
                        <ul class="ps-2">
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'music' ">音樂</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'movie' ">影劇</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'dance' ">舞蹈</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'art' ">藝術</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'design' ">設計</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'food' ">美食</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'travel' ">旅遊</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'family' ">親子</li>
                            <li class="fs-6 badge bg-light text-dark" v-if="eventData.eventCategory === 'drama' ">戲劇</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="d-block btn addToCart py-2 text-center rounded" @click="addToCart(ticketQuan,eventData)">
                        加入購物車
                </div>
            </div>
            </div>
        </div>
        <!--購票(數量/價格)+加入購物車按鈕-->
        <div class="container">
            <ul class="row">
                <li class="col-12 col-md-4 my-2 my-lg-0">
                    <div class="priceDetail d-flex align-items-center border border-5 py-4 rounded">
                        <div class="px-3">
                            <span class="fs-6">全票</span>
                            <p class="fs-3 m-0">{{eventData.eventFullPrice}}</p>
                        </div>
                        <ul class="d-flex align-items-center flex-fill">
                            <li class="fs-2 flex-grow-1 text-center btn" @click="add('full')">+</li>
                            <li class="fs-1 flex-grow-1 text-center">{{ticketQuan.full}}</li>
                            <li class="fs-2 flex-grow-1 text-center btn" @click="minus('full')">-</li>
                        </ul>
                    </div>
                </li>
                <li class="col-12 col-md-4 my-2 my-lg-0">
                    <div class="priceDetail d-flex align-items-center border border-5 py-4 rounded">
                        <div class="px-3">
                            <span class="fs-6">學生票</span>
                            <p class="fs-3 m-0">{{eventData.eventStudentPrice}}</p>
                        </div>
                        <ul class="d-flex align-items-center flex-fill">
                            <li class="fs-2 flex-grow-1 text-center btn" @click="add('student')">+</li>
                            <li class="fs-1 flex-grow-1 text-center">{{ticketQuan.student}}</li>
                            <li class="fs-2 flex-grow-1 text-center btn" @click="minus('student')">-</li>
                        </ul>
                    </div>
                </li>
                <li class="col-12 col-md-4 my-2 my-lg-0">
                    <div class="priceDetail d-flex align-items-center border border-5 py-4 rounded">
                        <div class="px-3">
                            <span class="fs-6">優待票</span>
                            <p class="fs-3 m-0">{{eventData.eventDiscountPrice}}</p>
                        </div>
                        <ul class="d-flex align-items-center flex-fill">
                            <li class="fs-2 flex-grow-1 text-center btn" @click="add('discount')">+</li>
                            <li class="fs-1 flex-grow-1 text-center">{{ticketQuan.discount}}</li>
                            <li class="fs-2 flex-grow-1 text-center btn" @click="minus('discount')">-</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 購票資訊/場地 先以v-if v-else 來判斷-->
        <!--未來若有於後台加上場地管理 可以再更改-->
        <!-- <div class="container py-4">
            <div v-if="eventData.eventLocation == 'Aroom'">
                <img src="/ticketweb-frontstage/assets/image/arom/jpg" alt="圓形劇場" class="img"  style="max-height: 500px">
                <h2 class="fs-3">活動地點 : 圓形劇場</h2>
                <ul>
                    <li>容納人數: 500人</li>
                    <li>地址: 台北市 圓形區 圓形路 00號 A棟</li>
                </ul>
            </div>
            <div v-if="eventData.eventLocation == 'Broom'">
                <img src="/ticketweb-frontstage/assets/image/brom/jpg" alt="室外舞台" class="img"  style="max-height: 500px">
                <h2 class="fs-3">活動地點 : 室外舞台</h2>
                <ul>
                    <li>容納人數: 1000人</li>
                    <li>地址: 台北市 室外區 室外路 11號之B</li>
                </ul>
            </div>
        </div>  -->


        <!--cart-->
        <CartOpenIcon></CartOpenIcon>
        <!--Footer--> 
        <Footer></Footer>
        <!--cart-->
        <CartContent />
    </div>
</template>

<script>
import CartOpenIcon from '../components/CartOpenIcon.vue'
import CartContent from '../components/CartContent.vue'
import Footer from '../components/Footer.vue'

import {ref,computed,onBeforeMount,watch} from 'vue'
import { useRoute } from 'vue-router'
import {useStore} from 'vuex'
export default {
    name: 'EventDetail',
    components: {
         CartOpenIcon,
         CartContent,
         Footer
    },
    setup(){
        const store = useStore();
        const route = useRoute()
        const eventData = ref([])
        const eventId = computed(()=>route.params.eventId)
        const AllProduct = computed(()=>store.getters.productData)
        //從其他頁面進入時，藉由id取得資料
        onBeforeMount(()=>{
            eventData.value = filterEventData(eventId.value)
        })
        //監控id。若有改變就再重新取資料一次
        watch(eventId,(val)=>{
            eventData.value = filterEventData(val)
        })

        function filterEventData(val){
            const data = AllProduct.value.filter(item =>item.eventId == val)
            
            ticketQuan.value.full = 0
            ticketQuan.value.student = 0
            ticketQuan.value.discount = 0
            return data[0]
        }
        
        const ticketQuan = ref({
            full: 0,
            student: 0,
            discount: 0,
        })

        function add(e){
            if(e === 'full'){
                ticketQuan.value.full++
            }
            if(e === 'student'){
                 ticketQuan.value.student++
            }
            if(e === 'discount'){
                 ticketQuan.value.discount++
            }
        }

        function minus(e){
            if(e === 'full' && ticketQuan.value.full > 0){
                ticketQuan.value.full--
            }
            if(e === 'student' && ticketQuan.value.student > 0){
                 ticketQuan.value.student--
            }
            if(e === 'discount' && ticketQuan.value.discount > 0){
                 ticketQuan.value.discount--
            }
        }

        function addToCart(a,b){
            console.log(a.full)
            if(a.full == 0 && a.student == 0 && a.discount == 0){
                alert('請選擇票券數量')
                return
            }else{
                const addTicket = ref({
                    title: b.eventTitle,
                    id: b.eventId,
                    num: {
                        full: a.full,
                        student: a.student,
                        discount: a.discount
                    },
                    subTotal:(b.eventFullPrice*a.full)+(b.eventStudentPrice*a.student)+(b.eventDiscountPrice*a.discount),
                })
                 
                store.dispatch('addToCart',addTicket.value)
                console.log(addTicket.value)
                a.full = 0
                a.student = 0
                a.discount = 0
                alert('加入完成')
            }
        }

        return{
            eventId,
            eventData,
            AllProduct,
            ticketQuan,
            addToCart,
            add,
            minus
        }
    }
}
</script>

<style lang="scss" scoped>
    .addToCart{
        background: #E31277;
        color: #fff;
        transition: 0.5s;
        &:hover{
            background: #333;
        }
    }
</style>