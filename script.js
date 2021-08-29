const letter = document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');

btn.addEventListener('click', () => {
  letter.innerText = '';
  if (!input.value.trim()) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const words = input.value.split(' ');

    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = words[i];
      letter.appendChild(span);
    }
  }
});
