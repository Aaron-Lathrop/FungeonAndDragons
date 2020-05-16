<template>
  <div id="app">
    <nav-bar />
    <adventure-log />
    <under-construction class="hide" />
  </div>
</template>

<script>
import AdventureLog from "./components/AdventureLog";
import NavBar from "./components/NavBar";
import UnderConstruction from "./components/UnderConstruction";

export default {
  name: "App",
  components: {
    AdventureLog,
    NavBar,
    UnderConstruction
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.hide {
  display: none;
}

.show {
  display: initial;
}

.m- {
  &10 {
    margin: 10px;
  }
  &15 {
    margin: 15px;
  }
  &20 {
    margin: 20px;
  }
}
</style>
