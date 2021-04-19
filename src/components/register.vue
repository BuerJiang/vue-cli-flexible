<template>
  <div class="animated zoomIn faster position-relative cont">
    <div class="wrapper position-absolute">
      <div class="close position-absolute" @click="handleClose()"></div>
      <div class="position-relative cont">
        <div class="title position-absolute"></div>
        <div class="input-bg position-absolute">
          <input
            type="text"
            name="email"
            :placeholder="valPlaceholder"
            maxlength="30"
            autocomplete="off"
            v-model="val"
          />
        </div>
        <!-- 错误提示信息提示 -->
        <div class="errMsg position-absolute" v-if="errFlag"></div>
        <div class="submit position-absolute">
          <div class="sub-btn cursor" @click="submit"></div>
        </div>
      </div>
    </div>
    <!-- 错误提示 -->
    <div v-if="sucFlag" class="hint position-absolute model cont">
      <div class="suc-cont position-absolute">
        <div
          class="close position-absolute cursor"
          @click="handleCoseSuc"
        ></div>
        <div class="share position-absolute d-flex align-items-center">
          <div class="fb icon cursor" @click="handleShare('fb')"></div>
          <div
            class="line icon ml-12 cursor"
            @click="handleShare('line')"
          ></div>
          <div class="tw icon ml-12 cursor" @click="handleShare('twi')"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
      valPlaceholder: "メールアドレス",
      sucFlag: false,
      errFlag: false,
    };
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    //   分享
    handleShare(val) {
      this.common.doShare(val);
    },
    // 关闭成功提示框
    handleCoseSuc() {
      this.sucFlag = false;
    },
    submit() {
      // FBQ 事件
      fbq("track", "Schedule");
      gtag("event", "开始预注册");
      // 验证邮箱正确性
      const reg = new RegExp(
        /^[a-z0-9]+([._\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      ); //正则表达式
      if (this.val === "" || !reg.test(this.val)) {
        // 错误提示
        this.errFlag = true;
        this.val = "";
      } else {
        //   邮箱输入正确后，调API
        const reqTime = Math.floor(new Date().getTime() / 1000);
        let source = this.common.getUrlParam("source") || "unknow";
        let target = this.common.getUrlParam("target") || "unknow";
        gtag("event", "pc", {
          event_category: source,
          event_label: target,
        });

        // 计算signature
        const params = {
          account: this.val,
          game: "601",
          type: 1,
        };

        this.$axios({
          method: "post",
          url: "merufura/subscribe",
          data: {
            account: this.val,
            game: "601",
            type: 1,
            signature: this.common.makeSignature(params, reqTime),
            reqTime: reqTime,
            source: source,
            target: target,
          },
          //withCredentials:true, //局部携带cookie
          headers: {}, //如果需要添加请求头可在这写
        })
          .then((res) => {
            if (res.data.code === 0 || res.data.code === 20010) {
              this.val = "";
              this.valPlaceholder = "メールアドレス";
              this.sucFlag = true;
              this.errFlag = false;

              // FBQ 事件
              fbq("track", "CompleteRegistration");
              gtag("event", "完成预注册");
            } else {
              this.val = "";
              this.valPlaceholder = "メールアドレス";
              this.sucFlag = false;
              this.errFlag = true;
            }
          })
          .catch((err) => {});
      }
    },
  },
};
</script>
<style lang="scss" >
.cont {
  height: 100%;
  width: 100%;
}

// 提示
.hint {
  z-index: 2;
  .suc-cont {
    z-index: 9;
    width: 524px;
    height: 376px;
    background: url("../assets/img/suc.png") no-repeat center top;
    background-size: cover;

    // transform: translate(-50%, -50%);
    transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
    top: 50%;
    left: 50%;
    // 关闭按钮
    .close {
      width: 36px;
      height: 34px;
      right: 10px;
      top: 10px;
    }
    .share {
      bottom: 29px;
      left: 231px;
      .icon {
        width: 36px;
        height: 37px;
      }
    }
  }
}

.wrapper {
  width: 662px;
  height: 1028px;
  background: url("../assets/img/booking_bg.png") no-repeat center top;
  background-size: 100% 100%;
  transform: translate(-50%, 0);
  top: 200px;
  left: 50%;
  .close {
    width: 67px;
    height: 70px;
    background: url("../assets/img/close.png") no-repeat center top;
    background-size: 100% 100%;
    right: 30px;
    top: 99px;
    z-index: 9;
  }
  .title {
    width: 296px;
    height: 103px;
    background: url("../assets/img/login_title.png") no-repeat center top;
    background-size: cover;
    left: 180px;
    top: 382px;
  }
  .input-bg {
    width: 391px;
    height: 43px;
    background: url("../assets/img/input_bg.png") no-repeat center top;
    background-size: 100% 100%;
    top: 517px;
    left: 50%;
    text-align: center;
    transform: translate(-50%, 0);

    input[type="text"] {
      width: 391px;
      height: 43px;
      background-color: transparent;
      font-size: 16px;
      text-align: center;
      color: #000000;
      font-weight: bold;
      left: 0;
      position: absolute;
      top: 0;
      opacity: 0.5;
    }
    input::-webkit-input-placeholder {
      color: #000000;
    }
  }
  .submit {
    bottom: 262px;
    left: 201px;
    // -webkit-transform: translate(-50%);
    // transform: translate(-50%);
    .sub-btn {
      width: 229px;
      height: 64px;
      background: url("../assets/img/btn.png") no-repeat center top;
     background-size: cover;
    }
  }

  .errMsg {
    width: 256px;
    height: 12px;
    background: url("../assets/img/err.png") no-repeat center top;
    background-size: cover;
    left: 168px;
    bottom: 446px;

    text-align: center;
  }
}
</style>