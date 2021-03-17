<template>
  <div class="silder2">
    <div class="fp-tableCell table-cell vertical-align-middle">
      <div class="cos m-auto">
        <div class="bg-book_h2 m-auto"></div>
        <div class="box position-relative">
          <div>
            <div class="bg-form_input_label d-flex align-items-center">
              <div class="label bg-form_input">
                <input
                  type="text"
                  value="010"
                  disabled="disabled"
                  style="width: 50px"
                  class="number"
                />
                <span>
                  <img
                    src="../assets/img/bg2/split.png"
                    alt=""
                    class="bg-split"
                  />
                </span>
                <input
                  type="text"
                  name="mobile"
                  placeholder="휴대폰 번호를 입력해주세요"
                  maxlength="8"
                  autocomplete="off"
                  class="number"
                />
              </div>
              <button class="label bg-form_button">asasasa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style  lang="scss" scoped>
.silder2 {
  background: url("../assets/img/bg2/02.jpg") no-repeat;
  // background-size: cover;
  width: 100%;
  height: 100%;
  display: table;
  .fp-tableCell {
    // display: table;
    width: 100%;
  }
  .cos {
    width: 1366px;
    min-height: 800px;
    .bg-book_h2 {
      width: 1020px;
      height: 105px;
      background: url("../assets/img/bg2/sprites.png") no-repeat 7px -10px;
      background-size: 200%;
    }
    .bg-form_input_label {
      height: 125px;

      .bg-form_input {
        width: 554px;
        height: 125px;
        background-position: -10px -10px !important;
        padding: 0 23px !important;
        margin-right: 8px;
        input[type="text"] {
          background-color: transparent;
          width: 400px;
          height: 125px;
          font-weight: 400;
          font-size: 26px;
        }
        .number {
          line-height: 24px;
          // color: #d9d9d9;
        }
        .bg-split {
          height: 40px;
          width: 1px;
          opacity: 0.4;
        }
      }
      .bg-form_button {
        width: 184px;
        height: 104px;
        background-position: -10px -155px !important;
      }
      .label {
        background: url("../assets/img/bg2/form-sprites_0408.png") no-repeat;
        background-size: cover;
        // font-size: 0;
      }
    }
  }
}
</style>