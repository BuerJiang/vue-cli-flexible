<template>
  <div class="slider slider2 ani">
    <div
      class="slider position-absolute bg-block d-flex align-items-center justify-content-center"
    >
      <img
        src="../../assets/img/m2/bg.png"
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
        <div class="info position-absolute"></div>
        <div class="input-box position-absolute">
          <div class="input-bg position-relative">
            <input
              type="text"
              class="center"
              :placeholder="emailPlaceholder"
              v-model="emailVal"
            />
            <span
              class="yuyue-btn inline-block position-absolute"
              @click="submit"
            ></span>
          </div>
          <div class="agree">
            <div class="inline-block mr-1 mt-2">
              <div
                v-for="(item, index) in list"
                :key="index"
                class="inline-block pl-1"
              >
                <input
                  type="radio"
                  name="test"
                  :id="item.radioId"
                  :value="item.value"
                  :checked="item.isCheck"
                  class="inline-block"
                />
                <label :for="item.radioId" class="agree-btn inline-block">{{
                  item.value
                }}</label>
              </div>
            </div>
            <div class="agree-btn inline-block mt-2" @click="handleShowPolicy">
              <label for="agree " class="d-flex align-items-center">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  class="agree-btn inline-block"
                  v-model="checkVal"
                />
                <span class="pl-1"
                  >개인정보 수집, 이용 및 SMS 수신에 동의합니다.</span
                >
                <span class="pl-2 evt center inline-block">자세히 보기</span>
              </label>
            </div>
          </div>
          <div class="gift"></div>
        </div>
      </div>
      <div class="box-fr position-absolute"></div>
    </div>

    <!-- 错误/正确信息提示 -->
    <div v-if="flag" class="model position-absolute">
      <div class="msg position-absolute">
        <div
          v-if="successFlag"
          class="success-bg"
          @click="handleCloseMsg(1)"
        ></div>
        <div v-else class="err-bg" @click="handleCloseMsg(2)"></div>
      </div>
    </div>
    <!-- 隐私条款组件内容信息 -->
    <div v-if="policyFlag" class="model position-absolute">
      <privacyPolicy @handleClose="handleClose" />
    </div>
  </div>
