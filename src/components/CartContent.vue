<template>
<!--購物車內容-->
    <div class="cartcontent position-fixed top-0 py-4 px-3 d-flex flex-column" :class="{ 'slidein' : showCartContent}">
        <div class="cart__header d-flex justify-content-between">
            <h2 class="fs-2 fw-bold text-white m-0">購物車</h2>
            <span @click="closingCartContent" class="closeIcon material-icons-outlined fs-2 fw-bold text-white">disabled_by_default</span>
        </div>
        <div class="cart__body">
            <div class="emptyCart d-flex flex-column justify-content-center" v-if="cartContent.length <= 0">
                <iframe src="https://giphy.com/embed/5toDkVpRmmqtWD0orR" width="auto" height="30%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            <!--購物車內容-->
            <div class="cartList mt-2" v-if="cartContent.length > 0">
                <ul class="d-flex flex-column" v-for="(item,index) in cartContent" :key="index">
                    <li class="bg-dark rounded d-flex flex-column py-3">
                        <h2 class="fs-5 text-white text-nowrap text-center border-bottom border-1 pb-2">{{item.title}}</h2>
                        <div class="align-items-center justify-content-evenly d-flex">
                            <div class="d-flex flex-column">
                                <p v-if="item.num.full>0" class="m-0 text-white">全票 X {{item.num.full}} 張</p>
                                <p v-if="item.num.student>0" class="m-0 text-white">學生票 X {{item.num.student}} 張</p>
                                <p v-if="item.num.discount>0" class="m-0 text-white">優待票 X {{item.num.discount}} 張</p>
                            </div>
                            <p class="m-0 text-white">小計: {{item.subTotal}}</p>
                            <a href="#" @click.prevent="deleteFromCart(index,item.subTotal)"><span class="fs-1 material-icons-outlined text-white">delete_forever</span></a>
                        </div>
                    </li>
                </ul>

                <p class="fs-3 text-white">總計: {{total}}</p>
            </div>
        </div>
        <div class="cart__footer d-flex flex-column pt-2">
            <router-link to="/checkout" class="btn btn-secondary rounded">結帳去</router-link>

            <!--當購物車內容為空時-->
            <div class="cart__recommand d-flex flex-column mt-3" v-if="cartContent.length <= 0">
                <p class="fs-5 text-white fw-bold"> 猜你會喜歡 >> </p>
                <ul class="d-flex flex-column" v-for="item in recommendEventArray.slice(0,3)" :key="item.eventId">
                    <li class="bg-dark rounded">
                        <div class="d-flex">
                            <img :src="item.eventPhotos" :alt="item.eventTitle" class="recommend__img">
                            <div class="recommend__content py-3 px-2">
                                <h2 class="fs-5 text-white">{{item.eventTitle}}</h2>
                                <p class="small text-white">{{`${item.eventDescription.substring(0,25)}...`}}</p>
                                <router-link :to="`/eventdetail/${item.eventId}`" class="btn btn-primary btn-sm">看詳細資訊</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import {computed,onBeforeMount} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'CartContent',
    setup(){
        const store = useStore();

        const cartContent = computed(()=>store.getters.cartContent)
        const showCartContent = computed(()=>store.getters.showCartContent)
        function closingCartContent(){
            store.dispatch('showingCartContent',false)
        }
        
        const productData = computed(()=>store.getters.productData);
        const recommendEventArray = computed(()=>{
            //常設展
            return productData.value.filter(event => event.eventType === 'temp')
        })
        
        function deleteFromCart(index,subTotal){
            store.dispatch('deleteFromCart',{index,subTotal})
        }

        const total = computed(()=>store.getters.total)
        
        onBeforeMount(()=>{
            store.dispatch('getCartContent')
        })


        return{
            cartContent,
            closingCartContent,
            showCartContent,
            productData,
            recommendEventArray,
            deleteFromCart,
            total

        }
    }
}
</script>

<style lang="scss" scoped>
.cartcontent{
    z-index: 2;
    background: #630834d3 ;
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;

    min-width: 100vw;
    max-width: 100vw;
    @media (min-width: 1023px){
        min-width: 30vw;
        max-width: 30vw;
    }

    transition: 1s ease-in-out;
    right: -100%;
}

.slidein{
    right: 0;
}

.closeIcon {
    line-height:38px;
    cursor: pointer;
}

.recommend__img{
    width: 50%;
    height: auto;
    object-fit: cover;
}
</style>