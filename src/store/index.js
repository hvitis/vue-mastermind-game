import getters from "./game/getters";
import actions from "./game/actions";
import mutations from "./game/mutations";
import Vue from 'vue'
import Vuex from 'vuex'

// State management
Vue.use(Vuex);

const defaultState = () => ({
  currentRow: 0,
  selectedColor: "orange",
  correctColorsSet: [],
  gameState: [[], [], [], [], [], [], [], [], [], []],
  gameOver: false,
  // isPlaying: false,
  // numberOfTurns: 10
});

export default new Vuex.Store({
  defaultState,
  mutations,
  ...getters,
  actions,
});
