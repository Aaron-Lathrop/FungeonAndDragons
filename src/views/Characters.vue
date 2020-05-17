<template>
  <div class="characters m-20">
    <div class="title">Characters</div>
    <ul class="container">
      <li class="content" v-for="character in characters" :key="character.name">
        <h3 class="characters-title">{{ character.name }}</h3>
        <div class="characters-container">
          <img class="characters-img" :src="character.avatar" :alt="character.name" />
          <div
            class="characters-description"
          >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Characters",
  data: () => {
    return {
      characters: [
        {
          name: "Bruno M. Crumbler",
          description: "",
          avatar: "../assets/characters/BrunoMCrumbler.jpg",
          color: ""
        },
        {
          name: "Chance",
          description: "",
          avatar: "../assets/characters/Chance.png",
          color: ""
        },
        {
          name: "Cleetus",
          description: "",
          avatar: "../assets/characters/Cleetus.jpg",
          color: ""
        },
        {
          name: "Freddie Peacock",
          description: "",
          avatar: "../assets/characters/FreddiePeacock.jpeg",
          color: ""
        },
        {
          name: "Lark Evenstone",
          description: "",
          avatar: "../assets/characters/LarkEvenstone.jpg",
          color: ""
        },
        {
          name: "Maryse",
          description: "",
          avatar: "../assets/characters/Maryse.jpg",
          color: ""
        },
        {
          name: "Phuk",
          description: "",
          avatar: "../assets/characters/Phuk.png",
          color: ""
        },
        {
          name: "Sebastion Wormsburrough",
          description: "",
          avatar: "../assets/characters/SebastionWormsburrough.jpg",
          color: ""
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
}
li {
  margin: 20px auto;
  padding: 35px 25px;
  border: 2px solid #090809;
  border-radius: 7px;
  box-shadow: 0px 2px 6px #ccc;
}
.characters {
  &-container {
    // align-items: center;
    text-align: center;
  }
  &-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
  &-img {
    margin-right: 20px;
    height: 200px;
    width: 200px;
  }
  &-description {
    text-align: left;
  }
}
</style>