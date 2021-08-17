const inputText = document.getElementById('carta-texto');
const createBttn = document.getElementById('criar-carta');
const finalLetter = document.getElementById('carta-gerada');

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
      finalLetter.appendChild(newSpan);
    }
    if (emptyCount === words.length) {
      finalLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  });
}

readInput();
