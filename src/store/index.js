import getters from "./game/getters";
import actions from "./game/actions";
import mutations from "./game/mutations";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

// State management
Vue.use(Vuex);

const persistingVuex = new VuexPersistence({
  storage: window.localStorage,
});

const defaultState = () => ({
  currentRow: 9,
  selectedColor: "gray",
  correctColorsSet: [],
  gameState: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  gameOver: false,
  isPlaying: false,
  numberOfTurns: 10,
});

export default new Vuex.Store({
  state: defaultState,
  mutations,
  getters,
  actions,
  plugins: [persistingVuex.plugin],
});
