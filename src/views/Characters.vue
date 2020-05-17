<template>
  <div class="characters">
    <div class="title">Characters</div>
    <ul>
      <li v-for="character in characters" :key="character.name">
        <div>
          <img class="character-img" :src="character.avatar" :alt="character.name" />
          {{ character.name }}
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
  border: 2px solid black;
  border-radius: 7px;
  margin: 15px;
  padding: 45px 25px;
}

.character-img {
  height: 150px;
  width: 150px;
}
</style>