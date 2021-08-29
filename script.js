const letter = document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');

btn.addEventListener('click', () => {
  const span = document.createElement('span');
  span.innerText = input.value;
  letter.appendChild(span);
});
