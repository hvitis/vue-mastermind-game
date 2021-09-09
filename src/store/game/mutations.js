export default {
  SELECT_COLOR(state, color) {
    state.selectedColor = color;
  },
  INITIATE_GAME(state, colorSet) {
    state.isPlaying = true;
    state.numberOfTurns = 10;
    state.correctColorsSet = colorSet;
  },
};
