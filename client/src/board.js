var board = {

  state: [],

  create: function(boardSize){
    for (var i = 0; i < boardSize; i++) {
      this.state[i] = [];
      for (var j= 0; j < boardSize; j++){
        this.state[i][j] = i + j + (i * 2);
      }
    }
  },

  setState: function(currentPlayer, chosenSquare){
    console.log(currentPlayer + " on " + chosenSquare);
    var flattenedBoard = [].concat.apply([], this.state);
    flattenedBoard[chosenSquare] = currentPlayer;
    this.state = flattenedBoard;
    console.log("this.state", this.state);
  }

}

module.exports = board;