<template>
  <div class="slider slider4">
    <!-- 背景图片 -->
    <div
      class="slider position-absolute bg-block d-flex align-items-center justify-content-center"
    >
      <img
        src="../../assets/img/m4/bg.png"
        alt=""
        srcset=""
        width="1920px"
        height="100%"
      />
    </div>
    <!-- 内容区域  -->
    <div class="box d-flex position-absolute">
      <div class="box-fl position-absolute ">2</div>
      <div class="box-fr position-absolute ">1</div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.slider4 {
  .box {
    .box-fl {
      width: 1326px;
      height: 789px;
      background: red;
    }
  }
}
</style>