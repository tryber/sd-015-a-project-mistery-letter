/* Cria elementos para fazer a carta */

const cartaInput = document.getElementById('carta-texto');
const cartaP = document.getElementById('carta-gerada');
const criarCartaButton = document.getElementById('criar-carta');
const contadorDePalavras = document.getElementById('carta-contador');

function atualizarContador(palavrasArray) {
  contadorDePalavras.innerText = palavrasArray.length;
}

function aplicarClasses(spanEl) {
  const innerSpanEl = spanEl;
  const classes = {
    estilo: ['newspaper', 'magazine1', 'magazine2'],
    tamanho: ['medium', 'big', 'reallybig'],
    rotacao: ['rotateleft', 'rotateright'],
    inclinacao: ['skewleft', 'skewright'],
  };

  innerSpanEl.className = '';

  Object.values(classes).forEach((grupo) => {
    const classNum = Math.floor(Math.random() * grupo.length);
    console.log(classNum);
    innerSpanEl.classList.add(grupo[classNum]);
  });
  return innerSpanEl;
}

function criarCarta() {
  cartaP.innerText = '';
  const palavrasArray = cartaInput.value.split(' ');
  atualizarContador(palavrasArray);

  if (palavrasArray.join('') === '') {
    cartaP.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    palavrasArray.forEach((palavra) => {
      let spanEl = document.createElement('span');
      spanEl.innerText = `${palavra}`;
      spanEl = aplicarClasses(spanEl);
      spanEl.addEventListener('click', (event) => {
        const spanToChange = event.target;
        aplicarClasses(spanToChange);
      });
      cartaP.appendChild(spanEl);
    });
  }
}

criarCartaButton.addEventListener('click', criarCarta);
