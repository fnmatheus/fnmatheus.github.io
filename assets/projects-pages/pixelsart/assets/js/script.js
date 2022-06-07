// Mouse Config
function onMouseoverPointer(color) {
  const thisColor = color.target;
  thisColor.style.cursor = 'pointer';
}

// Add Color Functions
function selectedColor(color) {
  const lessSelect = document.querySelector('.selected');
  const newSelect = color.target;
  lessSelect.classList.remove('selected');
  newSelect.classList.add('selected');
}

// New Color Opitions
function closeNewColorOption() {
  const chosseRGB = document.querySelector('#chosseRGB');
  chosseRGB.style.visibility = 'hidden';
}

function addNewColor() {
  const newColor = document.createElement('div');
  const rgbPreviousColor = document.querySelector('#rgb-previous-color');
  const newPaletteColor = document.querySelector('#new-palette-color');
  newColor.classList.add('color-proprietes');
  newColor.style.backgroundColor = rgbPreviousColor.style.backgroundColor;
  newColor.addEventListener('click', selectedColor);
  newColor.addEventListener('mouseover', onMouseoverPointer);
  newPaletteColor.appendChild(newColor);
  closeNewColorOption();
}

function changePreviousColor() {
  const rgbPreviousColor = document.querySelector('#rgb-previous-color');
  const inputR = document.querySelector('#input-R').value;
  const inputG = document.querySelector('#input-G').value;
  const inputB = document.querySelector('#input-B').value;
  rgbPreviousColor.style.backgroundColor = `rgb(${inputR}, ${inputG}, ${inputB})`;
}

function openNewColorOption() {
  const chosseRGB = document.querySelector('#chosseRGB');
  chosseRGB.style.visibility = 'visible';
  document.querySelector('#input-R').value = 0;
  document.querySelector('#input-G').value = 0;
  document.querySelector('#input-B').value = 0;
  changePreviousColor();
}

// Paint
function paintThis(currentPixel) {
  const currentColor = document.querySelector('.selected');
  const pixelToPaint = currentPixel.target;
  pixelToPaint.style.backgroundColor = currentColor.style.backgroundColor;
}

function paint() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paintThis);
  }
}

// Color Palette
function testRepeatition(array, string) {
  let repeat = false;
  for (let index = 0; index < array.length; index += 1) {
    if (string === array[index]) {
      repeat = true;
    }
  }
  return repeat;
}

function generateColor() {
  const characters = '0123456789abcdef';
  let color = '#';
  for (let size = 1; size < 7; size += 1) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColors() {
  const colorsArray = ['#000000'];
  while (colorsArray.length < 4) {
    const color = generateColor();
    const repeat = testRepeatition(colorsArray, color);
    if (repeat === false) {
      colorsArray.push(color);
    }
  }
  return colorsArray;
}

function createRandomColors() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = randomColors();
  for (let index = 0; index < colors.length; index += 1) {
    const newColor = document.createElement('div');
    newColor.classList.add('color');
    newColor.classList.add('color-proprietes');
    newColor.style.backgroundColor = colors[index];
    newColor.addEventListener('click', selectedColor);
    newColor.addEventListener('mouseover', onMouseoverPointer);
    colorPalette.appendChild(newColor);
  }
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}

// Pixel Board
function createPixel(numberOfColumnsAndRows, value, board) {
  const pixelBoard = board;
  const newPixel = document.createElement('div');
  let pixelLength = 1;
  newPixel.classList.add('pixel');
  if (value <= 14) {
    newPixel.style.width = '40px';
    newPixel.style.height = '40px';
    pixelLength = 42;
  } else {
    pixelLength = 588 / numberOfColumnsAndRows;
    newPixel.style.width = `${pixelLength}px`;
    newPixel.style.height = `${pixelLength}px`;
  }
  pixelBoard.style.width = `${numberOfColumnsAndRows * pixelLength}px`;
  pixelBoard.appendChild(newPixel);
}

function defineSize(value) {
  const pixelBoard = document.querySelector('#pixel-board');
  const sizeInput = document.querySelector('#board-size');
  const oldPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < oldPixels.length; index += 1) {
    pixelBoard.removeChild(oldPixels[index]);
  }
  const numberOfColumnsAndRows = value;
  const numberOfPixels = numberOfColumnsAndRows ** 2;
  for (let index = 1; index <= numberOfPixels; index += 1) {
    createPixel(numberOfColumnsAndRows, value, pixelBoard);
  }
  paint();
  sizeInput.value = '';
}

function testChangeSizeValue(value) {
  if (value < 5) {
    return 5;
  }
  if (value > 50) {
    return 50;
  }
  return value;
}

function changeSize() {
  const sizeInput = document.querySelector('#board-size');
  if (sizeInput.value > 0) {
    let newValue = sizeInput.value;
    newValue = testChangeSizeValue(newValue);
    defineSize(newValue);
  } else alert('Board inválido!');
}

// Board Clear
function clear() {
  const pixels = document.querySelectorAll('.pixel');
  const confirm = window.confirm('Tem Certeza que deseja limpar?');
  if (confirm) {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }
}

// On Load
function createNewColor() {
  const buttonClose = document.querySelector('#button-close');
  buttonClose.addEventListener('mouseover', onMouseoverPointer);
  buttonClose.addEventListener('click', closeNewColorOption);
  const inputR = document.querySelector('#input-R');
  const inputG = document.querySelector('#input-G');
  const inputB = document.querySelector('#input-B');
  inputR.addEventListener('change', changePreviousColor);
  inputG.addEventListener('change', changePreviousColor);
  inputB.addEventListener('change', changePreviousColor);
  const addColor = document.querySelector('#add-color');
  addColor.addEventListener('click', addNewColor);
}

function doItOnLoad() {
  defineSize(5);
  paint();
  createRandomColors();
  document.querySelector('#clear-board').addEventListener('click', clear);
  document.querySelector('#generate-board').addEventListener('click', changeSize);
  const eraser = document.querySelector('#eraser');
  eraser.addEventListener('click', selectedColor);
  eraser.addEventListener('mouseover', onMouseoverPointer);
  const newcolor = document.querySelector('#new-color-button');
  newcolor.addEventListener('click', openNewColorOption);
  newcolor.addEventListener('mouseover', onMouseoverPointer);
  createNewColor();
}

window.onload = doItOnLoad;
