const pCarta = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const createButton = document.getElementById('criar-carta');

function alert() {
  pCarta.innerText = 'Por favor, digite o conteúdo da carta.';
}

function createLetter() {
  if (input.value === '' || input.value === ' ') {
    alert();
  } else {
    pCarta.innerText = '';
    const inputValue = input.value;
    const value = inputValue.split(' ');
    for (let i = 0; i < value.length; i += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = `${value[i]}`;
      pCarta.appendChild(newSpan);
    }
  }
}

createButton.addEventListener('click', createLetter);

