<template>
  <div
    class="wrap position-relative"
    :class="registerFlag ? 'overflow-hidden' : ''"
  >
    <!-- logo -->
    <div class="logo position-absolute"></div>
    <!-- share -->
    <div
      class="share position-absolute d-flex flex-column-reverse align-items-center"
    >
      <div class="icon-twi"></div>
      <div class="icon-line"></div>
      <div class="icon-fb"></div>
    </div>
    <!-- login -->
    <div class="login-bth position-absolute" @click="handleShowRegister"></div>
    <!-- 内容区域 -->
    <div class="box1 position-absolute">
      <div class="icon-wrap position-relative">
        <div class="icon AS position-absolute" @click="handleApple('AS')"></div>
        <div class="icon GP position-absolute" @click="handleGoole('GP')"></div>
        <div class="icon TW position-absolute" @click="handleTwi('twi')"></div>
        <div
          class="icon login position-absolute"
          @click="handleShowRegister"
        ></div>
      </div>
    </div>
    <!--  -->
    <div class="box2 position-absolute">
      <div class="position-relative">
        <!-- 事前登录 -->
        <div class="before-login">
          <div class="title"></div>
          <!-- 如果达到30万人，展示，否则展示另外一张图 -->
          <div v-if="iRegister >= 300000" class="reach-active"></div>
          <div v-else class="reach"></div>
        </div>

        <!-- 角色 -->
        <div class="role">
          <div class="title"></div>
          <div class="intro-list position-relative">
            <intro />
          </div>
        </div>
        <!-- 世界观 -->
        <div class="sjCont"></div>
      </div>
    </div>

    <div class="box3 position-absolute"></div>
    <div class="box4 position-absolute">
      <div class="item-wrap position-relative">
        <a
          href="https://useragreement.ujoygames.jp/"
          target="_blank"
          class="block"
        >
          <div class="item-1 position-absolute"></div>
        </a>
        <a href="https://privacy.ujoygames.jp/" target="_blank" class="block">
          <div class="item-2 position-absolute"></div>
        </a>
      </div>
    </div>

    <!-- 注册弹出框 -->
    <div v-if="registerFlag" class="model register position-fixed">
      <register @handleClose="handleClose" />
    </div>
  </div>
</template>
<script>
import intro from "./intro";
import register from "./register";
export default {
  components: {
    intro,
    register,
  },
  data() {
    return {
      iRegister: 0,
      registerFlag: false,
    };
  },
  methods: {
    // app
    handleApple(val) {
      this.common.goStore(val);
    },
    // goole
    handleGoole(val) {
      this.common.goStore(val);
    },
    // tw
    handleTwi(val) {
      this.common.goShare(val);
    },
    // 点击展示注册弹出框
    handleShowRegister() {
      this.registerFlag = true;
    },
    // 关闭注册弹出框
    handleClose() {
      this.registerFlag= false
    },
  },
};
</script>
<style lang="scss" scoped>
.overflow-hidden {
  overflow: hidden !important;
}
.wrap {
  width: 750px;
  height: 6000px;
  background: url("../assets/img/top.png") no-repeat center top;
  background-size: cover;
  .logo {
    z-index: 1;

    width: 352px;
    height: 168px;
    background: url("../assets/img/logo.png") no-repeat center top;
    background-size: cover;
    top: 13px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .share {
    z-index: 1;

    right: 16px;
    top: 205px;
    .icon-twi {
      width: 46px;
      height: 41px;
      background: url("../assets/img/icon-twi.png") no-repeat center top;
      background-size: 100% 100%;
      margin-bottom: 17px;
    }
    .icon-line {
      width: 35px;
      height: 35px;
      background: url("../assets/img/icon-line.png") no-repeat center top;
     background-size: cover;
      margin-bottom: 17px;
    }
    .icon-fb {
      width: 42px;
      height: 45px;
      background: url("../assets/img/icon-fb.png") no-repeat center top;
      background-size: 100% 100%;
    }
  }
  .login-bth {
    z-index: 1;
    width: 310px;
    height: 102px;
    background: url("../assets/img/login-btn.png") no-repeat center top;
    background-size: 100% 100%;
    top: 764px;
    left: 50%;
    transform: translate(-53%, 0);
  }
  //   内容区域
  .box1 {
    width: 680px;
    height: 222px;
    background: url("../assets/img/booking.png") no-repeat center top;
    background-size: 100% 100%;
    left: 29px;
    top: 990px;
    .icon-wrap {
      width: 100%;
      height: 100%;
      .AS {
        top: 41px;
        left: 105px;
      }
      .GP {
        top: 41px;
        right: 98px;
      }
      .TW {
        bottom: 29px;
        left: 105px;
      }
      .login {
        bottom: 29px;
        right: 98px;
      }
    }

    .icon {
      width: 220px;
      height: 66px;
    }
  }
  .box2 {
    width: 716px;
    height: 3302px;
    background: url("../assets/img/bg.png") no-repeat center top;
    background-size: 100% 100%;
    top: 1275px;
    left: 40px;
    .before-login {
      .title {
        width: 398px;
        height: 178px;
        background: url("../assets/img/title_login.png") no-repeat;
        background-size: cover;
        margin: 66px auto 48px auto;
      }
      //   如果达到30万，走这个
      .reach-active {
        width: 529px;
        height: 886px;
        background: url("../assets/img/reach_active.png") no-repeat center top;
        background-size: 100% 100%;
        margin-left: 73px;
       
      }
      //   如果没达到
      .reach {
        width: 529px;
        height: 736px;
        background: url("../assets/img/reach.png") no-repeat center top;
        background-size: 100% 100%;
        margin-left: 73px;
      }
    }
    .role {
      .title {
        margin: 77px auto 16px auto;
        width: 400px;
        height: 175px;
        background: url("../assets/img/role_title.png") no-repeat center top;
       background-size: cover;
      }
      .intro-list {
        height: 1030px;
      }
    }
    .sjCont {
      width: 713px;
      height: 1113px;
      background: url("../assets/img/word_view.png") no-repeat center top;
      background-size: 100% 100%;
    }
  }

  .box3 {
    bottom: 531px;
    left: 36px;
    width: 682px;
    height: 856px;
    background: url("../assets/img/twitter-bg.png") no-repeat center top;
    background-size: 100% 100%;
  }

  .box4 {
    bottom: 0;
    left: 0;
    width: 750px;
    height: 478px;
    background: url("../assets/img/copyright.png") no-repeat center top;
    background-size: 100% 100%;
    .item-wrap {
      width: 100%;
      height: 100%;
    }
    .item-1 {
      width: 140px;
      height: 30px;
      background: transparent;
      bottom: 171px;
      left: 138px;
    }
    .item-2 {
      width: 280px;
      height: 30px;
      background: transparent;
      right: 146px;
      bottom: 171px;
    }
  }
}
.register {
  z-index: 9;
}
</style>