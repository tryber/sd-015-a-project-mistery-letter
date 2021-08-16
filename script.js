
let input = document.getElementById('carta-texto')
let cartaGerada = document.getElementById('carta-gerada')
let botao = document.getElementById('criar-carta');

function createLetter() {
  let split = input.value.split(' ')
  for (let elemento of split) {
    let creatSpan = document.createElement('span');
    cartaGerada.appendChild(creatSpan);
    creatSpan.innerText = elemento
  }
}

botao.addEventListener('click', createLetter);