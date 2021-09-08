<template>
    <li class="eventCard col-md-6 col-lg-4">
        
        <div class="card wrapper d-flex flex-column justify-content-between  position-relative">
            <img :src="Event.eventPhotos" :alt="Event.eventTitle" class="img position-absolute">
            <div class="header">
                <!--start date-->
                <div class="date">
                    {{Event.eventStartDate}}
                </div>
            </div>
            <div class="data">
                <div class="content">
                <!---分類--->
                <span class="eventCate">{{Event.eventCategory}}</span>
                <!--名稱-->
                <!--Link to specific page-->
                <a href="#"><h1 class="eventTitle">{{Event.eventTitle}}</h1></a>
                <!--介紹-->
                <p class="eventDescript">{{Event.eventDescription}}</p>
                <!--Link to specific page-->
                <a href="#" class="button">Read more</a>
            </div>
        </div>
    </div>
  </li>
</template>

<script>
export default {
    name: 'card',
    props:['Event']

}
</script>