const colors = ['red', 'blue', 'yellow', 'white', 'green', 'purple'];

const rubikCubes = Array.from(document.querySelectorAll('div'));
const btn = document.querySelector('button');

console.log(rubikCubes);

function changeColor() {
  let randomCol;
  rubikCubes.forEach((cube) => {
    let indexColor = parseInt(Math.random() * 6);
    let randomCol = colors[indexColor];
    console.log(indexColor, randomCol);
    cube.style.backgroundColor = randomCol;
  });
  return randomCol;
}
btn.addEventListener('click', changeColor);
