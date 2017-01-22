var board = {

  create: function(boardSize){
    this.state = [];
    for (var i = 0; i < boardSize * boardSize; i++) {
       this.state[i] = null;
     }
     console.log(this.state)
  },

  setState: function(currentPlayer, chosenSquare){
    console.log(currentPlayer + " on " + chosenSquare);
    this.state[chosenSquare] = currentPlayer;
  }

}

module.exports = board;