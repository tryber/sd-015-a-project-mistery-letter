const pCarta = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const createButton = document.getElementById('criar-carta');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewrught'];

function alert() {
  pCarta.innerText = 'Por favor, digite o conteúdo da carta.';
}

function generateRandomIndex() {
  return parseInt(Math.random() * 3, 10);
}

function generateRandomIndex2() {
  return parseInt(Math.random() * 2, 10);
}

function addClass(span) {
  span.classList.add(styleGroup[generateRandomIndex()]);
  span.classList.add(sizeGroup[generateRandomIndex()]);
  span.classList.add(rotationGroup[generateRandomIndex2()]);
  span.classList.add(skewGroup[generateRandomIndex2()]);
}

function checkWordsCount() {
  const spans = document.getElementsByTagName('span');
  const contador = document.getElementById('carta-contador');
  contador.innerText = spans.length;
}

function createLetter() {
  if (input.value === '' || input.value === ' ') {
    alert();
  } else {
    pCarta.innerText = '';
    const inputValue = input.value;
    const value = inputValue.split(' ');
    for (let i = 0; i < value.length; i += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = `${value[i]}`;
      addClass(newSpan);
      pCarta.appendChild(newSpan);
    }
  }
  checkWordsCount();
}

createButton.addEventListener('click', createLetter);
