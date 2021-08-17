// * Cada palavra deve aparecer dentro de uma tag `span`.
// * As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.
const textoInput = document.getElementById('carta-texto');
const pCarta = document.getElementById('carta-gerada');
const criarBtn = document.getElementById('criar-carta');

criarBtn.addEventListener('click', () => {
  const letterWords = textoInput.value.split(' ');
  pCarta.innerHTML = '';
  for (let i = 0; i < letterWords.length; i += 1) {
    const word = document.createElement('span');
    word.innerText = letterWords[i];
    pCarta.appendChild(word);
  }
});
