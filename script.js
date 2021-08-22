const getInput = document.getElementById('carta-texto');
const getParagraphText = document.querySelector('#carta-gerada');
const getButtonGenerateLetter = document.getElementById('criar-carta');

function clearParagraphChilds() { //Limpa a tag carta-gerada removendo todos os filhos.
  const paragraphChild = getParagraphText.childNodes;
  console.log(paragraphChild)
  const size = paragraphChild.length;
  for (let i = 0; i < size; i += 1) {
    paragraphChild[0].remove();
  }
}

function createSpans() {
  clearParagraphChilds();
  const getInputText = getInput.value;
  const splitInputValue = getInputText.split(' ');
  for (let i = 0; i < splitInputValue.length; i += 1) {
    const newSpan = document.createElement('span');
    newSpan.className = 'word';
    newSpan.innerHTML = splitInputValue[i];
    getParagraphText.appendChild(newSpan);
  }
}

getButtonGenerateLetter.addEventListener('click', createSpans);
