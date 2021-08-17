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
  console.log(newSpan.classList);
}

function createLetterHelper(textArray, letter) {
  for (let i = 0; i < textArray.length; i += 1) {
    const newSpan = document.createElement('span');

    newSpan.innerText = `${textArray[i]}`;
    stylization(newSpan);
    letter.appendChild(newSpan);
  }
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
  });
}

createLetter();
