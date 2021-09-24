function createLetter() {
  const p = document.getElementById('carta-gerada');
  p.innerHTML = '';
  const words = document.getElementById('carta-texto').value;
  const letter = words.split(' ');
  letter.forEach((word) => {
    const letterWord = document.createElement('span');
    letterWord.innerText = word;
    if (word !== '') p.appendChild(letterWord);
  });
  if (p.children.length === 0) p.innerText = 'Por favor, digite o conteúdo da carta.';
}

window.onload = () => {
  document.getElementById('criar-carta').addEventListener('click', createLetter);
}