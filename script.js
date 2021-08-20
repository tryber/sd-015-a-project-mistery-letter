const input = document.getElementById('carta-texto');
const btnGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function randomClass(style) {
  const result = Math.ceil(Math.random() * style.length - 1);
  return style[result];
}

function stylesSlect(style) {
  switch (style) {
  case 1:
    return randomClass(estilo);
  case 2:
    return randomClass(tamanho);
  case 3:
    return randomClass(rotacao);
  case 4:
    return randomClass(inclinacao);
  default:
    break;
  }
}

function removeAll() {
  while (paragrafo.firstChild) {
    paragrafo.removeChild(paragrafo.firstChild);
  }
}

function gerarCarta(carta) {
  removeAll();
  for (let index = 0; index < carta.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = carta[index];
    span.className = `${stylesSlect(1)} ${stylesSlect(2)} ${stylesSlect(3)} ${stylesSlect(4)}`;
    paragrafo.appendChild(span);
  }
}

function verificaCarta(carta) {
  let cont = 0;
  let contadorDePalavras = 0;
  for (let index = 0; index < carta.length; index += 1) {
    contadorDePalavras += 1;
    if (carta[index] === '') {
      cont += 1;
    }
  }
  if (cont === carta.length) {
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  contador.innerHTML = contadorDePalavras;
  return true;
}

btnGerar.addEventListener('click', () => {
  const result = input.value.split(' ');
  if (verificaCarta(result)) {
    gerarCarta(result);
  }
});
