var controller = {

  currentPlayer: 'x',
  view: null,
  board: null,

  init: function(board, view, winChecker){
    this.view = view;
    this.board = board;
    this.winChecker = winChecker;
    this.view.setUp(this.board);
    this.view.onPlay = this.onPlay.bind(this);
  },

  onPlay: function(chosenSquare) {
    this.board.setState(this.currentPlayer, chosenSquare);
    this.winChecker.checkForWin(this.board, this.onWin);
    this.switchPlayer();
  },

  onWin: function(){
    console.log(this.currentPlayer + " wins!");
  }.bind(this),

  switchPlayer: function(){
    if(this.currentPlayer === 'x') {
      this.currentPlayer = 'o';
    }
    else{
      this.currentPlayer = 'x';
    };
  }

}

module.exports = controller;