<template>
  <div class="animated zoomIn position-relative policy">
    <div class="bg position-absolute">
      <!-- 关闭按钮 -->
      <div class="close position-absolute cursor" @click="handleClose(1)"></div>
      <div class="c-bg">
        <div class="wrapper">
          <div
            class="item"
            v-for="(item, index) in list"
            :key="index"
            @click="handleCheck(item, $event)"
          >
            <input
              type="checkbox"
              :id="'item' + [index]"
              class="inline-block"
              v-model="checkVal"
              :value="item.id"
            />
            <label :for="'item' + [index]" class="pl-1">
              <span>{{ item.value }}</span>
              <span v-if="item.information.length > 0" class="red">{{
                item.information
              }}</span>
            </label>
            <div
              class="explain-val mt-2 p-1"
              v-if="item.explainVal.length > 0"
              v-html="item.explainVal"
            ></div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="btn position-absolute d-flex align-items-center">
        <div class="suc cursor" @click="handleSub"></div>
        <div class="err cursor" @click="handleClose(2)"></div>
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
          explainVal:
            "<p>(주)Ujoygames는 이벤트 진행을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p><p>- 수집 및 이용 목적 : 사전 등록 이벤트 참여 시 보상 지급, 게임 출시 안내</p><p>- 수집되는 개인정보 : 휴대폰 번호</p><p>- 개인정보의 보유 및 이용 기간 : 보상 발송 완료 후 6개월</p><p>수집된 개인정보는 동의 기간 도래 시 즉시 파기됩니다.<p><p>개인정보 수집 동의에 대해 거부하실 수 있으며, 거부 시 이벤트에 참여하실 수 없습니다.</p>",
          id: 3,
        },
        {
          value: "개인정보 처리위탁 동의",
          information: " (필수)",
          explainVal:
            "<p>[LMS/SMS/알림톡 발송을 위한 개인정보 처리위탁 동의]</p><p>(주)Ujoygames는 원활한 이벤트 진행을 위해 아래와 같이 개인정보를 처리위탁하고 있습니다.</p><p>- 처리위탁을 받는 자 : SK브로드밴드</p><p>- 처리위탁 업무 내용 : LMS/SMS 발송</p><p>- 처리위탁을 받는 자 : (주)PaaSoo</p><p>- 처리 위탁 업무 내용 : 이벤트 및 게임 관련 소식 알림톡 /LMS 발송</p><p>- 수집되는 개인정보 : 휴대폰번호 (* 게임런칭이후 일괄 삭제되어 보관되지 않습니다.)</p>",
          id: 4,
        },
        {
          value: "광고성 정보 수신 동의 (선택)",
          information: "",
          explainVal:
            "<p>광고성 정보 수신 동의</p><p>- 수집 및 이용 목적 : Ujoygames 신규 서비스 및 이벤트 혜택 안내</p><p>- 수집 항목 : 휴대폰 번호</p><p>- 개인정보의 보유 및 이용 기간 : 동의 철회 시</p><p>※ 광고성 정보 수신을 원하지 않으시는 경우 언제든지 고객센터로 문의주시기 바랍니다.</p><p>광고성 정보 수신에 동의하지 않더라도 이벤트 참여는 가능하나, 신규 이벤트 안내 및 추가 보상은 받으실 수 없습니다.</p>",
          id: 5,
        },
      ],
    };
  },
  methods: {
    //   关闭隐私条款弹出框
    handleClose(val) {
      this.$emit("handleClose");
    },
    // 点击确认
    handleSub() {
      this.aflag = true;
      console.log("确认```", this.checkVal);
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
  },
};
</script>
<style lang="scss" scoped>
.policy {
  width: 100%;
  height: 100%;
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
  }
  .wrapper {
    width: 573px;
    height: 770px;
    .item {
      font-family: RixRakSansPR;
      font-size: 17px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #634234;
      padding: 12px 21px 0;
      margin-bottom: 2px;
    }
    .explain-val {
      //   width: 527px;
      //   height: 347px;
      height: 160px;
      max-height: 160px;
      background-color: #ffffff;
      border: solid 1px #644f44;
      overflow-y: scroll;

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
    }
    .red {
      color: #f92c3e;
    }
  }
  .btn {
    bottom: 27px;
    left: 30px;
    width: 573px;
    .suc {
      background: url("../../assets/img/m2/sub-btn.png") no-repeat center top;
      background-size: 100% 100%;
      width: 254px;
      height: 76px;
    }
    .err {
      background: url("../../assets/img/m2/close-btn.png") no-repeat center top;
      background-size: 100% 100%;
      width: 254px;
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