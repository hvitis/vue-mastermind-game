<template>
  <tr>
    <th>1</th>
    <td>
      <b-field>
        <b-radio v-model="radio" size="is-large" native-value="large">
        </b-radio>
      </b-field>
    </td>
    <td>
      <b-field>
        <b-radio v-model="radio" size="is-large" native-value="large">
        </b-radio>
      </b-field>
    </td>
    <td>
      <b-field>
        <b-radio v-model="radio" size="is-large" native-value="large">
        </b-radio>
      </b-field>
    </td>
    <td>
      <b-field>
        <b-radio v-model="radio" size="is-large" native-value="large">
        </b-radio>
      </b-field>
    </td>
    <td>
      <hint :hints="hints"></hint>
    </td>
  </tr>
</template>

<script>
import Hint from "./Hint.vue";

export default {
  components: { Hint },

  name: "InputRow",
  data() {
    return { hints: [0, 0, 1, 2] };
  },
};
</script>
