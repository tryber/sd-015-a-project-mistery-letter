const letter = document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const counter = document.getElementById('carta-contador');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

const randomIndex3 = () => Math.floor(Math.random() * 3);
const randomIndex2 = () => Math.floor(Math.random() * 2);

const wordCounter = () => {
  counter.innerText = letter.childElementCount;
};

const createSpan = () => {
  const words = input.value.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    span.classList = `${style[randomIndex3()]} ${size[randomIndex3()]}
     ${rotate[randomIndex2()]} ${inclination[randomIndex2()]}`;
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
