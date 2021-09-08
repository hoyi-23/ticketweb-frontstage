<template>
    <div class="loading position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center">
        <div class="loader">
          <div class="square square__main">
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
              <div class="square square__mini"></div>
          </div>
        </div>
        <h1 class="fw-bold mt-5">方格子劇場</h1>
    </div>
</template>

<script>
export default {
    name: "OnLoad"

    
}
</script>

<style lang="scss" scoped>
.loading {
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
h1{
  background: linear-gradient(to left, #9c0d52, #630834, #d31d75);
  border: solid 1px;
  background-clip: text;
  color: transparent;
}
.loader{
 width: 100px;
 height: 100px;
}
/* The square */
.square {
  width: 100%;
  height: 100%;
  
  transform: perspective(600px);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
}

/* The tiny squares */
.square__mini {
  position: absolute;
  width: 25%;
  height: 25%;
  //最初始色
  background-color: #630834;
  
  transform: perspective(400px);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: translateZ(200px) rotateX(20deg) rotateY(-10deg);
  
  
  
  animation: squaremini 4s cubic-bezier(.38,.04,.38,.99) infinite;
}

//調整左右位置
.square__mini:nth-child(4n+2) {
  left: 25%;
}
.square__mini:nth-child(4n+3) {
  left: 50%;
}
.square__mini:nth-child(4n+4) {
  left: 75%;
}

//調整上下位置
.square__mini:nth-child(5),
.square__mini:nth-child(6),
.square__mini:nth-child(7),
.square__mini:nth-child(8) {
  top: 25%;
}
.square__mini:nth-child(9),
.square__mini:nth-child(10),
.square__mini:nth-child(11),
.square__mini:nth-child(12) {
  top: 50%;
}
.square__mini:nth-child(13),
.square__mini:nth-child(14),
.square__mini:nth-child(15),
.square__mini:nth-child(16) {
  top: 75%;
}

//控制動畫先後
.square__mini:nth-child(2),
.square__mini:nth-child(5) {
  animation-delay: 100ms;
}

.square__mini:nth-child(3),
.square__mini:nth-child(6),
.square__mini:nth-child(9) {
  animation-delay: 200ms;
}

.square__mini:nth-child(4),
.square__mini:nth-child(7),
.square__mini:nth-child(10),
.square__mini:nth-child(13) {
  animation-delay: 300ms;
}

.square__mini:nth-child(8),
.square__mini:nth-child(11),
.square__mini:nth-child(14) {
  animation-delay: 400ms;
}

.square__mini:nth-child(12),
.square__mini:nth-child(15) {
  animation-delay: 500ms;
}

.square__mini:nth-child(16) {
  animation-delay: 600ms;
}

@keyframes squaremini {
  0%, 100% {
    transform: translateZ(200px) rotateX(20deg) rotateY(-10deg) rotateZ(10deg);
    background-color: #630834;
  }
  12.5%, 62.5% {
    transform: translateZ(0) rotateX(0) rotateY(0);
    background-color: #880d48;
  }
  25%, 75% {
    transform: translateZ(200px) rotateX(-20deg) rotateY(10deg) rotateZ(-10deg);
    background-color: #9c0d52;
  }
  37.5% {
    transform: translateZ(0) rotateX(0) rotateY(0);
    background-color: #bd1064;
  }
  50% {
    transform: translateZ(200px) rotateX(20deg) rotateY(-10deg) rotateZ(5deg);
    background-color: #d31d75;
  }
  87.5% {
    transform: translateZ(0) rotateX(0) rotateY(0);
    background-color: #630834;
  }
}
</style>