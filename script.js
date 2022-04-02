const grid = document.querySelector('.grid');
const squaresInput = document.querySelector('#squares');
const colorInput = document.querySelector('#color');
const hoveredBox = document.querySelectorAll('.hover');
const resetButton = document.querySelector('.reset');
let newColor = document.getElementById('color').value;
let currentColor;

function createDiv(size) {   
 const div = document.createElement('div');
 div.classList.add('box');
 div.style.width = `${size}px`;
 div.style.height = `${size}px`;
 grid.appendChild(div);
 return div
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) { 
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function squareAmount() {

  if (squaresInput.value === '1') {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild)
    }
    createGrid(4)
  } else if (squaresInput.value === '2') {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild)
    }
    createGrid(8)
  } else if (squaresInput.value === '3') {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild)
    }
    createGrid(16)
  }
}

function changeColor() {
  const squares = squaresInput.value;
  let newColor = document.getElementById('color').value;
  for (let i = 0; i < squares*squares; i++) {
      grid.addEventListener('mouseover', function(hover){
          hover.target.style.backgroundColor = newColor;
      })
  }
}

function setCurrentColor(newColor) {
  currentColor = newColor;
  console.log(currentColor);
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild)
  }
  createGrid(4)
  colorInput.value = "#FFFFFF";
  squaresInput.value = '1';
  changeColor();
};

grid.addEventListener("mouseover", function (hover) {
    if (hover.target.matches('.box'))
    hover.target.classList = 'hover';
  });

squaresInput.addEventListener("input", squareAmount);
resetButton.addEventListener("click", reset);
const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', changeColor);

squareAmount();