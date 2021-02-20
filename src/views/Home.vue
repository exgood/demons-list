<template>
  <div class="home">
    <DemonsList msg="Hint. Try to use a pendulum or your finger on the names" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DemonsList from "@/components/DemonsList.vue"; // @ is an alias to /src

@Options({
  components: {
    DemonsList
  }
})
export default class Home extends Vue {}
</script>
