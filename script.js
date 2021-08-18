const cartaTexto = document.querySelector('#carta-texto');
const buttonCriarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaContador = document.querySelector('#carta-contador');
const efeitos = {
  estilo: ['newspaper', 'magazine1', 'magazine2'],
  tamanho: ['medium', 'big', 'reallybig'],
  rotacao: ['rotateleft', 'rotateright'],
  inclinacao: ['skewleft', 'skewright'],
};

function rand(tamanho) {
  return Math.floor(Math.random() * tamanho);
}

function limpaCarta() {
  while (cartaGerada.lastChild) {
    cartaGerada.lastChild.remove();
  }
}

function adicionaEfeitoAleatorio(parametro) {
  switch (parametro) {
  default:
  case 'estilo':
    return efeitos.estilo[rand(efeitos.estilo.length)];
  case 'tamanho':
    return efeitos.tamanho[rand(efeitos.tamanho.length)];
  case 'rotacao':
    return efeitos.rotacao[rand(efeitos.rotacao.length)];
  case 'inclinacao':
    return efeitos.inclinacao[rand(efeitos.inclinacao.length)];
  }
}

function criaSpan(texto) {
  const span = document.createElement('span');
  span.classList.add(adicionaEfeitoAleatorio('estilo'));
  span.classList.add(adicionaEfeitoAleatorio('tamanho'));
  span.classList.add(adicionaEfeitoAleatorio('rotacao'));
  span.classList.add(adicionaEfeitoAleatorio('inclinacao'));
  span.textContent = texto;
  return span;
}

/*
fontes para fazer regex:
https://regexr.com/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
https://dev.to/melvin2016/how-to-check-if-a-string-contains-at-least-one-number-using-regular-expression-regex-in-javascript-3n5h#:~:text=Originally%20posted%20here!-,To%20check%20if%20a%20string%20contains%20at%20least%20one%20number,simplest%20way%20to%20match%20numbers.
*/

function criaCarta() {
  limpaCarta();
  // /w é a-zA-Z0-9
  const regex = new RegExp(/\w/);
  // verifica se existe numero ou letra
  if (!regex.test(cartaTexto.value)) {
    cartaGerada.textContent = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const arrayPalavras = cartaTexto.value.trimEnd().split(' ');
  cartaContador.textContent = arrayPalavras.length;
  cartaContador.style.visibility = 'visible';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    cartaGerada.appendChild(criaSpan(arrayPalavras[index]));
  }
}

buttonCriarCarta.addEventListener('click', criaCarta);

function alteraCarta(event) {
  const span = event.target;
  if (span.nodeName !== 'SPAN') {
    return;
  }
  span.className = '';
  span.classList.add(adicionaEfeitoAleatorio('estilo'));
  span.classList.add(adicionaEfeitoAleatorio('tamanho'));
  span.classList.add(adicionaEfeitoAleatorio('rotacao'));
  span.classList.add(adicionaEfeitoAleatorio('inclinacao'));
}

cartaGerada.addEventListener('click', alteraCarta);
