const View = require("./ttt-view.js");// require appropriate file
const Game = require("../game/game.js");// require appropriate file

$( () => {

  const game = new Game();
  const view = new View(game, $("figure.ttt"));

});
