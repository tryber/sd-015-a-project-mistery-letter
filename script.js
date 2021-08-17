function createLetterHelper(textArray, letter) {
  for (let i = 0; i < textArray.length; i += 1) {
    const newSpan = document.createElement('span');

    newSpan.innerText = `${textArray[i]}`;
    console.log(newSpan.innerHTML);
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
