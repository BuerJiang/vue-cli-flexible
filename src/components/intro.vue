<template>
  <div class="intro">
    <swiper :options="swiperOption" ref="goodSwiper">
      <swiper-slide
        v-for="(item, index) in swiperList"
        :key="index"
        class="position-relative"
      >
        <img :src="item.imgUrl" alt="" srcset="" class="main-img" />
      </swiper-slide>
      <div class="swiper-pagination cursor" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        watchSlidesProgress: true,

        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          clickable: true, // 允许点击小圆点跳转
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
                break;
              case 3:
                name = "";
                break;
              case 4:
                name = "";
                break;
              case 5:
                name = "";
                break;
              default:
                name = "";
            }
            return (
              '<div class="' +
              className +
              [index] +
              " " +
              className +
              '"><i>' +
              name +
              "</i></div>"
            );
          },
        },
      },
      swiperList: [
        {
          id: 1,
          imgUrl: require("../assets/img/role_1.png"),
        },
        {
          id: 2,
          imgUrl: require("../assets/img/role_2.png"),
        },
        {
          id: 3,
          imgUrl: require("../assets/img/role_3.png"),
        },
        {
          id: 4,
          imgUrl: require("../assets/img/role_4.png"),
        },
        {
          id: 5,
          imgUrl: require("../assets/img/role_5.png"),
        },
        {
          id: 6,
          imgUrl: require("../assets/img/role_6.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" >
.intro {
  width: 100%;
  height: 100%;
  .swiper-container {
    width: 100%;
    height: 100%;

    .main-img {
      width: 538px;
      height: 820px;
      margin: 0 auto;
      display: block;
    }
    .swiper-pagination {
      width: 515px;
      height: 79px;
      background: url("../assets/img/a_bg.png");
      background-size: 100% 100%;
      bottom: 0;
      left: 84px;
      display: flex;
      // justify-content: space-between;

      .swiper-pagination-bullet-active {
        background: transparent !important;
      }
      // 分页选中后
      .my-bullet {
        width: 88px;
        height: 78px;
        i {
          width: 78px;
          height: 78px;
          position: absolute;
          display: block;
          z-index: -1;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }

      // 右边标签页
      .my-bullet0.swiper-pagination-bullet-active i {
        background: url("../assets/img/active_1.png") no-repeat center;
        background-size: 100% 100%;
      }
      .my-bullet1.swiper-pagination-bullet-active i {
        background: url("../assets/img/active_2.png") no-repeat center;
        background-size: 100% 100%;
        left: 92px;
      }
      .my-bullet2.swiper-pagination-bullet-active i {
        background: url("../assets/img/active_3.png") no-repeat center;
        background-size: 100% 100%;
        left: 178px;
      }
      .my-bullet3.swiper-pagination-bullet-active i {
        background: url("../assets/img/active_4.png") no-repeat center;

        background-size: 100% 100%;
        left: 264px;

      }
      .my-bullet4.swiper-pagination-bullet-active i {
        background: url("../assets/img/active_5.png") no-repeat center;

        background-size: 100% 100%;
        left: 352px;

      }
      .my-bullet5.swiper-pagination-bullet-active i {
        background: url("../assets/img/active_6.png") no-repeat center;

        background-size: 100% 100%;
        right: 0;
      }
    }
  }
}
</style>