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
    ]),
  },
  methods: {
    updateComponent() {
      this.$forceUpdate();
    },
    onCheckAnswer() {
      // If position && color => green - 2
      // If color             => yellow - 1
      let hints = [0, 0, 0, 0];
      let correctColors = Array.from(this.getCorrectColorsSet);
      let currentAnswers = Array.from(this.getCurrentAnswers);
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

      for (let index = 0; index < currentAnswers.length; index++) {
        if (currentAnswers[index] === correctColors[index]) {
          hints.push(1);
          hints.sort();
          hints.reverse();
          hints.pop();
          delete correctColors[index];
        }
      }
      hints.sort();
      this.hints = hints;
      this.$store.dispatch("moveLevelHigher");
    },
  },
};
</script>
