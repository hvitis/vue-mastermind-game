<template>
  <tr>
    <th>Answers</th>
      <td>
        <b-field>
          <b-radio size="is-large" native-value="true" type="is-gray" disabled>
          </b-radio>
          <b-radio size="is-large" native-value="true" type="is-gray" disabled>
          </b-radio>
          <b-radio size="is-large" native-value="true" type="is-gray" disabled>
          </b-radio>
          <b-radio size="is-large" native-value="true" type="is-gray" disabled>
          </b-radio>
        </b-field>
      </td>
    <td>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
// TODO: Show colors when player wins and loses
export default {
  name: "AnswersRow",
  computed: {
    ...mapGetters(["getCorrectColorsSet"]),
  },
  data(){
      return {
          correctColors: null
      }
  },
  mounted(){
      this.correctColors = this.getCorrectColorsSet
  }
};
</script>
