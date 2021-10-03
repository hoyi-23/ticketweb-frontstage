<template>
    <div class="eventVategory container">
        <ul class="row align-items-center mb-0">
            <li class="col-12 col-lg-3 fs-5 text-center py-3 py-lg-4 bg-primary text-white">
                依興趣找活動
            </li>
            <li class="col-4 col-lg-1 border border-1 bg-light">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon class="svg" iconName="artSvgIcon" /> 
                    <span>藝術</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1 bg-light">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon class="svg" iconName="danceSvgIcon" />
                    <span>舞蹈</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1 bg-light">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon class="svg" iconName="designSvgIcon"/>
                    <span>設計</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1 bg-light">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon class="svg" iconName="familySvgIcon" /> 
                    <span>親子</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1 bg-light">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon class="svg" iconName="movieSvgIcon" />
                    <span>影劇</span>
                </router-link>
            </li>
            <li class="col-4 col-lg-1 border border-1 bg-light">
                <router-link to="/search" class="d-block py-lg-4 text-center py-2 d-flex flex-column align-items-center">
                    <icon class="svg" iconName="travelSvgIcon" />
                    <span>旅遊</span>
                </router-link>
            </li>
            <li class="col-12 col-lg-3 text-center p-0">
                <router-link to="/search" class="searchMore d-block fs-5 py-3 py-lg-4 ">更多分類</router-link>
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
    .searchMore{
        background: #630834;
        color: #fff;
        &:hover{
           background: #E31277;
        }
    }
    span{
        color: #666;
        margin-top: 1rem;
        @media (min-width: 1023px){
            margin-top: 1.5rem;
        }
    }
    .artSvgIcon{
        color: rgb(255, 228, 179)
    }
    .danceSvgIcon{
        color: rgb(252, 197, 193)
    }
    .designSvgIcon{
        color: rgb(255, 244, 184)
    }
    .familySvgIcon{
        color: rgb(202, 233, 238)
    }
    .travelSvgIcon{
        color: rgb(145, 175, 145);
    }
    .movieSvgIcon{
        color: #fff;
    }

    
    li:hover{
        .svg{
            transform: scale(1.1);
        }
        .artSvgIcon{
            color: orange;
        }
        .danceSvgIcon{
            color: rgb(187, 37, 31)
        }
        .designSvgIcon{
            color: rgb(255, 238, 2)
        }
        .familySvgIcon{
            color: rgb(39, 191, 202)
        }
        .travelSvgIcon{
            color: rgb(55, 80, 55);
        }
        .movieSvgIcon{
            color: rgb(182, 179, 179);
        }
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