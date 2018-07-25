const HanoiGame = require("./game.js");
const HanoiView = require("./view.js");

$( () => {
  const game = new HanoiGame();
  const view = new HanoiView(game, $("figure.hanoi"));
});
