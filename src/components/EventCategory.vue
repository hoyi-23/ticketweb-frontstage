<template>
    <div class="eventVategory container">
        <ul class="row">
            <li class="col col-lg-3">
                依興趣找活動
            </li>
            <li class="col-4 col-lg-1">
                <img src="../assets/image/artIcon.svg" alt="">
            </li>
            <li class="col-4 col-lg-1"></li>
            <li class="col-4 col-lg-1"></li>
            <li class="col-4 col-lg-1"></li>
            <li class="col-4 col-lg-1"></li>
            <li class="col-4 col-lg-1"></li>
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