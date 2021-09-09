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
      <hint :hints="hints" :rownr="rownr"></hint>
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
    return { hints: null };
  },
  computed: {
    ...mapGetters(["getSelectedColor"]),
  },
  methods: {
    updateComponent() {
      console.log('updating')
      this.$forceUpdate();
    },
  },
};
</script>
