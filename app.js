//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecretos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if(nome.length < 2){
        alert("Por favor. Entre com um nome válido");
        document.getElementById('amigo').focus();
    }else{
        amigoSecretos.push(nome);
        textoNaTela();
    }      
}

let mark;
function exibirLista(lista) {
    mark += "<li>" + lista + "</li>"        
}

function textoNaTela(){
    mark = '';
    amigoSecretos.forEach(exibirLista);
    document.getElementById('listaAmigos').innerHTML = mark;
}