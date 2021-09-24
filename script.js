const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];
const groups = [styles, sizes, rotation, skew];

function changeStyle(event) {
  const word = event.target;
  word.className = '';
  groups.forEach((group) => {
    event.target.classList.add(group[Math.floor(Math.random() * group.length)]);
  });
}

function createLetter() {
  const p = document.getElementById('carta-gerada');
  p.innerHTML = '';
  const words = document.getElementById('carta-texto').value;
  const letter = words.split(' ');
  letter.forEach((word) => {
    const span = document.createElement('span');
    span.innerText = word;
    span.addEventListener('click', changeStyle);
    groups.forEach((group) => {
      span.classList.add(group[Math.floor(Math.random() * group.length)]);
    });
    if (word !== '') p.appendChild(span);
  });
  if (p.children.length === 0) p.innerText = 'Por favor, digite o conteúdo da carta.';
  document.getElementById('carta-contador').innerText = p.children.length;
}

window.onload = () => {
  document.getElementById('criar-carta').addEventListener('click', createLetter);
};
