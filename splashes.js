let left = document.querySelector('.left');
let right = document.querySelector('.right');
let edges = document.querySelector('.edges');

const splashes = {};
for (let i = 1; i <= 7; i++) {
  splashes[`w${i}`] = `wings/w${i}.png`;
}

let width = 2560;
let height = 1440;
let mid = 80;
let pad = 160;
let angleRatio = 1 / 3;

left.style.left = `${-width * angleRatio}px`;
right.style.left = `${width * angleRatio}px`;

let centerAdjustX = width * angleRatio;

function makeLeftPath() {
  return [
    'M', centerAdjustX, pad,
    'L', centerAdjustX + width * (1 - angleRatio) - mid / 2, pad,
    'L', centerAdjustX + width * angleRatio - mid / 2, height - pad,
    'L', centerAdjustX, height - pad,
    'Z'
  ].join(' ');
}

function makeRightPath() {
  return [
    'M', -centerAdjustX + width * angleRatio + mid / 2, height - pad,
    'L', -centerAdjustX + width * (1 - angleRatio) + mid / 2, pad,
    'L', -centerAdjustX + width, pad,
    'L', -centerAdjustX + width, height - pad,
    'Z'
  ].join(' ');
}

// function makeEdgesPath() {
//   return [
//     'M', centerAdjustX, pad,
//     'L', centerAdjustX + width * (1 - angleRatio) - mid / 2, pad,
//     'L', centerAdjustX + width * angleRatio - mid / 2, height - pad,
//     'L', centerAdjustX, height - pad,
//     'L', centerAdjustX, pad,
//     'M', -centerAdjustX + width * angleRatio + mid / 2, height - pad,
//     'L', -centerAdjustX + width * (1 - angleRatio) + mid / 2, pad,
//     'L', -centerAdjustX + width, pad,
//     'L', -centerAdjustX + width, height - pad,
//     'L', -centerAdjustX + width * angleRatio + mid / 2, height - pad,
//   ].join(' ');
// }

left.style.clipPath = `path('${makeLeftPath()}')`;
right.style.clipPath = `path('${makeRightPath()}')`;

// centerAdjustX = 0;
// edges.style.clipPath = `path('${makeEdgesPath()}')`;

let controls = document.querySelector('.controls');
let leftSelect = document.getElementById('left-select');
let rightSelect = document.getElementById('right-select');
let hide = document.getElementById('hide');

left.src = splashes[leftSelect.value];
right.src = splashes[rightSelect.value];

leftSelect.addEventListener('change', function(e) {
  console.log(e);
  left.src = splashes[leftSelect.value];
});

rightSelect.addEventListener('change', function(e) {
  console.log(e);
  right.src = splashes[rightSelect.value];
});

hide.addEventListener('click', function() {
  hide.style.display = 'none';
  controls.classList.add('hidden');
});
