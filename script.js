let botaoCriar = document.getElementById("criar-carta");
botaoCriar.addEventListener("click", criarCarta);

let obj={
    estilo: ['newspaper', 'magazine1','magazine2'],
    tamanho: ['medium','big','reallybig'],
    rotacao: ['rotateleft', 'rotateright'],
    inclinacao: ['skewleft','skewright']
   }

function criarCarta() {
    let valorInput = document.getElementById("carta-texto").value;
    arrayInput = valorInput.split(" ");
    arrayInput = removeEspacos(arrayInput);
    if (checagemInput(arrayInput)) {
        apagaAnterior();
        let cartaGerada = document.getElementById("carta-gerada");
        for (let i of arrayInput) {
            let texto = document.createElement("span");
            texto.innerHTML = i;
            aleatorio(texto);
            cartaGerada.appendChild(texto);
        }
        acessaPartes();
        document.getElementById("carta-contador").innerHTML=contaPalavras().toString();
    }
    else {
        let cartaGerada = document.getElementById("carta-gerada");
        cartaGerada.innerHTML= "por favor, digite o conteúdo da carta."
        document.getElementById("carta-contador").innerHTML='';
    }
}

function checagemInput(array) {
    if (array.length != 0) {
        return true;
    }
    else {
        return false;
    }
}
function apagaAnterior(){
    let anteriores = document.getElementById("carta-gerada");
    anteriores.innerHTML='';
}

function numeroAleatorio(a){
    return Math.floor(Math.random(0)*a);
}

function setEstilos(parte2){
    let parte= parte2;
    if (parte2.pointerId){
        parte = parte2.target;
        parte.className='';
    }
    
    const obj={
     estilo: ['newspaper', 'magazine1','magazine2'],
     tamanho: ['medium','big','reallybig'],
     rotacao: ['rotateleft', 'rotateright'],
     inclinacao: ['skewleft','skewright']
    }
   for (let i in obj){
       let classe1= obj[i];
       if (i==='estilo' || i==='tamanho'){
        parte.classList.add(classe1[numeroAleatorio(3)])
       }
       else{
        parte.classList.add(classe1[numeroAleatorio(2)])
       }
   }
    
    
    // let estilo= ['newspaper', 'magazine1','magazine2'];
    // let tamanho= ['medium','big','reallybig'];
    // let rotacao= ['rotateleft', 'rotateright']
    // let inclinacao= ['skewleft','skewright']
   
    // let classes= [estilo[numeroAleatorio(3)],tamanho[numeroAleatorio(3)],rotacao[numeroAleatorio(2)],inclinacao[numeroAleatorio(2)];]

    }

    function acessaPartes(){
        let partes= document.getElementsByTagName("span");
        for (let i=0; i<partes.length; i+=1){
            setEstilos(partes[i]);
        }
    }
    
    function aleatorio(teste){
        teste.addEventListener("click", setEstilos);
    }

    function contaPalavras(){
        let palavras= document.getElementsByTagName("span");
        return palavras.length;
    }

    function removeEspacos(array){
        for (let i=array.length-1; i>=0; i-=1) {
            if(array[i]===""){
                array.splice(i,1);
            }
        }
        return array;
    }

  