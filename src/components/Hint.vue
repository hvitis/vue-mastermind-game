<template>
    <div>
      <b-field>
        <b-radio
          v-for="(value, index) in hints.slice(0, 2)"
          :key="index"
          class="mr-1"
          :type="
            value == 0 ? 'is-gray' : value == 1 ? 'is-warning' : 'is-success'
          "
        ></b-radio>
      </b-field>
    <b-field>
        <b-radio
          v-for="(value, index) in hints.slice(-2)"
          :key="index"
          class="mr-1"
          :type="
            value == 0 ? 'is-gray' : value == 1 ? 'is-warning' : 'is-success'
          "
        ></b-radio>
      </b-field>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Hint",
  props: ["hints", "rownr"],
  computed: {
    ...mapGetters(["getCurrentRow"]),
  },
};
</script>
