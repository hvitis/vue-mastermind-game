<template>
  <b-button class="my-2" type="is-success" @click="startGame">START</b-button>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$store.dispatch("startGame");
      this.$emit("start")
    },
  },
};
</script>

<style></style>
