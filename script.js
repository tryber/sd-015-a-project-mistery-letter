const input = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const botao = document.getElementById('criar-carta');
const p = document.getElementById('carta-contador');

const somaClasseEstilo = ['newspaper', 'magazine1', 'magazine2'];
const somaClasseTamanho = ['medium', 'big', 'reallybig'];
const somaClasseRotacao = ['rotateleft', 'rotateright'];
const somaClasseSkew = ['skewleft', 'skewright'];

const estilo = parseInt(Math.random() * 3, 10);
const tamanho = parseInt(Math.random() * 3, 10);
const rotacao = parseInt(Math.random() * 2, 10);
const inclinacao = parseInt(Math.random() * 2, 10);

function createLetter() {
  const split = input.value.split(' ');
  console.log(split);
  cartaGerada.innerHTML = '';
  if (input.value === '' || input.value === ' ') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < split.length; i += 1) {
      const creatSpan = document.createElement('span');
      creatSpan.className = somaClasseEstilo[estilo];
      creatSpan.className = somaClasseTamanho[tamanho];
      creatSpan.className = somaClasseRotacao[rotacao];
      creatSpan.className = somaClasseSkew[inclinacao];
      cartaGerada.appendChild(creatSpan);
      creatSpan.innerText = split[i];
    }
  }
  p.innerText = split.length;
}

botao.addEventListener('click', createLetter);
