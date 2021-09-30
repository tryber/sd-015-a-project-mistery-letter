const getGenerateLetterButton = document.getElementById('criar-carta');
const getGeneratedLetter = document.getElementById('carta-gerada');
const getInput = document.getElementById('carta-texto');

getGenerateLetterButton.addEventListener('click', generateLetter)

function generateLetter() {
  getGeneratedLetter.innerHTML = "Por favor, digite o conteúdo da carta.";

  const letterWords = getInput.value.split(' ');
  
  letterWords.forEach(word => {
    const span = document.createElement('span');
    span.innerText = word;
    getGeneratedLetter.appendChild(span);
  })
}
