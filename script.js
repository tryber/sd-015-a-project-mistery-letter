const createButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');
const letterInput = document.getElementById('carta-texto');
const wordCounter = document.getElementById('carta-contador');

const styleClasses = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['big', 'reallybig'],
  rotation: ['rotateright', 'rotateleft'],
  skewness: ['skewright', 'skewleft'],
};

function randomInteger(max, min) {
  return Math.floor(Math.random() * (max - min));
}

function selectClass(word, classArray) {
  const keyPosition = randomInteger(classArray.length, 0);
  word.classList.add(classArray[keyPosition]);
}

function randomClasses(word) {
  const classes = Object.keys(styleClasses);

  classes.splice(0, 1);
  const size = classes.length;

  const numberOfClasses = randomInteger(size, 1) + 1;

  selectClass(word, styleClasses.style);

  for (let index = 0; index < numberOfClasses; index += 1) {
    const keyPosition = randomInteger(classes.length, 0);
    const className = classes[keyPosition];
    selectClass(word, styleClasses[className]);
    classes.splice(keyPosition, 1);
  }
}

function changeStyle(event) {
  const word = event.target;
  word.className = '';
  randomClasses(word);
}

function createLetterParagraph(word, isLetter) {
  const span = document.createElement('span');
  span.innerHTML = word;
  if (isLetter) {
    randomClasses(span);
    span.addEventListener('click', changeStyle);
  }
  letterParagraph.appendChild(span);
}

function createLetter() {
  createButton.addEventListener('click', () => {
    if (letterParagraph.hasChildNodes()) {
      letterParagraph.innerHTML = '';
    }

    const text = letterInput.value;
    const words = text.split(' ');

    if (text.trim() === '') {
      createLetterParagraph('Por favor, digite o conteúdo da carta.', false);
    } else {
      words.forEach((word) => {
        createLetterParagraph(word, true);
      });
      wordCounter.innerHTML = words.length;
    }
  });
}

createLetter();
