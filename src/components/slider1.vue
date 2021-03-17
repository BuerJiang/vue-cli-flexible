<template>
  <div class="silder1 position-relative">
    <arrows />
  </div>
</template>
<script>
import arrows from "./arrows";
export default {
  components: {
    arrows,
  },
};
</script>
<style lang="scss" scoped>
.silder1 {
  background: url("../assets/img/01.jpg") no-repeat top center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>