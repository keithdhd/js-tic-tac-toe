var view = {

  onPlay: null,

  render: function(board){
    var squares = this.container.children[0].children;

    for(var i=0; i<squares.length; i++){
      if(typeof(board.state[i]) === 'string'){
        squares[i].innerHTML = board.state[i];
      }
    }
  },

  setUp: function(board){
    this.container = document.querySelector('#app');
    this.arrayToRows(board.state);
  },

  arrayToRows: function(arr){
    var row = document.createElement('div');

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