<template>
  <div class="compendium">
    <div class="container">
      <div class="title">Compendium</div>
      <div class="content">
        <ul>
          <li>Bestiary</li>
          <li>Items</li>
          <li>Locations</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compendium",
  components: {}
};
</script>

<style lang="less" scoped>
@import "../styles/mixins.less";
ul {
  margin: auto;
  text-align: center;
  list-style-type: none;
}
</style>
