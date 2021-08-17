function createLetter() {
  const createBtn = document.getElementById('criar-carta');

  createBtn.addEventListener('click', () => {
    const text = document.getElementById('carta-texto').value;
    const newSpan = document.createElement('span');

    newSpan.innerHTML = text;
    document.getElementById('carta-gerada').appendChild(newSpan);
  });
}

createLetter();
