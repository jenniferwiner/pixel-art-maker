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
      // column.classList.add('a');
      row.appendChild(column);
    }
  }

  pixels.appendChild(grid);

 let body = document.getElementsByTagName('body')[0];

 let color = '';

 body.addEventListener('click', function() {
  if (event.target.classList[0] === 'paint') {
    color = event.target.classList[1];
    colorIndicator.className = color;
  } if (event.target.hasAttribute('id', 'column')) {
      event.target.className = color;
  }
 });

  let colorIndicator = document.getElementById('colorIndicator');
  console.log(colorIndicator);


})();
