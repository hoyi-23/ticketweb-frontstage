<template>
    <div class="carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item position-relative"  
                    v-for="(item,index) in recentEventArray.slice(0,3)" 
                    :key="item.eventId" :recentEventArray="recentEventArray" :class="{active: index === 0}">
                    <img :src="item.eventPhotos" class="d-block w-100 banner__img" :alt="item.eventTitle">
                    <div class="position-absolute banner__context">
                        <h2 class="fs-1 fw-bold text-white banner__text">{{item.eventTitle}}</h2>
                        <p class="fs-5 text-white banner__text">
                            {{item.eventStartDate}}
                            ~
                            {{item.eventEndDate}}
                        </p>
                        <div class="banner__btn d-flex mt-5">
                            <button class="btn btn-transparent">活動細節</button>
                            <button class="btn btn-secondary ms-2">購買票券</button>
                        </div>
                    </div> 
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Carousel',
    props: ['recentEventArray'],
    
}
</script>

<style lang="scss" scoped>
    .banner__img{
        width: auto;
        height: calc(80vh - 56px);
        object-fit: cover;
        filter: grayscale(40%);
    }
    .banner__context{
        top: 40%;
        left: 15%;
    }
    .banner__text{
        text-shadow: 0.1em 0.1em #333
    }
</style>