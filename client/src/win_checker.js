var winChecker = {

  onWin: null,

  checkForWin: function(board, cb){
    console.log("checking for win:");
    cb();
  }

}

module.exports = winChecker;