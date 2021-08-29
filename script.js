const letter = document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const counter = document.getElementById('carta-contador');

const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotations = ['rotateleft', 'rotateright'];
const inclinations = ['skewleft', 'skewright'];

const randomIndex3 = () => Math.floor(Math.random() * 3);
const randomIndex2 = () => Math.floor(Math.random() * 2);

const styleSpan = () => {
  const style = styles[randomIndex3()];
  const size = sizes[randomIndex3()];
  const rotation = rotations[randomIndex2()];
  const inclination = inclinations[randomIndex2()];
  return `${style} ${size} ${rotation} ${inclination}`;
};

const wordCounter = () => {
  counter.innerText = letter.childElementCount;
};

const createSpan = () => {
  const words = input.value.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    span.className = styleSpan();
    letter.appendChild(span);
  }
  wordCounter();
};

btn.addEventListener('click', () => {
  letter.innerText = '';
  if (!input.value.trim()) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    createSpan();
  }
});
