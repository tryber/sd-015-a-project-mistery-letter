//  Gerar estilo
function estilo(element) {
  let random1 = Math.floor(Math.random() * 3)
  let random2 = Math.floor(Math.random() * 3)
  let random3 = Math.floor(Math.random() * 2)
  let random4 = Math.floor(Math.random() * 2)
  console.log(random2, random1)
  const primeiroEstilo = [`newspaper`, `magazine1`, `magazine2`]
  const segundoEstilo = [`medium`, `big`, `reallybig`]
  const terceiroEstilo = [`rotateleft`, `rotateright`]
  const quartoEstilo = [`skewleft`, `skewright`]
  return element.className = `${segundoEstilo[random1]} ${primeiroEstilo[random2]} ${terceiroEstilo[random3]} ${quartoEstilo[random4]}`
}

//  Gerar spans
function geradorDeSpan() {
  const button = document.getElementById('criar-carta');
  const pCarta = document.getElementById('carta-gerada');
  const pContador = document.getElementById('carta-contador')
  button.addEventListener('click', (_) => {
    pCarta.innerHTML = ''
    const input = document.getElementById('carta-texto').value.trim().split(' ')
    if (input[0] !== '') {
      input.forEach((e) => {
        const span = document.createElement('span');
        span.innerHTML = e;
        estilo(span)
        pCarta.appendChild(span);
      });
      pContador.innerHTML = pCarta.children.length
    } else {
      pCarta.innerHTML = 'Por favor, digite o conteúdo da carta.'
    }
  });
}
geradorDeSpan();

//  Gerar novo estilo
function mudarEstiloClick() {
  let parent = document.getElementById('carta-gerada')
  parent.addEventListener('click', e => {
    e.target.className = estilo(e.target)
  })
}
mudarEstiloClick()