<template>
    <div class="eventVategory container">
        <ul class="row">
            <li class="col col-lg-3">
                依興趣找活動
            </li>
            <li class="col-4 col-lg-1">
                <router-link>
                    <icon iconName="artIcon" /> 
                    <!--<img src="../assets/image/artIcon.svg" alt="藝術類展演" class="eventCategoryIcon">-->
                </router-link>
            </li>
            <li class="col-4 col-lg-1">
                <router-link>
                    <!--<img src="../assets/image/danceIcon.svg" alt="舞蹈類展演" class="eventCategoryIcon">-->
                </router-link>
            </li>
            <li class="col-4 col-lg-1">
                <router-link>
                    <!--<img src="../assets/image/designIcon.svg" alt="設計類展演"  class="eventCategoryIcon">-->
                </router-link>
            </li>
            <li class="col-4 col-lg-1">
                <router-link>
                    <!--<img src="../assets/image/familyIcon.svg" alt="親子類展演"  class="eventCategoryIcon">-->
                </router-link>
            </li>
            <li class="col-4 col-lg-1">
                <router-link>
                    <!--<img src="../assets/image/movieIcon.svg" alt="影劇類展演"  class="eventCategoryIcon">-->
                </router-link>
            </li>
            <li class="col-4 col-lg-1">
                <router-link>
                    <!--<img src="../assets/image/travelIcon.svg" alt="旅遊類展演"  class="eventCategoryIcon">-->
                </router-link>
            </li>
            <li class="col col-lg-3">
                <router-link to="/search">更多分類</router-link>
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