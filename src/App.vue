<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
// import AdventureLog from "./components/AdventureLog";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
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
.flex {
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.title {
  margin: 20px;
  font-size: 30px;
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
