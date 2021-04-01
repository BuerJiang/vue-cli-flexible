<template>
  <div class="animated zoomIn position-relative policy-wrapper">
    <div class="bg position-absolute">
      <!-- 关闭按钮 -->
      <div class="close position-absolute cursor" @click="handleClose(1)"></div>
      <div class="c-bg">
        <div class="wrapper">
          <div class="pop-context">
            <label
              class="d-flex align-items-center"
              @change="handlePolicy(1, $event)"
              ><input type="checkbox" value="1" name="policy1" />
              <span class="pl-1"
                >아래 내용을 확인하였으며, 모두 동의합니다. (선택 동의
                포함)</span
              ></label
            >
            <label @change="handlePolicy(2, $event)"
              ><input
                type="checkbox"
                class="policy"
                value="2"
                name="policy2"
                v-model="checkVal"
              />
              <span class="pl-1">만 14세 이상입니다.</span> <span class="red"
                >(필수)</span
              ></label
            >
            <label @change="handlePolicy(3, $event)"
              ><input
                type="checkbox"
                class="policy"
                value="3"
                name="policy3"
                v-model="checkVal"
              />
              <span class="pl-1">개인정보 수집 및 이용 목적. </span
              ><span class="red">(필수)</span></label
            >
            <label><img src="../../assets/img/m2/c_3_cont.png" /></label>
            <label @change="handlePolicy(4, $event)"
              ><input
                type="checkbox"
                class="policy"
                value="4"
                name="policy4"
                v-model="checkVal"
              />
              <span class="pl-1"> 개인정보 처리위탁 동의.</span> <span
                class="red"
                >(필수)</span
              ></label
            >
            <label><img src="../../assets/img/m2/c_4_cont.png" /></label>
            <label @change="handlePolicy(5, $event)"
              ><input
                type="checkbox"
                class="policy"
                value="5"
                name="policy5"
                v-model="checkVal"
              />
              <span class="pl-1">광고성 정보 수신 동의 (선택)</span></label
            >
            <label><img src="../../assets/img/m2/c_5_cont.png" /></label>

            <!-- 底部按钮 -->
            <div class="btn d-flex align-items-center">
              <div class="suc cursor" @click="handleSub(0)"></div>
              <div class="err cursor" @click="handleClose(1)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹出框提示 -->
    <div class="a-bg model position-absolute" v-if="aflag">
      <div
        class="cont position-absolute cursor"
        @click="handleCloseAflag"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkVal: [],
      aflag: false,
      list: [
        {
          value: "아래 내용을 확인하였으며, 모두 동의합니다. (선택 동의 포함)",
          information: "",
          explainVal: "",
          id: 1,
        },
        {
          value: "만 14세 이상입니다.",
          information: "(필수)",
          explainVal: "",
          id: 2,
        },
        {
          value: "개인정보 수집 및 이용 목적",
          information: "(필수)",
          explainVal: require("../../assets/img/m2/c_3_cont.png"),
          id: 3,
        },
        {
          value: "개인정보 처리위탁 동의",
          information: " (필수)",
          explainVal: require("../../assets/img/m2/c_4_cont.png"),
          id: 4,
        },
        {
          value: "광고성 정보 수신 동의 (선택)",
          information: "",
          explainVal: require("../../assets/img/m2/c_5_cont.png"),
          id: 5,
        },
      ],
    };
  },
  methods: {
    //   关闭隐私条款弹出框
    handleClose(val) {
      this.$emit("handleClose", false);
    },
    // 点击确认
    handleSub(val) {
      const policy1 = $('input[name="policy1"]').prop("checked");
      const policy2 = $('input[name="policy2"]').prop("checked");
      const policy3 = $('input[name="policy3"]').prop("checked");
      const policy4 = $('input[name="policy4"]').prop("checked");
      const policy5 = $('input[name="policy5"]').prop("checked");

      if (policy1 || (policy2 && policy3 && policy4)) {
        $('input[name="policy"]').prop("checked", true);
        //   closePopUp();
        console.log("asas。关闭弹出框");
        this.$emit("handleClose", true);
        return;
      }

      if (!policy2 && (policy3 || policy4 || policy5)) {
        // alert('14세 이상 이용자만 사전<br/>등록이 가능합니다.');
        console.log("14세 이상 이용자만 사전<br/>등록이 가능합니다");
        this.aflag = true;
        return;
      }
    },
    // 关闭提示框
    handleCloseAflag() {
      this.aflag = false;
    },
    // 选中隐私条款
    handleCheck(item, e) {
      let arr = this.list;
      if (item.id === 1) {
        arr.forEach((sites) => {
          if (this.checkVal.indexOf(sites.id) == -1) {
            this.checkVal.push(sites.id);
          }
        });
      } else {
        this.checkVal = [];
      }
    },
    handlePolicy(val, e) {
      let checked = e.target.checked;
      if (val === 1) {
        if (checked) {
          $("input.policy").prop("checked", true);
        } else {
          $("input.policy").prop("checked", false);
        }
      } else {
        let count = 0;
        $("input.policy").each(function (idx, item) {
          if ($(item).prop("checked") === true) {
            count++;
          }
          if (count === 4) {
            $('input[name="policy1"]').prop("checked", true);
          } else {
            $('input[name="policy1"]').prop("checked", false);
          }
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.policy-wrapper {
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    //先改变body的滚动条宽度
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    //再改变body的滚动条轨道颜色
    background: #644f4459;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    //最后改变body的滚动条滑轨相关的样式
    background: #644f4459;
    border-radius: 5px;
  }

  .close {
    background: url("../../assets/img/m2/close.png") no-repeat center top;
    background-size: 100% 100%;
    right: -101px;
    top: -20px;
    width: 64px;
    height: 64px;
  }
}
.bg {
  width: 593px;
  height: 890px;
  max-height: 890px;
  background-color: #fed118;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .c-bg {
    background-color: #ffffff;
    margin: 10px;
    height: 870px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .wrapper {
    width: 573px;
    height: 770px;

    .pop-context {
      font-family: RixRakSansPR;
      font-size: 17px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #634234;
      padding: 8px 21px 0;
      img {
        width: 96%;
      }
      label {
        display: block;
        margin-bottom: 12px;
      }
    }
    .red {
      color: #f92c3e;
    }
  }
  .btn {
    padding-bottom: 8px;
    .suc {
      background: url("../../assets/img/m2/sub-btn.png") no-repeat center top;
      background-size: 100% 100%;
      width: 240px;
      height: 76px;
    }
    .err {
      background: url("../../assets/img/m2/close-btn.png") no-repeat center top;
      background-size: 100% 100%;
      width: 240px;
      height: 76px;
      margin-left: 23px;
    }
  }
}
.a-bg {
  .cont {
    background: url("../../assets/img/m2/ys-bg.png") no-repeat center top;
    background-size: 100% 100%;
    width: 595px;
    height: 280px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
}
</style>