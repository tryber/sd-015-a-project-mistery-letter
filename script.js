// * Cada palavra deve aparecer dentro de uma tag `span`.
// * As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.
const textoInput = document.getElementById('carta-texto');
const pCarta = document.getElementById('carta-gerada');
const criarBtn = document.getElementById('criar-carta');

function checkInput() {
  return (textoInput.value === '' || textoInput.value.match(/[^\s]/g) === null);
}

criarBtn.addEventListener('click', () => {
  const letterWords = textoInput.value.split(' ');
  pCarta.innerHTML = '';
  if (checkInput()) {
    pCarta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < letterWords.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = letterWords[i];
      pCarta.appendChild(word);
    }
  }
});
