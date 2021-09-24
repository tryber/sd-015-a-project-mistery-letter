function createLetter() {
  const p = document.getElementById('carta-gerada');
  while (p.children.length > 0) p.removeChild(p.lastChild);
  const letter = document.getElementById('carta-texto').value.split(' ');
  letter.forEach((word) => {
    const letterWord = document.createElement('span');
    letterWord.innerText = word;
    p.appendChild(letterWord);
  });
}

window.onload = () => {
  document.getElementById('criar-carta').addEventListener('click', createLetter);
}