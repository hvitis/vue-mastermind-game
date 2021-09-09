<template>
  <div>
    <b-tag type="is-light" size="is-medium">Chosen color:</b-tag>
    <b-field class="m-2">
      <b-radio
        v-model="chosenColor"
        :native-value="chosenColor"
        :type="`is-${chosenColor}`"
        size="is-large"
      >
      </b-radio>
    </b-field>
    <b-tag type="is-light" size="is-medium">Click to choose color:</b-tag>
    <b-field class="m-2">
      <b-radio
        v-model="color1"
        size="is-large"
        native-value="orange"
        type="is-orange"
        @click.native="() => pickcolor(color1)"
      >
      </b-radio>
      <b-radio
        v-model="color2"
        size="is-large"
        native-value="salmon"
        type="is-salmon"
        @click.native="() => pickcolor(color2)"
      >
      </b-radio>
      <b-radio
        v-model="color3"
        size="is-large"
        native-value="brown"
        type="is-brown"
        @click.native="() => pickcolor(color3)"
      >
      </b-radio>
      <b-radio
        v-model="color4"
        size="is-large"
        native-value="pink"
        type="is-pink"
        @click.native="() => pickcolor(color4)"
      >
      </b-radio>
      <b-radio
        v-model="color5"
        size="is-large"
        native-value="danger"
        type="is-danger"
        @click.native="() => pickcolor(color5)"
      >
      </b-radio>
      <b-radio
        v-model="color6"
        size="is-large"
        native-value="primary"
        type="is-primary"
        @click.native="() => pickcolor(color6)"
      >
      </b-radio>
    </b-field>
    <b-field class="m-2">
      <b-radio
        v-model="color7"
        size="is-large"
        native-value="fluorescence"
        type="is-fluorescence"
        @click.native="() => pickcolor(color7)"
      >
      </b-radio>
      <b-radio
        v-model="color8"
        size="is-large"
        native-value="aqua"
        type="is-aqua"
        @click.native="() => pickcolor(color8)"
      >
      </b-radio>
      <b-radio
        v-model="color9"
        size="is-large"
        native-value="info"
        type="is-info"
        @click.native="() => pickcolor(color9)"
      >
      </b-radio>
      <b-radio
        v-model="color10"
        size="is-large"
        native-value="ultramarine"
        type="is-ultramarine"
        @click.native="() => pickcolor(color10)"
      >
      </b-radio>
      <b-radio
        v-model="color11"
        size="is-large"
        native-value="perl"
        type="is-perl"
        @click.native="() => pickcolor(color11)"
      >
      </b-radio>
      <b-radio
        v-model="color12"
        size="is-large"
        native-value="black"
        type="is-black"
        @click.native="() => pickcolor(color12)"
      >
      </b-radio>
    </b-field>
    <b-field> </b-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      chosenColor: null,
      // color0: "gray", // default for start all matrix
      color1: "orange",
      color2: "salmon",
      color3: "brown",
      color4: "pink",
      color5: "danger",
      color6: "primary",
      color7: "fluorescence",
      color8: "aqua",
      color9: "info",
      color10: "ultramarine",
      color11: "perl",
      color12: "black",
    };
  },
  computed: {
    ...mapGetters(["getSelectedColor"]),
  },
  mounted() {
    this.chosenColor = this.getSelectedColor
  },
  methods: {
    pickcolor(color) {
      this.chosenColor = color;
      this.$store.dispatch("selectColor", color);
    },
  },
};
</script>

<style></style>
