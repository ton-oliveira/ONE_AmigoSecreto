//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecretos = [];
let listaIndex = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if(nome.length < 2){
        alert("Por favor. Entre com um nome válido");
        limparTela();
        
    }else{
        amigoSecretos.push(nome);
        textoNaTela('listaAmigos', amigoSecretos);
        limparTela();
    }      
}

let mark;
function exibirLista(lista) {
    mark += "<li>" + lista + "</li>" ;       
}

function textoNaTela(id, listas){
    mark = '';
    listas.forEach(exibirLista);
    document.getElementById(id).innerHTML = mark;
}

function limparTela(){
    nome = document.getElementById('amigo');
    nome.value = '';
    document.getElementById('amigo').focus();
}

function resultaNaTela(nome) {
    document.getElementById('listaAmigos').innerHTML = '';
    mark = '';
    exibirLista(`O amigo secreto sorteado é: ${nome}`);
    document.getElementById('resultado').innerHTML = mark;    
}

function sortearAmigo() {
    let indexLista = parseInt(Math.random() * amigoSecretos.length);
    
    if(listaIndex.length == amigoSecretos.length){
        alert("Lista de Nome Vazia | Já Sorteados");

    }else{
        if(listaIndex.includes(indexLista)){
            return sortearAmigo();
        }else{
            listaIndex.push(indexLista);
            resultaNaTela(amigoSecretos[indexLista]);
        }
    }
}