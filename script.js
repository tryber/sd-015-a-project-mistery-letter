const cartaInput = document.getElementById('carta-texto');
const cartaP = document.getElementById('carta-gerada');
const criarCartaButton = document.getElementById('criar-carta');

function criarCarta() {
  cartaP.innerText = '';

  const palavrasArray = cartaInput.value.split(' ');
  console.log(palavrasArray);

  palavrasArray.forEach((palavra) => {
    const spanEl = document.createElement('span');
    spanEl.innerText = `${palavra}`;

    cartaP.appendChild(spanEl);
  });
}

criarCartaButton.addEventListener('click', criarCarta);
