//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecretos = [];
let listaNomeSorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if(nome.length < 2){
        alert("Por favor. Entre com um nome válido");
        limparTela()
        
    }else{
        amigoSecretos.push(nome);
        textoNaTela();
        limparTela();
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

function limparTela(){
    nome = document.getElementById('amigo');
    nome.value = '';
    document.getElementById('amigo').focus()
}

function sortearAmigo() {
    let indexLista = parseInt(Math.random() * amigoSecretos.length);
    console.log("numero Escplhido " + amigoSecretos.length)

    if(listaNomeSorteados.includes(indexLista)){
        return sortearAmigo();
    }else{
        listaNomeSorteados.push(indexLista);
        console.log(indexLista);
        return indexLista;
    }

    
}