<template>
    <div class="home position-relative">
        <!--banner-->
         <Carousel :recentEventArray="recentEventArray"></Carousel>
        <!--category Event-->
        <EventCategory></EventCategory>
        <!--Recent Event-->
        <div class="container">
            <h2 class="fs-2 fw-bold mt-5 mb-4 text-center">【 近期活動 】</h2>
            <ul class="row p-0 g-4">
                <EventCard 
                    v-for="item in recentEventArray.slice(0,6)" 
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
import Carousel from '../components/Carousel.vue'
import EventCard from '../components/EventCard.vue'
import EventCategory from '../components/EventCategory.vue'
import Footer from '../components/Footer.vue'
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'Home',
    components: {
         Carousel,
         EventCard,
         EventCategory,
         CartOpenIcon,
         CartContent,
         Footer,
    },
    setup(){
        
        
        const store = useStore();
        const productData = computed(()=>store.getters.productData);

        const recentEventArray = computed(()=>{
            
            return productData.value.sort((a,b)=>{
            return Math.floor(new Date(a.eventStartDate) / 1000) > Math.floor(new Date(b.eventStartDate) / 1000) ? 1 : -1
            })
            
        })

        const showCartContent = computed(()=>store.getters.showCartContent)

        
        return{
            productData,
            recentEventArray,
            showCartContent
        }
    }
}
</script>