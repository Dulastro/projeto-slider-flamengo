/*
OBJETIVO 1- quando clicarmos na seta de avamçar temos que mostar o próximo cartçao da lista 
 - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar

 - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

 - passo 3 - fazer aparecer o cartão anterior da lista
 
 -passo 4 - buscar o cartão que esta selecionado e esconder  

 */

//  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar

// OBJETIVO 2 - quando clicarmos na seta de voltar que mostar o cartão anterior a lsita

//  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
 
//  - passo 2 - dar um jeito de  identificar o clique do usuário na seta voltar 
 
//  - passo 3 - fazer aparecer o cartão anterior da lista

//  - passo 4 - buscar o cartão que esta selecionado e esconder 

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function (){
    
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostarCartao(cartaoAtual);

});



btnVoltar.addEventListener("click", function (){
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();  
    
    cartaoAtual--;
    mostarCartao(cartaoAtual)  
});