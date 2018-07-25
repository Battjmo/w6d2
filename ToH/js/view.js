class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setUpTowers();
  }

  setUpTowers() {

    let $ul = $("<ul></ul>");
    for(let i = 0; i < 3; i++) {
      let $lul = $("<ul></ul>");
      for (var j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        if (j === 2) {
          $li.addClass("BigDisk");
        } else if (j === 1) {
          $li.addClass("MiddleDisk");
        } else {
          $li.addClass("LittleDisk");
        }
        $lul.append($li);
      }
      $ul.append($lul);
    }
    this.$el.append($ul);
  }

  render() {

  }



  //END OF  CLASS
}

module.exports = HanoiView;
