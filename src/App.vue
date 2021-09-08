<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid d-flex justify-content-between">
        <!--index(Home)-->
        <router-link to="/" class="navbar-brand text-primary fw-bold">方格子劇場</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--other pages-->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link d-flex flex-column align-items-center" aria-current="page">
                <span class="material-icons-outlined fs-4">home</span>              
                <p class="fs-6">首頁</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link d-flex flex-column align-items-center"> 
                <span class="material-icons-outlined fs-4">search</span>
                <p class="fs-6">搜尋活動</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/category" class="nav-link d-flex flex-column align-items-center">
                <span class="material-icons-outlined fs-4">category</span>
                <p class="fs-6">全部分類</p>
                
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/purchase" class="nav-link d-flex flex-column align-items-center">
                <span class="material-icons-outlined fs-4">confirmation_number</span>
                <p class="fs-6">我的票券</p>
                
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link d-flex flex-column align-items-center">
                <span class="material-icons-outlined fs-4">shopping_cart</span>
                <p class="fs-6">購物車</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!--page content-->
    <router-view  v-if="productData.length > 0"/>
    <div v-else>
      <OnLoad></OnLoad>
    </div>

    <div class="footer">
      這是Footer
    </div>

  </div>
  
</template>

<script>
import OnLoad from './components/OnLoad.vue'
import {computed,onBeforeMount} from 'vue'
import {useStore} from 'vuex'

export default({
  components:{
    OnLoad
  },
  setup() {
    const store = useStore();
    onBeforeMount(()=>{
      store.dispatch('getProduct')
    })

    const checkProductLoaded = computed(()=>store.getters.productLoaded)
    const productData = computed(()=>store.getters.productData)

    return{
      checkProductLoaded,
      productData
    }
  },
})
</script>


<style lang="scss" src="./assets/style/all.scss">

</style>
