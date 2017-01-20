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