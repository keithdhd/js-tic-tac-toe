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
    this.board.setState(this.currentPlayer, chosenSquare);
    this.view.render(this.board);

    this.winChecker.checkForWin(this.board, function(){
      // console.log(this);
    }.bind(this));

    this.currentPlayer = this.switchPlayer(this.currentPlayer);
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