var board = {

  create: function(boardSize){
    this.state = [];
    for (var i = 0; i < boardSize * boardSize; i++) {
       this.state[i] = null;
     }
  },

  setState: function(currentPlayer, chosenSquare){
    if(!this.state[chosenSquare]){
      this.state[chosenSquare] = currentPlayer;
      return true;
    }
    return false;
  }

}

module.exports = board;