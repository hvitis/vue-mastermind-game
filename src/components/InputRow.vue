<template>
  <tr>
    <th>{{ rownr + 1 }}</th>
    <template v-if="answers.length != 0">
      <td>
        <b-field>
          <b-radio
            v-for="(answer, index) in answers"
            :key="index"
            v-model="radio"
            size="is-large"
            native-value="true"
            :type="`is-${mapColors(answer)}`"
          >
          </b-radio>
        </b-field>
      </td>
    </template>
    <template v-if="answers.length == 0">
      <td>
        <b-field>
          <b-radio size="is-large" native-value="true" type="is-gray">
          </b-radio>
          <b-radio size="is-large" native-value="true" type="is-gray">
          </b-radio>
          <b-radio size="is-large" native-value="true" type="is-gray">
          </b-radio>
          <b-radio size="is-large" native-value="true" type="is-gray">
          </b-radio>
        </b-field>
      </td>
    </template>
    <td>
      <hint :hints="hints" :row="rownr"></hint>
    </td>
  </tr>
</template>

<script>
import Hint from "./Hint.vue";
export default {
  components: { Hint },
  name: "InputRow",
  props: ["answers", "rownr"],
  data() {
    return { hints: null, radio: "true" };
  },
  methods: {
    mapColors: function(colorNumber) {
      let colors = [
        "orange",
        "salmon",
        "brown",
        "pink",
        "danger",
        "primary",
        "fluorescence",
        "aqua",
        "info",
        "perl",
        "success",
        "black"
      ];
      return colors[colorNumber]
    },
  },
};
</script>
