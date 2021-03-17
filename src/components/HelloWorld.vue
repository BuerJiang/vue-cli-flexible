<template>
  <div class="m2">
    <swiper :options="swiperOption">
      <swiper-slide>
        <silder1 />
      </swiper-slide>
      <swiper-slide>
        <silder2 />
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-home" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import silder1 from "./slider1";
import silder2 from "./slider2";

export default {
  components: { silder1, silder2 },
  name: "Home",
  data() {
    return {
      // isMode: "", // 弹出框
      swiperOption: {
        direction: "vertical",
        // grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        height: window.innerHeight, // 高度设置，占满设备高度
        pagination: {
          el: ".swiper-pagination-home",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          clickable: true, // 允许点击小圆点跳转
          renderBullet: function (index, className) {
            switch (index) {
              case 0:
                name = "壹";
                break;
              case 1:
                name = "贰";
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
        mousewheel: true, //开启鼠标
      },
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" >
.m2 {
  height: 100%;
  background: #acafc2;
  .swiper-container {
    width: 100%;
    height: 100%;
    // 分页
    .swiper-pagination-home{
      left: 46px;
      top: 46px;
      transform: translate3d(0, 0, 0);
      .swiper-pagination-bullet-active {
        background: transparent;
      }
      // 分页选中后
      .my-bullet i {
        background-color: #41203f !important;
        width: 60px;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        display: block;
        border-radius: 50%;
      }
      .swiper-pagination-bullet-active i {
        -webkit-transform: scale(1.5);
        background: url("../assets/img/shouye_nvsheng_huangseb.png") no-repeat
          center 50%;
        background-size: auto 100%;
        color: #815d4b;
      }
    }
  }

  // 箭头动画
}
</style>