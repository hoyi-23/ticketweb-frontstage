<template>
    <div class="eventVategory container">
        <ul class="row align-items-center mb-0 border border-1">
            <li class="col-12 col-lg-3 fs-5 text-center py-3 py-lg-0">
                依興趣找活動
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon iconName="artIcon" /> 
                    <span>藝術</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon iconName="danceIcon" class="danceIcon" />
                    <span>舞蹈</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon iconName="designSvgIcon"/>
                    <span>設計</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon iconName="familyIcon" /> 
                    <span>親子</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon iconName="movieIcon" />
                    <span>影劇</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon iconName="travelIcon" />
                    <span>旅遊</span>
                </router-link>
            </li>
            <li class="col-12 col-lg-3 text-center py-3 py-lg-0">
                <router-link to="/search" class="fs-5">更多分類</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'EventCategory'
}
</script>

<style lang="scss" scoped>
    .eventCategoryIcon{
        width: 100%;
        height: 40px;
    }
    span{
        color: #666;
        margin-top: 1rem;
        @media (min-width: 1023px){
            margin-top: 1.5rem;
        }
    }
    
    li:hover{
        span{
            color: #000;
            margin-top: .5rem;
            margin-bottom: .5rem;
            @media (min-width: 1023px){
            margin-top: 1rem;
            margin-bottom: .5rem;
            }
        }
    }
    
</style>