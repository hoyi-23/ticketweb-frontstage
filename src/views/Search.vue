<template>
    <div class="search position-relative">
        <!--banner-->
        <div class="search__banner d-flex justify-content-center align-items-center bg-dark">
            <p class="m-0 text-white fs-4 py-5">探索活動發掘精彩</p>
        </div>
        <div class="container mt-5 mb-4">
            <div class="row">
                <!--搜尋Input-->
                <div class="input__group col-md-6 d-flex">
                    <span class="bg-primary material-icons-outlined text-white px-3 py-1">search</span>
                    <input class="bg-primary border-0 text-white py-1" 
                    type="text form-control" placeholder="搜尋一場精彩活動" v-model="searchInput">
                </div>
                <!--filter 價錢 & 時間-->
                <div class="col-md-6 d-flex align-items-center justify-content-center mt-2 mt-md-0">
                    <div class="form-check">
                        <input  type="radio" v-model="sortBy" id="byprice" value="byPrice">
                        <label  for="byprice">
                            依價格排序
                        </label>
                    </div>
                    <div class="form-check ps-5">
                        <input  type="radio" v-model="sortBy" id="bydate" value="byDate" checked>
                        <label  for="bydate">
                            依照時間排序
                        </label>
                    </div>
                </div>
            </div>
            <!--Filter Tag-->
            <div class="row mt-4 align-items-center">
                <div class="col-12 col-md-1">活動類別</div>
                <div class="col-12 col-md-11">
                    <ul class="eventTagList d-flex m-0 flex-wrap">
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="music">音樂</label>
                            <input class="d-none" type="radio" id="music" value="music" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="drama">戲劇</label>
                            <input class="d-none" type="radio" id="drama" value="drama" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="art">藝術</label>
                            <input class="d-none" type="radio" id="art" value="art" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="design">設計</label>
                            <input class="d-none" type="radio" id="design" value="design" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="dance">舞蹈</label>
                            <input class="d-none" type="radio" id="dance" value="dance" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="food">美食</label>
                            <input class="d-none" type="radio" id="food" value="food" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="travel">旅遊</label>
                            <input class="d-none" type="radio" id="travel" value="travel" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="family">親子</label>
                            <input class="d-none" type="radio" id="family" value="family" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="movie">影劇</label>
                            <input class="d-none" type="radio" id="movie" value="movie" v-model="byCategory">
                        </li>
                        <li>
                            <label class="tag me-2 mt-2 mt-md-0 py-1 px-2" for="clear">全部</label>
                            <input class="d-none" type="radio" id="clear" value="" v-model="byCategory">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--Event Card-->
        <div class="container pt-5 mb-5 border-top border-1">
            <ul class="row p-0 g-4">
                <EventCard 
                    v-for="item in searchResultArray" 
                    :key="item.eventId" 
                    :Event="item"></EventCard>
            </ul>
        </div>
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
import EventCard from '../components/EventCard.vue'

//import { mapFields } from 'vuex-map-fields'
import {computed,ref} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'Search',
    components: {
        CartOpenIcon,
        CartContent,
        Footer,
        EventCard
    },
  setup(){
        const store = useStore();
        const productDataArray = computed(()=>store.getters.productData)

        const searchInput = ref(null);
        const sortBy = ref(null);
        const byCategory = ref(null);

        //先依照類別過濾
        const byCategoryResult = computed(()=>{
            if(byCategory.value){
                return productDataArray.value.filter(item => item.eventCategory === byCategory.value)
            }else{
                return productDataArray.value
            }
        })
        //再依輸入框過濾
        const inputResult = computed(()=>{
            if(searchInput.value){
                const wordToMatch = searchInput.value;
                const reg = new RegExp(wordToMatch, 'gi');
                return byCategoryResult.value.filter(item => item.eventTitle.match(reg))
            }else{
                return byCategoryResult.value
            }
        })
        //再判斷排序方式
        const searchResultArray = computed(()=>{
            if(sortBy.value === 'byPrice'){
                return inputResult.value.sort((a,b)=>{
                    console.log(inputResult.value)
                    return parseInt(a.eventFullPrice) > parseInt(b.eventFullPrice) ? 1 : -1
                })
            }else{
                return inputResult.value.sort((a,b)=>{
                    return Math.floor(new Date(a.eventStartDate) / 1000) > Math.floor(new Date(b.eventStartDate) / 1000) ? 1 : -1
                })
            }

            
        })


  return{
        productDataArray,
        searchInput,
        sortBy,
        byCategory,
        searchResultArray,
        inputResult,
        byCategoryResult

  }
  }
}
</script>

<style lang="scss" scoped>
    .input__group {
        span{
            line-height: 30px;
        }
        input{
            width: 100%;
        }
    }
    .tag{
        cursor: pointer;
        background: #630834;
        border-radius: 20px;
        color: #fff;
    }
    .tag:hover{
        background: #E31277;
    }
</style>
