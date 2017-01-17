var board = require('./board');
var controller = require('./controller');
var view = require('./view');
var winChecker = require('./win_checker');

window.onload = function(){
  board.create(3);
  controller.init(board, view, winChecker);
};
