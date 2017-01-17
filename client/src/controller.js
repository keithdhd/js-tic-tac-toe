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
    this.winChecker.checkForWin(this.board, function(){
      console.log(this);
    }.bind(this));
    this.switchPlayer();
  },

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