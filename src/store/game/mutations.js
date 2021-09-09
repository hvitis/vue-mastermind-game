export default {
  SELECT_COLOR(state, color) {
    state.selectedColor = color;
  },
  INITIATE_GAME(state, colorSet) {
    state.gameState = [
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
    ]
    state.selectedColor = "gray"
    state.isPlaying = true;
    state.numberOfTurns = 10;
    state.correctColorsSet = colorSet;
    state.currentRow = 9
  },
  UPDATE_GAME_MATRIX(state, {...data}){
    state.gameState[data.rowNumber][data.inRowInputNumber] = data.colorNumberValue
  },
  INCREASE_ROW(state){
    state.currentRow -= 1
  },
};
