(function() {

  // console.log(document);
  //getting pixels and palette divs
  let pixels = document.getElementsByClassName('pixels')[0];
  let palette = document.getElementsByClassName('palette')[0];

  // console.log(pixels[0]);

  let grid = document.createElement('div');
  grid.classList.add('grid');

  //create 2x2 grid
  for (let i = 0; i < 20; i++) {
    let row = document.createElement('div');
    //adding class to each row, 'row'
    row.classList.add('row')
    grid.appendChild(row);

    for (let j = 0; j < 30; j++) {
      var column = document.createElement('div');
      //adding class to each div within each row, 'column'
      column.setAttribute('id', 'column');
      column.setAttribute('name', 'square');
      // column.classList.add('a');
      row.appendChild(column);
    }
  }

  pixels.appendChild(grid);

  let body = document.getElementsByTagName('body')[0];

  let squares = document.getElementsByName('square');

  let color = '';
  // let column = document.getElementById('column');

  body.addEventListener('click', function() {
    if (event.target.classList[0] === 'paint') {
      color = event.target.classList[1];
      colorIndicator.className = color;
    }
    if (event.target.hasAttribute('id', 'column')) {
      event.target.className = color;
    }   if (event.target === btn) {
        for (square of squares) {
          square.className = 'gray1';
        }
      }
  });

  let colorIndicator = document.getElementById('colorIndicator');

  //creating reset btn
  let footer = document.getElementsByTagName('footer')[0];
  let btn = document.createElement('button');
  let quote = document.getElementById('quote');
  btn.innerText = 'Clear the Canvas';
  footer.appendChild(btn);


})();
