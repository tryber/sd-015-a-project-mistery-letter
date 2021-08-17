//  Gerar estilo
function estilo() {
  const random1 = Math.floor(Math.random() * 3);
  const random2 = Math.floor(Math.random() * 3);
  const random3 = Math.floor(Math.random() * 2);
  const random4 = Math.floor(Math.random() * 2);
  const A = ['newspaper', 'magazine1', 'magazine2'];
  const B = ['medium', 'big', 'reallybig'];
  const C = ['rotateleft', 'rotateright'];
  const D = ['skewleft', 'skewright'];
  return `${B[random1]} ${A[random2]} ${C[random3]} ${D[random4]}`;
}

//  Gerar spans
function geradorDeSpan() {
  const button = document.getElementById('criar-carta');
  const pCarta = document.getElementById('carta-gerada');
  const pContador = document.getElementById('carta-contador');
  button.addEventListener('click', (_) => {
    pCarta.innerHTML = '';
    const input = document.getElementById('carta-texto').value.trim().split(' ');
    if (input[0] !== '') {
      input.forEach((e) => {
        const span = document.createElement('span');
        span.innerHTML = e;
        span.className = estilo();
        pCarta.appendChild(span);
      });
      pContador.innerHTML = pCarta.children.length;
    } else {
      pCarta.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  });
}
geradorDeSpan();

//  Gerar novo estilo
function mudarEstiloClick() {
  const parent = document.getElementById('carta-gerada');
  parent.addEventListener('click', (e) => {
    e.target.className = estilo();
  });
}
mudarEstiloClick();
