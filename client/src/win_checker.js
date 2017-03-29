var winChecker = {

  winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]],

  checkForWin: function(board, view, onWin){
    console.log("checking for win:");

    if(board.filledSquares === board.state.length){
      console.log("FULL");
      view.showDraw();
    }

    const xSquares = this.getCombos(board, 'x');
    const oSquares = this.getCombos(board, 'o');

    this.winningCombos.forEach((combo, index) => {
      if(this.checkCombo(xSquares, combo, Math.sqrt(board.state.length))){
        onWin('x', combo);
      };
        
      if(this.checkCombo(oSquares, combo, Math.sqrt(board.state.length))){
        onWin('o', combo);
      }
    });
  },

  checkCombo: function(squares, winningCombo, size){
    var count = 0;

    winningCombo.forEach(function(item, index){
      if(squares.includes(item)){
        count++;
      }
    });

    if(count === size){  
      return true;
    }
    return false;
  },

  getCombos: function(board, player){
    var filledSquares = [];

    board.state.forEach(function(square, index){
      if(square === player) filledSquares.push(index);
    })

    return filledSquares;
  }

}

module.exports = winChecker;