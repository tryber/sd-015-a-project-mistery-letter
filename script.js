const createButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');
const letterInput = document.getElementById('carta-texto');

function createLetterParagraph(word) {
  const span = document.createElement('span');
  span.className = 'word';
  span.innerHTML = word;
  letterParagraph.appendChild(span);
}

function createLetter() {
  createButton.addEventListener('click', () => {
    if (letterParagraph.hasChildNodes()) {
      letterParagraph.innerHTML = '';
    }

    const text = letterInput.value;

    if (text.trim() === '') {
      createLetterParagraph('Por favor, digite o conteúdo da carta.');
    } else {
      text.split(' ').forEach((word) => {
        createLetterParagraph(word);
      });
    }
  });
}

createLetter();
