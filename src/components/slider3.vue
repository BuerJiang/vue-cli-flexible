<template>
  <div class="silder2">
    <arrows />
    <div class="swiper-container-new m-auto" v-if="flag">
      <div class="swiper-item">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item of swiperList" :key="item.id">
            <img
              :src="item.imgUrl"
              alt=""
              srcset=""
              @click="handleGo(1, item.id)"
            /> </swiper-slide
          >　　
          <div
            class="swiper-pagination child-swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
    </div>

    <!-- 详情区域 -->
    <div class="swiper-detail m-auto" v-else>
      <div class="position-relative">
        <div class="d-flex">
          <div class="flex-1">21312</div>
          <div class="menu">
            <!-- 菜单切换 -->
            <div>
              <img
                src="../assets/img/go.png"
                alt=""
                class="cursor"
                @click="handleGo(2)"
              />
            </div>
            <div class="yuyue_tab mb-3" v-bind:class="{ isActive: isActive }">
              <div
                v-for="(item, index) in list"
                :key="index"
                class="inline-block"
              >
                <input
                  type="radio"
                  name="test"
                  :id="item.radioId"
                  :value="item.value"
                  :checked="item.isCheck"
                  class="yuyue-btn inline-block"
                  @change="changeInput(item)"
                />
                <label
                  :for="item.radioId"
                  class="yuyue-btn inline-block"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import arrows from "./arrows";
export default {
  components: {
    arrows,
  },
  data() {
    return {
      flag: true, // 通过此按钮确定是否展示图片详情内容
      // 菜单按钮
      list: [
        { value: "1", isCheck: true, radioId: "register" },
        { value: "2", isCheck: false, radioId: "login" },
      ],
      isActive: false,
      swiperOption: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".child-swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      },
      swiperList: [
        {
          id: "1",
          imgUrl: require("../assets/img/011.png"),
        },
        {
          id: "2",
          imgUrl: require("../assets/img/002.png"),
        },
        {
          id: "3",
          imgUrl: require("../assets/img/003.png"),
        },
        {
          id: "4",
          imgUrl: require("../assets/img/002.png"),
        },
      ],
    };
  },
  methods: {
    handleGo(val, id) {
      console.log("现在点击得图片是:", val, id);
      if (val === 1) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    // 点击切换菜单
    changeInput(item) {
      if (item.value === "1") {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
  },
};
</script>
<style  lang="scss" scoped>
.silder2 {
  background: url("../assets/img/bg2/02.jpg") no-repeat top center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.swiper-container-new {
  width: 1271px;
  height: 516px;
  top: 50%;
  // margin-top: 258px;
  .swiper-slide {
    // background: cornsilk;
    // transition: all 0.5s ease-in-out;
    // &:hover {
    //   transform: scale(0.5);
    // }
  }
  .swiper-item {
    img {
      width: 100%;
    }
  }
}
.swiper-detail {
  width: 1210px;
  padding-top: 16px;
  img {
    transform: scale(1.2);
    width: 60px;
    &:hover {
      transform: rotate(360deg);
    }
  }
  .menu {
    width: 430px;
    border: 1px solid;
    .yuyue_tab {
      margin-top: 130px;
      height: 35px;
      background: url("../assets/img/yy-tab.png") no-repeat center 0;
      background-size: cover;
      .yuyue-btn {
        width: 100px;
        height: 35px;
        cursor: pointer;
        overflow: hidden;
        text-indent: -999999px;
      }
      input[type="radio"] {
        display: none;
      }
    }
    .isActive {
      // background-position: center -80px;
      background: darksalmon;
      width: 430px;
      height: 35px;
    }
  }
}
</style>