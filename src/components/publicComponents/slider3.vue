<template>
  <div class="slider slider3">
    <!-- 背景图 -->
    <div
      class="slider position-absolute bg-block d-flex align-items-center justify-content-center"
    >
      <img
        src="../../assets/img/m3/bg.jpg"
        alt=""
        srcset=""
        width="1920px"
        height="100%"
      />
    </div>
    <!-- 内容区域 -->
    <div class="box d-flex justify-content-between position-absolute">
      <div class="box-fl position-absolute"></div>
      <div class="box-middle position-absolute">
        <div class="position-relative">
          <div class="v1 position-absolute"></div>
          <div class="v2 position-absolute"></div>
          <div class="v3 position-absolute"></div>
        </div>
      </div>
      <div class="box-fr position-absolute"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slider3 {
  .box {
    width: 100%;
    height: 100%;

    .box-fl {
      z-index: 3;
      width: 576px;
      height: 922px;
      background: url("../../assets/img/m3/je_2.png") no-repeat center top;
      background-size: 100% 100%;
      bottom: 0;
    }
    .box-middle {
      z-index: 2;
      width: 1059px;
      height: 820px;
      background: url("../../assets/img/m3/c_bg.png") no-repeat center top;
      background-size: 100% 100%;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      .v1 {
        width: 746px;
        height: 247px;
        background: url("../../assets/img/m3/video_1.png") no-repeat center top;
        background-size: 100% 100%;
        top: 353px;
        right: 126px;
      }
      .v2 {
        width: 423px;
        height: 166px;
        background: url("../../assets/img/m3/video_2.png") no-repeat center top;
        background-size: 100% 100%;
        top: 627px;
        left: 115px;
      }
      .v3 {
        width: 423px;
        height: 166px;
        background: url("../../assets/img/m3/video_3.png") no-repeat center top;
        background-size: 100% 100%;
        top: 629px;
        right: 56px;
      }
    }
    .box-fr {
      z-index: 4;
      width: 552px;
      height: 846px;
      background: url("../../assets/img/m3/je_1.png") no-repeat center top;
      background-size: 100% 100%;
      right: 0;
      bottom: 10px;
    }
  }
}
</style>