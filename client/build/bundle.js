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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var view = {
	
	  onPlay: null,
	
	  render: function(board){
	    var squares = this.container.querySelectorAll('span');
	 
	    for(var i=0; i<squares.length; i++){
	      squares[i].innerHTML = board.state[i];
	    }
	  },
	
	  setUp: function(board){
	    this.container = document.querySelector('#app');
	    this.arrayToRows(board.state);
	  },
	
	  arrayToRows: function(arr){
	    var squares = [];
	    var boardSize = Math.sqrt(arr.length);
	    var copy =  (JSON.parse(JSON.stringify(arr)));
	
	    while (copy.length > 0)
	      squares.push(copy.splice(0, boardSize));
	
	    for(let i=0; i<squares.length; i++){
	      let row = this.createRow(squares[i], i, boardSize);
	      this.container.appendChild(row);
	    }
	
	  },
	
	  createRow: function(arr, incr, boardSize){
	    var row = document.createElement('div');
	
	    for(let i=0; i<arr.length; i++){
	      var span = document.createElement('span');
	      span.className = 'square';
	      span.setAttribute('data-index', (incr * boardSize + i));
	      span.addEventListener('click', () => {
	        this.onPlay((incr * boardSize + i));
	      });
	      row.appendChild(span);
	    }
	    return row;
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