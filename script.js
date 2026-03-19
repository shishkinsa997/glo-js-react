const btn = document.getElementById('btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const textInput = document.getElementById('text');
const textSpan = document.getElementById('text-span');

const square = document.getElementById('square');
const circle = document.getElementById('circle');
const squareBtn = document.getElementById('e_btn');


btn.addEventListener('click', () => {
  square.style.backgroundColor = textInput.value;
})

squareBtn.style.display = 'none';

range.addEventListener('input', () => {
  rangeSpan.textContent = range.value;
  circle.style.width = range.value + '%';
  circle.style.height = range.value + '%';
})