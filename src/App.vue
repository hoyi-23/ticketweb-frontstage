<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <!--index(Home)-->
        <router-link to="/" class="navbar-brand text-primary fw-bold">天天售票</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--other pages-->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">搜尋活動</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/category" class="nav-link">全部分類</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/purchase" class="nav-link">我的票券</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">購物車</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!--page content-->
    <router-view/>

    <div class="footer">
      這是Footer
    </div>

  </div>
  
</template>

<style lang="scss" src="./assets/style/all.scss">

</style>
