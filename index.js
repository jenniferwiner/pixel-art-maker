(function() {


  //get pixels and palette divs
  let pixels = document.getElementsByClassName('pixels')[0];
  let palette = document.getElementsByClassName('palette')[0];

  //create div to hold palette, add class 'grid'
  let grid = document.createElement('div');
  grid.classList.add('grid');

  //create 20x30 grid
  for (let i = 0; i < 20; i++) {
    let row = document.createElement('div');
    //adding class to each row, 'row'
    row.classList.add('row')
    grid.appendChild(row);

    for (let j = 0; j < 30; j++) {
      var column = document.createElement('div');
      //adding class to each div within each row, 'column'
      column.className = 'column';
      row.appendChild(column);
    }
  }
  //append grid to pixels (i.e. the document)
  pixels.appendChild(grid);

  let body = document.getElementsByTagName('body')[0];

  //create color variable to hold color classes
  let color = '';

  //create squares variable which is all of the squares in the grid
  let squares = document.getElementsByClassName('column');

  //get colorIndicator from html
  let colorIndicator = document.getElementById('colorIndicator');

  //create reset btn
  let footer = document.getElementsByTagName('footer')[0];
  let btn = document.createElement('button');
  let quote = document.getElementById('quote');
  btn.innerText = 'Clear the Canvas';
  footer.appendChild(btn);


  //event listeners for:
  //paint, grid, reset

  body.addEventListener('click', function() {

    if (event.target.classList[0] === 'paint') {
      color = event.target.classList[1];
      colorIndicator.className = color;
    }

    if (event.target.classList[0] === 'column') {
      if (event.target.classList[1] !== undefined) {
        event.target.classList.remove(event.target.classList[1]);
      }
      event.target.classList.add(color);
    }
    if (event.target === btn) {
      for (square of squares) {
        if (square.classList[1] !== undefined) {
          square.classList.remove(square.classList[1]);
        }
        square.classList.add('gray1');
      }
    }
  });

})();
