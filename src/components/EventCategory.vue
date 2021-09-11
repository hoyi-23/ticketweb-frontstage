<template>
    <div class="eventVategory container">
        <ul class="row align-items-center mb-0">
            <li class="col-12 col-lg-3 fs-4 text-center border border-1">
                依興趣找活動
            </li> 
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2">
                    <icon iconName="artIcon" /> 
                    <span>藝術</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2">
                    <icon iconName="danceIcon" />
                    <span>舞蹈</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2">
                    <icon iconName="designIcon" />
                    <span>設計</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2">
                    <icon iconName="familyIcon" /> 
                    <span>親子</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2">
                    <icon iconName="movieIcon" />
                    <span>影劇</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2">
                    <icon iconName="travelIcon" />
                    <span>旅遊</span>
                </router-link>
            </li>
            <li class="col-12 col-lg-3 border border-1">
                <router-link to="/search" class="fs-4 text-center">更多分類</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'EventCategory'
}
</script>

<style lang="scss">
    .eventCategoryIcon{
        width: 100%;
        height: 40px;
    }
</style>