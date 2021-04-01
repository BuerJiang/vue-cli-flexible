<template>
  <div class="slider slider1">
    <div
      class="slider position-absolute bg-block d-flex align-items-center justify-content-center"
    >
      <img
        src="../../assets/img/m1/bg.png"
        alt=""
        srcset=""
        width="1920px"
        height="100%"
      />
    </div>
    <!-- 内容区域 -->
    <div>
      <div class="logo position-absolute"></div>
      <div class="box2 position-absolute"></div>
      <div class="wrapper position-fixed">
        <div class="box-b-fl d-flex">
          <div
            v-for="(value, key) in finishList"
            :key="key"
            :class="['item' + (key + 1), { off: value <= finishVal }]"
            class="item"
          ></div>
        </div>
        <div class="box-b-fr position-absolute">
          <div class="mb-2 cursor item item-1"></div>
          <div class="mb-2 cursor item item-2"></div>
          <div class="mb-2 cursor item item-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.initData();
  },
  data() {
    return {
      finishList: [50000, 100000, 150000, 200000, 250000],
      finishVal: 100000,
      shareList: [],
    };
  },
  methods: {
    initData() {
      // 计算signature
      //   const reqTime = Math.floor(new Date().getTime() / 1000);
      //   this.$axios({
      //     method: "post",
      //     url: "counterarms/info",
      //     data: {
      //       signature: this.common.makeSignature({}, reqTime),
      //       reqTime: reqTime,
      //     },
      //     //withCredentials:true, //局部携带cookie
      //     headers: {}, //如果需要添加请求头可在这写
      //   })
      //     .then((res) => {
      //       if (res.data.code === 0 || res.data.code === 20010) {
      //       } else {
      //       }
      //     })
      //     .catch((err) => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.slider1 {
  .logo {
    background: url("../../assets/img/m1/logo.png") no-repeat top center;
    background-size: 100% 100%;
    width: 638px;
    height: 178px;
    top: 99px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .box2 {
    width: 739px;
    height: 288px;
    background: url("../../assets/img/m1/title.png") no-repeat top center;
    background-size: 100% 100%;
    top: 330px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .wrapper {
    width: 1920px;
    height: 292px;
    background: url("../../assets/img/m1/b_bg.png") no-repeat top center;
    background-size: 100% 100%;
    bottom: 0;
    // padding-left: 112px;
    // padding-right: 119px;
    background-color: #ffffff;
    opacity: 0.9;

    .box-b-fl {
      padding-left: 103px;
      .off {
        width: 155px;
        height: 120px;
        background-color: #e9e9bf;
        margin-right: 66px;
        margin-top: 87px;
        background: url("../../assets/img/m1/finish.png");
        background-size: 100% 100%;
      }
    }
    .box-b-fr {
      top: 39px;
      right: 119px;
      .item {
        width: 206px;
        height: 61px;
      }
      .item-1 {
        background: url("../../assets/img/m1/APPstore.png") no-repeat center top;
        background-size: 100% 100%;
      }
      .item-2 {
        background: url("../../assets/img/m1/googleplay.png") no-repeat center
          top;
        background-size: 100% 100%;
      }
      .item-3 {
        background: url("../../assets/img/m1/onestore.png") no-repeat center top;
        background-size: 100% 100%;
      }
    }
  }
  .finish {
  }
}
</style>