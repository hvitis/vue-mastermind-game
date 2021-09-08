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
            <input-row
              v-for="(answers, index) in answerMatrix"
              :key="index"
              :answers="answers"
              :rownr="index"
            ></input-row>
          </tbody>
        </table>
        <color-choice></color-choice>
      </div>
    </div>
  </div>
</template>

<script>
import ColorChoice from "./components/ColorChoice.vue";
import AppTitle from "./components/AppTitle.vue";
import InputRow from "./components/InputRow.vue";
export default {
  name: "App",
  components: { InputRow, AppTitle, ColorChoice },
  data() {
    return {
      answerMatrix: [[], [], [], [], [], [], [], [], [], [1, 12, 5, 6]],
    };
  },
};
</script>
