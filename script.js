
let input = document.getElementById('carta-texto');
let cartaGerada = document.getElementById('carta-gerada');
let botao = document.getElementById('criar-carta');
let p = document.getElementById("carta-contador");

let somaClasseEstilo = ["newspaper", "magazine1", "magazine2"];
let somaClasseTamanho = ["medium", "big", "reallybig"];
let somaClasseRotacao = ["rotateleft", "rotateright"];
let somaClasseSkew = ["skewleft", "skewright"];

function createLetter() {
  let split = input.value.split(' ')
  console.log(split)
  cartaGerada.innerHTML = ''
  if (input.value === "" | input.value === " ") {
    cartaGerada.innerText = "Por favor, digite o conteúdo da carta."
  } else {
    for (let elemento of split) {
      let creatSpan = document.createElement('span');
      let estilo = parseInt(Math.random() * 3)
      let tamanho = parseInt(Math.random() * 3)
      let rotacao = parseInt(Math.random() * 2)
      let inclinacao = parseInt(Math.random() * 2)
      creatSpan.className = somaClasseEstilo[estilo]
      creatSpan.className = somaClasseTamanho[tamanho]
      creatSpan.className = somaClasseRotacao[rotacao]
      creatSpan.className = somaClasseSkew[inclinacao]
      cartaGerada.appendChild(creatSpan);
      creatSpan.innerText = elemento
    }
  }
  p.innerText = split.length
}

botao.addEventListener('click', createLetter);

