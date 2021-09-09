<template>
  <b-field>
    <b-radio
      class="my-3"
      v-model="radio"
      size="is-large"
      :native-value="mapToColor(this.value)"
      :type="`is-${mapToColor(this.value)}`"
      @click.native="() => fillColor()"
    >
    </b-radio>
  </b-field>
</template>

<script>
import { mapGetters } from "vuex";
let colors = [
  "gray",
  "orange",
  "salmon",
  "brown",
  "pink",
  "danger",
  "primary",
  "fluorescence",
  "aqua",
  "info",
  "ultramarine",
  "perl",
  "success",
  "black",
];
export default {
  name: "SingleCell",
  props: ["rownr", "inrownumber", "value"],
  data() {
    return { radio: null };
  },
  computed: {
    ...mapGetters(["getSelectedColor"]),
  },
  mounted() {
    this.radio = this.mapToColor(this.value);
  },
  methods: {
    fillColor() {
      // In order to fill color, we need to mutate the state
      // of thx game matrix, sending the rowNumber, inRowInputNumber and colorNumberValue
      let colorNumberValue = this.mapToNumber(this.getSelectedColor);
      this.radio = this.mapToColor(this.value);
      this.$store.dispatch("updateGameMatrix", {
        rowNumber: this.rownr,
        inRowInputNumber: this.inrownumber,
        colorNumberValue: colorNumberValue,
      });
      this.$emit("filledColor", colorNumberValue);
    },
    mapToColor(colorNumber) {
      return colors[colorNumber];
    },
    mapToNumber(colorName) {
      return colors.indexOf(colorName);
    },
  },
};
</script>

<style></style>
