<template>
  <div id="mobileMenu" class="menu-container">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu"
};
</script>

<style lang="less" scoped>
.menu-container {
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

@media only screen and (min-width: 600px) {
  .bar1,
  .bar2,
  .bar3 {
    display: none;
  }
}
</style>
