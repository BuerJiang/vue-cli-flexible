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
    <div class="box">
      <div class="box-fl position-absolute">
        <div class="position-relative">
          <!-- <div
            class="box-fl-cont position-absolute"
            :class="'item' + [index]"
            v-for="(item, index) in imgList"
            :key="index"
          >
            <div>
              <div class="tag position-absolute">
                <img :src="item.tagUrl" alt="" width="100%" />
              </div>
              <div class="img-s position-absolute">
                <img :src="item.imgUrl" alt="" width="100%" />
              </div>
            </div>
          </div> -->
          <div class="box-fl-cont position-absolute item1">
            <div>
              <div class="tag position-absolute">
                <img
                  src="../../assets/img/m4/a_1_tag.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div class="img-s position-absolute img-bg-1"></div>
            </div>
          </div>
          <div class="box-fl-cont position-absolute item2">
            <div>
              <div class="tag position-absolute">
                <img
                  src="../../assets/img/m4/a_2_tag.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div class="img-s position-absolute img-bg-2"></div>
            </div>
          </div>
          <div class="box-fl-cont position-absolute item3">
            <div>
              <div class="tag position-absolute">
                <img
                  src="../../assets/img/m4/a_3_tag.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div class="img-s position-absolute img-bg-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-fr position-absolute"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgFlag1: true,
      imgFlag2: true,
      imgFlag3: true,

      imgList: [
        {
          tagUrl: require("../../assets/img/m4/a_1_tag.png"),
          imgUrl: require("../../assets/img/m4/a_1.png"),
        },
        {
          tagUrl: require("../../assets/img/m4/a_2_tag.png"),
          imgUrl: require("../../assets/img/m4/a_2.png"),
        },
        {
          tagUrl: require("../../assets/img/m4/a_3_tag.png"),
          imgUrl: require("../../assets/img/m4/a_3.png"),
        },
      ],
    };
  },
  methods: {
    // changeActive(val) {
    //   if (val === 1) {
    //     this.imgFlag1 = false;
    //   } else if (val === 2) {
    //     this.imgFlag2 = false;
    //   } else if (val === 3) {
    //     this.imgFlag3 = false;
    //   }
    // },
  },
};
</script>
<style lang="scss" scoped>
.slider4 {
  .box {
    width: 100%;
    height: 100%;
    .box-fl {
      z-index: 1;
      width: 1326px;
      height: 789px;
      background: url("../../assets/img/m4/c_bg.png") no-repeat center top;
      background-size: 100% 100%;
      transform: translate(0, -50%);
      left: 110px;
      top: 50%;
      .box-fl-cont {
        top: 196px;
        .img-s {
          width: 315px;
          height: 470px;
          top: 42px;
          left: 65px;
        }
        .img-bg-1 {
          background: url("../../assets/img/m4/a_1.png") no-repeat center top;
          background-size: 100% 100%;
          &:hover {
            background: url("../../assets/img/m4/a_1_active.png") no-repeat
              center top;
            background-size: 100% 100%;
            transition: all 0.3s;
          }
        }
        .img-bg-2 {
          background: url("../../assets/img/m4/a_2.png") no-repeat center top;
          background-size: 100% 100%;
          &:hover {
            background: url("../../assets/img/m4/a_2_active.png") no-repeat
              center top;
            background-size: 100% 100%;
            transition: all 0.3s;
          }
        }
        .img-bg-3 {
          background: url("../../assets/img/m4/a_3.png") no-repeat center top;
          background-size: 100% 100%;
          &:hover {
            background: url("../../assets/img/m4/a_3_active.png") no-repeat
              center top;
            background-size: 100% 100%;
            transition: all 0.3s;
          }
        }
        .tag {
          z-index: 99;
          width: 175px;
          height: 133px;
        }
      }
      .item1 {
        left: 41px;
      }
      .item2 {
        left: 464px;
      }
      .item3 {
        left: 890px;
      }
    }

    .box-fr {
      z-index: 2;
      width: 660px;
      height: 915px;
      background: url("../../assets/img/m4/js.png") no-repeat center top;
      background-size: 100% 100%;
      right: 0;
      bottom: 0;
    }
  }
}
</style>