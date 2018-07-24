class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(".square").on("click", e => {
      const $sq = $(e.currentTarget);
      this.makeMove($sq);
    });
  }

  makeMove($square) {
    if (!this.game.board.isEmptyPos($square.data("pos"))) {
      alert("Invalid square my guy!");
    }
    this.game.playMove($square.data("pos"));
    $square.removeClass("square");
    if (this.game.currentPlayer === "x") {
      $square.addClass("xsquare");
    } else {
      $square.addClass("osquare");
    }
    $square.append(this.game.currentPlayer);
    if (this.game.board.winner()) {
      alert(`Congrats ${this.game.currentPlayer}, you win!`);
    }

  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    for(let i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $li.addClass("square");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    // console.log($ul);
    this.$el.append($ul);

  }
}

module.exports = View;
