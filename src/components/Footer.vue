<template>
    <div class="footer mt-5 d-flex flex-column">
        <div class="footer__body bg-primary py-5">
            <div class="container footer__content">
                <div class="row">
                    <div class="col col-lg-4">
                        <div class="text-lighter mb-2">參與活動</div>
                        <ul>
                            <li><router-link to="/search" class="text-lighter">探索所有活動</router-link></li>
                            <li><router-link to="#" class="text-lighter">購票流程說明</router-link></li>
                        </ul>
                    </div>
                    <div class="col col-lg-4">
                        <div class="text-lighter mb-2">認識方格子</div>
                        <ul>
                            <li><router-link to="#" class="text-lighter">常見問題</router-link></li>
                            <li><router-link to="#" class="text-lighter">聯絡我們</router-link></li>
                            <li><router-link to="#" class="text-lighter">隱私權政策</router-link></li>
                            <li><router-link to="#" class="text-lighter">服務條款</router-link></li>
                        </ul>
                    </div>
                    <div class="col col-lg-4">
                        <div class="text-lighter mb-2">追蹤方格子</div>
                        <ul>
                            <li><router-link to="#" class="text-lighter">Facebook</router-link></li>
                            <li><router-link to="#" class="text-lighter">Instagram</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom d-flex justify-content-center align-items-center flex-column flex-md-row py-3">
            <h1 class="fs-5 text-primary fw-bold pe-3 m-0 text-nowrap">方格子劇場</h1>
            <span class="text-nowrap">Hoyi-23 © 2020. All Rights Reserved.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>