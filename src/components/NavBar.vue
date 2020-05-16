<template>
  <nav id="navBar" class="nav">
    <ul class="container">
      <li class="nav-logo">
        <router-link to="/">Fungeon & Dragons</router-link>
      </li>
      <li class="nav-link-container slidein" :class="{ hide: hideNavLinks }">
        <router-link to="/adventures" class="nav-link">Adventures</router-link>
        <router-link to="/characters" class="nav-link">Characters</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li @click="toggleNavLinks()">
        <mobile-menu />
      </li>
    </ul>
  </nav>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
export default {
  name: "NavBar",
  components: {
    MobileMenu
  },
  data: () => {
    return {
      hideNavLinks: true
    };
  },
  methods: {
    toggleNavLinks() {
      setTimeout(() => (this.hideNavLinks = !this.hideNavLinks), 200);
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes slidein {
  0% {
    right: -200px;
  }
  100% {
    right: 0;
  }
}

.slidein {
  animation: 200ms ease-in-out slidein;
}

.nav-link-container {
  position: absolute;
  top: 60px;
  right: 0;
  padding: 25px 40px;
  background-color: #090809;

  & a {
    display: block;
    cursor: pointer;
    margin: 15px 0;
  }
}

.nav {
  margin: auto;
  padding: 15px;
  color: #cbf2ca;
  background-color: #090809;
  box-shadow: 0px 2px 6px #ccc;
  max-width: 100vw;
  position: relative;

  & a {
    color: #cbf2ca;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & ul {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    list-style-type: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    & .nav-logo {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex: 1 auto;
      font-size: 16px;
      font-weight: bold;
      margin-right: 55px;
    }
  }
}

@media only screen and (min-width: 600px) {
  .nav-link-container {
    flex: 0 auto;
    display: flex;
    position: static;
    padding: 0;
  }
  .nav {
    & ul {
      display: flex;
      align-items: center;
      list-style-type: none;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

      & .nav-link {
        display: inline-flex;
        margin: 0 25px 0 0;
      }

      & .nav-logo {
        font-size: 20px;
      }

      & .nav-logo::before {
        content: url(/assets/favicon/favicon-32x32.png);
        margin-right: 15px;
      }
    }
  }
}
</style>
