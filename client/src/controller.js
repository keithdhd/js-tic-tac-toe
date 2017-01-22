var controller = {

  currentPlayer: 'x',

  init: function(board, view, winChecker){
    this.view = view;
    this.board = board;
    this.winChecker = winChecker;
    this.view.setUp(this.board);
    this.view.onPlay = this.onPlay.bind(this);
  },

  onPlay: function(chosenSquare) {
    var validPlay = this.board.setState(this.currentPlayer, chosenSquare);

    if(validPlay){
      this.view.render(this.board);

      this.winChecker.checkForWin(this.board, (winner, combo) => {
        this.view.showWin(winner, combo);
      });

      this.currentPlayer = this.switchPlayer(this.currentPlayer);
    }
  },

  switchPlayer: function(current){
    if(current === 'x') {
      return 'o';
    }
    else{
      return 'x';
    };
  }

}

module.exports = controller;