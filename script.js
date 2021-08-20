const botaoCriar = document.getElementById('criar-carta');
const paragrafoCarta = document.getElementById('carta-gerada');
const inputCarta = document.getElementById('carta-texto');
const paragrafoNumero = document.getElementById('carta-contador');
const classesEstilo = ['newspaper', 'magazine1', 'magazine2'];
const classesTamanho = ['medium', 'big', 'reallybig'];
const classesRotação = ['rotateleft', 'rotateright'];
const classesInclinação = ['skewleft', 'skewright'];
const regexSpaces = /\S/g;

function numeroAleatorio(maximo) {
  return Math.round(Math.random() * maximo);
}

function adicionandoClasse(elemento, arrayClasse, indice) {
  elemento.classList.add(arrayClasse[indice]);
}

function removerSpan() {
  while (paragrafoCarta.children[0]) {
    paragrafoCarta.children[0].remove();
  }
}

function contarPalavras(palavrasArray) {
  paragrafoNumero.innerText = palavrasArray.length;
}

function criarSpan() {
  removerSpan();
  const arrayPalavras = inputCarta.value.split(' ');
  contarPalavras(arrayPalavras);
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    const palavra = document.createElement('span');
    palavra.innerText = arrayPalavras[index];
    adicionandoClasse(palavra, classesEstilo, numeroAleatorio(2));
    adicionandoClasse(palavra, classesTamanho, numeroAleatorio(2));
    adicionandoClasse(palavra, classesRotação, numeroAleatorio(1));
    adicionandoClasse(palavra, classesInclinação, numeroAleatorio(1));
    paragrafoCarta.appendChild(palavra);
  }
}

function verificarTexto() {
  const escrivinhado = inputCarta.value;
  if (escrivinhado.length === 0 || !escrivinhado.match(regexSpaces)) {
    paragrafoCarta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    criarSpan();
  }
}

botaoCriar.addEventListener('click', verificarTexto);
