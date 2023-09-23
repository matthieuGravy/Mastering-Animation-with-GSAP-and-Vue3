<template>
  <h1>scrollTrigger</h1>
  <div class="box box1">
    <h2>box1</h2>
  </div>
  <div class="box box2"><h2>box2</h2></div>
  <div class="box box3"><h2>box3</h2></div>
  <div class="box box4"><h2>box4</h2></div>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 50px;
}
.box1 {
  background-color: rosybrown;
}
.box2 {
  background-color: pink;
  h2 {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);
  }
}
.box3 {
  background-color: salmon;
}
.box4 {
  background-color: yellow;
}
</style>
