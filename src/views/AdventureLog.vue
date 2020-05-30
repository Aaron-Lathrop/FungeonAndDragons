<template>
  <div id="adventureLog">
    <div class="container">
      <h1 class="title">{{adventureLogs.title}}</h1>
      <div class="content" v-for="(entry, index) in adventureLogs.entries" :key="`entry-${index}`">
        <p class="sub-heading">{{entry.subHeading}}</p>
        <p v-for="(line, index) in entry.content" :key="`line-${index}`" v-html="line"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AdventureLog",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allAdventureLogs"]),
    adventureLogs() {
      return this.allAdventureLogs || [];
    }
  },
  methods: {
    ...mapActions(["fetchAdventureLogs"])
  },
  created() {
    this.fetchAdventureLogs();
  }
};
</script>

<style lang="less" scoped>
#adventureLog {
  margin: 20px;

  .title {
    font-size: 25px;
    text-align: center;
  }
  .content {
    font-size: 19px;
    line-height: 31px;
    max-width: 800px;
    margin: auto;

    & p {
      margin: 10px;
    }
    .sub-heading {
      font-weight: bold;
      text-align: center;
      margin-top: 25px;
    }
  }
}
</style>
