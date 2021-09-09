<template>
  <tr>
    <th>{{ rownr + 1 }}</th>
    <template>
      <td>
        <b-field>
          <b-radio
            v-for="(answer, index) in answers"
            :key="index"
            v-model="radio"
            size="is-large"
            native-value="true"
            :type="`is-${this.$mapColors(answer)}`"
          >
          </b-radio>
        </b-field>
      </td>
    </template>
    <template v-if="answers.length >= 0 || answers.length <= 3">
      <td>
        <b-field>
         <b-radio
            v-model="colorFirst"
            size="is-large"
            native-value="gray"
            :type="`is-${this.$mapColors(colorFirst)}`"
          >
          </b-radio>
           <b-radio
            v-model="colorSecond"
            size="is-large"
            native-value="gray"
            :type="`is-${this.$mapColors(colorSecond)}`"
          >
          </b-radio>
           <b-radio
            v-model="colorThird"
            size="is-large"
            native-value="gray"
            :type="`is-${this.$mapColors(colorThird)}`"
          >
          </b-radio>
           <b-radio
            v-model="colorFourth"
            size="is-large"
            native-value="gray"
            :type="`is-${this.$mapColors(colorFourth)}`"
          >
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
};
</script>