</template>
<script>
import privacyPolicy from "../publicComponents/privacyPolicy";
export default {
  props: ["onNext"],
  components: {
    privacyPolicy,
  },
  data() {
    return {
      emailPlaceholder: "- 를 제외한 휴대폰 번호 입력",
      emailVal: "",
      checkVal: false,
      // 预约按钮
      list: [
        { value: "Google Play", isCheck: true, radioId: "register" },
        { value: "App Store", isCheck: false, radioId: "login" },
      ],
      // 用来控制输入错误信息后，当前页不可下滑
      mouseFlag: this.onNext,
      flag: false,
      successFlag: true,
      // 隐私条款
      policyFlag: false,
    };
  },
  methods: {
    // 提交
    submit() {
      //   // FBQ 事件
      fbq("track", "Schedule");
      gtag("event", "开始预注册");
      // 此时禁止轮播图滑动
      this.mouseFlag = false;
      this.$emit("handleEVent", this.mouseFlag);

      // 验证邮箱正确性
      const reg = new RegExp(
        /^[a-z0-9]+([._\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      );

      if (this.emailVal === "" || !reg.test(this.emailVal)) {
        // 邮箱输入错误，或者没有输入，提示错误信息

        this.flag = true;
        this.successFlag = false;
        this.emailVal = "";
      } else {
        //   邮箱输入正确后，调API
        // const reqTime = Math.floor(new Date().getTime() / 1000);
        // let source = this.common.getUrlParam("source") || "unknow";
        // let target = this.common.getUrlParam("target") || "unknow";
        // gtag("event", "pc", {
        //   event_category: source,
        //   event_label: target,
        // });

        // // 计算signature
        // const params = {
        //   account: this.val,
        //   game: "601_CBT",
        //   type: 1,
        // };

        // 邮箱正确后

        this.flag = true;
        this.successFlag = true;
        this.emailVal = "";

        // this.$axios({
        //   method: "post",
        //   url: "merufura/subscribe",
        //   data: {
        //     account: this.val,
        //     game: "601_CBT",
        //     type: 1,
        //     signature: this.common.makeSignature(params, reqTime),
        //     reqTime: reqTime,
        //     source: source,
        //     target: target,
        //   },
        //   //withCredentials:true, //局部携带cookie
        //   headers: {}, //如果需要添加请求头可在这写
        // })
        //   .then((res) => {
        //     if (res.data.code === 0 || res.data.code === 20010) {
        //       this.flagMsg = "提出完了";
        //       this.flag = true;
        //       this.val = "";
        //       // FBQ 事件
        //       fbq("track", "CompleteRegistration");
        //       gtag("event", "完成预注册");
        //     } else {
        //       this.flagMsg =
        //         "メールアドレスに誤りがあります、ご確認の上お書き直しください";
        //       this.flag = true;
        //       this.val = "";
        //     }
        //   })
        //   .catch((err) => {});
      }
    },

    // 关闭弹出框
    handleCloseMsg() {
      this.flag = false;
      this.mouseFlag = true;
      this.$emit("handleClose", this.mouseFlag);
    },

    // 显示隐私协议
    handleShowPolicy() {
      this.policyFlag = true;
      this.mouseFlag = false;
      this.$emit("handleEVent", this.mouseFlag);
    },

    // 关闭隐私条款
    handleClose(val) {
      this.checkVal = val
      this.policyFlag = false;
      this.mouseFlag = true;
      this.$emit("handleClose", this.mouseFlag);
    },
  },
};
</script>
<style lang="scss"  scoped>
.slider2 {
  .box {
    bottom: 0;
    width: 100%;
    height: 100%;
    .box-fl {
      z-index: 3;
      width: 30%;
      height: 676px;
      background: url("../../assets/img/m2/boy.png") no-repeat center top;
      background-size: 100% 100%;
      left: 32px;
      bottom: 0;
    }
    .box-middle {
      z-index: 2;
      width: 50%;
      height: 946px;
      background: url("../../assets/img/m2/xf.png") no-repeat center top;
      background-size: 100% 100%;
      transform: translate(-50%, 0);
      left: 50%;
      bottom: 0;
      .info {
        background: url("../../assets/img/m2/x_cont.png") no-repeat center top;
        background-size: 100% 100%;
        height: 376px;
        width: 498px;
        left: 50%;
        top: 36px;
        transform: translate(-45%, 0);
      }
      .input-box {
        top: 428px;
        transform: translate(-47%, 0);
        left: 50%;

        .input-bg {
          background: url("../../assets/img/m2/input_bg.png") no-repeat center
            top;
          background-size: 100% 100%;
          width: 621px;
          height: 74px;
          input[type="text"] {
            width: 454px;
            height: 74px;
            display: inline-block;
            font-size: 21px;
            font-family: RixRakSansPR;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #6a5d58;
            background: transparent;
            top: 0;
            position: absolute;
          }
          .yuyue-btn {
            width: 155px;
            height: 84px;
            background: transparent;
            right: 0;
            top: 0;
          }
        }
        .agree {
          font-size: 11px;
          .agree-btn {
            font-family: NotoSerifCJKsc-Regular;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #2d241f;
          }

          .agree-btn {
            .evt {
              font-family: RixRakSansPR;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #fefffa;
              background-color: #ac9a96;
              padding: 0 6px;
            }
          }
        }
        // 礼包图片
        .gift {
          width: 620px;
          height: 115px;
          background: url("../../assets/img/m2/icon.png") no-repeat center top;
          background-size: 100% 100%;
          margin-top: 18px;
        }
      }
    }
    .box-fr {
      z-index: 4;
      width: 35.1%;
      height: 897px;
      background: url("../../assets/img/m2/girl.png") no-repeat center top;
      background-size: 100% 100%;
      right: 0;
      bottom: 0;
    }
  }

  // 弹出框
  .msg {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    .success-bg {
      background: url("../../assets/img/m2/suc.png") no-repeat center top;
      background-size: 100% 100%;
      width: 565px;
      height: 685px;
    }
    .err-bg {
      background: url("../../assets/img/m2/err.png") no-repeat center top;
      background-size: 100% 100%;
      width: 625px;
      height: 318px;
    }
  }
}
</style>