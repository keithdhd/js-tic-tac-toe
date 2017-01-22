var board = {

  state: [],

  create: function(boardSize){
    for (var i = 0; i < boardSize * boardSize; i++) {
      this.state[i] = i;
    }
  },

  setState: function(currentPlayer, chosenSquare){
    console.log(currentPlayer + " on " + chosenSquare);
    var flattenedBoard = [].concat.apply([], this.state);
    flattenedBoard[chosenSquare] = currentPlayer;
    this.state = flattenedBoard;
  }
  
}

module.exports = board;