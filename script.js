function randomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function stylization(newSpan) {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotate = ['rotateleft', 'rotateright'];
  const incl = ['skewleft', 'skewright'];

  newSpan.classList.add(style[randomNumber(style.length - 1)]);
  newSpan.classList.add(size[randomNumber(size.length - 1)]);
  newSpan.classList.add(rotate[randomNumber(rotate.length - 1)]);
  newSpan.classList.add(incl[randomNumber(incl.length - 1)]);
}

function createLetterHelper(textArray, letter) {
  for (let i = 0; i < textArray.length; i += 1) {
    const newSpan = document.createElement('span');

    newSpan.innerText = `${textArray[i]}`;
    stylization(newSpan);
    letter.appendChild(newSpan);
  }
}

function countWords() {
  const countParagraph = document.getElementById('carta-contador');
  countParagraph.innerHTML = `${document.querySelectorAll('span').length}`;
}

function createLetter() {
  const createBtn = document.getElementById('criar-carta');

  createBtn.addEventListener('click', () => {
    const text = document.getElementById('carta-texto').value;
    const textArray = text.split(' ');
    const errorSpan = document.createElement('span');
    const letter = document.getElementById('carta-gerada');

    letter.innerHTML = '';
    errorSpan.innerHTML = 'Por favor, digite o conteúdo da carta.';
    if (text === '' || text === ' ') {
      letter.appendChild(errorSpan);
    }
    createLetterHelper(textArray, letter);
    countWords();
  });
}

function changeStyle() {
  const letter = document.getElementById('carta-gerada');

  letter.addEventListener('click', (element) => {
    const wordClass = element.target;
    wordClass.className = '';
    console.log(`before: ${wordClass.className}`);
    stylization(wordClass);
    console.log(`after: ${wordClass.className}`);
  });
}

createLetter();
changeStyle();
