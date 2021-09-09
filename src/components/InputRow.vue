<template>
  <tr>
    <th>{{ rownr + 1 }}</th>
    <td>
      <b-field v-if="answers">
        <single-cell
          v-for="(answer, inRowInputNumber) in answers"
          :key="inRowInputNumber"
          :rownr="rownr"
          :inrownumber="inRowInputNumber"
          :value="answer"
          @filledColor="updateComponent"
        ></single-cell>
      </b-field>
    </td>
    <td>
      <hint
        v-if="hints.length != 0"
        :hints="hints"
        :rownr="rownr"
        @checkanswer="onCheckAnswer"
      ></hint>
      <div v-if="hints.length == 0 && rownr == getCurrentRow">
        <b-button type="is-success" @click="() => onCheckAnswer()"
          >Check</b-button
        >
      </div>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
import Hint from "./Hint.vue";
import SingleCell from "./SingleCell.vue";
export default {
  components: { Hint, SingleCell },
  name: "InputRow",
  props: ["answers", "rownr"],
  data() {
    return { hints: [] };
  },
  computed: {
    ...mapGetters([
      "getSelectedColor",
      "getCurrentRow",
      "getCurrentAnswers",
      "getCorrectColorsSet",
      "gameStarted"
    ]),
  },
  methods: {
    updateComponent() {
      this.$forceUpdate();
    },
    alertCustomSuccess() {
      this.$buefy.dialog.alert({
        title: "You Won!",
        message: "Congratz!",
        type: "is-success",
        hasIcon: true,
        icon: "times-circle",
        iconPack: "fa",
        ariaRole: "alertdialog",
        ariaModal: true,
      });
    },
    alertCustomError() {
      this.$buefy.dialog.alert({
        title: "Game Over",
        message: "You have used all your chanes! Try again!",
        type: "is-danger",
        hasIcon: true,
        icon: "times-circle",
        iconPack: "fa",
        ariaRole: "alertdialog",
        ariaModal: true,
      });
    },
    onCheckAnswer() {
      if (!this.gameStarted) {
        this.$buefy.dialog.alert("Start the game first!");
        return;
      }
      // If position && color => green - 2
      // If color             => yellow - 1
      let hints = [0, 0, 0, 0];
      let correctColors = Array.from(this.getCorrectColorsSet);
      let currentAnswers = Array.from(this.getCurrentAnswers);

      console.log(correctColors, currentAnswers);

      for (let index = 0; index < currentAnswers.length; index++) {
        if (currentAnswers[index] === correctColors[index]) {
          hints.pop();
          hints.push(2);
          hints.sort();
          hints.reverse();
          delete correctColors[index];
          delete currentAnswers[index];
        }
      }
      currentAnswers.sort();
      correctColors.sort();

      for (let index = 0; index < currentAnswers.length; index++) {
        if (currentAnswers[index] !== undefined) {
          if (currentAnswers[index] === correctColors[index]) {
            hints.push(1);
            hints.sort();
            hints.reverse();
            hints.pop();
            delete correctColors[index];
            delete currentAnswers[index];
          }
        }
      }
      hints.sort();
      this.hints = hints;

      const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

      if (countOccurrences(hints, 2) === 4) {
        // All 4 circles were guessed right
        // Player wins the game
        this.alertCustomSuccess()
      }
      if(this.getCurrentRow == 0){
        this.alertCustomError()
        this.$store.dispatch("startGame");
      }
      this.$store.dispatch("moveLevelHigher");
    },
  },
};
</script>
