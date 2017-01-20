/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var board = __webpack_require__(1);
	var controller = __webpack_require__(2);
	var view = __webpack_require__(3);
	var winChecker = __webpack_require__(4);
	
	window.onload = function(){
	  board.create(3);
	  controller.init(board, view, winChecker);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var view = {
	
	  onPlay: null,
	
	  setUp: function(board){
	    this.container = document.querySelector('#app');
	    this.container.innerHTML = '';
	
	    board.state.forEach((arr, index) => {
	      this.arrayToRow(arr, board);
	    })
	
	  },
	
	  arrayToRow: function(arr){
	    var row = document.createElement('div');
	    console.log(arr);
	    for(let element of arr){
	      let span = document.createElement('span');
	      span.className = 'square';
	      span.setAttribute('data-index', element);
	      span.addEventListener('click', () => {
	        this.onPlay(element);
	      });
	      row.appendChild(span);
	    }
	
	    this.container.appendChild(row);
	
	  }
	
	}
	
	module.exports = view;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var winChecker = {
	
	  onWin: null,
	
	  checkForWin: function(board, cb){
	    console.log("checking for win:");
	    cb();
	  }
	
	}
	
	module.exports = winChecker;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map