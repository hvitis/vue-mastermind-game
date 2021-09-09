<template>
  <div>
    <b-field>
      <b-radio
        v-for="(value, index) in hints"
        :key="index"
        class="mx-2"
        :type="
          value == 0 ? 'is-gray' : value == 1 ? 'is-warning' : 'is-success'
        "
      ></b-radio>
    </b-field>

    <b-button v-if="!hints && row == 9" type="is-success" @click="() => checkAnswer()"
      >Check</b-button
    >
  </div>
</template>

<script>
export default {
  name: "Hint",
  props: ["hints", "row"],
  methods: {
    checkAnswer() {
    }, 
  },
};
</script>
