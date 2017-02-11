(function() {

  // console.log(document);
  //getting pixels and palette divs
  let pixels = document.getElementsByClassName('pixels')[0];
  let palette = document.getElementsByClassName('palette')[0];

  // console.log(pixels[0]);

  let grid = document.createElement('div');
  grid.classList.add('grid');

 //create 2x2 grid
  for (let i = 0; i < 4; i++) {
    let row = document.createElement('div');
    //adding class to each row, 'row'
    row.classList.add('row')
    grid.appendChild(row);

    for (let j = 0; j < 4; j++) {
      var column = document.createElement('div');
      //adding class to each div within each row, 'column'
      column.setAttribute('id', 'column');
      // column.classList.add('a');
      row.appendChild(column);
    }
  }

  pixels.appendChild(grid);

  //add eventlistener for palette colors

  // body.addEventListener('click', function() {
  //   let color = event.target.classList[1];
  //   console.log(color);
  // });
  //
  // //add event listener so when click on div, square turns red
  // grid.addEventListener('click', function() {
  //   if (event.target.className === 'column') {
  //     event.target.style.backgroundColor = 'red';
  //   }
  // });

 let body = document.getElementsByTagName('body')[0];

 let color = '';

 body.addEventListener('click', function() {
  if (event.target.classList[0] === 'paint') {
    color = event.target.classList[1];
    console.log(event.target.classList);
  } if (event.target.hasAttribute('id', 'column')) {
      event.target.className = color;
  }
 });




})();
