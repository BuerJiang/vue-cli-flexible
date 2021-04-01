<template>
  <div class="m2">
    <!-- 背景图 -->
    <!-- <div
      class="position-absolute bg-block d-flex align-items-center justify-content-center"
    >
      <img src="../assets/img/m1/bg.png" alt="" srcset="" width="1920px" />
    </div> -->
    <swiper :options="swiperOption" ref="goodSwiper">
      <swiper-slide>
        <slider1 />
      </swiper-slide>
      <swiper-slide class="stop-swiping">
        <slider2
          :onNext="nextShow"
          @handleClose="handleClose"
          @handleEVent="handleEVent"
        />
      </swiper-slide>
      <swiper-slide> <slider3 /> </swiper-slide>
      <swiper-slide> <slider4 /> </swiper-slide>
      <swiper-slide> 22222222222222222 </swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-home cursor"
        :class="nextShow ? '' : 'swiperNoSwiping'"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
import slider1 from "./publicComponents/slider1";
import slider2 from "./publicComponents/slider2";
import slider3 from "./publicComponents/slider3";
import slider4 from "./publicComponents/slider4";

export default {
  name: "Home",
  components: {
    slider1,
    slider2,
    slider3,
    slider4,
  },
  data() {
    return {
      nextShow: true,

      swiperOption: {
        direction: "vertical",
        height: window.innerHeight, // 高度设置，占满设备高度
        mousewheel: true, //开启鼠标
        noSwiping: false,
        noSwipingClass: "stop-swiping",
        initialSlide: 0,
        pagination: {
          el: ".swiper-pagination-home",

          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          touchRatio: 1, //解决滑动卡顿
          longSwipesRatio: 0.1,
          threshold: 10, //如果触摸距离小于该值滑块不会被拖动
          followFinger: false,

          bulletClass: "my-bullet", //需设置.my-bullet样式
          clickable: true, // 允许点击小圆点跳转
          autoplayDisableOnInteraction: false,
          // 自定义分页
          // type: "custom",
          // renderCustom: function (swiper, current, total) {
          //   //  alert(1)

          //   var paginationHtml = " ";
          //   for (var i = 0; i < total; i++) {
          //     // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
          //     if (i === current - 1) {
          //       paginationHtml +=
          //         '<div class="my-bullet swiper-pagination-bullet-active"><i ></i></div>';
          //     } else {
          //       paginationHtml += '<div class="my-bullet"><i ></i></div>';
          //     }
          //   }
          //   return paginationHtml;
          // },

          renderBullet: function (index, className) {
            switch (index) {
              case 0:
                name = "";
                break;
              case 1:
                name = "";
                break;
              case 2:
                name = "";
              case 3:
                name = "";
              case 4:
                name = "";
                break;
              default:
                name = "";
            }
            return (
              '<div class="' +
              className +
              " " +
              className +
              [index] +
              '"><i>' +
              name +
              "</i></div>"
            );
          },
        },
      },
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    // 用来控制注册页，在注册的时候，禁止拖动等
    handleClose(val) {
      this.nextShow = val;
      this.swiperOption.mousewheel = val;
      this.swiperOption.noSwiping = false;

      this.$refs.goodSwiper.swiper.destroy(); //先销毁
      this.swiperOption.initialSlide = 1;
      this.$refs.goodSwiper.mountInstance(); //后在加载
    },
    handleEVent(val) {
      this.nextShow = val;
      this.swiperOption.mousewheel = val;
      this.swiperOption.noSwiping = true;

      this.$refs.goodSwiper.swiper.destroy(); //先销毁
      this.swiperOption.initialSlide = 1;
      this.$refs.goodSwiper.mountInstance(); //后在加载
    },
  },
};
</script>
<style lang="scss" >
.test {
  width: 300px;
  height: 300px;
  background: olive;
}
.m2 {
  height: 100%;
  background: #acafc2;
  .swiper-container {
    width: 100%;
    height: 100%;
    // 分页
    .swiper-pagination-home {
      transform: translate3d(0, 0, 0);
      top: 45px;
      left: 44px;
      width: 151px;
      height: 291px;
      background: url("../assets/img/m1/menu.png") top center;
      background-size: 100% 100%;
      .swiper-pagination-bullet-active {
        background: transparent;
      }
      // 分页选中后
      .my-bullet0 i {
        width: 102px;
        height: 28px;
        display: block;
        margin-top: 64px;
        margin-left: 25px;
      }
      .my-bullet1 i {
        display: block;
        width: 105px;
        height: 20px;
        margin-top: 22px;
        margin-left: 26px;
      }
      .my-bullet2 i {
        display: block;
        width: 77px;
        height: 20px;
        margin-top: 22px;
        margin-left: 40px;
      }
      .my-bullet3 i {
        display: block;
        width: 95px;
        height: 20px;
        margin-top: 21px;
        margin-left: 31px;
      }
      .my-bullet4 i {
        display: block;
        width: 96px;
        height: 20px;
        margin-top: 21px;
        margin-left: 31px;
      }
      .my-bullet0.swiper-pagination-bullet-active i {
        background: url("../assets/img/m1/m_active_1.png") center top;
        background-size: 100% 100%;
      }
      .my-bullet1.swiper-pagination-bullet-active i {
        background: url("../assets/img/m1/m_active_2.png") center top;
        background-size: 100% 100%;
      }
      .my-bullet2.swiper-pagination-bullet-active i {
        background: url("../assets/img/m1/m_active_3.png") center top;
        background-size: 100% 100%;
      }
      .my-bullet3.swiper-pagination-bullet-active i {
        background: url("../assets/img/m1/m_active_4.png") center top;
        background-size: 100% 100%;
      }
      .my-bullet4.swiper-pagination-bullet-active i {
        background: url("../assets/img/m1/m_active_5.png") center top;
        background-size: 100% 100%;
      }
    }
  }

  // 箭头动画
}
</style>