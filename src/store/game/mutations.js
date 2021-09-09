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
    state.currentRow = 9
    state.selectedColor = "gray"
    state.correctColorsSet = colorSet;
  },
  UPDATE_GAME_MATRIX(state, {...data}){
    state.gameState[data.rowNumber][data.inRowInputNumber] = data.colorNumberValue
  },
  INCREASE_ROW(state){
    state.currentRow -= 1
  },
  GAME_OVER(state){
    state.gameOver = true
  },
  START_GAME(state){
    state.gameStarted = true
  }
};
