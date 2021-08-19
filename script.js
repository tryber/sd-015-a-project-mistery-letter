const createButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');
const letterInput = document.getElementById('carta-texto');

function createLetter() {
  createButton.addEventListener('click', () => {
    if (letterParagraph.hasChildNodes()) {
      letterParagraph.innerHTML = '';
    }

    const text = letterInput.value.split(' ');

    text.forEach((word) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.innerHTML = word;
      letterParagraph.appendChild(span);
    });
  });
}

createLetter();
