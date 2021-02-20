<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-2 p-3" v-for="demon in demonsList" :key="demon">
          {{ demon }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string;
  demonsList: string[] = [
    "Baal",
    "Paimon",
    "Beleth",
    "Purson",
    "Asmodai",
    "Vine",
    "Balam",
    "Zagan",
    "Belial",
    "Amdusias",
    "Agares",
    "Valefar",
    "Barbatos",
    "Gusion",
    "Eligos",
    "Zepar",
    "Bathin",
    "Saleos",
    "Aim",
    "Buné",
    "Berith",
    "Astaroth",
    "Focalor",
    "Vepar",
    "Vual",
    "Crocell",
    "Allocer",
    "Murmur",
    "Gremory",
    "Vapula",
    "Flauros",
    "Dantalion",
    "Vassago",
    "Sitri",
    "Ipos",
    "Gaap",
    "Stolas",
    "Orobas",
    "Seir",
    "Gamigin",
    "Aamon",
    "Leraje",
    "Naberius",
    "Ronové",
    "Forneus",
    "Marchosias",
    "Phenex",
    "Sabnock",
    "Shax",
    "Orias",
    "Andras",
    "Andrealphus",
    "Kimaris",
    "Decarabia",
    "Furfur",
    "Malthus",
    "Raum",
    "Bifrons",
    "Andromalius",
    "Furcas",
    "Barbas",
    "Buer",
    "Botis",
    "Morax",
    "Glasya-Labolas",
    "Foras",
    "Malphas",
    "Haagenti",
    "Camio",
    "Ose",
    "Amy",
    "Valac"
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
