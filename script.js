const inputText = document.getElementById('carta-texto');
const createBttn = document.getElementById('criar-carta');
const finalLetter = document.getElementById('carta-gerada');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function randomClassGenerator() {
  const styleIndex = Math.floor(Math.random() * 3);
  const sizeIndex = Math.floor(Math.random() * 3);
  const rotateIndex = Math.floor(Math.random() * 2);
  const skewIndex = Math.floor(Math.random() * 2);
  const res = `${style[styleIndex]} ${size[sizeIndex]} ${rotate[rotateIndex]} ${skew[skewIndex]}`;
  return res;
}

function readInput() {
  createBttn.addEventListener('click', () => {
    const text = inputText.value;
    const words = text.split(' ');
    finalLetter.innerHTML = '';
    let emptyCount = 0;
    for (let index = 0; index < words.length; index += 1) {
      if (words[index] === '') {
        emptyCount += 1;
      }
      const newSpan = document.createElement('span');
      newSpan.innerHTML = words[index];
      newSpan.className = randomClassGenerator();
      finalLetter.appendChild(newSpan);
    }
    if (emptyCount === words.length) {
      finalLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  });
}

function changeClass() {
  finalLetter.addEventListener('click', (event) => {
    const evt = event;
    evt.target.className = randomClassGenerator();
  });
}

readInput();
changeClass();
