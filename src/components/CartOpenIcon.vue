<template>
<!--購物車
fix Icon 固定在右下角
toggle 購物內容-->
    <div class="cartIcon position-fixed d-block"  @click="showingCartContent">
        <!--fix Icon 固定在右下角-->
        <span class="material-icons-outlined bg-secondary p-2 rounded text-white fs-1 ">shopping_cart</span>
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    name: 'CartOpenIcon',

    setup(){
        const store = useStore();
        function showingCartContent(){
            store.dispatch('showingCartContent',true)
        }

        return{
            showingCartContent
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartIcon{
        bottom: 20px;
        right: 15px;
        cursor: pointer;
    }
</style>