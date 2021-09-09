export default {
  getSelectedColor: (state) => state.selectedColor,
  getCorrectColorsSet: (state) => state.correctColorsSet,
  getGameState: (state) => state.gameState,
  getCurrentRow: (state) => state.currentRow,
  getCurrentAnswers: (state) => state.gameState[state.currentRow],
  isPlaying: (state) => state.gameOver,
};
