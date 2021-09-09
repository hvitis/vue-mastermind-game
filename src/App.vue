<template>
  <div id="app">
    <AppTitle></AppTitle>
    <div class="columns is-mobile">
      <div class="column is-2 is-offset-3">
        <table class="table">
          <thead>
            <tr>
              <th title="Turn">Turn</th>
              <th title="Seq q">Seqances</th>
              <th title="Lost">Hint</th>
            </tr>
          </thead>
          <tbody>
            <answers-row></answers-row>
            <input-row
              v-for="(answers, index) in this.answerMatrix"
              :answers="answers"
              :rownr="index"
              :key="index"
            ></input-row>
            
          </tbody>
        </table>
        <div class="flex flex-row">
          <game-control></game-control>
          <color-choice></color-choice>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorChoice from "./components/ColorChoice.vue";
import AppTitle from "./components/AppTitle.vue";
import InputRow from "./components/InputRow.vue";
import AnswersRow from "./components/AnswersRow.vue";
import GameControl from "./components/GameControl.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { InputRow, AppTitle, ColorChoice, AnswersRow, GameControl },
  data() {
    return {
      answerMatrix: null,
    };
  },
  computed: {
    ...mapGetters(["getGameState"]),
  },
  mounted() {
    this.answerMatrix = this.getGameState
    // Game will persist state of user answers but the final answer will change
    // this.$store.dispatch("setCorrectSet");
  },
};
</script>
