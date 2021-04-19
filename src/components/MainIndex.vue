<template>
  <div class="m2 area">
    <Index />
  </div>
</template>
<script>
import Index from "./index";
export default {
  components: {
    Index,
  },
};
</script>
<style lang="scss" scoped>
.area {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

</style>