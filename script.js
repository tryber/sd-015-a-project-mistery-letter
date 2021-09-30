const getGenerateLetterButton = document.getElementById('criar-carta');
const getGeneratedLetter = document.getElementById('carta-gerada');
const getInput = document.getElementById('carta-texto');

getGenerateLetterButton.addEventListener('click', generateLetter)

const classes = {
  estilo: [`newspaper`, `magazine1`, `magazine2`],
  tamanho: [`medium`, `big`, `reallybig`],
  rotacao: [`rotateleft`, `rotateright`],
  inclinacao: [`skewleft`, `skewright`],
}

function randomNumber(max) {
  return Math.floor(Math.random() * (max));
}

const { estilo, tamanho, rotacao, inclinacao } = classes;

const arrayOfClasses = [...estilo, ...tamanho, ...rotacao, ...inclinacao];
getGeneratedLetter.innerText = "Por favor, digite o conteúdo da carta.";

function generateLetter() {
  getGeneratedLetter.innerHTML = '';
  const input = getInput.value.trim();
  if (input.length === 0) return getGeneratedLetter.innerHTML = "Por favor, digite o conteúdo da carta.";

  const letterWords = input.split(' ');

  letterWords.forEach(word => {
    const span = document.createElement('span');
    span.innerHTML = word;
    span.className = `${estilo[randomNumber(3)]} ${tamanho[randomNumber(3)]} ${rotacao[randomNumber(2)]} ${inclinacao[randomNumber(2)]}`;
    getGeneratedLetter.appendChild(span);
  })
}

