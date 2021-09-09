<template>
  <b-button type="is-success" @click="startGame">START</b-button>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$store.dispatch("setCorrectSet");
    },
  },
};
</script>

<style></style>
