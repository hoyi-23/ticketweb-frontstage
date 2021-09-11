<template>
    <div class="search">
        <!--搜尋Input-->
        搜尋頁面
        <!--Filter Tag-->

        <!--Event Card-->

        
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import EventCard from '../components/EventCard.vue'
export default {
    name: 'Search',
    components:[
        Footer,
        EventCard
    ]
}
</script>