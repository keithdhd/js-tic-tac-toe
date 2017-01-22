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