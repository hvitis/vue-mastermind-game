export default {
  selectColor(context, color) {
    context.commit("SELECT_COLOR", color);
  },
  startGame(context) {
    let correctSet = [
      randNum(),
      randNum(),
      randNum(),
      randNum(),
    ];
    context.commit("INITIATE_GAME", correctSet);
  },
  updateGameMatrix(context, data) {
    context.commit("UPDATE_GAME_MATRIX", data);
  },
  moveLevelHigher(context) {
    context.commit("INCREASE_ROW");
  },
  gameOver(context) {
    context.commit("GAME_OVER");
  },
};

export function randNum() {
  // Between 0 - 11 which is number of colors (13 in total, first - grey, does not count for an answer)
  return Math.floor(Math.random() * 11) + 1;
}
