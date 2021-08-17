const textoInput = document.getElementById('carta-texto');
const pCarta = document.getElementById('carta-gerada');
const criarBtn = document.getElementById('criar-carta');
const pCont = document.getElementById('carta-contador');

const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotations = ['rotateleft', 'rotateright'];
const inclinations = ['skewleft', 'skewright'];

function checkInput() {
  return (textoInput.value === '' || textoInput.value.match(/[^\s]/g) === null);
}

function randomNumber(value) {
  return Math.floor(Math.random() * value);
}

function stylizeSpans() {
  const style = styles[randomNumber(styles.length)];
  const size = sizes[randomNumber(sizes.length)];
  const rotation = rotations[randomNumber(rotations.length)];
  const inclination = inclinations[randomNumber(inclinations.length)];
  return `${style} ${size} ${rotation} ${inclination}`;
}

criarBtn.addEventListener('click', () => {
  const letterWords = textoInput.value.split(' ');
  pCont.innerText = letterWords.length;
  pCarta.innerHTML = '';
  if (checkInput()) {
    pCarta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < letterWords.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = letterWords[i];
      word.className = stylizeSpans();
      pCarta.appendChild(word);
    }
  }
});
