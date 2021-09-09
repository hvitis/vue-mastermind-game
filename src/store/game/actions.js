export default {
  selectColor(context, color) {
    context.commit("SELECT_COLOR", color);
  },
  setCorrectSet(context) {
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
};

export function randNum() {
  // Between 0 - 11 which is number of colors
  return Math.floor(Math.random() * 11);
}
